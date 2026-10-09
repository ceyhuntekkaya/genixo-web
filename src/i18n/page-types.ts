import type { JourneyStep } from "./types";

/**
 * Page copy is a list of sections rendered by `SectionList`.
 * `href` values are locale-less site paths ("/pricing", "/contact#form") or absolute URLs.
 * Unverified facts are written as `[[TODO-NNN]]` (see docs/content-todos.md).
 */
export type CopyLink = { label: string; href: string };
export type Source = { title: string; url: string };

type SectionBase = {
  id?: string;
  label: string;
  title?: string;
  lead?: string;
  links?: CopyLink[];
  sources?: Source[];
  tone?: "paper" | "mist" | "ink";
};

export type Section =
  | (SectionBase & { kind: "prose"; paragraphs: string[] })
  | (SectionBase & { kind: "points"; items: Array<{ title: string; text: string }>; layout?: "rows" | "grid" })
  | (SectionBase & { kind: "quotes"; items: string[] })
  | (SectionBase & { kind: "steps"; items: Array<{ title: string; text: string; meta?: string }> })
  | (SectionBase & { kind: "list"; items: string[]; variant?: "limits" | "checks" })
  | (SectionBase & { kind: "table"; columns: string[]; rows: string[][] })
  | (SectionBase & { kind: "faq"; items: Array<{ q: string; a: string }> })
  | (SectionBase & {
      kind: "doors";
      items: Array<{ quote: string; name: string; text: string; step: string; href: string }>;
    })
  | (SectionBase & { kind: "statement"; members: string })
  | (SectionBase & { kind: "scenarios" })
  | (SectionBase & { kind: "cases"; service?: string; limit?: number })
  | (SectionBase & { kind: "products"; visit: string })
  | (SectionBase & { kind: "team" })
  | (SectionBase & { kind: "credentials" })
  | (SectionBase & { kind: "testimonials" })
  | (SectionBase & { kind: "posts"; read: string })
  | (SectionBase & {
      kind: "form";
      /** Labels only; phone, email and address values come from `entity.ts`. */
      details: { phone: string; email: string; address: string; extra?: Array<{ label: string; value: string }> };
    });

export type SectionKind = Section["kind"];

export type PageHeroCopy = {
  eyebrow: string;
  title: string;
  lead: string;
  primary?: CopyLink;
  secondary?: CopyLink;
};

export type PageCopy = {
  meta: { title: string; description: string };
  breadcrumb: string;
  hero: PageHeroCopy;
  answer?: { label: string; text: string };
  sections: Section[];
  cta?: { title: string; lead: string; primary: CopyLink; secondary?: CopyLink };
};

export type HomeCopy = {
  meta: { title: string; description: string };
  hero: {
    eyebrow: string;
    titleBefore: string;
    titleMark: string;
    titleAfter: string;
    lead: string;
    primary: CopyLink;
    secondary: CopyLink;
    secondaryWithCases: CopyLink;
  };
  journey: {
    title: string;
    caption: string;
    toggleLabel: string;
    before: string;
    after: string;
    /** Customer, sales, warehouse, accounting, management — in this order. */
    lanes: string[];
    totalLabel: string;
    beforeTotal: string;
    afterTotal: string;
    /** Seven steps; positions are fixed in the journey component. */
    beforeSteps: JourneyStep[];
    /** Six steps; positions are fixed in the journey component. */
    afterSteps: JourneyStep[];
  };
  sections: Section[];
  cta: { title: string; lead: string; primary: CopyLink; secondary?: CopyLink };
};
