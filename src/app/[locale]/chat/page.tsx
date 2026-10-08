import { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { generateMetadata as generateSEOMetadata } from "@/utils/seo";
import { locales } from "@/i18n/config";
import PageHero from "@/app/component/page-hero";
import ChatBox from "@/app/component/chat-box";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const alternateLocales = locales.filter((l) => l !== locale) as Locale[];

  return generateSEOMetadata({
    title: "AI Asistan",
    description:
      dict.seo?.defaultDescription ||
      "Genixo AI asistanı ile yazılım ve ürünler hakkında sorularınızı sorun.",
    keywords: dict.company?.defaultKeywords || "AI, asistan, chat, Genixo",
    url: `/${locale}/chat`,
    locale,
    alternateLocales,
    dict,
  });
}

export default async function ChatPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);


  /*



 <PageHero
        title="AI Asistan"
        subtitle="Yazılım yardım asistanı"
        description="Sorularınızı yazın, kısa ve net yanıtlar alın."
      />

  */

  return (
    <>
     
      <section className="section section-padding mt-5" style={{ background: "#f8f9fa" }}>
        <div className="container">
          <ChatBox />
        </div>
      </section>
    </>
  );
}
