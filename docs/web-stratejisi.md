## Öncelik 1: Hemen düzeltilecek hatalar (ilk 1–2 hafta)

1. **Konumlanmayı tekleştirin.** "Hakkımızda" sayfası şu an Genixo'yu bir EdTech platform şirketi olarak tanımlıyor. Bunun yerine tek bir tanım cümlesi yazın ve her sayfada, footer'da ve schema'da aynısını kullanın. Örneğin: "Genixo Bilişim ve Teknoloji A.Ş., Ankara Bilkent Cyberpark merkezli; KOBİ'lere ve kurumlara dijital dönüşüm danışmanlığı, iş süreçleri dijitalleştirme ve yapay zekâ entegrasyonu (RAG chatbot, on-prem LLM, STT/TTS) sunan bir yazılım ve Ar-Ge şirketidir." CatchUpper ve StudyScore ise "Ürünlerimiz" altına taşınmalı.
2. **Satın alınmış temadan kalan şablon metinleri silin.** Kök URL'nin indekste görünen başlığı ("Genixo - Software, App, SaaS & Startup Landing Pages Pack"), "Genixo BT ve Teknoloji" başlığı ve "Başarılı bir yazılım oluşturmak için..." diye başlayan meta açıklaması bunlara dahil. Her sayfaya özgün bir title ve description yazın. Meta keywords etiketini kaldırın.
3. **@genixo Twitter hesabını kontrol edin.** Hesap size ait değilse meta etiketinden çıkarın.
4. **Şirket bilgilerini sitede birebir tutarlı hâle getirin.** Adres (Bilkent Cyberpark), kuruluş tarihi ve unvanlar (sitede "CEO", blogda "Co-Founder" yazıyor) her yerde aynı olmalı. Ayrılmış ortaklara referans kalmadığından emin olun.
5. **Kaynaksız rakamları düzeltin.** Cost-optimization sayfasındaki "%40–60 maliyet azaltma" ve blogdaki "Amerika'daki şirketlerin %93'ü" gibi ifadelere kaynak ekleyin ya da bu ifadeleri kaldırın.

Bu arada araştırmaya ek bir bulgu: Ben web'de "genixo.ai" diye aradığımda sonuçlar Genix.ai ve GenXAI gibi benzer isimli yabancı şirketleri getirdi. Bu yüzden ayırt edici bir tanım cümlesi ve tutarlı şirket bilgileri, araştırmanın öngördüğünden de önemli.

## Öncelik 2: Teknik altyapı

6. **robots.txt'yi düzenleyin.** OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Googlebot, Bingbot ve Applebot'a izin verin. Müşteri portalı, admin ve API uçlarını `Disallow` ile kapatın.
7. **CDN/WAF bot engelini kontrol edin.** Cloudflare gibi servislerin "AI botlarını engelle" ayarı robots.txt'den bağımsız çalışır. Sunucu loglarında bu botların 200 yanıtı aldığını doğrulayın.
8. **Render testi yapın.** Bunun için `curl -A "GPTBot" https://genixo.ai/tr/solutions/ai-integration` komutunu çalıştırabilir ya da tarayıcıda JS'i kapatarak sayfaya bakabilirsiniz. SSR şu an çalışıyor, korunmalı. SSS, akordiyon ve sekme içerikleri ilk HTML'de bulunmalı; useEffect veya fetch sonrasında yüklenen içerik botlar tarafından görülmez.
9. **hreflang ve canonical ayarlarını yapın.** /tr ve /en sayfaları için karşılıklı hreflang ekleyin (tr-TR, en, x-default). Her dilin kendi canonical'ı olmalı; İngilizce sayfaların canonical'ı /tr'ye işaret etmemeli, bunu kontrol edin.
10. **Sitemap ve 404'leri temizleyin.** Kırık linkleri ve yönlendirme zincirlerini giderin. Araştırmadaki log çalışmasına göre ChatGPT ve Claude isteklerinin yaklaşık üçte biri 404 sayfalarına gidiyor, bu da kısıtlı tarama bütçesini boşa harcıyor.
11. **Konsolları kurun.** Google Search Console ve Bing Webmaster Tools'u doğrulayıp sitemap gönderin. Next.js'e IndexNow ekleyin. Bing tarafı ChatGPT ve Copilot için kritik; Türkiye'de AI trafiğinin yaklaşık %94'ü ChatGPT'den geliyor.
12. **Core Web Vitals değerlerini iyileştirin.**

## Öncelik 3: Schema (amaç entity netliği, alıntı aracı değil)

13. **Organization:** legalName, adres, telefon, foundingDate, `founder` alanında Person olarak Ceyhun Tekkaya, `sameAs` alanında LinkedIn, Instagram, The Manifest/Clutch ve Cyberpark sayfası yer almalı.
14. **ProfessionalService:** Bilkent Cyberpark adresiyle eklenmeli.
15. **Service:** Her çözüm sayfasına eklenmeli.
16. **Article + Person:** Blog yazılarına eklenmeli.
17. **FAQPage:** Sadece sayfada görünen SSS'ler için eklenmeli. Google artık çoğu sitede SSS zengin sonucu göstermiyor, beklentiyi düşük tutun.

