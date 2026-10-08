# Genixo.ai — GEO Stratejisinin Web Ayağı: Detaylı Uygulama Planı

**Hazırlanma:** 9 Ekim 2026
**Kaynak dokümanlar:** `docs/geo stratejisi.md` (ana hedef), `docs/web-stratejisi.md` (eski site için yazılmış özet)
**Kapsam:** Yalnızca web sitesi (kod, içerik altyapısı, ölçüm). Site dışı işler (Clutch yorumları, TÜSSİDE, PR, LinkedIn vb.) bu planın dışında; sadece sitenin onlara nasıl kanıt sağlayacağı ele alınıyor.

---

## 0. Bu planı nasıl kullanmalı

- Plan **iş paketlerine (İP)** bölündü. Her paket ayrı bir PR olacak büyüklükte; sırası bağımlılığa göre belirlendi. Sırayı bozmayın: örneğin schema (İP-5), tek tanım cümlesi (İP-1) bitmeden yazılırsa iki kez yazılır.
- Her paketin sonunda **Kabul kriterleri** var. Paket, bu kriterler **canlıda** (`https://genixo.ai`) doğrulanmadan "bitti" sayılmaz. Yerelde `npm run build && npm start` ile ön test yapılır, ama asıl test production'dır.
- `[KARAR]` etiketli maddeler kod yazılmadan önce şirket tarafından karara bağlanmalı. `[BİLGİ]` etiketli maddeler için şirketten doğrulanmış veri gerekir; tahminle doldurulmamalı.
- Yerelde şu an commit edilmemiş bir ana sayfa yenilemesi var (`src/app/component/home/*`, `home.json` dosyalarındaki `landing` anahtarı). **İP-0'dan önce bu çalışma bitirilip commit edilmeli**, aksi hâlde İP-2'deki `page.tsx` değişiklikleri çakışır.

---

## 1. Eski web stratejisinin değerlendirmesi

`web-stratejisi.md`, GEO araştırmasının web maddelerinin doğru bir özetidir; içerik olarak yanlış bir maddesi yok. Ancak eksikleri var ve bu plan onları kapatıyor:

| Eski dokümandaki durum | Değerlendirme |
|---|---|
| Maddeler "ne yapılacak" düzeyinde; dosya, kod, test yok | Bu plan her maddeyi dosya ve kabul testi düzeyine indiriyor |
| "SSR çalışıyor, korunmalı" deniyor | SSR doğru, ama **schema'lar ilk HTML'de yok** (aşağıda Bulgu 1). Araştırma bunu yakalayamamış |
| "robots.txt'yi düzenleyin" | Mevcut robots.txt aslında açık, ama **`/_next/` engeli Google'ın CSS/JS'i görmesini kesiyor**; bu daha acil |
| "Sitemap ve 404'leri temizleyin" | Sitemap'te bizzat **404 veren 4 ürün URL'si ×5 dil = 20 ölü URL** var |
| hreflang için "tr-TR, en, x-default" | Şu an 5 dil yayında; de/fr/ru içeriğinin kalitesi bir karar gerektiriyor (bkz. K-2) |
| Kaynaksız rakamlar: "%40–60", "%93" | Bunlara ek olarak `government-support` sayfasındaki "20 Milyon TL" ve chatbot bilgi tabanındaki "KVKK'ya tam uyumlu", "6–12 ayda amorti" ifadeleri de var |
| Avatar bilgisinin statik HTML olması önerisi | Doğru; `src/app/api/chat/business-context.ts` içeriği zengin ve sitede yok. İP-9'da sayfalara taşınıyor |
| İçerik maddeleri (vaka, sütun sayfası, yazar) | Doğru, ama mevcut blog altyapısı (JSON içinde HTML string) 10+ kaynaklı yazıyı taşıyamaz. Önce altyapı (İP-7) |

---

## 2. Mevcut durum denetimi (9 Ekim 2026, canlı site + kod)

Aşağıdaki bulgular `curl` ile canlı siteden ve kaynak koddan doğrulandı.

### Kritik (botların siteyi yanlış okumasına neden oluyor)

1. **JSON-LD schema'ları hiçbir sayfada ilk HTML'de yok.** Tüm sayfalar schema'yı `next/script` bileşeniyle basıyor (`<Script type="application/ld+json" dangerouslySetInnerHTML=…>`). Next.js bu içeriği `<script type="application/ld+json">` etiketi olarak değil, sonradan JS ile enjekte edilecek bir yük (`self.__next_s`) olarak gönderiyor. JS çalıştırmayan AI botları (GPTBot, ClaudeBot, PerplexityBot) schema'yı hiç görmüyor. Canlı testte ana sayfa, hakkımızda, çözüm ve blog sayfalarında `<script type="application/ld+json">` sayısı **0**.
2. **`robots.txt` `/_next/` yolunu engelliyor.** Bu, `/_next/static/` altındaki CSS ve JS dosyalarını da kapsıyor. Googlebot sayfayı render ederken stil ve script'e erişemiyor; Google bunu "kaynak engellendi" olarak raporlar ve mobil uyumluluk/render değerlendirmesini bozar.
3. **Bilinmeyen tek seviyeli yollar 200 dönüp ana sayfayı gösteriyor.** `https://genixo.ai/llms.txt` → 200 ve ana sayfa HTML'i. Sebep: `[locale]` dinamik parametresi doğrulanmıyor; `getDictionary` bilinmeyen dilde İngilizceye düşüyor. Bu sonsuz sayıda "soft 404" kopya sayfa üretir.
4. **Sitemap'te 404 veren URL'ler var.** `genixo-work-ai`, `genixo-assistant`, `tomer-e-yadis`, `retired-travel-app` ürünleri pasif (404), ama sitemap'te 5 dilde listeleniyor (20 ölü URL). `lastModified: new Date()` her build'de tüm URL'leri "bugün güncellendi" gösteriyor; bu sahte tazelik sinyalidir.
5. **Tüm dillerde `<html lang="tr">`.** Kök `src/app/layout.tsx` sabit `lang="tr"` basıyor; `/en` sayfaları da Türkçe işaretli.
6. **`www.genixo.ai` kopya site olarak yayında.** `https://www.genixo.ai/` → 307 → `https://www.genixo.ai/tr` (apex alan adına yönlendirmiyor).
7. **Ana sayfa ve Hakkımızda şablon metni kullanıyor.** Ana sayfa başlığı: "Genixo BT ve Teknoloji | Genixo Bilişim ve Teknoloji". Açıklama (ana sayfa ve Hakkımızda): "Başarılı bir yazılım oluşturmak için…" şablon metni (`about.short`). İngilizcede başlık "Genixo IT and Technology | Genixo IT and Technology".
8. **Hakkımızda metni Genixo'yu EdTech şirketi olarak tanımlıyor** (`about.description`: "yapay zeka odaklı eğitim platformları… geliştiren").

### Yüksek

9. **hreflang eksik:** Sayfalar kendi dilini (self-referencing) ve `x-default`'u içermiyor. Blog yazısında Türkçe slug diğer dillere de uygulanıyor (`/en/blog/yapay-zeka-sadece-...`), oysa İngilizce slug `ai-not-just-technology`.
10. **Organization schema'sında yanlış `sameAs`:** `linkedin.com/company/genixo` (doğrusu `genixoglobal`), `twitter.com/genixo`, `facebook.com/genixo` (sahiplik doğrulanmamış). Instagram ve Cyberpark yok. `WebSite` schema'sında var olmayan `/search` için `SearchAction` tanımlı (geçersiz).
11. **`og-image.jpg` yok (404).** Tüm sayfaların OG/Twitter görseli kırık. Çözüm sayfaları `/images/solutions/{slug}.jpg`, ürünler `/images/products/{slug}.jpg` istiyor; bunlar da yok.
12. **`twitter:site` ve `twitter:creator` = `@genixo`** — sahipliği doğrulanmamış.
13. **Meta keywords her sayfada basılıyor.**
14. **Boş/zayıf sayfalar indekslenebilir:** `/[locale]/service` ve `/[locale]/service/[type]` sadece "Merhaba" yazıyor ve 200 dönüyor. `/case-study` "Success stories page content will be added here." yazıyor ve sitemap'te. `/chat` sayfasında içerik yok, indekslenebilir. `government-support` yalnızca Türkçede içerikli; diğer 4 dilde "yakında" metni.
15. **Blog ve Ürünler menüde gizli** (`common.json` → `menu.active.Blog: false`, `Products: false`). Blog yazıları iç bağlantı almıyor (yetim sayfa).
16. **Unvan tutarsızlığı:** Hakkımızda'da "CEO, Genixo", bir blogda "Co-Founder of Genixo", diğerinde "Dijital Dönüşüm Danışmanı".
17. **Kaynaksız iddialar:** `services.json` (cost-optimization) "%40-60"; `government-support` "20 Milyon TL'ye Kadar Kredi Faiz Desteği" (kaynak yok); `business-context.ts` "KVKK'ya tam uyumludur", "Ortalama 6–12 ay içinde kendini amorti eder".
18. **Ölçüm altyapısı hiç yok:** GA4, çerez onayı, KVKK aydınlatma metni, GSC/Bing doğrulama etiketi bulunmuyor.

### Orta

19. `about/page.tsx` içinde `process.env.NEXT_PaiLIC_SITE_URL` yazım hatası.
20. `case-study` sayfasında iki adet `<h1>` var (PageHero + sayfa).
21. Footer'da yalnızca "Bilkent Cyberpark" yazıyor; tam unvan, adres ve telefon (NAP) metin olarak yok.
22. Görsellerin neredeyse tamamında `unoptimized` kullanılıyor; global olarak Bootstrap, Font Awesome, Flaticon, AOS, Magnific Popup ve Swiper CSS'leri yükleniyor. Core Web Vitals için ölçülmeli.
23. `middleware.ts` içindeki `request.geo` Next.js 15'te kaldırıldı ve site Vercel/Amplify'da değil (sunucu: openresty / Nginx Proxy Manager). Ülke tespiti hiç çalışmıyor; herkes `/tr`'ye gidiyor. Bu bir hata değil, ama ölü kod.
24. 404 sayfası Next.js varsayılanı ("404: This page could not be found."), İngilizce ve yönlendirici bağlantı içermiyor.

### Olumlu (korunacak)

