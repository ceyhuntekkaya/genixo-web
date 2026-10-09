/**
 * Geriye dönük dışa aktarım. Yeni kod `src/content/entity.ts` okusun.
 */
import { entity, formatAddress } from "@/content/entity";

export { entity, SITE_URL, formatAddress, definitionFor, shortDefinitionFor, jobTitleFor, telHref } from "@/content/entity";

export const companyInfo = {
  phone: entity.phone,
  email: entity.email,
  address: formatAddress(),
} as const;