Schema'daki her bilgi sayfada görünen bilgiyle birebir aynı olmalı.

## Öncelik 4: İçerik yapısı (31–90 gün)

18. **3–5 vaka çalışması yayınlayın.** Konu adayları: RAG chatbot, akaryakıt dağıtım yönetimi, Koha kamu kütüphanesi, CatchUpper ve pazaryeri. Format: başlangıç durumu, teknoloji, süre ve sayısal sonuç. Müşteri adı yalnızca yazılı izinle kullanılmalı; izin yoksa sektör ve ölçek belirtin. Sitedeki AI sesli danışman (avatar) da on-prem STT/LLM/TTS için güzel bir vaka çalışması olabilir.
19. **3 sütun sayfası ve 8–10 destek yazısı hazırlayın.** Sütun konuları: KOBİ'de dijital dönüşüm yol haritası, KOSGEB KOBİ Dijital Dönüşüm Destek Programı rehberi, KOBİ'ler için yapay zekâ entegrasyonu (maliyet, süre, KVKK).
20. **Her yazıda aynı format kurallarını uygulayın.** İlk 1–2 cümle soruya doğrudan cevap vermeli. Her sayısal iddia için kaynak gösterilmeli (TÜİK, KOSGEB, OECD). İsimli uzman alıntısı, karşılaştırma tablosu, SSS bölümü, yazar kutusu ve "Kaynaklar" bölümü bulunmalı.
21. **Yazar sayfaları oluşturun.** Ceyhun Tekkaya ve teknik liderler için deneyim, projeler, LinkedIn bağlantısı ve konuşmalar içeren sayfalar hazırlayın.
22. **İngilizce içerikleri ayrıca yazın.** "AI integration company Turkey" ve "nearshore AI development" gibi konular için 4–6 sayfa hazırlayın; makine çevirisi kullanmayın.
23. **Kanıt sinyallerini sitede gösterin.** TÜBİTAK projeleri, Bilkent Cyberpark, TBD ve BNI üyeliği görünür olmalı. Araştırmaya göre şu an bunların çoğu sitede yok.
24. **Tarih kurallarına uyun.** URL'lere yıl koymayın. "Güncellendi" tarihini yalnızca gerçek bir güncelleme olduğunda değiştirin.

## Öncelik 5: Ölçüm altyapısı (sitede)

25. **GA4'te "AI Assistants" kanal grubu oluşturun.** Kaynak eşleşmesi için şu regex kullanılabilir: `chatgpt\.com|openai|perplexity|gemini\.google|copilot\.microsoft|claude\.ai|bing\.com/chat|deepseek|grok`. Form gönderimi ve telefon tıklaması dönüşüm olarak tanımlanmalı.
26. **KVKK'ya uygun çerez onayı ve aydınlatma metni ekleyin.** GA4 kurulmadan önce bunların hazır olması gerekiyor.
27. **Sunucu loglarında bot takibi yapın.** ChatGPT-User ve Claude-User istekleri, gerçek kullanıcı sorularında sayfanızın çekildiğini gösterir.

## Düşük öncelik veya opsiyonel

28. **llms.txt:** 15 dakikalık bir iş olduğu için eklenebilir, ama strateji bunun üzerine kurulmamalı.

## Yapılmaması gerekenler

- Gizli metin, AI'ya yönelik gizli talimat (prompt injection) veya cloaking. Google'ın spam politikaları artık AI Overviews ve AI Mode'u da kapsıyor.
- Seri AI içerik üretimi.
- Kendi sitenizde kendinizi 1. sıraya koyan bir "en iyi firmalar" listesi. Araştırmaya göre bu tür listeler alıntılansa bile markayı öneriye sokmuyor.

## Araştırmanın doğrulayamadığı konular

robots.txt, sunucu logları, CDN ayarları ve hreflang araştırmada kontrol edilemedi. 6–10 numaralı maddelere başlamadan önce ekibin bunlara bakması gerekiyor.

## Benim eklediğim nokta

Sesli avatarın verdiği cevaplar crawler'lar için görünmez. Avatarın bildiği hizmet bilgileri, SSS ve süreç anlatımı sitede statik HTML olarak da bulunmalı. Aksi hâlde en zengin içeriğiniz indekslenmemiş kalır.

Site dışı adımlar (Clutch yorumları, TÜSSİDE DDX danışmanlığı, Cyberpark, liste outreach'i, LinkedIn/YouTube) araştırmaya göre asıl etkiyi yaratan kısım. İstersen onları da ayrı bir liste olarak çıkarırım.Her şey Türkçe yazıldı.