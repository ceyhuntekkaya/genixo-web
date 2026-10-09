import fs from "fs";
import path from "path";

const root = process.cwd();
const read = (file) => JSON.parse(fs.readFileSync(path.join(root, file), "utf8"));
const write = (file, data) => fs.writeFileSync(path.join(root, file), JSON.stringify(data, null, 2) + "\n");

function htmlToMd(html) {
  return html
    .replace(/<h2>/g, "\n\n## ")
    .replace(/<\/h2>/g, "\n\n")
    .replace(/<h3>/g, "\n\n### ")
    .replace(/<\/h3>/g, "\n\n")
    .replace(/<li>/g, "\n- ")
    .replace(/<\/li>/g, "")
    .replace(/<\/?ul>/g, "\n")
    .replace(/<p>/g, "")
    .replace(/<\/p>/g, "\n\n")
    .replace(/<strong>/g, "**")
    .replace(/<\/strong>/g, "**")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function dropUnsourced(markdown) {
  return markdown
    .split(/\n\n/)
    .filter((paragraph) => !/%93|McKinsey|IBM|%5,4|%1,1|5\.4%|1\.1%|90%/.test(paragraph))
    .join("\n\n")
    .replace(/yapay zeka/g, "yapay zekâ")
    .replace(/Yapay Zeka/g, "Yapay Zekâ")
    .replace(/Yapay zeka/g, "Yapay zekâ");
}

function assertLen(label, text, min, max) {
  if (text.length < min || text.length > max) {
    console.error(`LEN ${label}: ${text.length} :: ${text}`);
    process.exitCode = 1;
  }
}

const posts = {
  tr: {
    "yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu": {
      key: "ai-not-just-technology",
      translationKey: "ai-work-culture",
      metaTitle: "Yapay Zekâ: Yeni Bir Çalışma Kültürü",
      description: "Yapay zekâ, ekiplerin karar ve iletişim biçimini değiştiren bir çalışma kültürüdür. Bu yazı kurucunun gözlemidir; üçüncü taraf yüzdesi yoktur.",
      summary: "Yapay zekâ yalnızca görev hızlandıran bir araç değil, ekiplerin karar ve iletişim biçimini değiştiren bir çalışma kültürüdür.",
      related: ["ai-integration"],
      faq: [
        { q: "Yapay zekâ sadece bir verimlilik aracı mıdır?", a: "Hayır. Tekrarlayan işi kısaltmanın yanında ekiplerin karar ve iletişim biçimini de değiştirir." },
        { q: "Dağınık veri varken yapay zekâ işe yarar mı?", a: "Yaramaz. Önce süreç ve veri düzeni kurulur; yapay zekâ ancak bu zeminin üstüne binince hız kazandırır." },
      ],
    },
    "sisteminiz-sizi-yavaslatiyor-mu": {
      key: "sisteminiz-sizi-yavaslatiyor-mu",
      translationKey: "system-slowing-you-down",
      metaTitle: "Sisteminiz Sizi Yavaşlatıyor mu?",
      description: "Büyüyen şirkette Excel ve WhatsApp kararları geciktirir. Sorun çalışan değil, kopuk sistemdir. İlk adım süreci yerinde dinlemektir.",
      summary: "Şirket büyürken sistem büyümüyorsa geciken şey ekip değil, kopuk kayıtlardır. İlk adım yazılım satın almak değil, sürecin nerede koptuğunu görmektir.",
      related: ["digital-transformation", "business-process-digitalization"],
      faq: [
        { q: "Yavaşlığın nedeni çalışanlar mı?", a: "Hayır. Aynı bilgi ayrı Excel dosyalarında ve sohbetlerde duruyorsa ekip çalışsa da şirket yavaşlar." },
        { q: "İlk adım bir yazılım satın almak mıdır?", a: "Hayır. Önce işin nerede koptuğu dinlenir, sonra hangi sürecin dijitalleşeceği seçilir." },
      ],
    },
  },
  en: {
    "ai-not-just-technology": {
      key: "ai-not-just-technology",
      translationKey: "ai-work-culture",
      metaTitle: "AI Is a New Way of Working",
      description: "AI changes how teams decide and communicate, not only how fast tasks get done. This essay is the founder's observation, without third-party percentages.",
      summary: "AI is not only a tool that speeds up tasks. It changes how teams decide, communicate and share work.",
      related: ["ai-integration"],
      faq: [
        { q: "Is AI only a productivity tool?", a: "No. It also changes how teams decide and communicate, which is a work culture shift." },
        { q: "Does AI help when data is scattered?", a: "Not really. Process and data need a floor first. AI speeds work after that floor exists." },
      ],
    },
    "sisteminiz-sizi-yavaslatiyor-mu": {
      key: "sisteminiz-sizi-yavaslatiyor-mu",
      translationKey: "system-slowing-you-down",
      metaTitle: "Is Your System Slowing You Down?",
      description: "As a company grows, Excel files and WhatsApp threads delay decisions. The drag is the disconnected system, not the people doing the work.",
      summary: "When the company grows and the system does not, decisions wait on files and chats. The first step is to see where the process breaks.",
      related: ["digital-transformation", "business-process-digitalization"],
      faq: [
        { q: "Are people the reason work is slow?", a: "No. If the same fact lives in separate spreadsheets and chats, the team can work hard and the company still waits." },
        { q: "Is the first step buying software?", a: "No. First listen for where the process breaks, then choose what to digitize." },
      ],
    },
  },
};

function yamlQuote(value) {
  return JSON.stringify(value);
}

for (const locale of ["tr", "en"]) {
  const blogs = read(`src/locales/${locale}/pages/blog.json`).blogs;
  for (const [slug, meta] of Object.entries(posts[locale])) {
    const source = blogs[meta.key];
    if (!source) throw new Error(`missing ${locale} ${meta.key}`);
    let body = dropUnsourced(htmlToMd(source.content));
    assertLen(`${locale} ${slug} description`, meta.description, 120, 155);
    assertLen(`${locale} ${slug} title`, `${meta.metaTitle} | Genixo`, 1, 65);
    const faq = meta.faq
      .map((item) => `  - q: ${yamlQuote(item.q)}\n    a: ${yamlQuote(item.a)}`)
      .join("\n");
    const md = `---
title: ${yamlQuote(source.title.replace(/Yapay Zeka/g, "Yapay Zekâ").replace(/yapay zeka/g, "yapay zekâ"))}
metaTitle: ${yamlQuote(meta.metaTitle)}
description: ${yamlQuote(meta.description)}
translationKey: ${yamlQuote(meta.translationKey)}
type: "post"
author: "ceyhun-tekkaya"
datePublished: ${yamlQuote(source.date)}
dateModified: "2026-10-09"
summary: ${yamlQuote(meta.summary)}
relatedServices: ${JSON.stringify(meta.related)}
faq:
${faq}
sources:
  - title: ${yamlQuote(locale === "tr" ? "Ceyhun Tekkaya, kurucu gözlemi. Bu sürümde üçüncü taraf istatistik yoktur." : "Ceyhun Tekkaya, founder observation. This version cites no third-party statistic.")}
    url: "https://genixo.ai/${locale}/authors/ceyhun-tekkaya"
    accessed: "2026-10-09"
image: ${yamlQuote(source.image)}
draft: false
---

${body}
`;
    const dir = path.join(root, "content/blog", locale);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, `${slug}.md`), md);
  }
  const blogFile = read(`src/locales/${locale}/pages/blog.json`);
  delete blogFile.blogs;
  write(`src/locales/${locale}/pages/blog.json`, blogFile);
}