- Tüm sayfalar SSR/SSG; ana metin, çözüm sayfası problemleri ve blog içeriği JS olmadan HTML'de.
- Her dilin canonical'ı kendine işaret ediyor (araştırmadaki "canonical /tr'ye işaret ediyor" endişesi geçersiz).
- `http → https` 301 doğru.
- OAI-SearchBot ile yapılan istek 200 alıyor; sunucu önünde bot engelleyen bir CDN görünmüyor (yine de İP-3'te doğrulanacak).

---

## 3. Kod öncesi alınması gereken kararlar ve toplanması gereken bilgiler

### Kararlar

| No | Karar | Öneri | Gerekçe |
|---|---|---|---|
| K-1 | Tek tanım cümlesi (TR + EN) | Bölüm 4'teki metin | GEO dokümanının önerdiği kalıp |
| K-2 | de/fr/ru dilleri ne olacak? | **Yayında kalsın ama `noindex, follow` olsun; sitemap ve hreflang'den çıkarılsın.** İnsan eliyle yazılmış içerik gelirse tekrar açılır | GEO dokümanı makine çevirisini açıkça yasaklıyor; 3 dildeki ince/çeviri içerik entity sinyalini sulandırıyor. Alternatif: `/en`'e 301 (dil seçiciden de kaldırılır) |
| K-3 | Kurucunun unvanı | Tek bir unvan seçilmeli (ör. "Kurucu ve CEO" / "Founder & CEO") | Site, blog, LinkedIn ve schema'da birebir aynı olmalı |
| K-4 | `@genixo` X/Twitter hesabı | Şirkete ait değilse meta etiketinden ve schema'dan kaldır | Başka bir markaya bağlanma riski |
| K-5 | Mevcut İngilizce URL segmentleri (`/tr/solutions/ai-integration`) | **Değiştirilmesin.** Yeni içerik slug'ları dile uygun yazılsın (TR yazılar Türkçe slug) | URL değişikliği yönlendirme zinciri ve geçici sıralama kaybı demek; kazancı küçük |
| K-6 | Yazım: "yapay zeka" mı "yapay zekâ" mı? | Gövde metninde **"yapay zekâ"** (tanım cümlesiyle aynı). Başlık/title'larda da aynı | Arama motorları ikisini eşleştiriyor; önemli olan tutarlılık |
| K-7 | `x-default` hangi dile? | **`/en`** | `x-default`, tr/en dışındaki dillerde arayanlar içindir; onlar için İngilizce daha uygun |
| K-8 | Ürünler (ILC, StudyScore AI, Eğitim İste) menüde görünsün mü? | Evet, "Ürünlerimiz" olarak; ama ana sayfada ve Hakkımızda'da ikinci planda | Konumlanma "dijital dönüşüm + yapay zekâ entegrasyonu"; ürünler kanıt |
| K-9 | GA4 çerez onayı modeli | **Onay verilmeden GA4 yüklenmesin** (KVKK açısından en güvenli) | Consent Mode "denied" pingleri de veri aktarımı sayılabilir; hukuk görüşü alınmalı |

### Bilgi toplama formu `[BİLGİ]`

Bu bilgiler tek bir kaynakta (`src/content/entity.ts`, bkz. İP-1) toplanacak. **Hepsi resmî belgeden (ticaret sicil gazetesi, vergi levhası) doğrulanmalı.**

| Alan | Değer | Kaynak |
|---|---|---|
| Resmî unvan (legalName) | "Genixo Bilişim ve Teknoloji A.Ş." (sicildeki tam yazımı teyit edin; "Anonim Şirketi" açık hâli) | Ticaret sicil |
| Kuruluş tarihi (foundingDate) | ? (bazı rehberlerde 2022) | Ticaret sicil |
| Tam adres | Kodda: "Cyberplaza H Blok No:8, Bilkent, Ankara". Posta kodu, mahalle (Üniversiteler Mah.), ilçe (Çankaya) eklenmeli | Vergi levhası / Cyberpark sözleşmesi |
| Telefon | +90 312 265 04 56 | — |
| E-posta | hello@genixo.ai | — |
| Kurucu(lar) ve unvanlar | Ceyhun Tekkaya — unvan K-3 | — |
| Teknik liderler (yazar sayfası için) | isim, unvan, LinkedIn, fotoğraf, kısa biyografi | — |
| sameAs URL'leri | LinkedIn `linkedin.com/company/genixoglobal`, Instagram `instagram.com/genixo.global`, The Manifest profil URL'si, Clutch (varsa), Cyberpark firma sayfası (yoksa talep edilecek), YouTube (varsa) | — |
| Üyelikler | Bilkent Cyberpark (Ar-Ge firması), TBD, ALTE, BNI (hangi chapter?) | Üyelik belgeleri |
| TÜBİTAK/KOSGEB projeleri | Program adı (ör. 1507), yıl, proje başlığı — yayınlanabilir olanlar | Proje sözleşmeleri |
| Vaka çalışması adayları | RAG chatbot, akaryakıt dağıtım yönetimi, Koha kütüphanesi, CatchUpper, pazaryeri, sesli avatar. Her biri için: müşteri adı kullanım izni (yazılı), sayısal sonuçlar | Müşteri |
| `@genixo` X hesabı sahipliği | K-4 | — |

> Eski adres notu: iyifirma'daki "Üniversiteler, Çankaya" adresi aslında Bilkent Cyberpark'ın bulunduğu mahalle; yanlış değil, farklı biçimde yazılmış olabilir. Gerçek eski adres Gazi Teknokent (Gölbaşı) kayıtlarıdır. Sitedeki resmî adres sicildeki biçimle birebir aynı yazılırsa rehberlerle eşleşme kolaylaşır.

---

## 4. Tek tanım cümlesi (K-1 taslağı)

Bu metin **kelimesi kelimesine** şu yerlerde kullanılacak: Hakkımızda ilk paragrafı, footer, Organization schema `description`, `llms.txt`, ana sayfa meta description'ının çekirdeği, LinkedIn "Hakkında", Google Business Profile, Clutch/The Manifest.

**TR:**
> Genixo Bilişim ve Teknoloji A.Ş. (Genixo), Ankara Bilkent Cyberpark merkezli bir yazılım ve Ar-Ge şirketidir; KOBİ'lere ve kurumlara dijital dönüşüm danışmanlığı, iş süreçleri dijitalleştirme ve yapay zekâ entegrasyonu (RAG chatbot, kurum içi (on-prem) büyük dil modelleri, konuşma tanıma ve seslendirme) hizmetleri sunar.

**EN:**
> Genixo Bilişim ve Teknoloji A.Ş. (Genixo) is a software and R&D company based in Bilkent Cyberpark, Ankara, Türkiye. It provides digital transformation consulting, business process digitalization and AI integration (RAG chatbots, on-premise large language models, speech-to-text and text-to-speech) for SMEs and organizations.

**Kısa sürüm (meta description ve kartlar için, ≤155 karakter):**
- TR: "Ankara Bilkent Cyberpark'ta yazılım ve Ar-Ge şirketi. KOBİ'lere dijital dönüşüm danışmanlığı, süreç dijitalleştirme ve yapay zekâ entegrasyonu."
- EN: "Software and R&D company in Bilkent Cyberpark, Ankara. Digital transformation consulting, process digitalization and AI integration for SMEs."

---

## 5. İş paketleri — genel sıra ve takvim

| Sıra | İş paketi | Süre (tahmini) | Bağımlılık | Hafta |
|---|---|---|---|---|
| İP-0 | Hazırlık: bekleyen ana sayfa çalışmasını kapat, ölçüm sıfır noktası | 0,5 gün | — | 1 |
| İP-1 | Entity tek kaynak dosyası (`entity.ts`) | 0,5 gün | K-1, K-3, [BİLGİ] | 1 |
| İP-2 | Kritik teknik düzeltmeler (layout/lang, locale doğrulama, robots, www, boş sayfalar) | 1,5 gün | İP-0 | 1 |
| İP-3 | Bot erişimi ve render doğrulaması (sunucu/CDN/log) | 0,5 gün | İP-2 | 1 |
| İP-4 | Metadata sistemi: title/description, hreflang, canonical, OG görseli | 1,5 gün | İP-1, K-2, K-7 | 2 |
| İP-5 | Schema (JSON-LD) yeniden yazımı | 1,5 gün | İP-1, İP-4 | 2 |
| İP-6 | Sitemap, 404, yönlendirmeler, IndexNow, konsollar | 1 gün | İP-4 | 2 |
| İP-7 | İçerik altyapısı (Markdown tabanlı blog, vaka, rehber, yazar sayfası) | 3 gün | İP-5 | 3 |
| İP-8 | Konumlanma ve mevcut içerik düzeltmeleri (Hakkımızda, footer, kaynaksız rakamlar, menü) | 1,5 gün | İP-1 | 3 |
| İP-9 | Çözüm sayfalarına SSS ve chatbot bilgisinin statik içeriğe taşınması | 1,5 gün | İP-5, İP-8 | 3–4 |
| İP-10 | KVKK: çerez onayı, aydınlatma metni, GA4, dönüşüm olayları | 1,5 gün | Hukuk metni | 4 |
| İP-11 | Core Web Vitals | 1–2 gün | İP-2 | 4 |
| İP-12 | llms.txt (opsiyonel) | 15 dk | İP-1, İP-2 | 4 |
| İP-13 | İçerik üretimi (vaka, sütun, destek, İngilizce) | 31–90. gün | İP-7 | 5–13 |
| İP-14 | Sürekli ölçüm ve bakım | Aylık | İP-10 | sürekli |

---

## İP-0 — Hazırlık

1. Yereldeki ana sayfa yenilemesini (`home-landing.tsx`, `hero-board.tsx`, `home.module.css`, `fonts.ts`, `home.json`'daki `landing` anahtarı, `types.ts`) bitirip ayrı bir commit olarak ana dala alın.
2. Bir `seo/geo` dalı açın; her İP ayrı PR olsun.
3. **Sıfır noktası (baseline) kaydı alın** ve `docs/geo-baseline-2026-10.md` dosyasına yazın:
   - Bu plandaki Bölüm 2 bulguları (zaten var).
   - Bölüm İP-14'teki prompt setinin ilk ölçümü (ChatGPT, Gemini, AI Mode, Copilot, Perplexity, Claude).
   - `site:genixo.ai` sonuçlarının Google ve Bing'deki sayısı ve başlıkları (şablon başlık "Software, App, SaaS & Startup Landing Pages Pack" hâlâ görünüyor mu?).
   - PageSpeed Insights mobil skorları: `/tr`, `/tr/solutions/ai-integration`, `/tr/blog/...`.
4. Bölüm İP-6'daki `scripts/seo-check.mjs` betiğini **ilk olarak** yazın ve mevcut siteye karşı çalıştırıp çıktısını baseline'a ekleyin. Tüm sonraki paketler bu betikle doğrulanacak.

---

## İP-1 — Entity için tek kaynak dosyası

**Amaç:** Şirket adı, adres, tanım, kurucu, sosyal profiller tek yerde dursun; footer, Hakkımızda, iletişim, schema ve llms.txt buradan okusun. Böylece "her yerde birebir aynı" kuralı kod ile garanti edilir.

**Dosya:** `src/content/entity.ts` (yeni). Mevcut `src/utils/company.ts` bu dosyayı yeniden dışa aktaracak şekilde inceltilir (import eden dosyalar kırılmasın).

```ts
import type { Locale } from "@/i18n/config";

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://genixo.ai";

export const entity = {
  legalName: "Genixo Bilişim ve Teknoloji A.Ş.",
  brandName: "Genixo",
  foundingDate: "YYYY-MM-DD", // [BİLGİ] ticaret sicilden
  phone: "+90 312 265 04 56",
  email: "hello@genixo.ai",
  address: {
    streetAddress: "Üniversiteler Mah. … Cyberplaza H Blok No:8", // [BİLGİ]
    addressLocality: "Çankaya",
    addressRegion: "Ankara",
    postalCode: "06800", // [BİLGİ] doğrula
    addressCountry: "TR",
  },
  geo: { latitude: 39.8819, longitude: 32.7551 }, // harita embed'indeki koordinat; GBP ile karşılaştır
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [
    "https://www.linkedin.com/company/genixoglobal/",
    "https://www.instagram.com/genixo.global/",
    // [BİLGİ] The Manifest, Clutch, Cyberpark firma sayfası, YouTube
  ],
  founder: {
    id: "ceyhun-tekkaya",
    name: "Ceyhun Tekkaya",
    jobTitle: { tr: "Kurucu ve CEO", en: "Founder & CEO" }, // [KARAR] K-3
    sameAs: ["https://www.linkedin.com/in/…"], // [BİLGİ]
  },
  memberships: [
    { name: "Bilkent Cyberpark", url: "https://www.cyberpark.com.tr/" },
    { name: "Türkiye Bilişim Derneği", url: "https://www.tbd.org.tr/" },
    { name: "ALTE – Association of Language Testers in Europe", url: "https://www.alte.org/" },
  ],
  definition: {
    tr: "…Bölüm 4 TR metni…",
    en: "…Bölüm 4 EN metni…",
  } satisfies Partial<Record<Locale, string>>,
  shortDefinition: {
    tr: "…Bölüm 4 kısa TR…",
    en: "…Bölüm 4 kısa EN…",
  } satisfies Partial<Record<Locale, string>>,
} as const;
```

**Dikkat:**
- Bu dosyaya **doğrulanmamış hiçbir bilgi girilmez**. Bilinmeyen alan boş bırakılır ve schema üreticisi boş alanları atlar.
- `companyInfo.address` metni (iletişim sayfasında görünen) bu yapıdan üretilsin; görünen adres ile schema adresi aynı kaynaktan gelmeli.

**Kabul kriterleri:**
- `rg "Bilkent|\\+90 312|hello@genixo" src --glob '*.tsx'` sonucu yalnızca `entity.ts` üzerinden okunan değerleri göstersin (sabit yazılmış kopya kalmasın).

---

## İP-2 — Kritik teknik düzeltmeler

### 2.1 Kök layout ve `<html lang>`

**Sorun:** Bulgu 5. Kök layout `lang="tr"` sabit.

**Yapılacak (next-intl'in de önerdiği desen):**
1. `src/app/layout.tsx` sadece çocukları döndürsün; `<html>`/`<body>` basmasın:
   ```tsx
   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return children;
   }
   ```
2. Tüm global CSS importları, `metadata.icons` ve `<html lang={locale}><body>` yapısı `src/app/[locale]/layout.tsx`'e taşınsın. CSS import sırası **birebir korunmalı** (Bootstrap → eklentiler → `globals.css`), yoksa görünüm bozulur.
3. `src/app/not-found.tsx` oluşturulsun ve **kendi `<html lang="tr"><body>`'sini** bassın (kök layout artık HTML üretmediği için). Bu, locale dışı 404'ler içindir.
4. `src/app/[locale]/not-found.tsx` oluşturulsun: yerelleştirilmiş 404 metni, ana sayfa/çözümler/iletişim bağlantıları.
5. `src/app/[locale]/[...rest]/page.tsx` oluşturulsun; sadece `notFound()` çağırsın. Böylece `/tr/olmayan/yol` yerelleştirilmiş 404'ü gösterir.

**Dikkat:** `next/font` kullanan `home/fonts.ts` değişkenleri `body` className'ine bağlıysa, bu bağlama da `[locale]/layout.tsx`'e taşınmalı.

### 2.2 Locale doğrulaması (soft 404 kopyaları)

**Sorun:** Bulgu 3.

`src/app/[locale]/layout.tsx`:
```tsx
import { notFound } from "next/navigation";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// LocaleLayout içinde, getDictionary'den önce:
if (!(locales as readonly string[]).includes(locale)) notFound();
```
`src/i18n/getDictionary.ts`: bilinmeyen dilde İngilizceye sessizce düşmek yerine hata fırlatsın (veya çağıran `notFound()` yapsın).

Aynı şekilde `solutions/[type]`, `products/[product]`, `blog/[slug]` sayfalarına `export const dynamicParams = false;` eklensin (zaten `generateStaticParams` var; blog için İP-7'de eklenecek).

### 2.3 robots.txt

**Dosya:** `src/app/robots.ts`

```ts
import type { MetadataRoute } from "next";
import { SITE_URL } from "@/content/entity";

const ALLOWED_BOTS = [
  "Googlebot", "Bingbot", "Applebot", "DuckDuckBot", "YandexBot",
  "OAI-SearchBot", "ChatGPT-User", "GPTBot",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended",
];

const DISALLOW = ["/api/"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: ALLOWED_BOTS, allow: "/", disallow: DISALLOW },
      { userAgent: "*", allow: "/", disallow: DISALLOW },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
```

**Hata yapılmaması gerekenler:**
- **`/_next/` asla engellenmez.** CSS/JS'in botlara açık olması gerekir.
- Bir botun kendine ait grubu varsa `*` grubunu **yok sayar**. Bu yüzden `DISALLOW` her iki grupta da aynı olmalı.
- `noindex` yapılacak sayfalar (chat, de/fr/ru) robots.txt ile **engellenmez**. Engellenirse bot `noindex` etiketini göremez ve URL indekste kalabilir. Bunlar meta robots ile yönetilir (İP-4).
- `/admin/`, `/private/` gibi sitede olmayan yollar listelenmez (gereksiz gürültü); müşteri portalı ileride eklenirse o zaman eklenir.

### 2.4 `www` → apex yönlendirmesi

Kod değil, sunucu işi. Nginx Proxy Manager'da (`docker-compose-server.yml`, port 81 admin):
- "Redirection Hosts" → `www.genixo.ai` → `https://genixo.ai`, **HTTP kodu 301**, "Preserve Path" açık, SSL sertifikası `www` için de alınmış olmalı.
- Alternatif: `next.config.ts` → `redirects()` içinde `has: [{ type: "host", value: "www.genixo.ai" }]` ile 301. Sunucu tarafı tercih edilir (daha erken çalışır).

### 2.5 Boş ve placeholder sayfalar

| Yol | İşlem |
|---|---|
| `src/app/[locale]/service/page.tsx`, `service/[type]/page.tsx` | Silinsin. `next.config.ts` → `redirects()`: `/:locale/service` → `/:locale/solutions` (301), `/:locale/service/:type` → `/:locale/solutions/:type` (301) |
| `/[locale]/case-study` | İP-7'de içerik gelene kadar `noindex` + sitemap'ten çıkar. Çift `<h1>` düzeltilsin (sayfadaki `<h1>` → `<h2>` veya kaldır) |
| `/[locale]/chat` | `noindex, follow`; sitemap'te yok (zaten yok) |
| `/[locale]/government-support` | TR dışı dillerde `noindex` (içerik yok). TR içeriği İP-8/İP-13'te KOSGEB rehberine dönüşecek |
| `/[locale]/products/*` pasif ürünler | Zaten 404; sitemap'ten çıkarılacak (İP-6) |

### 2.6 Küçük hatalar
- `about/page.tsx`: `NEXT_PaiLIC_SITE_URL` → `SITE_URL` (entity'den).
- `middleware.ts`: `request.geo` ölü kodu kaldırılsın. Kök `/` için davranış: `Accept-Language` başlığı `tr` ile başlıyorsa `/tr`, değilse… **Dikkat:** Botlar `Accept-Language` göndermez; o durumda `/tr`'ye yönlendirmeye devam edilsin (birincil pazar). Yönlendirme kodu 307 kalabilir (dil müzakeresi geçici yönlendirmedir).

**Kabul kriterleri (canlıda):**
```bash
curl -s https://genixo.ai/en | grep -o '<html[^>]*>'          # lang="en"
curl -s -o /dev/null -w "%{http_code}\n" https://genixo.ai/llms.txt   # 404 (İP-12 sonrası 200 + text/plain)
curl -s -o /dev/null -w "%{http_code}\n" https://genixo.ai/xx          # 404
curl -s -o /dev/null -w "%{http_code}\n" https://genixo.ai/tr/yok/yol  # 404
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" https://www.genixo.ai/tr/about  # 301 https://genixo.ai/tr/about
curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" https://genixo.ai/tr/service    # 308/301 → /tr/solutions
curl -s https://genixo.ai/robots.txt | grep -c "_next"          # 0
```
Ayrıca görsel regresyon: ana sayfa, menü (masaüstü + mobil offcanvas), footer, iletişim formu elle kontrol edilsin.

---

## İP-3 — Bot erişimi ve render doğrulaması

1. **CDN/WAF kontrolü:** `dig genixo.ai` ile IP'nin doğrudan sunucuya mı yoksa Cloudflare gibi bir CDN'e mi gittiğini kontrol edin. CDN varsa "AI botlarını engelle / Bot Fight Mode" ayarlarını kapatın.
2. **Her bot kimliğiyle test** (her biri 200 ve dolu HTML dönmeli):
   ```bash
   for ua in "GPTBot/1.1" "OAI-SearchBot/1.0" "ChatGPT-User/1.0" "ClaudeBot/1.0" "Claude-User/1.0" "PerplexityBot/1.0" "Googlebot/2.1" "bingbot/2.0"; do
     curl -s -A "Mozilla/5.0 (compatible; $ua)" -o /tmp/p.html -w "$ua %{http_code} %{size_download}\n" https://genixo.ai/tr/solutions/ai-integration
     grep -c "Yapay" /tmp/p.html
   done
   ```
3. **JS kapalı test:** Chrome DevTools → "Disable JavaScript" → ana sayfa, bir çözüm sayfası, blog yazısı. Ana metin, SSS (İP-9 sonrası) ve vaka içeriği görünmeli. AOS animasyonlu öğeler JS olmadan `opacity:0` kalabilir; **metin HTML'de olduğu için botlar açısından sorun değil**, ama kullanıcı deneyimi için `<noscript>` stili ile görünür yapılmalı (`[data-aos]{opacity:1!important;transform:none!important}`).
4. **Sunucu logları:** Nginx Proxy Manager erişim logları `./nginx-data/logs/proxy-host-*_access.log`. Bot raporu için betik (`scripts/bot-log-report.sh`):
   ```bash
   #!/usr/bin/env bash
   LOG=${1:-./nginx-data/logs/proxy-host-1_access.log}
   for bot in OAI-SearchBot ChatGPT-User GPTBot ClaudeBot Claude-User Claude-SearchBot PerplexityBot Perplexity-User Googlebot bingbot Applebot; do
     total=$(grep -c "$bot" "$LOG")
     ok=$(grep "$bot" "$LOG" | grep -c '" 200 ')
     nf=$(grep "$bot" "$LOG" | grep -c '" 404 ')
     echo "$bot toplam=$total 200=$ok 404=$nf"
   done
   ```
   Hangi proxy-host numarasının genixo.ai olduğunu NPM arayüzünden kontrol edin. Log formatı NPM sürümüne göre değişebilir; `" 200 "` deseni ilk satırlara bakılarak doğrulanmalı.

**Kabul kriterleri:** Tüm bot kimlikleri 200 alıyor; log raporunda bot kaynaklı 404 oranı İP-6 sonrası %5'in altına iniyor.

---

## İP-4 — Metadata sistemi

### 4.1 İndekslenebilir diller ve hreflang

**Yeni dosya:** `src/i18n/seo-locales.ts`
```ts
import type { Locale } from "./config";
export const indexableLocales = ["tr", "en"] as const satisfies readonly Locale[]; // K-2
export const hreflangCode: Record<Locale, string> = { tr: "tr", en: "en", de: "de", fr: "fr", ru: "ru" };
export const ogLocale: Record<Locale, string> = { tr: "tr_TR", en: "en_US", de: "de_DE", fr: "fr_FR", ru: "ru_RU" };
export const isIndexable = (l: Locale) => (indexableLocales as readonly string[]).includes(l);
```
> hreflang için `tr` (yalnızca dil) seçildi: Türkçe içerik Türkiye dışındaki Türkçe konuşan işletmelere de (ör. Almanya) hitap ediyor. `tr-TR` de geçerlidir; önemli olan tutarlılık.

**`src/utils/seo.ts` yeniden yazımı — ana kurallar:**
- İmza: `buildMetadata({ locale, path, title, description, type, image, noindex, translations, publishedTime, modifiedTime, authors })`.
  - `path` dil önekisiz yol: `""`, `"/about"`, `"/solutions/ai-integration"`.
  - `translations`: bu içeriğin hangi dillerde **gerçekten** var olduğu ve o dildeki yolu. Varsayılan: `indexableLocales` için aynı `path`. Blog gibi dile göre slug değişen içerikte zorunlu: `{ tr: "/blog/yapay-zeka-sadece-…", en: "/blog/ai-not-just-technology" }`.
- `alternates.canonical` = `${SITE_URL}/${locale}${path}` (her zaman kendisi).
- `alternates.languages`: yalnızca `translations` içindeki **indekslenebilir** diller + **kendisi dahil** + `x-default` → `en` versiyonu (varsa, yoksa `tr`).
- Sayfa `noindex` ise (de/fr/ru veya `noindex: true`): `robots: { index: false, follow: true }` ve **hreflang basılmaz**.
- `keywords` alanı tamamen kaldırılır (ve `seo.json` içindeki `keywords` anahtarları silinir).
- `twitter.site`/`creator` K-4 kararına göre kaldırılır veya doğru hesapla değiştirilir.
- `openGraph.locale` = `ogLocale[locale]`; `openGraph.alternateLocale` = diğer indekslenebilir dillerin ogLocale'leri.
- Başlık: `[locale]/layout.tsx` içinde `export async function generateMetadata()` → `title: { template: "%s | Genixo", default: <ana sayfa başlığı> }`. Sayfalar sadece kendi kısmını verir; `| Genixo Bilişim ve Teknoloji` ekleme mantığı kaldırılır.
- `metadataBase: new URL(SITE_URL)` layout'ta bir kez.
- `verification` (İP-6): `{ google: "...", yandex: "...", other: { "msvalidate.01": "..." } }` layout'ta.

### 4.2 Sayfa başlıkları ve açıklamaları

Metinler `src/locales/{tr,en}/seo.json` içinde `seo.pages.{sayfaAnahtarı}.{title,description}` olarak tutulsun. Kurallar: title ≤ 60 karakter (sonek " | Genixo" dahil), description 120–155 karakter, her sayfada **benzersiz**, ilk cümlede sayfanın cevabı.

**Önerilen TR metinler (sonek otomatik eklenir):**

| Sayfa | title | description |
|---|---|---|
| Ana sayfa (default, sonek yok) | Genixo – KOBİ'lere Dijital Dönüşüm ve Yapay Zekâ Entegrasyonu | Bölüm 4 kısa TR tanımı |
| /about | Hakkımızda – Bilkent Cyberpark'ta Yazılım ve Ar-Ge | Genixo kimdir, ne yapar, kimlerle çalışır: Ankara Bilkent Cyberpark merkezli yazılım ve Ar-Ge şirketinin ekibi, üyelikleri ve projeleri. |
| /solutions | Çözümler: Dijital Dönüşüm, Süreç Yönetimi, Yapay Zekâ | KOBİ'ler için dijital dönüşüm danışmanlığından yapay zekâ entegrasyonuna yedi çözüm alanı; hangi sorunu çözdüğü ve nasıl ilerlediği. |
| /solutions/digital-transformation | KOBİ'ler için Dijital Dönüşüm Danışmanlığı | (servis `summary`'si gözden geçirilerek, 155 karakter) |
| /solutions/business-process-digitalization | İş Süreçleri Dijitalleştirme: Excel'den Tek Sisteme | … |
| /solutions/ai-integration | Yapay Zekâ Entegrasyonu: RAG Chatbot ve On-Prem LLM | … |
| /solutions/smart-reporting-analytics | Akıllı Raporlama ve Veri Analizi | … |
| /solutions/system-improvement-modernization | Eski Sistem Modernizasyonu ve İyileştirme | … |
| /solutions/cost-optimization | BT Maliyet Optimizasyonu | … |
| /solutions/product-project-development | Özel Yazılım ve Ürün Geliştirme | … |
| /contact | İletişim – Genixo, Bilkent Cyberpark Ankara | Adres, telefon ve e-posta; ücretsiz ön görüşme talebi formu. |
| /blog | Blog: KOBİ'de Dijital Dönüşüm ve Yapay Zekâ | … |
| /government-support | KOSGEB Dijital Dönüşüm Desteği Rehberi | (İP-13'te içerik yazılınca) |
| /ngsd | NGSD: Yeni Nesil Yazılım Departmanı Hizmeti | … |

İngilizce metinler ayrı yazılır (çeviri değil, İngilizce arama niyetine göre: "AI Integration Services in Türkiye: RAG, On-Prem LLM" gibi).

Çözüm sayfası için öncelik: `seo.pages.solutions.{slug}` varsa o, yoksa `service.name` + `service.summary` kırpılmış hâli.

### 4.3 OG görselleri

- `public/images/og-image.jpg` (1200×630, logo + tanım cümlesi) oluşturulsun.
- Çözüm/ürün sayfaları var olmayan `/images/solutions/{slug}.jpg` yerine ya mevcut `service.image1` görselini ya da varsayılan OG görselini kullansın. Kural: **var olmayan dosyaya işaret eden hiçbir meta kalmasın.**
- Alternatif (tercih edilen, bakım gerektirmez): `src/app/[locale]/opengraph-image.tsx` ile `ImageResponse` kullanarak başlıktan otomatik görsel. Font dosyası Türkçe karakterleri (ğ, ş, İ, ı) desteklemeli; test edin.

**Kabul kriterleri:** `scripts/seo-check.mjs` (İP-6) tüm URL'lerde: benzersiz title, 120–155 karakter description, `keywords` yok, canonical = kendi URL'si, hreflang seti `tr`, `en`, `x-default` (ve self) içeriyor, de/fr/ru'da `noindex` var ve hreflang yok, `og:image` 200 dönüyor.

---

## İP-5 — Schema (JSON-LD) yeniden yazımı

### 5.1 Basım yöntemi (Bulgu 1'in çözümü)

**Yeni bileşen:** `src/app/component/json-ld.tsx` (server component, `"use client"` YOK):
```tsx
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
```
- Projedeki **tüm** `<Script id="…-structured-data" type="application/ld+json">` kullanımları bununla değiştirilsin: `page.tsx` (ana sayfa), `about`, `blog/[slug]`, `solutions/[type]`, `products/[product]`. Değişiklik sonrası `rg "next/script" src/app/\[locale\]` boş dönmeli.
- `.replace(/</g, "\\u003c")` içerikte `</script>` geçerse XSS'i önler; çıkarılmasın.

### 5.2 Kimlik (@id) şeması

Tüm varlıklar sabit `@id`'lerle birbirine bağlanır; böylece her sayfada tüm şirketi tekrar yazmak gerekmez:

| Varlık | @id |
|---|---|
| Organization / ProfessionalService | `https://genixo.ai/#organization` |
| WebSite | `https://genixo.ai/#website` |
| Kurucu (Person) | `https://genixo.ai/#person-ceyhun-tekkaya` |
| Diğer yazarlar | `https://genixo.ai/#person-{slug}` |
| Sayfa (WebPage) | `{sayfa URL}#webpage` |
| Hizmet | `{çözüm URL}#service` |

### 5.3 Site geneli graph (her sayfada, `[locale]/layout.tsx` içinde)

`src/utils/schema.ts` (yeni) → `siteGraph(locale)`:
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://genixo.ai/#organization",
      "name": "Genixo",
      "legalName": "Genixo Bilişim ve Teknoloji A.Ş.",
      "alternateName": ["Genixo Bilişim ve Teknoloji", "Genixo Bilişim"],
      "description": "<entity.definition[locale]>",
      "url": "https://genixo.ai",
      "logo": { "@type": "ImageObject", "url": "https://genixo.ai/images/logo.png" },
      "image": "https://genixo.ai/images/og-image.jpg",
      "telephone": "+90 312 265 04 56",
      "email": "hello@genixo.ai",
      "foundingDate": "<entity.foundingDate>",
      "address": { "@type": "PostalAddress", "streetAddress": "…", "addressLocality": "Çankaya", "addressRegion": "Ankara", "postalCode": "06800", "addressCountry": "TR" },
      "geo": { "@type": "GeoCoordinates", "latitude": 39.8819, "longitude": 32.7551 },
      "areaServed": [{ "@type": "Country", "name": "Türkiye" }],
      "founder": { "@id": "https://genixo.ai/#person-ceyhun-tekkaya" },
      "memberOf": [{ "@type": "Organization", "name": "Türkiye Bilişim Derneği", "url": "https://www.tbd.org.tr/" }],
      "knowsAbout": ["Dijital dönüşüm", "İş süreçleri dijitalleştirme", "Yapay zekâ entegrasyonu", "RAG", "On-premise LLM", "Konuşma tanıma (STT)", "Seslendirme (TTS)"],
      "sameAs": ["<entity.sameAs>"],
      "contactPoint": { "@type": "ContactPoint", "telephone": "+90 312 265 04 56", "email": "hello@genixo.ai", "contactType": "sales", "areaServed": "TR", "availableLanguage": ["tr", "en"] }
    },
    {
      "@type": "WebSite",
      "@id": "https://genixo.ai/#website",
      "url": "https://genixo.ai",
      "name": "Genixo",
      "publisher": { "@id": "https://genixo.ai/#organization" },
      "inLanguage": ["tr", "en"]
    },
    {
      "@type": "Person",
      "@id": "https://genixo.ai/#person-ceyhun-tekkaya",
      "name": "Ceyhun Tekkaya",
      "jobTitle": "<K-3>",
      "worksFor": { "@id": "https://genixo.ai/#organization" },
      "url": "https://genixo.ai/tr/authors/ceyhun-tekkaya",
      "sameAs": ["<LinkedIn>"]
    }
  ]
}
```

**Kurallar:**
- `ProfessionalService` zaten `LocalBusiness → Organization` alt türüdür; ayrıca bir `Organization` düğümü **açılmaz** (iki ayrı varlık gibi görünür).
- `SearchAction` **kaldırılır** (sitede arama yok).
- `description`, `knowsAbout` ve `jobTitle` dile göre değişir; `@id`'ler değişmez.
- `memberOf` içine yalnızca belgelenmiş üyelikler girer. BNI/ALTE gibi üyelikler sitede **görünür biçimde** de yer almalı (footer'da zaten TBD, ALTE, Cyberpark var).
- `foundingDate`, `postalCode` gibi `[BİLGİ]` alanları doğrulanmadıysa düğümden **çıkarılır** (boş string bırakılmaz).
- `aggregateRating`/`review` **eklenmez** (kendi sitesindeki yorumlar için Google bunu self-serving sayar).

### 5.4 Sayfa bazlı schema

| Sayfa | Schema | Notlar |
|---|---|---|
| Ana sayfa | `WebPage` (`about: #organization`, `isPartOf: #website`) | Organization zaten layout'ta |
| Hakkımızda | `AboutPage` (`mainEntity: #organization`) | |
| İletişim | `ContactPage` | |
| Çözüm detay | `Service` + `BreadcrumbList` (+ İP-9 sonrası `FAQPage`) | `provider: {"@id": "#organization"}`, `serviceType`, `areaServed: Türkiye`, `url`, `inLanguage`, `description` = sayfanın görünen ilk paragrafı |
| Çözümler listesi | `CollectionPage` + `ItemList` (çözüm URL'leri) | |
| Ürün detay | `SoftwareApplication` (`applicationCategory: "EducationalApplication"` vb., `publisher: #organization`) + `BreadcrumbList` | `Product` kullanılmaz: fiyat/yorum olmadan Search Console "Ürün snippet'i" hatası verir |
| Blog yazısı | `BlogPosting` + `BreadcrumbList` (+ yazıda SSS varsa `FAQPage`) | `author: {"@id": "#person-…"}`, `publisher: #organization`, `datePublished`, `dateModified` (gerçek), `inLanguage`, `mainEntityOfPage` |
| Vaka çalışması | `Article` (`about: Service @id`) + `BreadcrumbList` | Müşteri adı yalnızca izinle |
| Yazar sayfası | `ProfilePage` (`mainEntity: #person-…`) | |

**Altın kural:** Schema'daki her değer sayfada **görünür** olmalı. Görünmeyen SSS, görünmeyen adres, görünmeyen unvan schema'ya yazılmaz.

**Kabul kriterleri:**
- `curl -s https://genixo.ai/tr | grep -c 'application/ld+json'` ≥ 2.
- [Schema.org Validator](https://validator.schema.org/) ve [Google Rich Results Test](https://search.google.com/test/rich-results): ana sayfa, bir çözüm, bir blog, bir ürün sayfası **hatasız** (uyarılar kabul edilebilir).
- `seo-check.mjs` her sayfada JSON-LD'nin parse edilebildiğini ve `#organization` @id'sinin bulunduğunu doğruluyor.

---

## İP-6 — Sitemap, 404, yönlendirmeler, IndexNow, konsollar

### 6.1 Sitemap

`src/app/sitemap.ts` yeniden yazılır:
- **Yalnızca indekslenebilir dillerde** (`indexableLocales`) ve **yalnızca 200 dönen, `noindex` olmayan** URL'ler.
- Çözümler: `dict.services` içinden `active !== false` olanlar (sabit `solutionSlugs` listesi yerine). Ürünler: `products` içinden `active === true` olanlar.
- Blog, vaka, rehber ve yazar sayfaları İP-7'nin içerik okuyucusundan (`getAllPosts(locale)` vb.).
- `alternates.languages`: yalnızca içeriğin gerçekten var olduğu diller + `x-default` (İP-4 ile aynı yardımcı fonksiyon kullanılmalı; iki ayrı mantık yazılmamalı).
- `lastModified`: içerik için frontmatter'daki `dateModified`; statik sayfalar için `src/content/page-dates.ts` içindeki elle güncellenen tarih. **`new Date()` kullanılmaz.**
- `changeFrequency` ve `priority` kaldırılabilir (Google kullanmıyor); kalırsa zarar vermez.
- Sitemap'e girmeyecekler: `/chat`, `/case-study` (içerik gelene kadar), de/fr/ru, pasif ürünler, `government-support` (TR dışı).

### 6.2 Yönlendirmeler (`next.config.ts` → `redirects()`)
- `/:locale/service` → `/:locale/solutions` (permanent)
- `/:locale/service/:type` → `/:locale/solutions/:type` (permanent)
- Pasif ürün URL'leri (`/:locale/products/genixo-work-ai` vb.): ilgili sayfa yoksa **404 kalsın** (yönlendirme yapılmaz; alakasız yere 301 soft 404 sayılır). Geçmişte dış link aldıysa `/:locale/products`'a 301 düşünülebilir.
- K-2 kararı "301" ise: `/(de|fr|ru)/:path*` → `/en/:path*`.
- **Zincir kontrolü:** Hiçbir yönlendirme başka bir yönlendirmeye gitmemeli (ör. `www` + `/` + dil: `https://www.genixo.ai/` → `https://genixo.ai/` → `/tr` iki adım; kabul edilebilir, ama `www` kuralı doğrudan `https://genixo.ai/$path`'e gitmeli).

### 6.3 Google Search Console, Bing Webmaster Tools, Yandex
1. **GSC:** "Alan adı" mülkü (DNS TXT kaydı ile) — `www` ve `http` varyantlarını da kapsar. Sitemap gönder: `https://genixo.ai/sitemap.xml`.
2. **Bing Webmaster Tools:** "GSC'den içe aktar" ile doğrula veya `msvalidate.01` meta etiketi (`metadata.verification.other`). Sitemap gönder. **AI Performance** raporunu aç.
3. **Yandex Webmaster:** `metadata.verification.yandex`. Düşük öncelik.
4. GSC'de "URL Denetimi" ile ana sayfa, `/tr/solutions/ai-integration`, `/en` için "Canlı URL'yi test et" → render edilen ekran görüntüsünde CSS yüklü olmalı (İP-2.3 doğrulaması).
5. GSC'de "Search Generative AI performance" raporunun açık olduğunu kontrol et.

### 6.4 IndexNow
1. 32 karakterlik bir anahtar üret; `public/{anahtar}.txt` dosyasına sadece anahtarı yaz.
2. `scripts/indexnow.mjs`: sitemap'i çekip URL'leri (veya argümanla verilen değişen URL'leri) `https://api.indexnow.org/indexnow`'a POST eder:
   ```js
   const KEY = process.env.INDEXNOW_KEY;
   const host = "genixo.ai";
   const urls = process.argv.slice(2);
   const res = await fetch("https://api.indexnow.org/indexnow", {
     method: "POST",
     headers: { "Content-Type": "application/json; charset=utf-8" },
     body: JSON.stringify({ host, key: KEY, keyLocation: `https://${host}/${KEY}.txt`, urlList: urls }),
   });
   console.log(res.status); // 200 veya 202 beklenir
   ```
3. Deploy akışına (`document.txt`'teki docker push sonrası, sunucuda container yenilendikten sonra) "değişen URL'ler için `node scripts/indexnow.mjs <url…>`" adımı eklensin. **Her deploy'da tüm sitemap'i göndermeyin**; yalnızca değişen/yeni URL'ler.

### 6.5 Doğrulama betiği `scripts/seo-check.mjs`

İP-0'da yazılır, her PR'dan sonra çalıştırılır (`node scripts/seo-check.mjs https://genixo.ai` veya `http://localhost:3000`):
```js
const base = process.argv[2] || "https://genixo.ai";
const UA = "Mozilla/5.0 (compatible; GPTBot/1.1)";
const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1].replace("https://genixo.ai", base));
const titles = new Map();
let fail = 0;
for (const url of urls) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "manual" });
  const html = await res.text();
  const errs = [];
  if (res.status !== 200) errs.push(`status ${res.status}`);
  const lang = html.match(/<html[^>]*lang="([^"]+)"/)?.[1];
  const locale = new URL(url).pathname.split("/")[1];
  if (lang !== locale) errs.push(`lang=${lang}`);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "";
  if (!title || title.length > 65) errs.push(`title len ${title.length}`);
  if (titles.has(title)) errs.push(`duplicate title with ${titles.get(title)}`);
  titles.set(title, url);
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  if (desc.length < 70 || desc.length > 160) errs.push(`desc len ${desc.length}`);
  if (/name="keywords"/.test(html)) errs.push("meta keywords");
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1]?.replace("https://genixo.ai", base);
  if (canonical !== url) errs.push(`canonical ${canonical}`);
  if (!/hrefLang="x-default"/i.test(html)) errs.push("no x-default");
  if (!/application\/ld\+json/.test(html.replace(/self\.__next_s[^<]*/g, ""))) errs.push("no JSON-LD <script>");
  for (const m of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(m[1]); } catch { errs.push("invalid JSON-LD"); }
  }
  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) errs.push(`h1 count ${h1}`);
  if (errs.length) { fail++; console.log("✗", url, errs.join("; ")); } else console.log("✓", url);
}
console.log(`\n${urls.length} URL, ${fail} hatalı`);
process.exit(fail ? 1 : 0);
```
> Not: Next.js hreflang'i `hrefLang` (büyük L) olarak basar; regex buna göre yazıldı. `og:image` kontrolü ve bot kimliğiyle 200 kontrolü de eklenebilir.

**Kabul kriterleri:** `seo-check.mjs` 0 hata; GSC'de sitemap "Başarılı", gönderilen URL sayısı = sitemap URL sayısı; Bing'de sitemap işlenmiş; IndexNow 200/202.

---

## İP-7 — İçerik altyapısı

**Neden:** Mevcut blog, `blog.json` içinde HTML string olarak duruyor; Türkçe slug eşlemesi üç ayrı dosyada elle yazılmış (`blog/page.tsx`, `blog/[slug]/page.tsx`, `home-landing.tsx`). 3 sütun sayfası + 8–10 destek yazısı + 3–5 vaka + yazar sayfaları bu yapıyla hatasız yönetilemez.

### 7.1 Klasör yapısı
```
content/
  blog/
    tr/yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu.md
    en/ai-not-just-technology.md
    tr/sisteminiz-sizi-yavaslatiyor-mu.md
    en/is-your-system-slowing-you-down.md     # İngilizce slug yazılırken yeniden düşünülmeli
  guides/        # sütun (pillar) sayfaları
    tr/kobi-dijital-donusum-yol-haritasi.md
  case-studies/
    tr/rag-chatbot-….md
  authors/
    ceyhun-tekkaya.tr.md
    ceyhun-tekkaya.en.md
```

### 7.2 Frontmatter şeması (zorunlu alanlar)
```yaml
---
title: "KOBİ'de Dijital Dönüşüm Nereden Başlar? Adım Adım Yol Haritası"
description: "120–155 karakter, ilk cümle cevabı veriyor."
translationKey: "sme-digital-transformation-roadmap"   # diller arası eşleme anahtarı
type: "guide"            # post | guide | case-study
author: "ceyhun-tekkaya"
reviewedBy: ""           # opsiyonel, teknik doğrulayan kişi
datePublished: "2026-11-03"
dateModified: "2026-11-03"   # SADECE gerçek içerik değişikliğinde güncellenir
summary: "1–2 cümlelik doğrudan cevap (sayfanın en üstünde kutu olarak gösterilir)."
relatedServices: ["digital-transformation", "business-process-digitalization"]
faq:
  - q: "KOBİ'de dijital dönüşüm projesi ne kadar sürer?"
    a: "…"
sources:
  - title: "TÜİK, Girişimlerde Bilişim Teknolojileri Kullanım Araştırması, 2026"
    url: "https://data.tuik.gov.tr/…"
    accessed: "2026-10-20"
image: "/images/blog/….jpg"
draft: false
---
```
Vaka çalışması ek alanları: `client` (izin yoksa boş), `industry`, `companySize`, `duration`, `stack: [Spring Boot, Next.js, PostgreSQL, Docker, Ollama]`, `results: [{ metric, before, after, note }]`, `permission: "yazılı izin var | anonim"`.

### 7.3 Okuyucu ve doğrulama
- `src/lib/content.ts`: `fs` ile `content/` okur, frontmatter'ı ayrıştırır. Bağımlılık: `gray-matter` (yeni). Gövde: zaten kurulu `react-markdown` + `remark-gfm` (tablolar için) ile **server component'te** render. Başlıklara anchor için `rehype-slug` (yeni, opsiyonel).
- Build sırasında doğrulama (okuyucu içinde): zorunlu alan eksikse, `description` uzunluğu aralık dışıysa, `author` dosyası yoksa, aynı `translationKey` aynı dilde iki kez varsa, `sources` boşsa (type `post`/`guide` için) **build hata versin**. Hatalı içerik canlıya çıkamaz.
- `draft: true` içerikler production'da listelenmez, sitemap'e girmez, URL'si 404.
- `getAllPosts(locale)`, `getPost(locale, slug)`, `getTranslations(translationKey)` → İP-4 `translations` parametresi buradan beslenir.

### 7.4 Rotalar
| Rota | Kaynak | Not |
|---|---|---|
| `/[locale]/blog` | `getAllPosts(locale, "post")` | Tarihe göre sıralı |
| `/[locale]/blog/[slug]` | `content/blog/{locale}/{slug}.md` | `generateStaticParams` + `dynamicParams = false` |
| `/[locale]/guides/[slug]` | `content/guides/…` | Sütun sayfaları |
| `/[locale]/case-study` | liste | İçerik gelince `noindex` kaldırılır, sitemap'e girer, menüde "Başarılar" açılır |
| `/[locale]/case-study/[slug]` | `content/case-studies/…` | |
| `/[locale]/authors/[slug]` | `content/authors/…` | |

**Mevcut iki blog yazısının taşınması:** HTML içerik Markdown'a çevrilir; URL'ler **aynı kalır** (`/tr/blog/yapay-zeka-sadece-…`, `/en/blog/ai-not-just-technology`, `/tr/blog/sisteminiz-sizi-yavaslatiyor-mu`). İngilizce "sisteminiz-sizi-yavaslatiyor-mu" yazısı şu an `/en/blog/sisteminiz-sizi-yavaslatiyor-mu` adresinde; İngilizce slug'a geçilirse eski adres 301 ile yenisine yönlendirilir. Taşıma bitince `blog.json` içindeki `blogs` anahtarı ve üç dosyadaki elle yazılmış slug eşlemeleri silinir; `home-landing.tsx` blog bölümü `getAllPosts`'tan beslenir. Yazar unvanları K-3'e göre düzeltilir. **Kaynaksız "%93" ifadesi** taşınırken ya kaynaklanır ya kaldırılır.

### 7.5 Sayfa şablonu bileşenleri (tümü server component)
Her blog/rehber/vaka sayfası şu sırayla render edilir — sıra GEO kurallarından geliyor (alıntılar sayfanın üstünden geliyor):
1. `<h1>` başlık (sayfada **tek** h1).
2. Yazar satırı: isim (yazar sayfasına link), unvan, yayın tarihi, "Güncellendi: …" (yalnızca `dateModified ≠ datePublished` ise).
3. **Cevap kutusu** (`summary`) — ilk 1–2 cümlede doğrudan cevap.
4. Gövde (Markdown; GFM tablolar karşılaştırma için).
5. SSS bölümü — `<details><summary>` ile; içerik HTML'de olduğu için botlar görür. Akordiyon için JS gerekmez.
6. "İlgili çözümler" (relatedServices → çözüm sayfalarına iç link).
7. Yazar kutusu (fotoğraf, kısa biyografi, LinkedIn).
8. **Kaynaklar** listesi (numaralı, dış linkler `rel="noopener"`; `nofollow` gerekmez).
9. CTA.

**Kabul kriterleri:** Eski blog URL'leri 200 ve aynı içerik; `seo-check.mjs` blog URL'lerinde hreflang'in doğru karşı dildeki slug'a gittiğini gösteriyor (`/tr/blog/yapay-zeka-…` ↔ `/en/blog/ai-not-just-technology`); eksik frontmatter'lı bir test dosyasıyla `npm run build` gerçekten hata veriyor.

---

## İP-8 — Konumlanma ve mevcut içerik düzeltmeleri

### 8.1 Hakkımızda (`src/locales/{tr,en}/pages/about.json` + `about/page.tsx`)
- `about.description` ilk cümlesi = Bölüm 4 tanım cümlesi. Ardından: neyi, kimin için, nasıl yaptığımız; teknoloji yığını (Spring Boot, Next.js, PostgreSQL, Docker, Ollama); ekosistem (Bilkent Cyberpark Ar-Ge firması, TBD, ALTE, BNI); Ar-Ge projeleri (TÜBİTAK — yalnızca yayınlanabilir olanlar).
- **EdTech vurgusu kaldırılır;** StudyScore AI, Eğitim İste, ILC "Ürünlerimiz" başlıklı ayrı bir bölümde, ürün sayfalarına link verilerek anılır.
- Yeni bölüm: **"Ekip"** — kurucu ve teknik liderler, yazar sayfalarına linkle (İP-7).
- Yeni bölüm: **"Kanıtlar"** — üyelik logoları (mevcut `public/images/logos/`), TÜBİTAK projeleri, The Manifest profili linki, (izinli) müşteri logoları.
- `about.short` şablon metni **silinir**; hiçbir yerde description olarak kullanılmaz.
- `authorTitle` K-3'e göre.

### 8.2 Footer (`footer.tsx` + `common.json`)
- Logo altına **kısa tanım** (entity.shortDefinition).
- NAP metin olarak: tam unvan, tam adres, telefon (`tel:` linki), e-posta. Değerler `entity.ts`'den.
- Menüye eklenmeyen önemli sayfalara linkler: Blog, Rehberler, Başarılar (içerik gelince), KVKK, Çerez Politikası.
- `© Copyrights 2026 genixo.ai All rights reserved.` → TR: "© 2026 Genixo Bilişim ve Teknoloji A.Ş." (yıl dinamik).

### 8.3 Menü (`common.json` → `menu.active`)
- `Blog: true` (İP-7'de en az 2 yazı + 1 rehber yayında olduğunda).
- `Products: true` (K-8).
- `SuccessStories: true` (en az 1 vaka yayında olduğunda).
- `GovernmentSupport` menü etiketi şu an "Danışmanlık"; sayfa KOSGEB rehberine dönüşünce etiket "KOSGEB Desteği" gibi içeriği anlatan bir ada çevrilsin.

### 8.4 Kaynaksız rakamlar ve abartılı iddialar
| Yer | İfade | İşlem |
|---|---|---|
| `services.json` (tr/en/de/fr/ru) cost-optimization | "bulut çözümleri bu maliyetleri %40-60 azaltabilir" | Kaynak (ör. bir analist raporu) bulunursa sayfada kaynak linkiyle; yoksa "önemli ölçüde azaltabilir" + kendi ölçümünüz varsa "müşterilerimizde gözlemlediğimiz" ifadesiyle |
| `seo.json` governmentSupport | "20 Milyon TL'ye Kadar Kredi Faiz Desteği", "Dijital Dönüşüm Destek Programı" | Hangi kurumun hangi programı olduğu (Sanayi ve Teknoloji Bakanlığı mı, KOSGEB mi?) resmî kaynakla doğrulanmalı, resmî sayfaya link verilmeli, "Son kontrol: tarih" yazılmalı. Doğrulanamazsa kaldırılmalı |
| `business-context.ts` | "Bu yapı KVKK'ya tam uyumludur" | "Veriler kurum içinde kaldığı için KVKK kapsamındaki yurt dışı aktarım riskini ortadan kaldırır; uyum, kurumun veri işleme süreçleriyle birlikte değerlendirilir" gibi ölçülü bir ifade |
| `business-context.ts` | "Ortalama 6–12 ay içinde kendini amorti eder" | Kendi proje verisine dayanmıyorsa kaldırılmalı veya "birlikte hesaplıyoruz" ifadesiyle değiştirilmeli |
| Blog (ai-not-just-technology) | "Amerika'daki şirketlerin %93'ü" | Kaynak ekle veya kaldır (İP-7 taşıması sırasında) |
| Ana sayfa `landing.board` | "10 dk", "%18,4", "312 fatura" | Zaten "Örnek görünüm" etiketi var; etiketin görünür kaldığından emin olun |

> Chatbot bilgi tabanı ile sitenin çelişmemesi gerekir: model kullanıcıya sitede yazmayan bir iddiayı söylerse ve bu bir AI asistanında alıntılanırsa, tanım doğruluğu KPI'ını bozar.

### 8.5 Ana sayfa
- H1 şu an "Dağınık işleri tek sisteme topluyoruz." (yeni tasarım) — iyi bir pazarlama başlığı, ama entity bilgisi taşımıyor. Hero'nun `eyebrow` satırı ("Bilkent Cyberpark · Yazılım ve yapay zeka") korunmalı ve hero altına ya da "Biz kimiz" bölümüne **tanım cümlesi görünür metin olarak** eklenmeli.
- Ana sayfada "Kanıt şeridi": Cyberpark, TBD, ALTE logoları + (varsa) vaka çalışması özet kartları.

**Kabul kriterleri:** `curl -s https://genixo.ai/tr/about | grep -c "Ar-Ge şirketidir"` ≥ 1; `rg "eğitim platformları geliştiren" src/locales` boş; `rg "40-60|%93|tam uyumlu" src content` boş veya kaynaklı.

---

## İP-9 — Çözüm sayfalarına SSS ve chatbot bilgisinin statik içeriğe taşınması

**Amaç:** Sesli avatarın/chatbot'un bildiği bilgilerin botlarca okunabilir HTML'de de bulunması (eski dokümandaki "benim eklediğim nokta").

1. `services.json` (tr, en) içindeki her çözüme `faq: [{ q, a }]` (4–6 soru) ve `process: [...]` (opsiyonel) alanları eklensin; `src/i18n/types.ts` güncellensin.
2. Soru kaynakları: `business-context.ts` içindeki "Endişe → Gerçek Yanıt" tablosu, sektörel örnekler, KVKK/veri egemenliği bölümü; satış görüşmelerinde gerçekten sorulan sorular.
3. Örnek (ai-integration, TR):
   - "Yapay zekâ entegrasyonu verilerimizi dışarı çıkarır mı?" → On-prem kurulumda modelin kurum sunucusunda çalıştığı, verinin genel servislere gönderilmediği; bulut seçeneğinde nelerin değiştiği.
   - "RAG chatbot nedir, normal chatbot'tan farkı ne?"
   - "Kurulum ne kadar sürer?" (gerçek proje sürelerinize göre aralık)
   - "Hangi sistemlerle entegre olur?" (ERP, CRM, e-posta, dokümanlar)
   - "Türkçe konuşma tanıma ve seslendirme destekleniyor mu?"
4. `solution-detail.tsx`: SSS bölümü `<details><summary>` ile render edilsin (JS'siz açılır, içerik HTML'de). Bölüm başlığı `<h2>`.
5. Aynı sayfada `FAQPage` JSON-LD (İP-5) — **sadece görünen sorular**, metin birebir aynı.
6. Her çözüm sayfasının **ilk paragrafı** "Bu hizmet nedir, kime uygundur, ne sonuç verir" sorusuna 1–2 cümlede cevap versin (şu an problem listesiyle başlıyor olabilir; `solution-detail.tsx` sırası kontrol edilsin).
7. Çözüm sayfalarından ilgili rehber ve vaka çalışmalarına iç link ("Bu hizmetle ilgili vaka: …").
8. `business-context.ts` güncellenen site içeriğiyle uyumlu hâle getirilsin (tek doğruluk kaynağı site metni olmalı; uzun vadede chatbot bağlamı `services.json` FAQ'larından üretilebilir).

**Kabul kriterleri:** JS kapalıyken her çözüm sayfasında SSS cevapları görünüyor; Rich Results Test `FAQPage`'i geçerli buluyor (zengin sonuç gösterilmesi beklenmiyor).

---

## İP-10 — KVKK, çerez onayı, GA4 ve dönüşüm ölçümü

**Sıra kesin:** Önce aydınlatma metni ve onay altyapısı, sonra GA4. Tersi KVKK ihlali riskidir.

1. **Hukuki metinler** (hukukçu onaylı): `/tr/kvkk-aydinlatma-metni`, `/tr/cerez-politikasi`, `/en/privacy-notice`, `/en/cookie-policy`. İçerik `content/legal/` altında Markdown. Footer'dan link. Bu sayfalar `noindex` olmak zorunda değil, ama sitemap'e konmaları da gerekmez.
2. **İletişim formu** (`contact-form.tsx`): Aydınlatma metni linki + açık rıza onay kutusu (pazarlama iletişimi için ayrı kutu). Form verisi şu an `speaking.ai.eltaexams.com` adresine gidiyor; veri sorumlusu/işleyen ilişkisi aydınlatma metninde doğru yazılmalı (veya endpoint Genixo alan adına taşınmalı).
3. **Çerez onay bileşeni** (`src/app/component/consent-banner.tsx`, client): "Kabul et", "Reddet" (eşit görünürlükte), "Tercihler". Seçim `localStorage` + 6–12 ay geçerli çerezde. Reddet varsayılan: hiçbir analitik script yüklenmez.
4. **GA4** (`src/app/component/analytics.tsx`, client): Onay "analitik" için verildiyse `next/script` ile `gtag.js` yüklenir. Ölçüm kimliği `NEXT_PUBLIC_GA_ID` ortam değişkeninden (Dockerfile build aşamasında `ARG`/`ENV` olarak verilmeli, aksi hâlde `NEXT_PUBLIC_` değişkeni build'e girmez).
5. **Olaylar:**
   - `generate_lead`: iletişim formu **başarılı yanıt** aldığında (submit tıklamasında değil).
   - `phone_click`: `tel:` linklerine tıklama (footer, iletişim, CTA).
   - `email_click`: `mailto:` tıklama.
   - `chat_start`: chatbot'ta ilk mesaj.
   GA4 Yönetici → Olaylar → `generate_lead` ve `phone_click` "Önemli etkinlik" (dönüşüm) olarak işaretlenir.
6. **AI kanal grubu (GA4 arayüzü, kod değil):** Yönetici → Veri görüntüleme → Kanal grupları → Yeni grup → "AI Assistants" kanalı, **listede en üste** (Referral'dan önce) taşınır. Koşul: Oturum kaynağı regex eşleşmesi:
   ```
   chatgpt\.com|chat\.openai\.com|openai|perplexity|gemini\.google|bard\.google|copilot\.microsoft|copilot\.cloud\.microsoft|claude\.ai|bing\.com/chat|deepseek|grok|you\.com|meta\.ai
   ```
7. **Sunucu tarafı tamamlayıcı ölçüm:** Onay reddeden kullanıcılar GA4'te görünmez. AI kanalından gelen ziyaret oranı için NPM erişim loglarında `Referer` başlığına göre aylık sayım (İP-3 betiğine `grep -E "chatgpt.com|perplexity|gemini.google|copilot|claude.ai"` eklenerek). `utm_source=chatgpt.com` parametresi de logda görünür.

**Kabul kriterleri:** Onay vermeden önce DevTools Network'te `google-analytics.com`/`googletagmanager.com` isteği **yok**; onay sonrası var; GA4 DebugView'da `generate_lead` olayı form başarılı gönderiminde düşüyor; `chatgpt.com` referrer'lı test ziyareti "AI Assistants" kanalında görünüyor.

---

## İP-11 — Core Web Vitals

1. **Ölçüm:** PageSpeed Insights (mobil) — `/tr`, `/tr/solutions/ai-integration`, `/tr/blog/...`, `/tr/about`. Site küçük olduğu için CrUX saha verisi büyük ihtimalle yok; laboratuvar verisi + GSC "Önemli Web Verileri" raporu takip edilir. Hedef: LCP < 2,5 sn, CLS < 0,1, INP < 200 ms.
2. **Muhtemel kazanımlar (ölçümden sonra önceliklendirin):**
   - Global CSS: `magnific-popup.css`, `swiper-bundle.min.css`, `aos.css`, `flaticon.css`, Font Awesome — kullanılmayanlar kaldırılsın (`rg "swiper|magnific|mfp-" src` ile kullanım kontrolü). `src/app/assets/` altındaki kopya CSS dosyaları (`all.min.css` iki yerde) temizlensin.
   - `next/image` üzerindeki `unoptimized` kaldırılsın (`next.config.ts`'de AVIF/WebP zaten açık); LCP görseline `priority` ve doğru `sizes`.
   - `bootstrap-script.tsx`: Bootstrap JS gerekiyorsa `lazyOnload`.
   - AOS animasyonları LCP öğesine uygulanmasın.
   - Fontlar `next/font` ile (yeni ana sayfada zaten var), `display: swap`.
   - `next.config.ts` → `images.minimumCacheTTL: 60` çok düşük; 2592000 (30 gün) yapılabilir.
3. HTML boyutu ~120 KB; RSC yükü büyük olabilir. Sözlüklerin tamamı (`getDictionary` tüm JSON'ları birleştiriyor) client component'lere prop olarak geçiyorsa (ör. `footer.tsx`, `menu.tsx` `dict` alıyor), yalnızca gereken alt nesneyi geçirmek HTML'i küçültür.

**Kabul kriterleri:** Mobil PageSpeed performans skoru ≥ 80 ve laboratuvar LCP < 2,5 sn (dört sayfada).

---

## İP-12 — llms.txt (opsiyonel, 15 dakika)

`public/llms.txt` (statik dosya; İP-2.2 sonrası route ile çakışmaz):
```
# Genixo

> <Bölüm 4 EN tanım cümlesi>

Genixo Bilişim ve Teknoloji A.Ş. — Bilkent Cyberpark, Ankara, Türkiye. Tel: +90 312 265 04 56. E-posta: hello@genixo.ai

## Hizmetler (TR)
- [Dijital Dönüşüm Danışmanlığı](https://genixo.ai/tr/solutions/digital-transformation): …
- [Yapay Zekâ Entegrasyonu](https://genixo.ai/tr/solutions/ai-integration): …

## Services (EN)
- [AI Integration](https://genixo.ai/en/solutions/ai-integration): …

## Rehberler ve vaka çalışmaları
- …

## Şirket
- [Hakkımızda](https://genixo.ai/tr/about)
- [İletişim](https://genixo.ai/tr/contact)
```
**Kural:** Sitede olmayan hiçbir bilgi buraya yazılmaz (gizli talimat/cloaking riski). Strateji bu dosyaya dayanmaz.

**Kabul:** `curl -sI https://genixo.ai/llms.txt` → 200, `content-type: text/plain`.

---

## İP-13 — İçerik üretimi (31–90. gün)

İP-7 altyapısı hazır olmadan başlanmaz. Her içerik PR'ı `seo-check.mjs` ve build doğrulamasından geçer.

### 13.1 Yazım kuralları (her içerikte zorunlu — PR kontrol listesi)
- [ ] İlk 1–2 cümle (`summary`) soruya doğrudan cevap veriyor.
- [ ] Her sayısal iddianın yanında kaynak linki var; "Kaynaklar" bölümü dolu (TÜİK, KOSGEB, OECD, resmî yönergeler). Kendi verimizse "Genixo proje verisi, n=…" diye belirtiliyor.
- [ ] En az bir isimli uzman görüşü (Ceyhun Tekkaya veya proje lideri), tırnak içinde ve isimle.
- [ ] Karşılaştırma gerektiren yerde tablo (ör. on-prem LLM vs bulut API: maliyet, KVKK, gecikme, bakım).
- [ ] 3–6 soruluk SSS.
- [ ] Yazar kutusu ve yazar sayfası linki.
- [ ] Varlık adları tam: ilk geçişte "Genixo Bilişim ve Teknoloji A.Ş. (Genixo)".
- [ ] En az 2 iç link (ilgili çözüm + ilgili rehber/vaka).
- [ ] URL'de yıl yok. Başlıkta yıl yalnızca içerik gerçekten o yıla özgüyse (ör. "KOSGEB 2026 yönergesi").
- [ ] AI ile taslak yazılabilir; ama deneyim, sayılar ve örnekler gerçek ve kontrol edilmiş olmalı. Seri/şablon içerik yok.
- [ ] Müşteri adı/logosu yalnızca yazılı izinle (izin belgesi `permission` alanında belirtildi).

### 13.2 İçerik takvimi (öneri, öncelik sırasıyla)

| Hafta | İçerik | Tür | Dil | Bağlı çözüm |
|---|---|---|---|---|
| 5 | KOSGEB KOBİ Dijital Dönüşüm Destek Programı: adım adım rehber (DDX/SIRI raporu, başvuru, danışman seçimi) — `/tr/government-support` sayfasının yerine veya oraya yönlendirilerek | Sütun | TR | digital-transformation |
| 5 | Vaka 1: RAG chatbot | Vaka | TR | ai-integration |
| 6 | KOBİ'de dijital dönüşüm yol haritası: nereden başlanır? | Sütun | TR | digital-transformation |
| 6 | Dijital olgunluk değerlendirmesi nasıl yapılır? | Destek | TR | digital-transformation |
| 7 | KOBİ'ler için yapay zekâ entegrasyonu: maliyet, süre, KVKK | Sütun | TR | ai-integration |
| 7 | Vaka 2: Akaryakıt dağıtım yönetimi | Vaka | TR | business-process-digitalization |
| 8 | On-prem LLM ile KVKK'ya uygun yapay zekâ: mimari ve sınırlar | Destek | TR | ai-integration |
| 8 | Excel ve WhatsApp'tan ERP/CRM'e geçiş yol haritası | Destek | TR | business-process-digitalization |
| 9 | Vaka 3: Koha kamu kütüphanesi özelleştirmesi | Vaka | TR | system-improvement-modernization |
| 9 | RAG chatbot nedir, KOBİ'de nasıl kurulur? | Destek | TR | ai-integration |
| 10 | Türkçe STT/TTS pipeline: sesli asistan nasıl çalışır? (sesli avatar vakası ile) | Destek + Vaka 4 | TR | ai-integration |
| 10 | Dijital dönüşüm projesi maliyeti ve süresi neye bağlı? | Destek | TR | product-project-development |
| 11 | TÜBİTAK 1507/1501 ile yazılım Ar-Ge projesi | Destek | TR | product-project-development |
| 11 | AI integration company in Türkiye: what to expect (on-prem, KVKK, Turkish NLP) | Sütun | EN | ai-integration |
| 12 | Nearshore software & AI development in Türkiye (NGSD sayfasıyla bağlantılı) | Sütun | EN | product-project-development |
| 12 | Hiring a software development partner in Türkiye | Destek | EN | — |
| 13 | Vaka 5: CatchUpper / e-öğrenme veya pazaryeri | Vaka | TR + EN | product-project-development |
| 13 | Spring Boot + Next.js team in Ankara: how we work | Destek | EN | — |

İngilizce içerikler Türkçelerin çevirisi **değildir**; İngilizce arama niyetine göre ayrı yazılır. Bir TR yazının İngilizce eşi gerçekten yazılmışsa `translationKey` ile bağlanır; yoksa hreflang'de yer almaz.

### 13.3 Yazar sayfaları
- `content/authors/ceyhun-tekkaya.{tr,en}.md`: biyografi, uzmanlık alanları, yönettiği projeler (izinli), konuşmalar/etkinlikler, sertifikalar, LinkedIn. Fotoğraf: gerçek, profesyonel.
- Teknik liderler için aynı yapı (en az 1 kişi daha; rehberlerde `reviewedBy` olarak kullanılır).
- Unvanlar LinkedIn ile birebir aynı (K-3).

### 13.4 Kanıt sinyallerinin sitede görünmesi
- Hakkımızda ve footer: Bilkent Cyberpark (Ar-Ge firması), TBD, ALTE, BNI.
- TÜBİTAK destekli projeler: proje adı, program, yıl (yayınlanabilir olanlar) — Hakkımızda "Ar-Ge" bölümü.
- The Manifest/Clutch profil linki (yorum geldikçe).
- Cyberpark haber linki ("Girişim 23").

---

## İP-14 — Sürekli ölçüm ve bakım

### Aylık rutin (ayın ilk iş günü, ~2 saat)
1. **Prompt seti:** 60 soru (30 TR, 15 EN, 15 marka). Dosya: `docs/geo-prompt-seti.md` (İP-0'da oluşturulur). Her soru ChatGPT (giriş yapılmamış/geçmişsiz), Gemini, Google AI Mode, Copilot, Perplexity, Claude'da 2–3 kez çalıştırılır. Kayıt: tarih, motor, Genixo anıldı mı, genixo.ai alıntılandı mı, hangi üçüncü taraf URL, tanım doğru mu (EdTech mi dijital dönüşüm mü), rakipler.
2. **GSC:** Search Generative AI performance (AI Overviews/AI Mode gösterimleri), sayfa bazlı tıklamalar, kapsam hataları, "Taranan – şu anda dizine eklenmemiş" listesi.
3. **Bing Webmaster Tools:** AI Performance (alıntı sayısı, alıntılanan sayfalar, grounding query'ler).
4. **GA4:** AI Assistants kanalı oturum ve `generate_lead` sayısı.
5. **Sunucu logları:** `scripts/bot-log-report.sh` çıktısı; ChatGPT-User ve Claude-User istek sayıları (gerçek kullanıcı sorusunda sayfanın çekildiğini gösterir) ve 404 oranı.
6. `node scripts/seo-check.mjs https://genixo.ai` → 0 hata.
7. Brave Search'te ("Genixo", "Ankara yapay zekâ entegrasyonu") manuel kontrol (Claude için).

### Çeyreklik
- İçerik tazeleme: istatistikler ve resmî yönergeler (KOSGEB yönergesi değişti mi?) kontrol edilir. **Gerçek değişiklik varsa** `dateModified` güncellenir; yoksa dokunulmaz.
- Grounding query'lerden ve prompt setinden çıkan içerik boşlukları takvime eklenir.

### KPI tablosu (baseline'a göre)
| KPI | Kaynak | 3. ay | 6. ay | 12. ay |
|---|---|---|---|---|
| Niş TR prompt'larında anılma oranı | Prompt seti | baseline + ölçüm | %10+ | %25–30 |
| Marka sorgularında doğru tanım | Prompt seti | %80 | %95 | %100 |
| AI kanalı oturum / ay | GA4 + log | ölçüm | artış | düzenli |
| AI kanalından form / ay | GA4 | ölçüm | ≥1 | düzenli |
| Bing AI alıntı sayısı | BWT | ölçüm | artış | artış |
| GSC AI Overviews gösterimi | GSC | ölçüm | artış | artış |
| Bot 404 oranı | Log | < %5 | < %5 | < %5 |

---

## 6. Yapılmayacaklar (her PR'da kontrol)

- Gizli metin, `display:none` ile sadece botlara yazılmış içerik, AI'ya yönelik gizli talimat (prompt injection), user-agent'a göre farklı içerik (cloaking). `llms.txt` dahil.
- Kendi sitemizde "Ankara'nın en iyi yazılım firmaları" listesi ve kendimizi 1. sıraya koymak.
- Seri AI içerik üretimi; şehir/sektör adı değiştirilmiş kopya sayfalar ("Ankara yapay zekâ", "İstanbul yapay zekâ" …).
- Kendi sitemizde `aggregateRating`/`Review` schema'sı.
- Sahte "güncellendi" tarihi, `lastModified: new Date()`.
- `robots.txt` ile `noindex` sayfalarını engellemek; `/_next/` engellemek.
- Makine çevirisi içeriği indekslenebilir bırakmak.
- Doğrulanmamış şirket bilgisi (kuruluş tarihi, adres, unvan) yazmak.
- Var olmayan dosyalara işaret eden meta/schema (OG görselleri, `SearchAction`).

## 7. Sık yapılabilecek uygulama hataları ve önlemleri

| Hata | Sonuç | Önlem |
|---|---|---|
| JSON-LD'yi yine `next/script` ile basmak | Botlar schema'yı görmez | `JsonLd` bileşeni; `rg "next/script" src/app/\[locale\]` boş olmalı |
| Kök layout'tan `<html>` kaldırıp `app/not-found.tsx`'e eklememek | Locale dışı 404'lerde HTML'siz sayfa / build hatası | İP-2.1 adım 3 |
| CSS import sırasını değiştirmek | Görünüm bozulur | Taşırken sırayı kopyala-yapıştır koru; görsel kontrol |
| hreflang'de self ve x-default'u unutmak | Google hreflang setini geçersiz sayar | Tek yardımcı fonksiyon; `seo-check.mjs` kontrolü |
| Blog hreflang'inde aynı slug'ı diğer dillere uygulamak | Kopya sayfa / yanlış eşleme | `translationKey` ile eşleme |
| Sitemap ile metadata'nın farklı dil mantığı | Çelişen sinyaller | İkisi de `buildAlternates()`'i kullanır |
| `NEXT_PUBLIC_*` değişkenlerini sadece runtime'da vermek | GA ID / site URL build'e girmez | Dockerfile builder aşamasında `ARG` + `ENV` |
| Schema'da görünmeyen bilgi | Google spam/yanıltıcı yapılandırılmış veri | "Görünürse yaz" kuralı |
| `dateModified`'i her düzenlemede güncellemek | Sahte tazelik | Yalnızca içerik anlamı değişince |
| ISR önbelleği (`s-maxage=31536000`) nedeniyle eski HTML'i test etmek | Yanlış "düzelmedi" sonucu | Testleri yeni deploy'dan sonra yap; gerekirse `?v=` ile değil, container yenilendiğini kontrol ederek |
| Yeni sayfayı sitemap'e eklemeyi unutmak | Geç indeksleme | Sitemap içerik okuyucudan otomatik üretilir |
| De/fr/ru'yu `noindex` yapıp dil seçicide `hreflang` bırakmak | Çelişki | `noindex` dillerde hreflang basılmaz |

## 8. Bitti tanımı (tüm web ayağı için)

**Teknik**
- [ ] `robots.txt`: AI ve arama botları açık, `/_next/` açık, yalnızca `/api/` kapalı
- [ ] Tüm bot kimlikleri 200 alıyor; CDN/WAF engeli yok; loglarda bot 404 oranı < %5
- [ ] `<html lang>` her dilde doğru; bilinmeyen yollar 404; `www` → apex 301
- [ ] Boş sayfalar kaldırıldı/yönlendirildi; placeholder sayfalar `noindex`
- [ ] Her sayfada benzersiz title/description; `keywords` yok; şablon metin yok
- [ ] hreflang: `tr`, `en`, `x-default` + self; dil başına canonical; de/fr/ru K-2'ye göre
- [ ] JSON-LD ilk HTML'de; Organization/ProfessionalService, WebSite, Person, Service, BlogPosting, BreadcrumbList, FAQPage (görünür SSS) hatasız
- [ ] Sitemap yalnızca 200 + indekslenebilir URL'ler, gerçek `lastmod`
- [ ] GSC + Bing doğrulandı, sitemap gönderildi, IndexNow aktif
- [ ] OG görselleri 200
- [ ] Mobil PageSpeed ≥ 80
- [ ] `seo-check.mjs` 0 hata
- [ ] (Opsiyonel) `llms.txt` 200 text/plain

**Varlık ve içerik**
- [ ] Tek tanım cümlesi site genelinde birebir aynı (Hakkımızda, footer, schema, llms.txt)
- [ ] NAP footer'da metin olarak; schema ile aynı
- [ ] Unvanlar tek tip; yazar sayfaları yayında
- [ ] Kaynaksız rakamlar temizlendi; chatbot bilgi tabanı siteyle uyumlu
- [ ] Çözüm sayfalarında görünür SSS
- [ ] 3–5 vaka, 3 sütun, 8–10 destek yazısı, 4–6 İngilizce sayfa (90. gün sonunda)
- [ ] Blog, Ürünler, Başarılar menüde

**Ölçüm**
- [ ] KVKK aydınlatma + çerez politikası + onay bileşeni
- [ ] GA4 yalnızca onayla yükleniyor; `generate_lead` ve `phone_click` dönüşüm
- [ ] GA4 "AI Assistants" kanal grubu
- [ ] Baseline ve aylık prompt seti ölçümü kayıtlı
