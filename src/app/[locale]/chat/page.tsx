import { Locale } from "@/i18n/config";
import { buildMetadata } from "@/utils/seo";
import ChatBox from "@/app/component/chat-box";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return buildMetadata({
    locale,
    path: "/chat",
    title: locale === "tr" ? "Yapay zekâ asistanı" : "AI assistant",
    description:
      locale === "tr"
        ? "Genixo hizmetleri hakkında soru sorun. Bu sayfa arama dizinine kapalıdır; yanıtlar sohbet penceresindedir."
        : "Ask about Genixo's services. This page is not indexed; answers stay in the chat window.",
    noindex: true,
  });
}

export default async function ChatPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  await params;

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