for (const locale of ["de", "fr", "ru"]) {
  const blogFile = read(`src/locales/${locale}/pages/blog.json`);
  delete blogFile.blogs;
  write(`src/locales/${locale}/pages/blog.json`, blogFile);
}

const authors = {
  tr: {
    jobTitle: "Kurucu ve CEO",
    summary: "Ceyhun Tekkaya, Genixo Bilişim ve Teknoloji A.Ş.'nin kurucusu ve CEO'sudur. Ankara Bilkent Cyberpark'taki yazılım ve Ar-Ge çalışmalarını yönetir.",
    body: "Ceyhun Tekkaya, Genixo Bilişim ve Teknoloji A.Ş.'nin (Genixo) kurucusudur. Şirket Ankara Bilkent Cyberpark'ta yazılım, dijital dönüşüm danışmanlığı ve yapay zekâ entegrasyonu üzerine çalışır.\n\nKonuşma, sertifika veya proje listesi ancak doğrulanmış bilgi geldikçe bu sayfaya eklenir.",
  },
  en: {
    jobTitle: "Founder & CEO",
    summary: "Ceyhun Tekkaya is founder and CEO of Genixo Bilişim ve Teknoloji A.Ş. He leads the software and R&D work at Bilkent Cyberpark in Ankara.",
    body: "Ceyhun Tekkaya is the founder of Genixo Bilişim ve Teknoloji A.Ş. (Genixo). The company works on software, digital transformation consulting and AI integration from Bilkent Cyberpark, Ankara.\n\nTalks, certificates and project lists are added here only when they are confirmed.",
  },
};

