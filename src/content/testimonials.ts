/**
 * Client quotes, published only with written permission. Hidden while empty.
 * Fill from docs/content-todos.md → TODO-065.
 */
export type Testimonial = {
  quote: { tr: string; en: string };
  person: string;
  role: { tr: string; en: string };
  caseSlug?: string;
};

export const testimonials: Testimonial[] = [];
