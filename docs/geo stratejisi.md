# Genixo.ai için Yapay Zekâ Görünürlüğü (GEO/AEO) Araştırması ve 12 Aylık Yol Haritası — Türkiye ve "Kurumlarda Dijital Dönüşüm" Odaklı

Genixo'nun ChatGPT, Gemini, Copilot ve Perplexity'de "dijital dönüşüm / yapay zekâ entegrasyonu firması" olarak önerilmesi için en etkili tek kaldıraç, web sitesini süslemek değil, **Genixo adının bağımsız üçüncü taraf kaynaklarda (liste makaleleri, dizinler, haberler, LinkedIn/YouTube, kamu/ekosistem sayfaları) tutarlı biçimde ve doğru konu ile birlikte geçmesini sağlamaktır**; site ise bu bahsetmelerin doğrulandığı, botların okuyabildiği, net ve kaynaklı "kanıt merkezi" olmalıdır. Türkiye'de yapay zekâ kaynaklı site trafiğinin ezici bölümü ChatGPT'den geldiği için öncelik sırası: (1) ChatGPT/Bing indeksine girmek ve OAI-SearchBot'a açık olmak, (2) Google AI Overviews/AI Mode için klasik SEO temelleri, (3) Türkçe ve İngilizce bağımsız bahsetme ağı kurmak, (4) KOSGEB/TÜBİTAK dijital dönüşüm ekosisteminde resmi "danışman/tedarikçi" konumuna girmek.

## TL;DR

- **Ne işe yarıyor (kanıtlı):** Ahrefs'in 75.000 markalık çalışmasında markanın web'de anılma sayısı AI Overviews görünürlüğüyle 0,664 korelasyon gösterirken backlink sayısı yalnızca 0,218'de kaldı; B2B yazılım sorgularında yapılan alıntıların büyük çoğunluğu "en iyi X firmaları" tipi liste içeriklerine gidiyor. Yani Genixo'nun önce "Ankara'daki / Türkiye'deki en iyi dijital dönüşüm ve yapay zekâ entegrasyonu firmaları" listelerine, dizinlere ve haberlere girmesi gerekiyor.
- **Ne işe yaramıyor ya da abartılıyor:** llms.txt (300.000 alan adında alıntıyla ilişki bulunamadı), tek başına schema eklemek (Ahrefs'in kontrollü çalışmasında anlamlı artış yok), anahtar kelime doldurma (GEO makalesinde temel çizginin altında) ve gizli metin/prompt injection gibi manipülasyonlar (Google spam politikaları artık AI Overviews/AI Mode'u da kapsıyor).
- **Genixo'ya özel en büyük fırsatlar:** Ekipten birinin TÜBİTAK TÜSSİDE DDX dijital dönüşüm danışmanı olarak yetkilendirilip KOSGEB'in danışman havuzuna girmesi; sitede dağınık konumlanmanın (EdTech mi, dijital dönüşüm mü?) ve tutarsız şirket bilgilerinin düzeltilmesi; aylık ölçülen 50–100 soruluk Türkçe/İngilizce bir prompt seti ile Bing ve Google Search Console'daki yeni AI raporlarının takibi.

## Key Findings

### 1. Yapay zekâ asistanları kaynak ve öneriyi nasıl seçiyor?

**İki ayrı mekanizma var ve ikisine de ayrı ayrı çalışmak gerekiyor:**

- **Eğitim verisi (parametrik bellek):** Model, eğitim sırasında web'de gördüğü marka–konu ilişkilerini "hatırlar". Ahrefs bunu şöyle açıklıyor: daha fazla marka bahsetmesi, modelin öğrenebileceği daha fazla örnek demektir.\[1\] Bu kanal yavaştır (model güncellemeleri aylar sürer) ama kalıcıdır. Burada etkili olan şey Genixo'nun web genelinde "dijital dönüşüm", "KOBİ", "yapay zekâ entegrasyonu", "Ankara" kavramlarıyla birlikte anılmasıdır.
- **Canlı arama / RAG:** ChatGPT search, Perplexity, Gemini, AI Overviews, Copilot ve web araması açık Claude, soruyu alt sorgulara böler ("query fan-out"), bir arama indeksinden aday sayfaları çeker ve bunlardan alıntı seçer.\[2\]\[3\] Bu kanal hızlıdır; doğru sayfa ve doğru dış kaynaklarla haftalar içinde sonuç alınabilir.

**Hangi platform hangi indeksi kullanıyor?**

| Platform | Arama altyapısı (bilinen/kanıtlanan) | Genixo için pratik sonuç |
|---|---|---|
| ChatGPT search | OpenAI'nin kendi botu OAI-SearchBot + Bing ve diğer ortaklar; Seer Interactive'in erken çalışmasında alıntıların %87'si Bing'in üst sonuçlarıyla eşleşiyordu, ancak 2025 ölçümlerinde Bing ile örtüşme belirgin şekilde düştü ve sistem hibrit/yeniden sıralamalı hâle geldi\[4\]\[5\] | Bing Webmaster Tools + IndexNow zorunlu, OAI-SearchBot'u engelleme; ama "sadece Bing'de 1. ol" yetmez |
| Gemini, AI Overviews, AI Mode | Google'ın kendi indeksi; Google'a göre klasik SEO en iyi uygulamaları geçerli, ekstra bir gereklilik yok\[6\] | Google Search Console, teknik SEO, E-E-A-T |
| Microsoft Copilot | Bing'in kendi indeksi\[7\] | Bing Webmaster Tools'taki yeni AI Performance raporu |
| Claude (web araması) | Brave Search (Anthropic, Mart 2025'te Brave'i alt işleyen listesine ekledi; TechCrunch bunu araç parametrelerinden tespit etti; Anthropic resmî olarak adını vermiyor)\[4\]\[7\] | Brave Search'te görünürlüğü kontrol et; IndexNow Brave'e yardım etmez\[7\] |
| Perplexity | Kendi indeksi + çoklu kaynak; topluluk ve inceleme sitelerine ağırlık veriyor\[8\]\[9\] | Reddit/LinkedIn/inceleme platformları ve tazelik |
| Grok, DeepSeek | Kamuya açık, doğrulanmış bir indeks bilgisi yok (spekülatif); Türkiye'de pay çok küçük | Ayrı yatırım gerekmez; genel bahsetme ağı yeterli |

**Hangi kaynaklar daha sık alıntılanıyor? (2025–2026 verileri)**

- **Profound (680 milyon alıntı, Ağustos 2024–Haziran 2025):** ChatGPT'de en çok alıntılanan tek alan adı Wikipedia (tüm alıntıların %7,8'i, ilk 10 kaynak içindeki payın %47,9'u).\[10\] Perplexity'de Reddit (%6,6), AI Overviews'ta Reddit (%2,2), dağılım daha dengeli.\[11\]\[12\]
- **Similarweb (Ocak–Şubat 2026, ABD, yaklaşık 600.000 ChatGPT alıntısı):** Wikipedia %13,15, Reddit %11,97.\[13\]
- **Peec AI (30 milyon kaynak):** Reddit, YouTube, LinkedIn, Wikipedia ve Forbes ilk beşte; B2B sorgularında Perplexity Reddit, LinkedIn ve G2'ye ağırlık veriyor.\[14\]
- **Oynaklık:** Semrush'ın 230.000 prompt'luk 3 aylık çalışmasına (Kasım 2025) göre ChatGPT'nin Reddit alıntılayan yanıt oranı Ağustos 2025 başında %60'a yakın düzeyden Eylül ortasında yaklaşık %10'a düştü; aynı dönemde Wikipedia da yaklaşık %55'ten %20'nin altına indi. Kaynak karışımı aylar içinde değişebiliyor; tek bir platforma bel bağlanmamalı.
- **B2B "en iyi firma" sorguları:** Overthink Group'un 1.260 prompt'luk B2B SaaS analizinde alıntıların %70,8'i başlığında "best/top/leading" geçen liste içeriklerine gidiyordu. Aynı çalışmada ChatGPT alıntılarının %14,5'i bot üretimi spam sitelere gidiyordu.\[15\] Bu, liste içeriklerinin gücünü ama aynı zamanda sistemin manipülasyona açıklığını gösteriyor. Lily Ray'in 2026 çalışmasına göre ise bir markanın kendi yazdığı "en iyiler" listesi alıntılandığında AI Overviews o markayı %69 oranında öneriye dahil etmedi.\[10\] Yani **kendi sitende kendini 1. sıraya koyan liste, öneriye girmeyi garanti etmiyor; bağımsız listeler gerekiyor.**

**Akademik temel (GEO makalesi):** Aggarwal ve arkadaşlarının "GEO: Generative Engine Optimization" çalışması (Princeton, Georgia Tech, Allen AI ve IIT Delhi; KDD 2024) 10.000 sorguluk GEO-bench üzerinde içeriğe kaynak göstermenin, istatistik eklemenin ve uzman alıntısı eklemenin görünürlüğü %40'a kadar artırdığını gösterdi. Anahtar kelime doldurma ise temel çizginin yaklaşık %10 altında kaldı.\[16\]\[17\] **Dikkat:** Bu sonuçlar simüle edilmiş bir motorda ve belirli bir dönemde elde edildi. Yön (kaynaklı, sayısal, uzman sesli içerik) güvenilir, oranlar ise garanti değil.\[16\]