for (const [locale, author] of Object.entries(authors)) {
  assertLen(`${locale} author summary`, author.summary, 70, 155);
  const md = `---
name: "Ceyhun Tekkaya"
jobTitle: ${yamlQuote(author.jobTitle)}
summary: ${yamlQuote(author.summary)}
---

${author.body}
`;
  fs.writeFileSync(path.join(root, `content/authors/ceyhun-tekkaya.${locale}.md`), md);
}

const pages = {
  tr: {
    home: {
      title: "Genixo – KOBİ'lere Dijital Dönüşüm ve Yapay Zekâ Entegrasyonu",
      description: "Ankara Bilkent Cyberpark'ta yazılım ve Ar-Ge şirketi. KOBİ'lere dijital dönüşüm danışmanlığı, süreç dijitalleştirme ve yapay zekâ entegrasyonu.",
    },
    about: {
      title: "Hakkımızda – Bilkent Cyberpark'ta Yazılım ve Ar-Ge",
      description: "Genixo kimdir, ne yapar, kimlerle çalışır: Ankara Bilkent Cyberpark merkezli yazılım ve Ar-Ge şirketinin ekibi, üyelikleri ve yaklaşımı.",
    },
    solutions: {
      title: "Çözümler: Dijital Dönüşüm, Süreç ve Yapay Zekâ",
      description: "KOBİ'ler için dijital dönüşüm danışmanlığından yapay zekâ entegrasyonuna yedi çözüm. Her sayfa sorunu, yaklaşımı ve sık soruları anlatır.",
    },
    "solution.digital-transformation": {
      title: "KOBİ'ler için Dijital Dönüşüm Danışmanlığı",
      description: "KOBİ'de dijital dönüşüm nereden başlar? Süreç yerinde incelenir, yol haritası çıkarılır ve ilk pilot birlikte seçilir. Ölçeriz.",
    },
    "solution.business-process-digitalization": {
      title: "İş Süreçlerini Excel'den Tek Sisteme Alma",
      description: "Excel ve WhatsApp'ta kopan sipariş, stok ve teklif tek kayıtta toplanır. Geçiş pilotla başlar, iş durmadan ilerler. Kayıt tektir.",
    },
    "solution.ai-integration": {
      title: "Yapay Zekâ Entegrasyonu: RAG ve On-Prem LLM",
      description: "RAG chatbot, kurum içi büyük dil modeli, konuşma tanıma ve seslendirme. Verinin nerede kalacağı kurulumdan önce netleşir.",
    },
    "solution.smart-reporting-analytics": {
      title: "Akıllı Raporlama ve Veri Analizi",
      description: "Günler süren Excel raporunun yerine tek kaynaktan gelen görünüm. Sistem uyarı üretir; kararı yine siz verirsiniz. Rapor bekletmez.",
    },
    "solution.system-improvement-modernization": {
      title: "Eski Sistemi Baştan Yazmadan İyileştirme",
      description: "Çalışan sistemi durdurmadan tıkanan akış iyileştirilir. Baştan yazmak, ancak mevcut yapı işi taşıyamıyorsa konuşulur. İş sürer.",
    },
    "solution.cost-optimization": {
      title: "BT Maliyetini Ölçerek Sadeleştirme",
      description: "Lisans, sunucu ve elle yapılan iş tek tek okunur. Bulut her zaman ucuzlamaz; yüzde vaadi ölçümden önce verilmez. Önce ölçeriz.",
    },
    "solution.product-project-development": {
      title: "Özel Yazılım ve Ürün Geliştirme",
      description: "Hazır paket akışa uymuyorsa fikir netleştirilir ve küçük bir sürümle denenir. NGSD ise ayrı, sürekli bir ekip modelidir.",
    },
    contact: {
      title: "İletişim – Bilkent Cyberpark, Ankara",
      description: "Bilkent Cyberpark adresimiz, telefon ve e-posta. Dijital dönüşüm veya yapay zekâ entegrasyonu için ön görüşme talebi buradan iletilir.",
    },
    blog: {
      title: "Blog: KOBİ'de Dijital Dönüşüm ve Yapay Zekâ",
      description: "KOBİ'lerde dijital dönüşüm, kopuk sistemler ve yapay zekâ entegrasyonu üzerine Ceyhun Tekkaya imzalı yazılar. Kısa cevap sayfanın başındadır.",
    },
    products: {
      title: "Ürünlerimiz: StudyScore AI, Eğitim İste, ILC",
      description: "Genixo'nun kendi ürünleri: StudyScore AI, Eğitim İste ve ILC. Ürünler kanıttır; şirketin asıl işi dijital dönüşüm ve yapay zekâ entegrasyonudur.",
    },
    "product.ilc": {
      title: "ILC Dil Sertifikasyonu",
      description: "ILC, dil sertifikasyonu için Genixo'nun eğitim ürünüdür. Şirketin ana işi bu ürün değil, KOBİ'lere dijital dönüşüm ve yapay zekâ entegrasyonudur.",
    },
    "product.study-score-ai": {
      title: "StudyScore AI",
      description: "StudyScore AI, Genixo'nun eğitim değerlendirme ürünüdür. Ürün sayfası kanıt içindir; konumlanma dijital dönüşüm ve yapay zekâ entegrasyonudur.",
    },
    "product.egitimiste": {
      title: "Eğitim İste",
      description: "Eğitim İste, öğrenenleri eğitim kaynaklarıyla buluşturan Genixo ürünüdür. Şirket tanımı bu ürün değil, yazılım ve Ar-Ge hizmetleridir.",
    },
    ngsd: {
      title: "NGSD: Yeni Nesil Yazılım Departmanı",
      description: "NGSD, uzaktaki bir yazılım ekibinin sizin departmanınız gibi çalışmasıdır. Tek bir proje tesliminden farklı olarak süreklilik hedeflenir.",
    },
    governmentSupport: {
      title: "Dijital Dönüşüm Destekleri",
      description: "KOBİ dijital dönüşüm desteklerinin tutarı ve koşulları resmî duyuruya göre değişir. Bu sayfa doğrulanmamış bir üst limit yazmaz.",
    },
  },
  en: {
    home: {
      title: "Genixo – Digital Transformation and AI Integration for SMEs",
      description: "Software and R&D company in Bilkent Cyberpark, Ankara. Digital transformation consulting, process digitalization and AI integration for SMEs.",
    },
    about: {
      title: "About Genixo – Software and R&D in Ankara",
      description: "Who Genixo is, what it does and who it works with: a software and R&D company at Bilkent Cyberpark, its team, memberships and approach.",
    },
    solutions: {
      title: "Solutions: Transformation, Process and AI",
      description: "Seven offers for SMEs, from digital transformation consulting to AI integration. Each page states the problem, the approach and common questions.",
    },
    "solution.digital-transformation": {
      title: "Digital Transformation Consulting for SMEs",
      description: "Where does digital transformation start for an SME? We study the work on site, write a roadmap and choose the first pilot together.",
    },
    "solution.business-process-digitalization": {
      title: "From Excel and WhatsApp to One System",
      description: "Orders, stock and quotes scattered across files and chats move into one record. The switch starts as a pilot and does not stop the work.",
    },
    "solution.ai-integration": {
      title: "AI Integration in Türkiye: RAG, On-Prem LLM",
      description: "RAG chatbots, on-premise language models, speech-to-text and text-to-speech. Where data stays is agreed before installation, including KVKK limits.",
    },
    "solution.smart-reporting-analytics": {
      title: "Reporting and Analytics for Operators",
      description: "Replace a report that takes days in Excel with one source of record. The system raises the alert. The decision stays with you.",
    },
    "solution.system-improvement-modernization": {
      title: "Improve a Legacy System in Place",
      description: "We fix the flow that is stuck without taking the live system down. A rewrite is discussed only when the current system cannot carry the work.",
    },
    "solution.cost-optimization": {
      title: "IT Cost Optimization, Measured First",
      description: "Licenses, servers and manual hours are read line by line. Cloud is not always cheaper. We do not promise a percentage before measuring.",
    },
    "solution.product-project-development": {
      title: "Custom Software and Product Development",
      description: "When a package does not fit the workflow, we clarify the idea and try a small first version. NGSD is a different, ongoing team model.",
    },
    contact: {
      title: "Contact Genixo in Bilkent Cyberpark",
      description: "Address, phone and email for Genixo at Bilkent Cyberpark, Ankara. Request an introductory call on digital transformation or AI integration.",
    },
    blog: {
      title: "Blog: Digital Transformation and AI for SMEs",
      description: "Essays by Ceyhun Tekkaya on disconnected systems, digital transformation and AI integration for SMEs. The direct answer sits at the top.",
    },
    products: {
      title: "Our Products: StudyScore AI, Eğitim İste, ILC",
      description: "Genixo's own products are StudyScore AI, Eğitim İste and ILC. They are evidence. The company itself is a software and AI integration firm.",
    },
    "product.ilc": {
      title: "ILC Language Certification",
      description: "ILC is Genixo's language certification product. It is not the company definition. The firm works on digital transformation and AI integration.",
    },
    "product.study-score-ai": {
      title: "StudyScore AI",
      description: "StudyScore AI is Genixo's education assessment product. This page is evidence. The company's position is digital transformation and AI integration.",
    },
    "product.egitimiste": {
      title: "Eğitim İste",
      description: "Eğitim İste connects learners with education resources. It is a Genixo product, not the definition of the software and R&D company behind it.",
    },
    ngsd: {
      title: "NGSD: A Software Department, Remote",
      description: "NGSD is a remote software team that works as your department. It is an ongoing model, not a single project handover. Continuity is the point.",
    },
    governmentSupport: {
      title: "Digital Transformation Support Notes",
      description: "Turkish SME support amounts and rules change with the official notice. This page does not state an unverified funding ceiling.",
    },
  },
};

