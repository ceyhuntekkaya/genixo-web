/**
 * People shown on the home and about pages. Sections that use this list stay hidden while it is empty.
 * Fill from docs/content-todos.md → TODO-010 (people) and TODO-067 (real photos only).
 */
export type TeamMember = {
  name: string;
  role: { tr: string; en: string };
  focus: { tr: string; en: string };
  photo?: string;
  linkedin?: string;
  /** Slug of a `content/authors/*.md` profile, when the person has one. */
  profile?: string;
};

export const team: TeamMember[] = [];
