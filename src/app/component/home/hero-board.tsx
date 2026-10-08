"use client";

import { useEffect, useRef, useState } from "react";
import type { Landing } from "@/i18n/types";
import styles from "./home.module.css";

const AUTOPLAY_DELAY_MS = 1600;

interface HeroBoardProps {
  board: Landing["board"];
}

export default function HeroBoard({ board }: HeroBoardProps) {
  const [isSystem, setIsSystem] = useState(false);
  const touched = useRef(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => {
      if (!touched.current) setIsSystem(true);
    }, AUTOPLAY_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const select = (next: boolean) => {
    touched.current = true;
    setIsSystem(next);
  };

  return (
    <div className={styles.boardWrap}>
      <div className={styles.toggle} role="group" aria-label={board.toggleLabel}>
        <span
          className={styles.toggleThumb}
          data-side={isSystem ? "after" : "before"}
          aria-hidden="true"
        />
        <button
          type="button"
          className={styles.toggleOption}
          aria-pressed={!isSystem}
          onClick={() => select(false)}
        >
          {board.before}
        </button>
        <button
          type="button"
          className={styles.toggleOption}
          aria-pressed={isSystem}
          onClick={() => select(true)}
        >
          {board.after}
        </button>
      </div>

      <div className={`${styles.board} ${isSystem ? styles.isSystem : ""}`}>
        <div className={styles.boardInner}>
          {board.items.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.tile} ${styles[`tile_${item.id}`]}`}
              style={{ "--d": `${index * 70}ms` } as React.CSSProperties}
            >
              <div className={styles.faceBefore} aria-hidden={isSystem}>
                <span className={styles.beforeLabel}>{item.before.label}</span>
                <span className={styles.beforeValue}>{item.before.value}</span>
                {item.before.meta && (
                  <span className={styles.beforeMeta}>{item.before.meta}</span>
                )}
              </div>
              <div className={styles.faceAfter} aria-hidden={!isSystem}>
                <span className={styles.afterLabel}>{item.after.label}</span>
                <span className={styles.afterValue}>{item.after.value}</span>
                <span className={styles.afterMeta}>{item.after.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className={styles.boardCaption}>{board.caption}</p>
    </div>
  );
}