for (const [locale, bag] of Object.entries(pages)) {
  for (const [key, value] of Object.entries(bag)) {
    const limit = key === "home" ? 65 : 65;
    const titled = key === "home" ? value.title : `${value.title} | Genixo`;
    assertLen(`${locale} ${key} title`, titled, 1, limit);
    assertLen(`${locale} ${key} desc`, value.description, 120, 155);
  }
  const seo = read(`src/locales/${locale}/seo.json`);
  seo.seo.pages = bag;
  const strip = (node) => {
    if (!node || typeof node !== "object") return;
    delete node.keywords;
    for (const value of Object.values(node)) strip(value);
  };
  strip(seo);
  if (locale === "tr" && seo.seo.governmentSupport) {
    seo.seo.governmentSupport.description = bag.governmentSupport.description;
    seo.seo.governmentSupport.title = "Dijital dönüşüm destekleri";
    seo.seo.governmentSupport.subtitle = "Tutar ve koşullar resmî duyuruya göre değişir";
    seo.seo.governmentSupport.supportLimit.amount = "Resmî duyurudaki güncel tutar";
    seo.seo.governmentSupport.supportLimit.note = "Üst limit ve uygunluk ilgili kurumun sayfasından kontrol edilir. Doğrulanmamış bir rakam yazılmaz.";
    seo.seo.governmentSupport.summary.content = "KOBİ'lere yönelik dijital dönüşüm desteklerinin kapsamı kuruma ve döneme göre değişir. Güncel koşul resmî metinden okunmalıdır.";
  }
  write(`src/locales/${locale}/seo.json`, seo);
}