### 2. Türkiye'ye özgü durum

- **Kullanım hızla büyüyor:** TÜİK'in 2026 verilerine göre üretken yapay zekâ kullanan 16–74 yaş bireylerin oranı bir yılda %19,2'den %37,6'ya çıktı. Yapay zekâ kullanan girişimlerin oranı %7,5'ten %14'e yükseldi; 250+ çalışanlı girişimlerde oran %37,1.\[18\]\[19\] Bu, "kurumlarda dijital dönüşüm" pazarının hem talep hem de bilgi arayışı açısından büyüdüğünü gösteriyor. TÜİK'e göre yapay zekâ kullanmayı düşündüğü hâlde henüz kullanmayan girişimlerin %72,3'ü en önemli neden olarak uzmanlık eksikliğini gösterdi (bunu %66,4 ile hukuki belirsizlik ve %65,4 ile veri koruma endişeleri izliyor); bu, Genixo'nun içeriğinin doğrudan cevaplaması gereken soru.
- **ChatGPT baskın:** Statcounter Kasım 2025 verisine göre Türkiye'de yapay zekâ araçlarının kullanım payı ChatGPT %91,23, Gemini %4,88, Copilot %1,77, Perplexity %1,64, Claude %0,48, DeepSeek ~%0.\[20\] We Are Social/Meltwater Digital 2026 raporuna göre Türkiye'de yapay zekâ kaynaklı site yönlendirmelerinin %94,49'u ChatGPT'den geliyor (dünya ortalaması %80,92); Türkiye bu oranla ilk sırada.\[21\]\[22\] **Sonuç: Türkiye için kaynak dağılımı ChatGPT ≫ Google AI (AI Overviews/AI Mode/Gemini) > Copilot > Perplexity/Claude olmalı.** Gemini'nin payı artıyor;\[23\]\[24\] Google AI yüzeyleri arama hacmiyle birlikte düşünüldüğünde ikinci öncelik.
- **Türkçe sorgularda hangi kaynaklar alıntılanıyor?** B2B/yazılım/"dijital dönüşüm firması" sorguları için bağımsız bir alan adı payı çalışması bulunamadı. Mevcut Türkçe çalışmalar GEO hizmeti satan girişimlerin küçük örneklemli sektör çalışmaları: Visby AI'ın otomobil endeksinde (130 sorgu, 390 yanıt; ChatGPT, Gemini, Claude) en çok alıntılanan site DonanımHaber çıktı.\[25\]\[26\] Narron'un e-ticaret endeksinde (600 yanıt) ChatGPT Trendyol/Hepsiburada gibi büyük oyunculara yönelirken Perplexity kategori uzmanlarına daha çok yer verdi.\[27\] Comsuite/GeoRadar'ın "KOBİ'lerin %18'i AI cevaplarında en az bir kez anılıyor" verisi, raporun kendi ifadesiyle "temsili" veridir;\[28\] güvenilir değildir. **Yorum:** Türkçe B2B alanında rekabet ve içerik yoğunluğu İngilizceye göre düşük. Bu, iyi kaynaklı az sayıda Türkçe içeriğin ve birkaç güçlü Türk medya/dizin bahsetmesinin orantısız etki yaratabileceği anlamına geliyor. Bu bir çıkarımdır; ölçümle doğrulanmalıdır.
- **Türkiye'de GEO ajansları:** ROI Public, Lein Digital, Digipeak, Collified, Uğur Growth gibi pek çok ajans ve AI GEO Türkiye gibi yayınlar GEO hizmeti pazarlıyor.\[29\]\[30\]\[31\]\[32\]\[33\]\[34\] Bu ajansların "ilk/en iyi GEO ajansı" iddiaları pazarlama dilidir.\[32\]\[33\] Genixo'nun bu işi büyük ölçüde kendi içinde yapabilecek teknik kapasitesi var; dışarıdan en fazla PR/medya ilişkisi desteği alınması mantıklı.

### 3. Genixo.ai'nin mevcut durumu (hızlı denetim, Ekim 2026)

**Olumlu:**
- Sayfalar sunucu tarafında render ediliyor; ana sayfa ve çözüm sayfalarının metni JavaScript çalıştırılmadan okunabiliyor. Bu, Next.js sitelerde en kritik risklerden birinin zaten aşıldığını gösteriyor.
- Türkçe (/tr) ve İngilizce (/en) sürümler var; canonical /tr'ye işaret ediyor. Çözüm sayfaları ("Dijital Dönüşüm Danışmanlığı", "İş Süreçleri Dijitalleştirme", "Yapay Zekâ Entegrasyonu" vb.) doğru niyetle kurgulanmış ve KOBİ'nin acı noktalarıyla (WhatsApp grupları, Excel) konuşuyor.\[35\] Bu çok iyi bir temel.
- Kurucu imzalı bir blog yazısı (Ceyhun Tekkaya, 29 Temmuz 2025) ve kurum bağlantıları (Bilkent Cyberpark, Türkiye Bilişim Derneği, ALTE) mevcut.\[35\]\[36\]

**Düzeltilmesi gerekenler (öncelik sırasıyla):**
1. **Konumlanma dağınık:** "Hakkımızda" metni Genixo'yu "yapay zekâ odaklı eğitim platformları geliştiren" şirket olarak tanımlıyor ve StudyScore AI / Eğitim İste'yi öne çıkarıyor.\[37\] Hedeflenen ana konumlanma ise "kurumlarda/KOBİ'lerde dijital dönüşüm ve yapay zekâ entegrasyonu". LLM'ler varlığı (entity) en tutarlı tanıma göre sınıflandırır; tek cümlelik bir tanım tüm kanallarda aynı olmalı.
2. **Jenerik meta ve başlıklar:** Başlık "Genixo BT ve Teknoloji | Genixo Bilişim ve Teknoloji" şeklinde, meta açıklaması ise şablon metin ("Başarılı bir yazılım oluşturmak için...").\[35\] Kök URL arama indeksinde "Genixo - Software, App, SaaS & Startup Landing Pages Pack" başlığıyla görünüyor;\[35\] bu, satın alınmış temanın artığı ve entity karmaşası yaratıyor. Hemen düzeltilmeli.
3. **Tutarsız şirket bilgisi (NAP):** Bazı Türk firma rehberleri eski adres olarak Gazi Üniversitesi Teknokent'i (Gölbaşı) veya Çankaya/Üniversiteler'i gösteriyor;\[38\]\[39\] site Bilkent Cyberpark diyor. Kuruluş tarihi bazı yerlerde 2022 olarak geçiyor.\[38\]\[40\] LinkedIn'de bir kurucu ortağın Haziran 2025'te ayrıldığı görülüyor; sitede "CEO", blogda "Co-Founder" unvanı kullanılıyor.\[35\]\[36\]\[41\] Bunlar tek ve doğru bir bilgi setinde birleştirilmeli.
4. **Kanıt eksik:** Sitede vaka çalışması, müşteri adı/logosu, sayısal sonuç, TÜBİTAK projeleri, BNI üyeliği, CatchUpper, Koha, akaryakıt dağıtım yönetimi ve on-prem LLM projeleri görünmüyor. Mevcut içeriklerde "bulut çözümleri bu maliyetleri %40-60 azaltabilir" veya "Amerika'daki şirketlerin %93'ü" gibi kaynaksız rakamlar var.\[36\]\[42\] GEO makalesine göre kaynak göstermek tam da görünürlüğü artıran şeydir.\[43\]
5. **İçerik hacmi çok düşük:** Görünür blog yazısı sayısı iki civarında;\[35\] "dijital dönüşüm nedir", "KOSGEB dijital dönüşüm desteği nasıl alınır", "KOBİ'ler için yapay zekâ entegrasyonu maliyeti" gibi sorgulara cevap veren bir sayfa yok.
6. **Dış ayak izi zayıf:** The Manifest'te (Clutch'ın kardeş sitesi) "Top 50 Managed Service Providers in Türkiye" listesinde 32. sırada ve 0 yorumla görünüyor.\[40\] GoodFirms kaydı bulunamadı. Webrazzi veya Türk iş medyasında haber yok. Bilinen tek ekosistem bahsetmesi Bilkent Cyberpark'ın Mayıs 2023 tarihli "Girişim 23" haberi.\[44\] Twitter meta etiketinde @genixo kullanılıyor;\[35\] bu hesabın Genixo'ya ait olup olmadığı doğrulanmalı.
7. **robots.txt doğrulanamadı:** Bu araştırmada robots.txt dosyası görüntülenemedi. Ekip, aşağıdaki kontrol listesine göre manuel olarak kontrol etmeli (CDN/WAF bot engelleri dahil).

## Details

### A. Web sitesi düzeyinde teknik GEO — ne, nasıl, dikkat

