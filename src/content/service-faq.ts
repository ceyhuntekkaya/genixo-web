import type { Locale } from "@/i18n/config";

export type Faq = { q: string; a: string };

type FaqMap = Record<string, Faq[]>;

const tr: FaqMap = {
  "digital-transformation": [
    {
      q: "Dijital dönüşüm danışmanlığı nedir, kime uygundur?",
      a: "İşletmenin süreçlerini yerinde inceleyip nereden başlanacağını, hangi işin yazılımla çözüleceğini ve hangisinin gereksiz olduğunu birlikte netleştiren çalışmadır. Dijital dönüşüme nereden başlayacağını bilmeyen KOBİ'ler ve kurumlar için uygundur.",
    },
    {
      q: "Hazır bir paket yazılım almak yeterli değil mi?",
      a: "Her işletmenin darboğazı farklıdır. Önce süreç dinlenir; ardından hangi işin mevcut bir ürünle, hangisinin size özel bir sistemle çözüleceği ayrılır. Amaç gösterişli bir yazılım değil, kullanılan bir sistemdir.",
    },
    {
      q: "Çalışma nasıl ilerler?",
      a: "Önce teşhis yapılır: zaman ve bilginin nerede kaybolduğu görülür. Sonra tek bir kritik süreçten pilot başlar, sonuç ölçülür ve kanıtlanan adım diğer birimlere yayılır.",
    },
    {
      q: "Devlet destekleri bu işin içinde mi?",
      a: "Türkiye'de KOBİ'lere yönelik destek programları vardır; tutar, kurum ve koşullar duyuruya göre değişir. Uygun programı birlikte değerlendiririz, belirli bir tutar vaat etmeyiz.",
    },
  ],
  "business-process-digitalization": [
    {
      q: "Excel ve WhatsApp'tan tek sisteme geçiş ne demek?",
      a: "Sipariş, stok, teklif veya müşteri kaydının ayrı dosya ve gruplarda değil, aynı kayıt üzerinde ilerlemesidir. Böylece aynı bilgi üç kişiye üç kez sorulmaz.",
    },
    {
      q: "Mevcut işleyiş geçiş sırasında durur mu?",
      a: "Hayır. Küçük bir pilot alan seçilir, kademeli geçilir ve ekip sistemi kullanmaya başladıktan sonra kapsam genişler. Kararlar insan onayında kalır.",
    },
    {
      q: "Personelin işi otomasyonla biter mi?",
      a: "Amaç tekrarlayan veri girişini sisteme bırakıp ekibin müşteri, kontrol ve karar işine vaktini ayırmasıdır. Kimsenin işten çıkarılacağı vaadi veya tehdidi bu hizmetin parçası değildir.",
    },
    {
      q: "Hangi sistemlerle çalışırsınız?",
      a: "Mevcut tablolar, e-posta, ERP veya CRM incelenir. Gerekirse bunlar birbirine bağlanır; her işletmeye aynı paketi dayatmayız.",
    },
  ],
  "ai-integration": [
    {
      q: "Yapay zekâ entegrasyonu verilerimizi dışarı çıkarır mı?",
      a: "Kurum içi (on-prem) kurulumda model işletmenin kendi sunucusunda çalışır; belgeler genel yapay zekâ servislerine gönderilmez. Bulut seçeneğinde verinin nereye gittiği kurulumdan önce ayrıca konuşulur. Verinin kurumda kalması, KVKK kapsamındaki yurt dışı aktarım riskini azaltır; uyum, kurumun kendi veri işleme süreçleriyle birlikte değerlendirilir.",
    },
    {
      q: "RAG chatbot nedir, normal chatbot'tan farkı ne?",
      a: "Hazır cevap listesiyle sınırlı bir chatbot yalnızca önceden yazılmış yanıtları verir. RAG chatbot, kurumun kendi belgelerinden ilgili parçayı bulup yanıtı ona dayandırır. Uydurma yerine kaynağı olan cevap hedeflenir.",
    },
    {
      q: "Kurulum ne kadar sürer?",
      a: "Süre, bağlanacak sistemlere ve belgenin düzenine göre değişir. Ön görüşmede kapsamı birlikte sınırlarız; tek bir takvim vaadi vermeyiz.",
    },
    {
      q: "Hangi sistemlerle entegre olur?",
      a: "Doküman arşivi, e-posta, ERP ve CRM sık gördüğümüz bağlantılardır. Listeniz farklıysa önce mevcut araçlar dinlenir, sonra entegrasyon seçilir.",
    },
    {
      q: "Türkçe konuşma tanıma ve seslendirme destekleniyor mu?",
      a: "Evet. Konuşmayı metne çevirme ve metni sese dönüştürme, kurum içi kurulumun parçası olarak ele alınabilir. Sesli asistan senaryosu buna örnektir.",
    },
  ],
  "smart-reporting-analytics": [
    {
      q: "Rapor neden günler sürüyor?",
      a: "Çünkü rakamlar ayrı Excel dosyalarında ve elle birleştiriliyor. Tek kayıt düzenine geçilince aynı soru, dosya beklenmeden yanıtlanır.",
    },
    {
      q: "Mevcut Excel verisi kullanılır mı?",
      a: "Evet. İlk adım çoğu zaman dağınık tabloları tek kaynağa bağlamaktır. Yeni bir rapor aracı, veri dağınıksa tek başına hız kazandırmaz.",
    },
    {
      q: "Sistem kararı kendisi mi verir?",
      a: "Hayır. Rapor ve uyarı üretir; onay sizde kalır. Amaç tahmini değil, görünen veriyi masaya koymaktır.",
    },
  ],
  "system-improvement-modernization": [
    {
      q: "Eski sistemi baştan yazmak şart mı?",
      a: "Hayır. Çalışan parçalar durur, tıkanan akış iyileştirilir. Baştan yazmak ancak mevcut yapının işi taşıyamadığı yerde gündeme gelir.",
    },
    {
      q: "İyileştirme sırasında sistem kapanır mı?",
      a: "Hedef, canlı işi durdurmadan küçük adımlarla ilerlemektir. Riskli bir değişiklik varsa önce kopya ortamda denenir.",
    },
    {
      q: "Hangi teknolojilerle çalışıyorsunuz?",
      a: "Yaygın yığınımız Spring Boot, Next.js, PostgreSQL, Docker ve kurum içi modeller için Ollama'dır. Sizin sisteminiz farklıysa önce o okunur.",
    },
  ],
  "cost-optimization": [
    {
      q: "BT maliyeti en çok nereden şişer?",
      a: "Kullanılmayan lisans, gereğinden büyük sunucu, elle yapılan işin insan zamanı ve birbirine bağlanmamış araçlar sık görülen kalemlerdir. Önce fatura ve kullanım birlikte okunur.",
    },
    {
      q: "Buluta geçmek maliyeti her zaman düşürür mü?",
      a: "Hayır. İş yüküne göre bulut önemli ölçüde azaltabilir de, yanlış boyutlandırmada artırabilir de. Ölçmeden yüzde vaat etmeyiz.",
    },
    {
      q: "Ne teslim edersiniz?",
      a: "Hangi kalemin neden durduğu, hangisinin kapatılabileceği ve hangisinin işi yavaşlattığı için kalması gerektiği yazılır. Karar listesi sizde kalır.",
    },
  ],
  "product-project-development": [
    {
      q: "Özel yazılım ne zaman gerekir?",
      a: "Hazır ürün işin akışına uymuyorsa veya ürünün kendisi sizin işinizse. Fikir önce netleştirilir, sonra küçük bir sürümle denenir.",
    },
    {
      q: "NGSD ile bu hizmetin farkı nedir?",
      a: "Özel yazılım tek bir ürün veya proje teslimidir. NGSD, uzaktaki bir yazılım ekibinin sizin departmanınız gibi çalışmasıdır. İkisi aynı sayfada anlatılır, aynı şey değildir.",
    },
    {
      q: "Eğitim ürünleriniz bu hizmetin yerine mi geçiyor?",
      a: "Hayır. StudyScore AI, Eğitim İste ve ILC kendi ürünlerimizdir. Müşteriye özel geliştirme ayrı bir iştir; ürünler kanıt olarak durur, konumlanmanın kendisi değildir.",
    },
  ],
};