const aboutFollow = {
  tr: "KOBİ'lerin ve kurumların süreçlerini inceler, yazılımı ve yapay zekâ entegrasyonunu ekiple birlikte devreye alırız. Çalışmalarımızda Spring Boot, Next.js, PostgreSQL, Docker ve Ollama kullanırız. Bilkent Cyberpark'ta Ar-Ge firmasıyız; Türkiye Bilişim Derneği ve ALTE üyesiyiz.",
  en: "We study how SMEs and organizations work, then put software and AI integration into daily use with their teams. Our usual stack is Spring Boot, Next.js, PostgreSQL, Docker and Ollama. We are an R&D company at Bilkent Cyberpark and a member of the Turkish Informatics Association and ALTE.",
  de: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo) ist ein Software- und F&E-Unternehmen im Bilkent Cyberpark in Ankara. Es berät KMU und Organisationen zu digitaler Transformation, Prozessdigitalisierung und KI-Integration.",
  fr: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo) est une société de logiciel et de R&D au Bilkent Cyberpark, à Ankara. Elle accompagne les PME et les organisations en transformation numérique, digitalisation des processus et intégration d'IA.",
  ru: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo) — компания по разработке ПО и НИОКР в Bilkent Cyberpark, Анкара. Она помогает МСП и организациям с цифровой трансформацией, цифровизацией процессов и интеграцией ИИ.",
};