**1. Botlara erişim (robots.txt + CDN/WAF)**
- OpenAI'de üç ayrı bot var: **OAI-SearchBot** (ChatGPT search için indeksleme; engellenirse alıntı kaybolur), **GPTBot** (model eğitimi), **ChatGPT-User** (kullanıcının isteğiyle anlık sayfa çekme; OpenAI'ye göre kullanıcı başlatılı olduğu için robots.txt kuralları geçerli olmayabilir).\[45\]\[46\]\[47\]\[48\] OpenAI robots.txt değişikliklerinin sisteme yansımasının yaklaşık 24 saat sürdüğünü belirtiyor.\[49\]\[50\]
- **Öneri:** Genixo bir B2B hizmet firması ve görünürlük istiyor. OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Bingbot, Googlebot ve Applebot'a izin verilmeli. GPTBot ve Google-Extended (eğitim) için izin vermek, eğitim verisi kanalında görünürlüğü destekler; blog ve hizmet içeriği gizli bilgi olmadığı için risk düşüktür. Müşteri portalı, admin ve API uçları Disallow edilmeli.
- **Dikkat:** Cloudflare gibi CDN'lerin "AI botlarını engelle" varsayılanları robots.txt'den bağımsız olarak botları kesebilir. Sunucu loglarında bu botların 200 yanıt aldığı doğrulanmalı.

**2. Render (Next.js)**
- Vercel ve MERJ'in Aralık 2024 log çalışmasında (bir ayda 569 milyon GPTBot ve 370 milyon Anthropic isteği) büyük AI botlarının hiçbiri JavaScript çalıştırmıyordu. GPTBot isteklerin %11,5'inde, ClaudeBot %23,84'ünde JS dosyası indiriyor ama çalıştırmıyordu.\[51\]\[52\] Googlebot JS render edebiliyor.\[53\]
- **Öneri:** Mevcut SSR/SSG yapısı korunmalı. Ana metin, SSS, vaka çalışması ve fiyat/paket bilgisi asla yalnızca istemci tarafında (useEffect/fetch sonrası) yüklenmemeli. Test için `curl -A "GPTBot" https://genixo.ai/tr/solutions/ai-integration` çalıştırılmalı veya tarayıcıda JS kapatılarak sayfa kontrol edilmeli. Sekme/akordiyon içindeki SSS metni HTML'de bulunmalı.

**3. llms.txt — tartışmalı, düşük öncelik**
- SE Ranking'in 7 Kasım 2025 tarihli, yaklaşık 300.000 alan adlı analizinde sitelerin %10,13'ünde llms.txt vardı ve dosyanın AI alıntı sıklığıyla ilişkisi bulunamadı; modelden bu değişken çıkarıldığında tahmin doğruluğu arttı. İkincil kaynaklara göre Ahrefs'in 137.000 alan adlı çalışmasında da llms.txt dosyalarının %97'si bir ay boyunca hiç istek almadı. Google'dan John Mueller llms.txt'yi eski "keywords meta etiketi"ne benzetti; Google arama sistemleri bu dosyayı kullanmıyor.
- **Öneri:** 15 dakikalık bir iş olduğu için eklenebilir (geliştirici/AI kodlama araçlarına kolaylık), ama görünürlük stratejisi bunun üzerine kurulmamalı. "llms.txt ile ChatGPT'de çıkın" diyen ajanslara şüpheyle yaklaşılmalı.

**4. Schema.org — doğru, ama sihir değil**
- Ahrefs'in Mayıs 2026 kontrollü çalışmasında, Ağustos 2025–Mart 2026 arasında JSON-LD ekleyen 1.885 sayfa 4.000 kontrol sayfasıyla karşılaştırıldı. AI Mode ve ChatGPT'de fark istatistiksel gürültü düzeyindeydi; AI Overviews'ta ise %4,6'lık küçük bir düşüş görüldü.\[54\]\[55\] Schema ile alıntı arasındaki korelasyon, iyi bakılan otoriter sitelerin hem schema kullanmasından hem de alıntılanmasından kaynaklanıyor.\[56\]
- **Öneri:** Schema'yı "varlık (entity) netliği" için kullanın, alıntı aracı olarak değil. Gerekli olanlar: `Organization` (legalName "Genixo Bilişim ve Teknoloji A.Ş.", adres, telefon, foundingDate, `founder` → Person Ceyhun Tekkaya, `sameAs` → LinkedIn, Instagram, The Manifest/Clutch, Cyberpark sayfası, Wikidata varsa), `LocalBusiness`/`ProfessionalService` (Bilkent Cyberpark adresi), her çözüm sayfası için `Service`, yazarlı blog yazıları için `Article` + `Person`. Görünür SSS'ler için `FAQPage` eklenebilir; Google artık çoğu site için SSS zengin sonucu göstermiyor, bu yüzden beklenti düşük tutulmalı. Schema'daki bilgi sayfada görünen bilgiyle birebir aynı olmalı.

**5. Dizinleme ve konsollar**
- **Bing Webmaster Tools** (ChatGPT ve Copilot için kritik): Siteyi doğrulayın, sitemap gönderin, Next.js'e IndexNow ekleyin (yeni/güncellenen URL'leri anında bildirir; Bing tabanlı ürünlere yardım eder, Brave ve Google'a etmez).\[7\] Şubat 2026'da yayımlanan **AI Performance** raporu\[57\] Copilot, Bing AI özetleri ve bazı ortak entegrasyonlarda kaç kez alıntılandığınızı, alıntılanan sayfaları ve "grounding query"leri gösteriyor.\[58\]\[59\] ChatGPT, Perplexity ve Google verisi bu rapora dahil değil.\[60\]
- **Google Search Console:** Google, 3 Haziran 2026'da "Search Generative AI performance" raporlarını duyurdu ve 31 Ağustos 2026 itibarıyla tüm sitelere açtı. Bu raporlar AI Overviews ve AI Mode'daki gösterimleri ayrı olarak gösteriyor.\[61\] Tıklamaların ayrı kırılımı ikincil kaynaklara göre yok.\[62\]
- **Brave Search:** Claude için `search.brave.com`'da "Genixo", "Ankara yapay zekâ entegrasyonu" gibi sorgularla görünürlüğü manuel kontrol edin.
- **Yandex Webmaster:** Türkiye'de düşük maliyetli ek bir adım; AI açısından etkisi kanıtlanmış değil.

**6. Çok dilli yapı:** /tr ve /en için karşılıklı `hreflang` (tr-TR, en, x-default) ve her dilde kendi canonical'ı kullanılmalı. Şu anda kök canonical /tr;\[35\] İngilizce sayfaların kendi canonical'ına sahip olduğu doğrulanmalı. İngilizce içerik yurt dışı müşteriler ve İngilizce sorgular ("AI integration company Turkey", "software development company Ankara") için ayrı yazılmalı, makine çevirisiyle bırakılmamalı.

