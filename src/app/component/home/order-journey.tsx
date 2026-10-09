"use client";

import { useEffect, useRef, useState } from "react";
import type { HomeCopy } from "@/i18n/page-types";
import styles from "./home.module.css";

const AUTOPLAY_DELAY_MS = 1400;

type Point = { x: number; lane: number; below?: boolean };

/** x is a percentage of the drawing width; lane follows `journey.lanes`. */
const BEFORE: Point[] = [
  { x: 2, lane: 0 },
  { x: 17, lane: 1 },
  { x: 33, lane: 2 },
  { x: 48, lane: 1, below: true },
  { x: 63, lane: 0 },
  { x: 79, lane: 3 },
  { x: 95, lane: 4 },
];

const AFTER: Point[] = [
  { x: 2, lane: 0 },
  { x: 17, lane: 1 },
  { x: 33, lane: 2, below: true },
  { x: 48, lane: 0 },
  { x: 63, lane: 3 },
  { x: 79, lane: 4 },
];

/**
 * Segments of the "today" line that tie a loop at their midpoint (which sits on a
 * lane boundary, clear of the labels). Positive loops go up, negative go down.
 */
const KNOTS: Record<number, 1 | -1> = { 0: -1, 2: 1, 4: 1 };
const LOOP_RX = 2.4;
const LOOP_RY = 6;
const ARC = 0.5523;

const laneY = (lane: number) => 10 + lane * 20;

/** A full loop that leaves and re-enters (x, y) heading right. */
function loopAt(x: number, y: number, dir: 1 | -1) {
  const rx = LOOP_RX;
  const ry = LOOP_RY * dir;
  const cy = y - ry;
  return [
    ` C${x + ARC * rx} ${y} ${x + rx} ${cy + ARC * ry} ${x + rx} ${cy}`,
    ` C${x + rx} ${cy - ARC * ry} ${x + ARC * rx} ${cy - ry} ${x} ${cy - ry}`,
    ` C${x - ARC * rx} ${cy - ry} ${x - rx} ${cy - ARC * ry} ${x - rx} ${cy}`,
    ` C${x - rx} ${cy + ARC * ry} ${x - ARC * rx} ${y} ${x} ${y}`,
  ].join("");
}

function tangledPath(points: Point[]) {
  const start = laneY(points[0].lane);
  let d = `M0 ${start} L${points[0].x} ${start}`;
  for (let i = 1; i < points.length; i++) {
    const a = { x: points[i - 1].x, y: laneY(points[i - 1].lane) };
    const b = { x: points[i].x, y: laneY(points[i].lane) };
    const dx = b.x - a.x;
    const knot = KNOTS[i - 1];
    if (knot) {
      const mx = (a.x + b.x) / 2;
      const my = (a.y + b.y) / 2;
      d += ` C${a.x + dx * 0.5} ${a.y} ${mx - dx * 0.25} ${my} ${mx} ${my}`;
      d += loopAt(mx, my, knot);
      d += ` C${mx + dx * 0.25} ${my} ${b.x - dx * 0.5} ${b.y} ${b.x} ${b.y}`;
    } else {
      d += ` C${a.x + dx * 0.55} ${a.y} ${b.x - dx * 0.55} ${b.y} ${b.x} ${b.y}`;
    }
  }
  return d;
}

function straightPath(points: Point[]) {
  let d = `M0 ${laneY(points[0].lane)} H${points[0].x}`;
  for (let i = 1; i < points.length; i++) {
    const b = points[i];
    d += ` H${b.x - 3} V${laneY(b.lane)} H${b.x}`;
  }
  return `${d} H100`;
}

const BEFORE_PATH = tangledPath(BEFORE);
const AFTER_PATH = straightPath(AFTER);

interface OrderJourneyProps {
  journey: HomeCopy["journey"];
}

export default function OrderJourney({ journey }: OrderJourneyProps) {
  const [isAfter, setIsAfter] = useState(false);
  const touched = useRef(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let timer: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = window.setTimeout(() => {
          if (!touched.current) setIsAfter(true);
        }, AUTOPLAY_DELAY_MS);
      },
      { threshold: 0.45 },
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  const select = (next: boolean) => {
    touched.current = true;
    setIsAfter(next);
  };

  const renderSteps = (points: Point[], steps: HomeCopy["journey"]["beforeSteps"], set: "before" | "after") => (
    <ol className={styles.steps} data-set={set} aria-hidden={set === "after" ? !isAfter : isAfter}>
      {steps.map((step, i) => {
        const point = points[i];
        if (!point) return null;
        return (
          <li
            key={`${set}-${i}`}
            className={styles.step}
            data-below={point.below ? "" : undefined}
            data-end={point.x > 90 ? "" : undefined}
            style={
              {
                "--x": `${point.x}%`,
                "--y": `${laneY(point.lane)}%`,
                "--i": i,
              } as React.CSSProperties
            }
          >
            <span className={styles.stepLane}>{journey.lanes[point.lane]}</span>
            <span className={styles.stepTime}>{step.time}</span>
            <span className={styles.stepText}>{step.text}</span>
          </li>
        );
      })}
    </ol>
  );

  return (
    <div ref={root} className={`${styles.journey} ${isAfter ? styles.isAfter : ""}`}>
      <div className={styles.journeyBar}>
        <p className={styles.journeyTitle}>
          {journey.title}
          <span className={styles.journeyCaption}>{journey.caption}</span>
        </p>

        <div className={styles.toggle} role="group" aria-label={journey.toggleLabel}>
          <button type="button" aria-pressed={!isAfter} onClick={() => select(false)}>
            {journey.before}
          </button>
          <button type="button" aria-pressed={isAfter} onClick={() => select(true)}>
            {journey.after}
          </button>
        </div>

        <p className={styles.total} aria-live="polite">
          <span className={styles.totalLabel}>{journey.totalLabel}</span>
          <span className={styles.totalValues}>
            <span data-set="before" aria-hidden={isAfter}>{journey.beforeTotal}</span>
            <span data-set="after" aria-hidden={!isAfter}>{journey.afterTotal}</span>
          </span>
        </p>
      </div>

      <div className={styles.lanes}>
        <ul className={styles.laneNames} aria-hidden="true">
          {journey.lanes.map((lane) => (
            <li key={lane}>{lane}</li>
          ))}
        </ul>
        <div className={styles.canvas}>
          <svg className={styles.pathBefore} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d={BEFORE_PATH} />
          </svg>
          <svg className={styles.pathAfter} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <path d={AFTER_PATH} />
          </svg>
          {renderSteps(BEFORE, journey.beforeSteps, "before")}
          {renderSteps(AFTER, journey.afterSteps, "after")}
        </div>
      </div>
    </div>
  );
}
