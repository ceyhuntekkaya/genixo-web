/**
 * Publishable R&D projects and networks beyond the memberships in `entity.ts`.
 * Hidden while empty. Fill from docs/content-todos.md → TODO-016 (TÜBİTAK) and TODO-017 (BNI).
 */
export type Credential = {
  name: string;
  detail: { tr: string; en: string };
  year?: string;
  url?: string;
};

export const credentials: Credential[] = [];