**7. Hız ve sağlık:** Core Web Vitals, kırık link, 404 ve yönlendirme zincirleri. Vercel/MERJ çalışmasında ChatGPT isteklerinin %34,82'si, Claude isteklerinin %34,16'sı 404 sayfalarına gidiyordu (Googlebot'ta bu oran %8,22); temiz sitemap ve doğru yönlendirmeler, kısıtlı tarama bütçesinin boşa harcanmasını önler.

### B. İçerik stratejisi — alıntılanabilir içerik nasıl yazılır?

**Format kuralları (GEO makalesi + endüstri çalışmalarının ortak paydası):**
- Her sayfanın veya bölümün ilk 1–2 cümlesi soruyu doğrudan cevaplamalı. Alıntılar ağırlıkla sayfanın üst kısmından geliyor; bu, endüstri çalışmalarının ortak bulgusu.\[2\]\[63\]
- Her iddia için sayı ve kaynak verilmeli (TÜİK, KOSGEB, OECD, McKinsey vb.), isimli uzman alıntısı (Ceyhun Tekkaya veya proje liderleri) eklenmeli, karşılaştırma tabloları kullanılmalı.
- Varlık adları tam ve tutarlı yazılmalı: "Genixo Bilişim ve Teknoloji A.Ş. (Genixo), Ankara Bilkent Cyberpark merkezli bir yazılım ve yapay zekâ şirketidir." Bu kalıp her sayfada aynı kalmalı.
- Gerçek güncelleme olduğunda tarih eklenmeli. Sahte "güncellendi" tarihi Google'ın aldatıcı tazelik politikası kapsamında risklidir.

**Konu kümeleri (Türkçe öncelikli; her biri 1 sütun sayfası + 4–8 destek yazısı):**
1. **Kurumlarda/KOBİ'lerde dijital dönüşüm:** "Dijital dönüşüm nedir, KOBİ için nereden başlanır?", "Dijital olgunluk değerlendirmesi nasıl yapılır?", "Excel/WhatsApp'tan ERP/CRM'e geçiş yol haritası", "Dijital dönüşüm projesi maliyeti ve süresi (Türkiye 2026)".
2. **KOSGEB/TÜBİTAK destekleri:** "KOSGEB KOBİ Dijital Dönüşüm Destek Programı adım adım", "DDX/SIRI raporu nedir?", "TÜBİTAK 1507/1501 ile yazılım Ar-Ge projesi". Bu sorgular yüksek niyetli; insanlar bunları ChatGPT'ye soruyor ve resmî yönergeye atıf yapan net bir rehber güçlü bir alıntı adayı olur.
3. **Yapay zekâ entegrasyonu:** "KOBİ'de RAG chatbot kurulumu", "On-prem LLM (Ollama/Qwen) ile KVKK uyumlu yapay zekâ", "Türkçe STT/TTS pipeline", "Yapay zekâ entegrasyonu maliyeti". On-prem/KVKK açısı Türk kurumları için gerçek bir farklılaştırıcı.
4. **Sektörel sayfalar:** Eğitim (CatchUpper, K12 kişiselleştirilmiş öğrenme), kamu/kütüphane (Koha özelleştirmesi), enerji/akaryakıt dağıtım yönetimi, e-ticaret/pazaryeri, sağlık. Her biri "problem → çözüm → mimari → sonuç (sayı) → SSS" yapısında olmalı.
5. **İngilizce küme:** "Hiring a software development partner in Turkey", "Nearshore AI development Türkiye", "Spring Boot + Next.js team in Ankara".

**Vaka çalışmaları (en yüksek getirili içerik):** Her proje için müşteri izniyle 600–1.200 kelimelik bir vaka çalışması hazırlanmalı: başlangıç durumu, kullanılan teknoloji (Spring Boot, Next.js, PostgreSQL, Docker, Ollama), süre ve ölçülebilir sonuç ("faturalama süresi %X kısaldı"). İsim verilemiyorsa sektör ve ölçek belirtilmeli. Kamu projelerinde açıklama izni alınmalı.

**Özgün araştırma — en güçlü bahsetme mıknatısı:** "Türkiye KOBİ Yapay Zekâ Benimseme Raporu 2027" gibi bir rapor hazırlanmalı. Bunun için BNI ağı, Cyberpark firmaları ve LinkedIn üzerinden 150–300 KOBİ'ye 15 soruluk bir anket yapılabilir; sonuçlar TÜİK verileriyle (bireylerde %37,6, girişimlerde %14) karşılaştırılır.\[19\] Böyle bir rapor (a) gazetecilere haber malzemesi, (b) LLM'lere alıntılanabilir istatistik, (c) kurucuya konuşma/podcast konusu sağlar. Metodoloji sayfası şeffaf olmalı; aksi hâlde küçük ajans "raporları" gibi güvenilmez görünür.

**E-E-A-T:** Yazar sayfaları (Ceyhun Tekkaya ve teknik liderler) oluşturulmalı; bu sayfalarda deneyim, projeler, LinkedIn, konuşmalar ve sertifikalar yer almalı. Her yazıda yazar kutusu ve "kaynaklar" bölümü olmalı. AI ile taslak üretmek serbest; ama Google'ın "ölçekli içerik istismarı" politikası düşük değerli seri üretimi hedefliyor. Az sayıda, deneyime dayalı ve kaynaklı yazı her zaman daha güvenli ve daha etkilidir.

### C. Site dışı kanallar (en büyük etki burada)

**1. Liste makaleleri ve dizinler (B2B öneri sorgularında belirleyici)**
- **Clutch / The Manifest:** Genixo zaten The Manifest'te listelenmiş ama 0 yorumu var.\[40\] 5–10 doğrulanmış müşteri yorumu toplamak ilk 90 günün en değerli işi. GoodFirms, DesignRush, Sortlist, TechBehemoths gibi platformlarda da profil açılmalı. Bu dizinler hem "top companies in Turkey" listeleri üretiyor hem de LLM'ler tarafından alıntılanıyor.
- **Türkçe liste içerikleri:** "Ankara'daki en iyi yazılım firmaları", "Türkiye'deki dijital dönüşüm danışmanlık firmaları", "yapay zekâ entegrasyonu yapan şirketler" tipi listeleri bulup yayıncılarına vaka çalışması ve referansla ulaşılmalı. Ücretli yerleşimlerde "sponsorlu" etiketi şeffaf olmalı. Spam ağlarındaki ücretli listelerden uzak durulmalı; kısa vadede alıntı getirse bile oynak ve riskli.
- **Haritalar:** Google Business Profile (kategori "Yazılım şirketi", Bilkent Cyberpark adresi, hizmetler, fotoğraflar, yorumlar), Bing Places (Copilot/ChatGPT yerel sorgular), Apple Business Connect ve Yandex Business. NAP her yerde birebir aynı olmalı. Eski Gazi Teknokent adresini gösteren rehberler için düzeltme talebi gönderilmeli.\[38\]

**2. Kamu ve ekosistem (Türkiye'ye özgü, yüksek otoriteli)**
- **KOSGEB / TÜBİTAK TÜSSİDE:** KOSGEB'in KOBİ Dijital Dönüşüm Destek Programı'na başvurabilmek için işletmenin yetkilendirilmiş danışmanlardan TÜSSİDE–DDX veya MEXT/İHKİB–SIRI formatında onaylı bir dijital dönüşüm/olgunluk raporu alması gerekiyor (yönerge 11.05.2026 tarihli).\[64\]\[65\] TÜSSİDE "dijital rozet" alan danışmanlar DDX Model portalındaki danışman havuzuna kaydoluyor ve işletmeler danışmanı bu havuzdan seçiyor. KOSGEB bu danışmanlığı alan işletmelere 20 bin liraya kadar geri ödemesiz destek açıklamıştı.\[66\] **Bu, Genixo için hem gelir hem de görünürlük kanalı:** Bir ekip üyesinin DDX dijital dönüşüm danışmanlığı eğitim/belgelendirme sürecine başvurması, Genixo'yu resmî bir danışman listesinde gösterir ve "KOSGEB dijital dönüşüm danışmanı Ankara" sorgularında doğrudan kanıt sağlar. Program ağırlıkla imalat sektöründeki KOBİ'leri kapsıyor;\[67\]\[68\] bu, akaryakıt/enerji ve üretim müşterilerine yönelik içerikle uyumlu. Güncel başvuru dönemleri ve şartlar KOSGEB/TÜSSİDE'den teyit edilmeli.
- **Bilkent Cyberpark:** Firma rehberinde Genixo'ya ait bir sayfa bulunamadı. Profil sayfası, başarı hikâyesi ve haber talep edilmeli. Cyberpark'ın haber sitesi otoriteli bir .com.tr kaynağı ve geçmişte (Girişim 23) Genixo'dan zaten bahsetti.\[44\]
- **TBD (üyelik mevcut), YASAD, TÜBİSAD, TOBB/ATO:** Üye rehberlerinde yer alınmalı, komitelerde ve etkinliklerde konuşmacı olunmalı. ATO (Ankara Ticaret Odası) bilişim meslek komitesi yerel otorite için önemli.
- **Üniversiteler:** Bilkent, ODTÜ ve TED Üniversitesi staj/kariyer sayfaları (TEDU listesinde Genixo zaten var),\[69\] ortak TÜBİTAK projeleri ve bitirme projesi sponsorluğu düşünülebilir.

**3. Medya ve PR**
- Hedef yayınlar: Webrazzi, Webtekno, ShiftDelete, BThaber, Digital Age, Marketing Türkiye, Dünya, Ekonomim, Fortune Türkiye, Bloomberg HT ve Ankara'daki yerel iş basını. Haber "kancaları" şunlar olabilir: (a) özgün KOBİ yapay zekâ raporu, (b) on-prem Türkçe LLM/KVKK uyumlu çözüm, (c) CatchUpper ürün lansmanı veya yatırımı, (d) kamu kütüphanesi Koha projesi, (e) TÜBİTAK destekli Ar-Ge.
- Kurucu yorumu için uzman havuzlarına kayıt olunmalı ve gazetecilere "KOBİ'de yapay zekâ" konusunda hızlı veri/yorum sağlanmalı. Röportajlar Wikipedia açısından bağımsız kaynak sayılmaz, ama LLM bahsetmesi açısından yine değerlidir.

**4. LinkedIn, YouTube, Medium, topluluklar**
- **LinkedIn:** Peec AI verisinde LinkedIn en çok alıntılanan alanların ilk üçünde.\[14\] Şirket sayfasında (linkedin.com/company/genixoglobal) site ile birebir aynı tanım, hizmetler ve konum olmalı. Ceyhun Tekkaya haftada 2–3 kez "KOBİ'de dijital dönüşüm sahadan notlar" tipi uzun gönderi ve LinkedIn makaleleri yayınlamalı.
- **YouTube:** Ahrefs'in 12 Aralık 2025 tarihli 75.000 markalık takip çalışmasında ("Brand visibility in ChatGPT, AI Mode, and AI Overviews") YouTube bahsetmeleri ~0,737 korelasyonla diğer tüm faktörlerin önünde en güçlü sinyal çıktı (markalı web bahsetmeleri 0,709). Kısa demo videoları ("RAG chatbot 10 dakikada nasıl çalışır", "Ollama ile on-prem LLM") Türkçe başlık, açıklama ve transkriptle yayınlanmalı.
- **Reddit / Ekşi Sözlük / Technopat / DonanımHaber:** Bu platformlar alıntı kaynağı olarak güçlü, ama sahte hesapla tanıtım yapmak hem platform kurallarına aykırı hem de tespit edildiğinde marka hasarı yaratır. Doğru yaklaşım: Teknik sorulara gerçek kimlikle, gerektiğinde şirket bağlantısını açıkça belirterek gerçekten faydalı cevaplar vermek. r/Turkey, r/CodingTR gibi alt forumlarda reklam yasakları kontrol edilmeli.
- **Medium / Dev.to / GitHub / Hugging Face:** Açık kaynak araçlar (ör. Türkçe RAG şablonu, Koha eklentisi, Türkçe STT/TTS örnek pipeline) ve teknik yazılar, geliştirici topluluklarında ve İngilizce sorgularda bahsetme üretir.

**5. Wikipedia / Vikipedi ve Wikidata**
- İngilizce Wikipedia'nın şirket kılavuzu (WP:NCORP), birden fazla güvenilir, bağımsız ve ikincil kaynakta önemli kapsam (significant coverage) gerektirir.\[70\]\[71\] Röportajlar, basın bültenleri ve dizin kayıtları sayılmaz.\[72\]\[73\] Çıkar çatışması olan kişilerin doğrudan madde yazması kesinlikle önerilmez; ücretli düzenlemenin beyan edilmesi zorunludur.\[71\]\[74\] **Genixo bugün bu eşiğin altında; madde açmaya çalışmak silinme ve itibar riski taşır.** Vikipedi için de benzer kurallar geçerli.
- **Wikidata:** Önem eşiği daha esnektir ve yapısal bir varlık kaydı (resmî ad, kuruluş tarihi, merkez, resmî site, kurucu) bilgi grafiğine katkı sağlayabilir. Ancak kayıt yalnızca doğrulanabilir dış kaynaklarla, tarafsız biçimde ve COI kurallarına uyularak oluşturulmalı. Bunun etkisi kanıtlanmış değil, spekülatif kabul edilmeli.

**6. Yorumlar, referanslar, ortaklıklar**
- Google Business ve Clutch yorumları, müşteri sitelerinde "geliştiren: Genixo" bağlantısı/bahsetmesi, teknoloji ortaklıkları (ör. bulut sağlayıcı partner listeleri) ve BNI üyeleriyle karşılıklı vaka/referans içerikleri bu kategoridedir. G2'nin 30.000 alıntılık analizi, daha fazla yorumla daha fazla alıntı arasında küçük ama istatistiksel olarak anlamlı bir ilişki buldu: yorumlarda %10 artış, alıntılarda yaklaşık %2 artış.\[75\]
- Ödül başvuruları (ör. teknopark/inovasyon ödülleri), konferans konuşmaları ve podcast konuklukları; konuşma sayfaları ve videoları kalıcı bahsetme üretir.

### D. Ölçüm ve izleme

**Ücretsiz ve zorunlu araçlar:**
- **GA4:** ChatGPT, yönlendirme URL'lerine otomatik olarak `utm_source=chatgpt.com` ekliyor.\[76\] GA4'te "AI Assistants" adlı özel bir kanal grubu oluşturulmalı; kaynak eşleşmesi için regex şöyle olabilir: `chatgpt\.com|openai|perplexity|gemini\.google|copilot\.microsoft|claude\.ai|bing\.com/chat|deepseek|grok`. Dönüşüm hedefi olarak iletişim formu ve telefon tıklaması tanımlanmalı.
- **Google Search Console** (AI Overviews/AI Mode gösterimleri) ve **Bing Webmaster Tools AI Performance** (Copilot alıntıları ve grounding query'ler).
- **Sunucu logları:** OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot ve Claude-User isteklerinin sayısı ve hangi sayfalara gittiği izlenmeli. ChatGPT-User ve Claude-User istekleri, gerçek kullanıcı sorularında sayfanızın çekildiğini gösterir.\[77\]

**Manuel prompt seti (en önemli ölçüm):** 60 sorudan oluşan bir set hazırlanmalı: 30 Türkçe, 15 İngilizce, 15 marka sorgusu. Örnekler: "Ankara'da KOBİ'lere dijital dönüşüm danışmanlığı veren firmalar hangileri?", "Türkiye'de yapay zekâ entegrasyonu yapan şirketler", "KVKK uyumlu on-prem LLM kuran firma", "KOSGEB dijital dönüşüm desteği için danışman", "best AI integration companies in Turkey", "Genixo Bilişim nedir, ne yapar?". Bu set her ay ChatGPT (giriş yapılmamış/geçmişsiz oturum), Gemini, AI Mode, Copilot, Perplexity ve Claude'da 2–3 kez çalıştırılmalı. Yanıtlar her seferinde değiştiği için tek ölçüme güvenilmemeli.

**KPI'lar:** (1) Bahsetme oranı (prompt'ların yüzde kaçında Genixo adı geçiyor), (2) alıntı oranı (genixo.ai veya Genixo'dan bahseden üçüncü taraf URL'si kaynak olarak gösteriliyor mu), (3) rakiplere göre ses payı, (4) tanım doğruluğu (model Genixo'yu doğru tanımlıyor mu; "EdTech şirketi" mi, "dijital dönüşüm" mü?), (5) AI kanal trafiği ve bu kanaldan gelen form sayısı, (6) Bing ve GSC'deki AI gösterim/alıntı sayıları.

**Ücretli araçlar (isteğe bağlı, 3. aydan sonra):** 2026 fiyatlarıyla Otterly.AI aylık 29 $'dan başlıyor (15 prompt), Peec AI yaklaşık 85–95 €/$ (50 prompt), Semrush AI Visibility Toolkit 99 $ (25 prompt), Profound 99 $ (yıllık faturalama, yalnızca ChatGPT; çoklu motor 399 $+), Ahrefs Brand Radar ise 398 $'dan başlıyor.\[78\]\[79\]\[80\] 5 kişilik bir şirket için öneri: İlk 3 ay manuel set + ücretsiz konsollar; sonra ihtiyaç olursa Otterly veya Peec'in giriş paketi. Bu araçların Türkçe prompt ve Türkiye lokasyonu desteği satın almadan önce deneme sürümüyle test edilmeli.

### E. Riskler, mitler ve kanıt düzeyleri

| Yöntem | Kanıt düzeyi | Karar |
|---|---|---|
| OAI-SearchBot/Bingbot/Googlebot erişimi, SSR | Resmî dokümantasyon + log çalışmaları | **Zorunlu** |
| Bağımsız marka bahsetmeleri, liste ve dizinlerde yer alma | Büyük korelasyon çalışmaları (Ahrefs 75 bin marka; listicle analizleri) | **Ana yatırım** |
| Kaynaklı, sayısal, uzman alıntılı ve ilk paragrafta cevap veren içerik | Akademik (GEO, KDD 2024) + endüstri | **Uygula** |
| Vaka çalışmaları, yorumlar, E-E-A-T | Google yönergeleri + G2 verisi (zayıf ama pozitif) | **Uygula** |
| Schema.org | Kontrollü çalışmada alıntı etkisi yok; entity netliği için faydalı | **Doğru kur, beklentiyi düşük tut** |
| llms.txt | Etkisi yok (SE Ranking), Google kullanmıyor\[81\]\[82\] | **Opsiyonel, 15 dk** |
| Wikidata kaydı | Spekülatif | **Düşük öncelik, kurallara uygun** |
| Wikipedia maddesi | Notability eşiği karşılanmıyor | **Şimdilik yapma** |
| Gizli metin, AI'ya yönelik gizli talimat (prompt injection), cloaking | Google spam politikaları artık AI Overviews/AI Mode'u da açıkça kapsıyor; Google Tehdit İstihbaratı Nisan 2026'da web'deki SEO amaçlı prompt injection girişimlerini raporladı\[83\]\[84\] | **Kesinlikle yapma** |
| Sahte yorum, sahte Reddit/Ekşi hesapları, ücretli spam liste ağları | Platform kuralları + Google "inauthentic mentions"/link spam; kısa vadeli ve oynak | **Yapma** |
| Seri AI içerik üretimi | Google "scaled content abuse" politikası\[85\]\[86\] | **Yapma** |

**KVKK:** GA4 ve diğer izleme araçları için çerez onayı (açık rıza) ve aydınlatma metni gerekli. Vaka çalışmalarında müşteri adı, logo ve kişisel veri ancak yazılı izinle kullanılmalı; anket raporunda katılımcı verisi anonimleştirilmeli. On-prem LLM içeriğinde KVKK uyumluluğu iddia ediliyorsa, iddia somut mimariyle (veri yurt içinde, loglama, erişim kontrolü) desteklenmeli; abartılı "tam uyumlu" vaatlerden kaçınılmalı.

**Gerçekçi beklenti:** AI yanıtları kişiselleştirilmiş ve oynak. Güçlü markalar avantajlı (Ahrefs: Google, büyük markalara diğer platformlardan daha fazla yanlı görünüyor).\[87\] 5 kişilik bir firma için anlamlı hedef, "genel" sorgularda (ör. "Türkiye'nin en iyi yazılım firmaları") değil, **niş ve niyetli sorgularda** (Ankara + KOBİ + yapay zekâ entegrasyonu + KOSGEB + on-prem LLM + eğitim teknolojisi) 6–12 ay içinde düzenli olarak anılmaktır.

## Recommendations — Aşamalı Yol Haritası

**Varsayılan kaynak:** Haftada toplam ~1–1,5 kişi-gün (kurucu ~0,5 gün; bir geliştirici/pazarlama sorumlusu ~1 gün). Tahmini nakit maliyet ilk 6 ayda aylık 0–150 $ (araç) + isteğe bağlı PR/dizin bütçesi. Maliyet tahminleri yaklaşıktır; dizin ve PR fiyatları değişkendir.

### Faz 1 — İlk 30 gün: Temel ve hızlı kazanımlar (~6–8 kişi-gün)

1. **Tek cümlelik konumlanmayı belirleyin** ve her yerde aynısını kullanın. Örnek: "Genixo Bilişim ve Teknoloji A.Ş., Ankara Bilkent Cyberpark merkezli; KOBİ'lere ve kurumlara dijital dönüşüm danışmanlığı, iş süreçleri dijitalleştirme ve yapay zekâ entegrasyonu (RAG chatbot, on-prem LLM, STT/TTS) hizmeti veren bir yazılım ve Ar-Ge şirketidir." "Hakkımızda" sayfasını bu tanımla yeniden yazın; EdTech ürünleri "ürünlerimiz" altında kalsın.
2. **Meta ve başlık temizliği:** Kök URL'deki şablon başlığı kaldırın. Her sayfaya özgün bir title/description yazın (ör. "Yapay Zekâ Entegrasyonu | KOBİ'ler için RAG, Chatbot, On-Prem LLM – Genixo Ankara"). Meta keywords etiketini kaldırın. @genixo Twitter hesabının sahipliğini doğrulayın.
3. **Botlar ve konsollar:** robots.txt'yi Bölüm A.1'e göre düzenleyin, CDN bot ayarlarını kontrol edin, `curl` ile render testini yapın. Google Search Console ve Bing Webmaster Tools'u doğrulayın, sitemap gönderin, IndexNow'u ekleyin. Brave'de manuel kontrol yapın.
4. **Schema:** Organization + Person + LocalBusiness/ProfessionalService + Service ekleyin; `sameAs` ile LinkedIn, Instagram, The Manifest/Clutch ve Cyberpark sayfasını bağlayın. hreflang ve canonical'ı kontrol edin.
5. **NAP birliği:** Google Business Profile, Bing Places, Apple Business Connect ve Yandex Business kayıtlarını açın veya düzeltin. find.com.tr ve iyifirma gibi rehberlerdeki eski adres için düzeltme talebi gönderin. LinkedIn şirket sayfasını güncelleyin. Kurucu/ortak unvanlarını netleştirin.
6. **Ölçüm altyapısı:** GA4'te AI kanal grubunu kurun, 60 soruluk prompt setini oluşturun ve **sıfır noktası (baseline) ölçümünü** yapın.
7. **Kaynaksız rakamları düzeltin:** Mevcut sayfalardaki "%40-60", "%93" gibi iddialara kaynak ekleyin veya bu iddiaları kaldırın.

### Faz 2 — 31–90 gün: Kanıt ve içerik (~15–20 kişi-gün)

1. **3–5 vaka çalışması** yayınlayın: RAG chatbot, akaryakıt dağıtım yönetimi, Koha kamu kütüphanesi, CatchUpper/e-öğrenme, pazaryeri/mobil.
2. **3 sütun sayfası + 8–10 destek yazısı** yayınlayın: "KOBİ'de dijital dönüşüm yol haritası (2026)", "KOSGEB KOBİ Dijital Dönüşüm Destek Programı rehberi", "KOBİ'ler için yapay zekâ entegrasyonu: maliyet, süre, KVKK". Her yazı soruya doğrudan cevapla başlamalı, kaynak göstermeli, SSS içermeli ve yazar kutusu bulunmalı.
3. **Yorum kampanyası:** 5–10 Clutch/The Manifest yorumu ve 10+ Google Business yorumu toplayın (gerçek müşteriler; teşvikli/sahte yorum yok). GoodFirms, DesignRush ve Sortlist profillerini açın.
4. **KOSGEB/TÜSSİDE adımı:** DDX dijital dönüşüm danışmanlığı belgelendirme koşullarını ve bir sonraki eğitim dönemini öğrenin; uygun ekip üyesini başvurtun.
5. **Ekosistem:** Bilkent Cyberpark firma sayfası ve haber talebi; TBD, YASAD ve ATO bilişim komitesi profilleri.
6. **LinkedIn ritmi:** Kurucu haftada 2–3 gönderi; şirket sayfası haftada 1 gönderi; vaka çalışmaları LinkedIn makalesi olarak da yayınlansın.
7. **İlk liste outreach'i:** "Ankara/Türkiye yazılım ve dijital dönüşüm firmaları" listelerinin yayıncılarından 20'sine kişiselleştirilmiş başvuru gönderin.

### Faz 3 — 3–6 ay: Otorite ve bahsetme ağı (~20–25 kişi-gün)

1. **Özgün araştırma:** "Türkiye KOBİ Yapay Zekâ Benimseme Raporu" anketi (BNI, Cyberpark, LinkedIn), şeffaf metodoloji, Türkçe ve İngilizce özet, basın bülteni ve Webrazzi, Digital Age, Dünya gibi yayınlara pitch.
2. **YouTube:** 6–8 kısa teknik demo ve transkriptleri.
3. **Açık kaynak:** GitHub'da 1–2 faydalı repo (Türkçe RAG şablonu, Koha eklentisi vb.) ve teknik blog yazısı.
4. **Konuşmalar:** Teknopark etkinlikleri, TBD ve BNI sunumları, 2–3 podcast konukluğu.
5. **İngilizce küme:** Yurt dışı müşteriler için 4–6 İngilizce sayfa (nearshore, AI integration Turkey).
6. **Ölçüm:** Aylık prompt seti, GSC ve Bing AI raporları. Hangi sayfalar alıntılanıyor, hangi sorgularda rakipler öne çıkıyor? Bunları analiz edip içerik boşluklarını kapatın. Bu noktada isteğe bağlı olarak Otterly veya Peec giriş paketine geçin.

### Faz 4 — 6–12 ay: Ölçekleme ve kalıcılık

1. Raporu yıllık hâle getirin (2028 sürümü için veri toplamaya başlayın). Raporun medyada yarattığı bahsetmeleri sektörel listelere ve ödül başvurularına taşıyın.
2. Sektörel alt kümeleri genişletin (sağlık, enerji, kamu) ve her biri için en az 1 vaka çalışması ekleyin.
3. Bağımsız medya kapsamı birikirse (birden fazla ayrıntılı, bağımsız haber) Wikidata ve ileride Vikipedi uygunluğunu tarafsız bir editörle değerlendirin.
4. Çeyreklik içerik tazeleme yapın: istatistikleri ve tarihleri gerçek değişiklikle güncelleyin. URL'lere yıl koymayın; "2025" gibi yıl içeren URL'lerin zamanla alıntı kaybettiğine dair veriler var.\[88\]
5. KPI hedefi (öneri): 12. ayın sonunda niş Türkçe prompt'ların en az %25–30'unda Genixo'nun anılması, marka sorgularında %100 doğru tanım ve AI kanalından aylık düzenli form/görüşme talebi. Bu hedefler sektör kıyası değil, Genixo'nun kendi baseline'ına göre belirlenmiş öneri hedefleridir.

### Somut kontrol listesi

**Teknik**
- [ ] robots.txt: OAI-SearchBot, ChatGPT-User, GPTBot, ClaudeBot, Claude-SearchBot, Claude-User, PerplexityBot, Google-Extended, Googlebot, Bingbot, Applebot izinli; admin/portal kapalı
- [ ] CDN/WAF AI bot engeli kapalı; loglarda 200 yanıtı doğrulandı
- [ ] JS kapalıyken tüm ana metin, SSS ve vaka içerikleri görünüyor
- [ ] GSC + Bing Webmaster Tools doğrulandı; sitemap gönderildi; IndexNow aktif
- [ ] Kök URL'deki şablon başlığı silindi; tüm sayfalarda özgün title/description var
- [ ] hreflang tr-TR / en / x-default; dil başına canonical
- [ ] Organization, Person, LocalBusiness, Service, Article schema'sı eklendi; sameAs bağlantıları tam
- [ ] (Opsiyonel) llms.txt eklendi

**Varlık ve tutarlılık**
- [ ] Tek cümlelik tanım; site, LinkedIn, GBP, Clutch, The Manifest ve Cyberpark'ta birebir aynı
- [ ] NAP birliği; eski adresler için düzeltme talebi gönderildi
- [ ] Kurucu/ekip unvanları ve yazar sayfaları güncel

**İçerik**
- [ ] 3–5 vaka çalışması (sayısal sonuçlu)
- [ ] 3 sütun sayfası + 8–10 destek yazısı (KOBİ dijital dönüşüm, KOSGEB, yapay zekâ entegrasyonu)
- [ ] Her yazıda ilk paragrafta doğrudan cevap, kaynaklar, yazar kutusu ve SSS var
- [ ] Kaynaksız rakamlar temizlendi
- [ ] Özgün KOBİ yapay zekâ raporu planlandı veya yayınlandı

**Site dışı**
- [ ] Clutch/The Manifest 5+ yorum; GoodFirms, DesignRush, Sortlist profilleri
- [ ] Google Business, Bing Places, Apple Business Connect, Yandex
- [ ] 20+ liste yayıncısına outreach
- [ ] TÜSSİDE DDX danışmanlık belgelendirme başvurusu
- [ ] Cyberpark, TBD, YASAD, ATO profilleri
- [ ] Haftalık LinkedIn ritmi; YouTube demoları; 1 GitHub reposu
- [ ] En az 2 Türk iş/teknoloji medyası haberi

**Ölçüm**
- [ ] GA4 AI kanal grubu + dönüşüm hedefleri
- [ ] 60 prompt'luk set + aylık ölçüm tablosu (bahsetme, alıntı, doğruluk, ses payı)
- [ ] Aylık GSC AI ve Bing AI Performance raporlarının incelenmesi

## Caveats

- **Alandaki verilerin çoğu satıcıların kendi çalışmaları.** Profound, Ahrefs, Peec AI, Semrush, SE Ranking ve G2 gibi şirketler, sattıkları ürünün değerini gösteren veriler yayınlıyor; çoğu korelasyon çalışmasıdır, nedensellik kanıtlamaz. Ahrefs'in schema çalışması gibi kontrollü tasarımlar istisnadır. Yönler birbiriyle tutarlı olsa da kesin yüzdeler platformlar ve dönemler arasında çok değişiyor.
- **Platform altyapıları değişiyor.** ChatGPT'nin Bing'le örtüşmesi 2024'ten 2025'e belirgin şekilde düştü; Claude'un Brave kullandığı resmî olarak doğrulanmadı ve değişebilir; Reddit'in ChatGPT'deki payı birkaç haftada keskin düştü. Strateji tek platforma değil, genel bahsetme ve kalite sinyallerine dayanmalı.
- **Türkçe sorgulara özgü bağımsız alıntı verisi neredeyse yok.** Türkiye'deki çalışmalar GEO hizmeti satan girişimlerin küçük örneklemli sektör analizleri. Türkçede rekabetin daha düşük olduğu bir çıkarımdır; Genixo kendi prompt seti ölçümüyle doğrulamalıdır.
- **Genixo denetimi sınırlıdır.** robots.txt, sunucu logları, CDN ayarları ve hreflang etiketleri bu araştırmada doğrudan doğrulanamadı. Dış ayak izi tespiti (The Manifest, Cyberpark haberi, rehber kayıtları) arama sonuçlarına dayanıyor; Clutch ve Google Business kayıtlarının varlığı teyit edilmedi.
- **KOSGEB/TÜSSİDE programlarının şartları, bütçe ve dönemleri değişebilir.** Danışmanlık desteği tutarları (10 bin ve 20 bin TL) farklı dönemlerin duyurularından geliyor. Başvuru öncesinde güncel yönerge (11.05.2026 tarihli ve sonrası) ve TÜSSİDE eğitim takvimi resmî kaynaklardan teyit edilmeli.
- **Araç fiyatları** Ağustos–Eylül 2026 itibarıyla ikincil karşılaştırma sitelerinden alındı ve sık değişiyor.

## Sources

1. [What We Actually Know About Optimizing for LLM Search](https://ahrefs.com/blog/llm-search/)
2. [ChatGPT search optimization (2026 guide) · Erlin](https://www.erlin.ai/blog/chatgpt-search-optimization)
3. [The conference for marketers ready to win in 2026](https://ahrefs.com/blog/google-ai-mode)
4. [What Gets Cited by ChatGPT, Claude, Gemini, and Perplexity (2026 Data)](https://quickseo.ai/blog/ai-citation-patterns-chatgpt-claude-gemini-perplexity)
5. [How to Get Cited by ChatGPT Search in 2026: The Documented Playbook](https://pressonify.ai/blog/how-to-get-cited-chatgpt-search-2026)
6. [Google AI Features and Your Website: What Site Owners Actually Need to Know in 2026 - RiZen Metrics](https://www.rizenmetrics.com/google-ai-features-and-your-website-what-site-owners-actually-need-to-know-in-2026/)
7. [AI web search backends: who owns, who rents - Botmonster Tech](https://botmonster.com/ai/ai-web-search-backends-who-owns-who-rents/)
8. [How AI Engines Decide What to Cite](https://www.tryaivo.com/blog/how-ai-engines-decide-what-to-cite)
9. [The state of AI citations 2026 research report](https://www.5wpr.com/research/state-of-ai-citations-2026/)
10. [What ChatGPT Actually Cites in 2026 (6-Study Data Analysis)](https://www.gogochimp.com/blog/what-chatgpt-actually-cites-2026)
11. [AI Platform Citation Patterns: How ChatGPT, Google AI Overviews, and Perplexity Source Information](https://www.tryprofound.com/blog/ai-platform-citation-patterns)
12. [AI citation sources - Baseline Labs wiki](https://baselinelabs.ai/wiki/ai-citation-sources)
13. [Most-Cited Domains in ChatGPT (2026 Data & Sources)](https://blog.trendlyai.com/most-cited-domains-chatgpt)
14. [AI search engines cite Reddit, YouTube, and LinkedIn most: Study](https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138)
15. [We analyzed 1,260 prompts to see who’s winning AEO in B2B SaaS - Overthink Group](https://overthinkgroup.com/b2b-ai-citation-stats-2026-q2/)
16. [The GEO Paper: What the Research Actually Found - KinetixSEO](https://kinetixseo.com/articles/geo-paper-princeton-study)
17. [Generative Engine Optimization: What the GEO Paper Actually Shows for Your Business](https://www.elementera.com/blog/generative-engine-optimization-what-geo-aeo-ai-search-paper-shows-your-business)
18. [Türkiye'de yapay zeka kullanımı ikiye katlandı](https://gazeteoksijen.com/bilim-ve-teknoloji/turkiyede-yapay-zeka-kullanimi-ikiye-katlandi-291485)
19. [Aa](https://www.aa.com.tr/tr/bilim-teknoloji/turkiyede-uretken-yapay-zeka-kullandigini-beyan-edenlerin-orani-iki-katina-cikarak-yuzde-37-6-oldu/4075769)
20. [Türkiye ve dünyada en çok kullanılan yapay zekâ araçları](https://www.donanimhaber.com/turkiye-ve-dunyada-en-cok-kullanilan-yapay-zek-araclari--198375)
21. [Türkiye, ChatGPT Kaynaklı Yapay Zeka Trafiğinde Dünya Lideri Oldu](https://www.btgunlugu.com/turkiye-chatgpt-kaynakli-yapay-zeka-trafiginde-dunya-lideri-oldu/)
22. [Yapay zeka kullanımı 8’e dayandı: Kurumlar için görünürlükte yeni dönem başladı - KARAR](https://www.karar.com/guncel-haberler/yapay-zeka-kullanimi-38e-dayandi-kurumlar-icin-gorunurlukte-yeni-donem-2076792)
23. [2025'te Türkiye'nin Yapay Zekâ Tercihleri Açıklandı: ChatGPT Liderliğini Sürdürüyor](https://www.cozumpark.com/2025te-turkiyenin-yapay-zeka-tercihleri-aciklandi-chatgpt-liderligini-surduruyor/)
24. [2025'te Türkiye'de En Çok Kullanılan Yapay Zekâlar Belli Oldu: Gemini, ChatGPT'nin Tahtını Sarsmaya Başladı! - Webtekno](https://www.webtekno.com/2025-turkiye-en-cok-kullanilan-yapay-zeka-h209743.html)
25. [Türkiye Otomobil Sektörü Yapay Zeka Görünürlük Endeksi](https://visby.ai/blogs/turkiye-otomobil-sektoru-yapay-zeka-gorunurluk-endeksi)
26. [Yerli yapay zeka görünürlük platformu: Visby AI - Webrazzi](https://webrazzi.com/2026/02/16/yerli-yapay-zeka-gorunurluk-platformu-visby-ai/)
27. [Yapay zekâ Türkiye'de hangi e-ticaret markalarını öneriyor? - Ekonomi Haberleri EKONOMİ](https://ekonomi.haber7.com/ekonomi/haber/3661425-yapay-zeka-turkiyede-hangi-e-ticaret-markalarini-oneriyor)
28. [Türkiye AI Görünürlük Raporu 2026 — ChatGPT ve Gemini'de Görünürlük](https://comsuite.com.tr/ai-gorunurluk-raporu)
29. [GEO Ajansı & Yapay Zeka SEO](https://www.roipublic.com/geo-ajansi/)
30. [AI GEO Türkiye: Üretken Motor Optimizasyonu Rehberi](https://www.aigeoturkiye.com/)
31. [Türkiye'nin En İyi GEO Ajansı Rehberi 2026 - Collified](https://collified.com/turkiye/geo-ajansi/)
32. [GEO Ajansı](https://ugurgrowth.com/geo-ajansi)
33. [2026'nın En İyi GEO Ajansları — Lein Digital](https://leindigital.com/blog/en-iyi-geo-ajanslari)
34. [GEO (Generative Engine Optimization) Nedir? (2026 Rehber)](https://digipeak.org/tr/blog/geo-nedir)
35. [Genixo BT ve Teknoloji | Genixo Bilişim ve Teknoloji](https://genixo.ai/)
36. [Artificial Intelligence is Not Just a Technology, It's a New Work ...](https://genixo.ai/en/blog/ai-not-just-technology)
37. [About](http://www.genixo.ai/en/about)
38. [GENİXO BİLİŞİM VE TEKNOLOJİ ANONİM ŞİRKETİ](https://www.find.com.tr/Company/genixobilisimveteknolojianonimsirketi)
39. [Genixo Bilişim - Teknoloji Anonim Şirketi - (0312) ... - ÜNİVERSİTELER... ÇANKAYA / ANKARA - İyi Firma](https://iyifirma.com/genixo-bilisim-ve-teknoloji-anonim-sirketi/)
40. [The Best Managed Service Providers Companies in Türkiye - May 2025](https://themanifest.com/tr/it-services/msp/companies?page=1)
41. [Atabey Erkök - Customer Operations Lead @ikas⚡️](https://www.linkedin.com/in/atabey-erk%C3%B6k-896854161/)
42. [Cost Optimization](https://genixo.ai/en/solutions/cost-optimization)
43. [What GEO Research Actually Says: Princeton to SparkToro - Sunil Pratap Singh](https://sunilpratapsingh.com/guides/geo/what-research-says-about-generative-engine-optimization)
44. [Bilkent CYBERPARK Girişim 23’te!](https://www.cyberpark.com.tr/proje-haberleri/bilkent-cyberpark-girisim-23te-haberi-5613)
45. [GPTBot: OpenAI's Crawler - robots.txt & WAF · Murat Ulusoy](https://www.muratulusoy.de/en/glossary/gptbot.html)
46. [OpenAI user agents — xSeek Docs](https://www.xseek.io/docs/openai-crawlers-and-user-agents)
47. [ChatGPT Search Citations: The 2026 Optimization Guide - Tygart Media](https://tygartmedia.com/chatgpt-search-citations-2026/)
48. [OpenAI revises ChatGPT crawler documentation with significant policy changes](https://ppc.land/openai-revises-chatgpt-crawler-documentation-with-significant-policy-changes/)
49. [Tracking OpenAI](https://www.searchengineworld.com/tracking-openai-chatgpt-bots-a-fresh-guide-for-webmasters-site-owners-and-seos)
50. [OAI-SearchBot: The Crawler Behind ChatGPT Search · Crawloria](https://www.crawloria.com/blog/oai-searchbot)
51. [AI Crawlers Do Not Render JavaScript](https://www.asklantern.com/blogs/ai-crawlers-do-not-render-javascript)
52. [Do AI crawlers execute JavaScript? What the evidence says (2026) — SEOBRO® Blog](https://seobro.com/blog/do-ai-crawlers-execute-javascript/)
53. [Server-Side Rendering for AI Search: No AI Crawler Renders JavaScript](https://www.radiantelephant.com/server-side-rendering-ai-crawlers/)
54. [Study Says Adding Schema Did Not Improve AI Citations](https://www.seroundtable.com/study-schema-citations-study-41311.html)
55. [Structured Data for AI Search: What Schema Markup Actually Does (and Doesn't)](https://nqz.ai/blog/geo-structured-data-for-ai-search-useful-signals-without-overpromising)
56. [Schema Markup Has No Meaningful Impact on AI Citations](https://www.stanventures.com/news/schema-markup-has-no-meaningful-impact-on-ai-citations-7231/)
57. [Bing Webmaster Tools](https://en.wikipedia.org/wiki/Bing_Webmaster_Tools)
58. [Bing](https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview)
59. [Bing Webmaster Tools Adds AI Citation Performance Data](https://www.searchenginejournal.com/bing-webmaster-tools-adds-ai-citation-performance-data/566874/)
60. [Bing Webmaster Tools AI Performance: How to Track AI Citations](https://llmrush.org/blog/bing-webmaster-tools-ai-performance/)
61. [Introducing Search Generative AI performance reports in Search Console](https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports)
62. [Generative AI Report in Search Console (2026)](https://devmaagency.com/google-search-console-generative-ai-report/)
63. [ChatGPT Citation Sources: What Gets Cited in 2026](https://kime.ai/blog/chatgpt-citation-sources-decoded)
64. [KOBİ Dijital Dönüşüm Destek Programı - KOSGEB T.C. Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı](https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/9144/kobi-dijital-donusum-destek-programi)
65. [KOSGEB KOBİ Dijital Dönüşüm Destek Programı Nedir? 2026 Başvuru Rehberi - Sun & Sun International](https://www.sunandsun.com.tr/kosgeb-kobi-dijital-donusum-destek-programi-nedir-2026-basvuru-rehberi/)
66. [Dijital Dönüşüm Danışmanlığı Desteği Başladı - KOSGEB T.C. Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı](https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/8641/dijital-donusum-danismanligi-destegi-basladi)
67. [KOSGEB'den KOBİ'lerin Dijital Dönüşümüne Danışmanlık Desteği - KOSGEB T.C. Küçük ve Orta Ölçekli İşletmeleri Geliştirme ve Destekleme İdaresi Başkanlığı](https://www.kosgeb.gov.tr/site/tr/genel/destekdetay/8190/kosgebden-kobilerin-dijital-donusumune-danismanlik-destegi)
68. [KOBİ Dijital Dönüşüm Destek Programı](https://www.zefajansvedanismanlik.com/hizmetlerimiz/kosgeb-destekleri/kobi-dijital-donusum-destek-programi)
69. [FACULTY OF ENGINEERING COMPUTER ENGINEERING](https://career.tedu.edu.tr/sites/default/files/inline-files/faculty-of-engineering_0.pdf)
70. [Wikipedia:Notability (organizations and companies)](<https://en.wikipedia.org/wiki/Wikipedia:Notability_(organizations_and_companies)>)
71. [How to Create a Wikipedia Entry: Guide for Companies and People](https://www.muratulusoy.de/en/blog/how-to-create-wikipedia-entry.html)
72. [How to Create a Wikipedia Page That Meets Notability Standards (2026)](https://ronntorossian.com/how-to-create-a-wikipedia-page-that-meets-notability-standards)
73. [Creating a Wikipedia Article](https://www.augusta-atlantic.com/creating-a-wikipedia-article)
74. [Conflict-of-interest editing on Wikipedia](https://en.wikipedia.org/wiki/Conflict-of-interest_editing_on_Wikipedia)
75. [Do More G2 Reviews Mean More AI Visibility? Insights from 30k Citations](https://learn.g2.com/do-more-g2-reviews-mean-more-ai-visibility)
76. [Publishers and Developers - FAQ](https://help.openai.com/en/articles/12627856-publishers-and-developers-faq)
77. [The JavaScript Rendering Gap: Why AI Can't See Your Best Content](https://www.averi.ai/blog/javascript-rendering-gap-ai-crawlers)
78. [Affordable AI Visibility Tools in 2026, Compared](https://ranketta.com/blog/affordable-ai-visibility-tools-2026)
79. [AI Visibility Tool Pricing Compared (2026): Every Published Price](https://www.get-ryze.ai/blog/ai-visibility-tools-pricing-compared-2026)
80. [8 Best AI Visibility Tools Tested & Ranked \[2026\]](https://www.visiblie.com/blog/best-ai-visibility-tools)
81. [llms.txt Explained (2026): Does It Help AI SEO?](https://www.gogochimp.com/blog/llms-txt-explained)
82. [LLMs.txt: Why Brands Rely On It and Why It Doesn’t Work](https://seranking.com/blog/llms-txt/)
83. [Google spam policies now officially cover AI Overviews and AI Mode in Search](https://ppc.land/google-spam-policies-now-officially-cover-ai-overviews-and-ai-mode-in-search/)
84. [Google Says Prompt Injection Moving From Theory Into Real Abuse](https://www.searchengineworld.com/google-says-prompt-injection-moving-from-theory-into-real-abuse)
85. [Explaining Scaled Content Abuse](https://ppc.land/scaled-content-abuse/)
86. [Google's Spam Policies Related to AI-Generated Content](https://insidea.com/blog/seo/googles-spam-policies-for-ai-generated-content)
87. [Google Seems More Biased Towards Big Brands Than ChatGPT and Perplexity](https://ahrefs.com/blog/branded-web-mentions-visibility-ai-search/)
88. [ChatGPT Citation Study: Half of Top-Cited Pages Now Get Zero](https://greenflagdigital.com/chatgpt-citation-study/)