for (const [locale, description] of Object.entries(aboutFollow)) {
  const about = read(`src/locales/${locale}/pages/about.json`);
  about.about.description = description;
  delete about.about.short;
  if (locale === "tr") about.about.authorTitle = "Kurucu ve CEO";
  if (locale === "en") about.about.authorTitle = "Founder & CEO";
  write(`src/locales/${locale}/pages/about.json`, about);
}

for (const locale of ["tr", "en", "de", "fr", "ru"]) {
  const common = read(`src/locales/${locale}/common.json`);
  common.menu.active.Blog = true;
  common.menu.active.Products = true;
  common.menu.active.SuccessStories = false;
  if (locale === "tr") common.welcome.title = "Genixo";
  if (locale === "en") common.welcome.title = "Genixo";
  write(`src/locales/${locale}/common.json`, common);
}

const homeTr = read("src/locales/tr/pages/home.json");
homeTr.landing.hero.eyebrow = "Bilkent Cyberpark · Yazılım ve yapay zekâ";
homeTr.landing.hero.lead = homeTr.landing.hero.lead.replaceAll("yapay zeka", "yapay zekâ");
write("src/locales/tr/pages/home.json", homeTr);

if (process.exitCode) {
  console.error("length checks failed");
  process.exit(process.exitCode);
}
console.log("content and locale copy written");