const en: FaqMap = {
  "digital-transformation": [
    {
      q: "What is digital transformation consulting, and who is it for?",
      a: "We study how the company actually works and agree where to start, which work needs software, and which tools are unnecessary. It fits SMEs and organizations that cannot see the first step.",
    },
    {
      q: "Is a packaged product enough?",
      a: "Bottlenecks differ. We listen first, then separate what an existing product can do from what needs a system built around your process.",
    },
    {
      q: "How does the work proceed?",
      a: "Diagnosis, then a pilot on one critical process, then measurement, then a wider rollout of what proved useful. Decisions stay with your team.",
    },
    {
      q: "Do you include public grants?",
      a: "Turkish SME programs exist, and amounts and rules change. We review what might fit. We do not promise a figure.",
    },
  ],
  "business-process-digitalization": [
    {
      q: "What does moving off Excel and WhatsApp mean?",
      a: "Orders, stock, quotes or customer records live in one system instead of separate files and chats, so the same fact is not asked three times.",
    },
    {
      q: "Does the current operation stop during the move?",
      a: "No. We pick a small pilot, switch gradually, and widen scope after people are using it.",
    },
    {
      q: "Does automation remove jobs?",
      a: "The point is to take repetitive data entry off people so they can spend time on customers and decisions. We do not promise or threaten headcount cuts.",
    },
    {
      q: "Which systems do you connect?",
      a: "Spreadsheets, email, ERP and CRM are the usual set. If yours differ, we start from the tools you already have.",
    },
  ],
  "ai-integration": [
    {
      q: "Does AI integration send our data outside?",
      a: "In an on-premise setup the model runs on your server and documents are not sent to public AI services. A cloud option is a different design and is agreed before installation. Keeping data on your network reduces cross-border transfer risk under KVKK; compliance still depends on your own processing.",
    },
    {
      q: "What is a RAG chatbot, compared with a scripted bot?",
      a: "A scripted bot repeats prepared answers. A RAG chatbot retrieves a passage from your own documents and answers from that passage.",
    },
    {
      q: "How long does installation take?",
      a: "It depends on the systems and how organized the documents are. We bound the scope in the first meeting and do not promise a single calendar.",
    },
    {
      q: "What can it connect to?",
      a: "Document stores, email, ERP and CRM are the common links. Other tools are reviewed before we choose an integration.",
    },
    {
      q: "Do you support Turkish speech-to-text and text-to-speech?",
      a: "Yes. Both can be part of an on-premise setup. A voice assistant is one example.",
    },
  ],
  "smart-reporting-analytics": [
    {
      q: "Why do reports take days?",
      a: "Numbers sit in separate spreadsheets and are merged by hand. One record source answers the same question without waiting for a file.",
    },
    {
      q: "Can you use the Excel we already have?",
      a: "Yes. The first step is usually to connect those tables. A new dashboard does not help if the data is still scattered.",
    },
    {
      q: "Does the system decide for us?",
      a: "No. It produces the report and the alert. Approval stays with you.",
    },
  ],
  "system-improvement-modernization": [
    {
      q: "Must the old system be rewritten?",
      a: "No. Working parts stay. We change the flow that is stuck. A rewrite is only discussed when the current system cannot carry the work.",
    },
    {
      q: "Will the live system go down?",
      a: "The aim is small steps that do not stop operations. Risky changes are tried in a copy first.",
    },
    {
      q: "Which technologies do you use?",
      a: "Our usual stack is Spring Boot, Next.js, PostgreSQL, Docker and Ollama for on-premise models. If your stack differs, we read that first.",
    },
  ],
  "cost-optimization": [
    {
      q: "Where do IT costs usually grow?",
      a: "Unused licenses, oversized servers, hours spent on manual work, and tools that do not talk to each other. We read the invoices and the usage together.",
    },
    {
      q: "Does moving to the cloud always cut cost?",
      a: "No. It can reduce cost a great deal or raise it, depending on the workload. We do not promise a percentage before measuring.",
    },
    {
      q: "What do you deliver?",
      a: "A list of which line items can be closed, which ones are oversized, and which ones should stay because they keep the work moving.",
    },
  ],
  "product-project-development": [
    {
      q: "When is custom software the right choice?",
      a: "When a packaged product does not match the workflow, or when the product is the business. We clarify the idea, then try a small first version.",
    },
    {
      q: "How is this different from NGSD?",
      a: "Custom development delivers one product or project. NGSD is a remote software team working as your department. They are related and not the same.",
    },
    {
      q: "Do your education products replace this service?",
      a: "No. StudyScore AI, Eğitim İste and ILC are our own products. Client work is separate. The products are evidence, not the company's definition.",
    },
  ],
};

export function faqsFor(locale: Locale, slug: string): Faq[] {
  const table = locale === "tr" ? tr : en;
  return table[slug] ?? [];
}
