# Genixo Site v2 — Doldurulacak Bilgiler (TODO Listesi)

Bu dosya, sitede **doğrulanmadan yazılmaması gereken** her bilginin tek listesidir. Sitedeki metinlerde bu maddeler `[[TODO-012]]` biçiminde işaretlidir; geliştirme ortamında turuncu bir etiket olarak görünür.

**Nasıl doldurulur:**
- Her maddenin altındaki **Cevap** satırını doldurun. Bilgi yoksa ya da yayınlanmasını istemiyorsanız "Yok / yayınlama" yazın; o bölüm siteden kaldırılır.
- Doldurduğunuz maddenin **Durum** satırını `Tamam` yapın.
- Sonra metinler yerlerine yerleştirilir ve `node scripts/check-todos.mjs` çalıştırılır. Betik, sitede çözülmemiş işaret kalırsa hata verir; canlıya çıkıştan önce sıfır olmalı.

**Liste türü veriler** (ekip, vakalar, TÜBİTAK projeleri, müşteri sözleri, logolar) boş başlar. Boşken o bölüm sitede hiç görünmez; dolunca kendiliğinden açılır.

---

## A. Şirket bilgileri

### TODO-001 — Resmî unvan
- **Gerekli:** Ticaret sicilindeki tam unvan. Sitede şu an "Genixo Bilişim ve Teknoloji A.Ş." yazıyor; sicildeki yazımla birebir aynı mı?
- **Kullanıldığı yer:** `src/content/entity.ts` (footer, schema, Hakkımızda), `src/locales/en/pages/about.json`
- **Cevap:**
- **Durum:** Açık

### TODO-002 — Kuruluş yılı
- **Gerekli:** Şirketin kuruluş yılı (sicil kaydındaki).
- **Kullanıldığı yer:** `about.json` → "Company facts" bölümü
- **Cevap:**
- **Durum:** Açık

### TODO-003 — Tam posta adresi
- **Gerekli:** Mahalle, sokak, bina/blok, kapı no, posta kodu, ilçe. Şu an: "Bilkent Cyberpark, Cyberplaza H Blok No:8, Çankaya, Ankara".
- **Kullanıldığı yer:** `src/content/entity.ts` (footer, iletişim, schema)
- **Cevap:**
- **Durum:** Açık

### TODO-004 — Ekip büyüklüğü
- **Gerekli:** Bugün kaç kişi çalışıyor (tam zamanlı), kaçı mühendis.
- **Kullanıldığı yer:** `about.json` → "Company facts", `home.json` → ekip bölümü başlığı
- **Cevap:**
- **Durum:** Açık

### TODO-005 — Çalışma saatleri
- **Gerekli:** Türkiye saatiyle (UTC+3) çalışma saatleri ve müşterilerle ortak çalışma penceresi (ör. 09:00–18:00 TSİ).
- **Kullanıldığı yer:** `ngsd.json` → "Working across time zones", `contact.json`
- **Cevap:**
- **Durum:** Açık

### TODO-006 — Randevu bağlantısı
- **Gerekli:** İlk görüşme için takvim bağlantısı (Cal.com, Calendly, Google Takvim vb.). Yoksa "Yok" yazın; sadece form kalır.
- **Kullanıldığı yer:** `contact.json`, `hello.json`
- **Cevap:**
- **Durum:** Açık

### TODO-007 — WhatsApp Business numarası
- **Gerekli:** /hello sayfası için WhatsApp Business numarası. Yoksa "Yok".
- **Kullanıldığı yer:** `hello.json`
- **Cevap:**
- **Durum:** Açık

### TODO-008 — Forma dönüş süresi
- **Gerekli:** İletişim formuna ne kadar sürede dönüyorsunuz? (ör. "bir iş günü içinde"). Gerçekten tutabileceğiniz süre.
- **Kullanıldığı yer:** `contact.json` → form açıklaması
- **Cevap:**
- **Durum:** Açık

### TODO-009 — İlk görüşme sonrası özet taahhüdü
- **Gerekli:** "İlk görüşmeden sonra 48 saat içinde bir sayfalık özet göndeririz" taahhüdünü veriyor musunuz? Süre farklıysa yazın.
- **Kullanıldığı yer:** `contact.json`, `how-we-work.json`, `ai-readiness.json`
- **Cevap:**
- **Durum:** Açık

---

## B. Ekip ve kurucu

### TODO-010 — Ekip listesi
- **Gerekli:** Sitede görünecek her kişi için: ad soyad, rol, 1 cümlelik uzmanlık, LinkedIn (isteğe bağlı), fotoğraf dosyası. Yalnızca görünmeyi kabul eden kişiler.
- **Kullanıldığı yer:** `src/content/team.ts` (ana sayfa ve Hakkımızda'daki ekip bölümü; boşken gizli)
- **Cevap:**
- **Durum:** Açık

### TODO-011 — Kurucunun teknik geçmişi
- **Gerekli:** Ceyhun Tekkaya'nın eğitimi, önceki deneyimleri, uzmanlık alanları (3–5 cümle). Sadece LinkedIn'de de yazan, doğrulanabilir bilgiler.
- **Kullanıldığı yer:** `content/authors/ceyhun-tekkaya.en.md` (/team/ceyhun-tekkaya)
- **Cevap:**
- **Durum:** Açık

### TODO-012 — Genixo'nun kuruluş hikâyesi
- **Gerekli:** Genixo neden kuruldu? Hangi sorunu görüp bu şirketi kurdunuz? (3–6 cümle, kurucunun ağzından).
- **Kullanıldığı yer:** `about.json` → "Why Genixo exists", kurucu sayfası
- **Cevap:**
- **Durum:** Açık

### TODO-013 — Kurucunun LinkedIn adresi
- **Gerekli:** Profil URL'si.
- **Kullanıldığı yer:** kurucu sayfası, Person schema (`sameAs`)
- **Cevap:**
- **Durum:** Açık

### TODO-014 — Kurucu fotoğrafı
- **Gerekli:** Gerçek, profesyonel fotoğraf (en az 800×800). Dosyayı `public/images/team/` altına koyup adını yazın.
- **Kullanıldığı yer:** kurucu sayfası, Hakkımızda
- **Cevap:**
- **Durum:** Açık

### TODO-015 — "İşi konuşan kişi projede kalır" iddiası
- **Gerekli:** İlk görüşmeyi ve kapsamı yapan kişi projede de çalışıyor mu? Sitede "The people who scope your project are the people who build it" yazıyor. Doğruysa onaylayın, değilse doğru ifadeyi yazın.
- **Kullanıldığı yer:** `home.json`, `about.json`, `how-we-work.json`
- **Cevap:**
- **Durum:** Açık

---

## C. Kanıtlar ve üyelikler

### TODO-016 — TÜBİTAK projeleri
- **Gerekli:** Yayınlanabilecek TÜBİTAK destekli projeler: program (ör. 1507, 1501), yıl, proje başlığı, 1 cümle özet. Gizlilik koşulunu kontrol edin.
- **Kullanıldığı yer:** `src/content/credentials.ts` (Hakkımızda ve ana sayfa "Context" bölümü; boşken gizli)
- **Cevap:**
- **Durum:** Açık

### TODO-017 — BNI üyeliği
- **Gerekli:** BNI üyeliği aktif mi, chapter adı ne? /hello sayfası ve Hakkımızda'da anılacak.
- **Kullanıldığı yer:** `src/content/credentials.ts`, `hello.json`
- **Cevap:**
- **Durum:** Açık

### TODO-018 — Dış profiller
- **Gerekli:** Bilkent Cyberpark firma listesi sayfası, Clutch, The Manifest, YouTube (varsa) URL'leri.
- **Kullanıldığı yer:** `src/content/entity.ts` → `sameAs`, footer
- **Cevap:**
- **Durum:** Açık

### TODO-019 — On-prem (kurum içi) LLM deneyimi
- **Gerekli:** Müşteri sunucusunda çalışan dil modeli kurulumlarınız: kaç proje, hangi sektör (anonim olabilir), kullanılan model aileleri, donanım (GPU tipi). Bu, sitenin ana güven argümanı.
- **Kullanıldığı yer:** `about.json` → "What sets us apart", `data-security.json`, `ai-automation.json`
- **Cevap:**
- **Durum:** Açık

### TODO-020 — Türkçe ses ve dil deneyimi
- **Gerekli:** Türkçe konuşma tanıma (STT), seslendirme (TTS) veya Türkçe metin işleme projeleriniz: ne yaptınız, hangi bağlamda (anonim olabilir).
- **Kullanıldığı yer:** `about.json` → "What sets us apart", `content/scenarios/en/call-analysis.md`
- **Cevap:**
- **Durum:** Açık

---

## D. Fiyat, süre ve sözleşme şartları

### TODO-021 — Ücretsiz kısa değerlendirme ve kontenjan
- **Gerekli:** Kısa AI hazırlık değerlendirmesi (1 görüşme + 1 sayfalık çıktı) ücretsiz mi? Ayda en fazla kaç tane yapabilirsiniz? (Gerçek kontenjan; yapay kıtlık değil.)
- **Kullanıldığı yer:** `ai-readiness.json`, `pricing.json`
- **Cevap:**
- **Durum:** Açık

### TODO-022 — Kapsamlı değerlendirme fiyatı ve süresi
- **Gerekli:** Kapsamlı AI hazırlık değerlendirmesinin fiyat aralığı (TL, KDV hariç/dahil) ve tipik süresi.
- **Kullanıldığı yer:** `ai-readiness.json`, `pricing.json`
- **Cevap:**
- **Durum:** Açık

### TODO-023 — AI pilotu fiyatı ve süresi
- **Gerekli:** Tek süreçli, sabit süreli AI pilotunun fiyat aralığı ve tipik süresi (ör. 4–8 hafta).
- **Kullanıldığı yer:** `pricing.json`, `ai-automation.json`, senaryo sayfalarının "Pilot" bölümü
- **Cevap:**
- **Durum:** Açık

### TODO-024 — Keşif çalışması (discovery sprint)
- **Gerekli:** Özel yazılım için keşif çalışmasının süresi, fiyatı ve projeye başlanırsa bedelin projeden düşülüp düşülmediği.
- **Kullanıldığı yer:** `custom-software.json`, `pricing.json`
- **Cevap:**
- **Durum:** Açık

### TODO-025 — Ürün keşif atölyesi
- **Gerekli:** Ürün stüdyosu için keşif atölyesinin süresi, fiyatı ve çıktısı.
- **Kullanıldığı yer:** `product-studio.json`, `pricing.json`
- **Cevap:**
- **Durum:** Açık

### TODO-026 — NGSD aylık bant ve minimum süre
- **Gerekli:** NGSD aylık ücret aralığı (TL; uluslararası müşteri için € ayrı yazılabilir), minimum sözleşme süresi, bir aylık başlangıç dönemi var mı.
- **Kullanıldığı yer:** `ngsd.json`, `pricing.json`
- **Cevap:**
- **Durum:** Açık

### TODO-027 — Ödeme şartları
- **Gerekli:** Projelerde ödeme nasıl yapılıyor? (ör. aşama bazlı, peşin oranı, aylık). Fiyat KDV hariç mi?
- **Kullanıldığı yer:** `pricing.json`
- **Cevap:**
- **Durum:** Açık

### TODO-028 — Kod ve fikrî mülkiyet maddesi
- **Gerekli:** Sözleşmelerinizde "ödeme tamamlandığında kaynak kod ve fikrî mülkiyet müşteriye aittir" maddesi var mı? İstisnalar (ör. Genixo'nun kendi kütüphaneleri) neler?
- **Kullanıldığı yer:** `how-we-work.json`, `custom-software.json`, `product-studio.json`, `ngsd.json`
- **Cevap:**
- **Durum:** Açık

### TODO-029 — Çıkış ve devir şartları
- **Gerekli:** Müşteri çalışmayı bırakmak isterse fesih bildirim süresi nedir, neler devredilir (kod, doküman, erişimler, eğitim)?
- **Kullanıldığı yer:** `how-we-work.json`, `ngsd.json`
- **Cevap:**
- **Durum:** Açık

### TODO-030 — "Neyi yapmayız" listesi onayı
- **Gerekli:** `/what-we-dont-do` sayfasındaki maddelerin şirket politikası olarak onayı. Eklemek veya çıkarmak istediğiniz madde varsa yazın.
- **Kullanıldığı yer:** `what-we-dont-do.json`
- **Cevap:**
- **Durum:** Açık

---

## E. Süreç

### TODO-031 — Aşama süreleri
- **Gerekli:** Tipik süreler: Ölçüm/keşif (ör. 1–2 hafta), pilot (ör. 4–8 hafta), yayına alma, sonrasında iyileştirme ritmi.
- **Kullanıldığı yer:** `how-we-work.json`, `home.json` → süreç bölümü
- **Cevap:**
- **Durum:** Açık

### TODO-032 — Haftalık çalışma ritmi
- **Gerekli:** Müşteriyle haftalık ritim: hangi gün demo/rapor, hangi araçlar (Jira, Slack, Teams vb.).
- **Kullanıldığı yer:** `how-we-work.json`, `ngsd.json`
- **Cevap:**
- **Durum:** Açık

### TODO-033 — Yayın sonrası destek
- **Gerekli:** Projeler yayına alındıktan sonra garanti/destek süresi ve bakım modeli.
- **Kullanıldığı yer:** `how-we-work.json`, `custom-software.json`
- **Cevap:**
- **Durum:** Açık

---

## F. Veri güvenliği ve hukuk

### TODO-034 — Barındırma
- **Gerekli:** Sistemleri siz barındırıyorsanız hangi sağlayıcı ve veri merkezi ülkesi? Yoksa "müşteri altyapısında kurulur" yazın.
- **Kullanıldığı yer:** `data-security.json`
- **Cevap:**
- **Durum:** Açık

### TODO-035 — Üçüncü taraf AI servisleri
- **Gerekli:** Müşteri verisini işleyebilecek dış servisler (ör. OpenAI, Azure, Google API'leri) kullanıyor musunuz? Hangi durumda, hangi sözleşmeyle?
- **Kullanıldığı yer:** `data-security.json`
- **Cevap:**
- **Durum:** Açık

### TODO-036 — Avukat incelemesi
- **Gerekli:** `/data-security` sayfasının KVKK bölümünün bir avukat tarafından gözden geçirilmesi. İnceleyen ve tarih.
- **Kullanıldığı yer:** `data-security.json`
- **Cevap:**
- **Durum:** Açık

### TODO-037 — Aydınlatma metni ve çerez politikası
- **Gerekli:** Hukukçu onaylı KVKK aydınlatma metni ve çerez politikası (TR + EN).
- **Kullanıldığı yer:** footer "Legal" bağlantıları, iletişim formu
- **Cevap:**
- **Durum:** Açık

### TODO-038 — Form verisini işleyen servis
- **Gerekli:** İletişim formu `speaking.ai.eltaexams.com` adresine gönderiliyor. Bu servisi kim işletiyor? Veri nerede saklanıyor? (Aydınlatma metni için gerekli; gerekirse Genixo alan adına taşınmalı.)
- **Kullanıldığı yer:** `src/app/component/contact-form.tsx`, aydınlatma metni
- **Cevap:**
- **Durum:** Açık

---

## G. AI senaryoları — gerçek deneyim

Her senaryo sayfası genel bir yaklaşım anlatır ve **rakam vermez**. Aşağıdaki sorulara "evet" derseniz sayfaya ilgili vaka bağlanır ve (varsa) yayınlanabilir ölçüm eklenir.

### TODO-039 — Belge/fatura işleme deneyimi
- **Gerekli:** Bu senaryoda gerçek bir projeniz var mı? Varsa hangi vaka, yayınlanabilir ölçüm var mı?
- **Kullanıldığı yer:** `content/scenarios/en/document-processing.md`
- **Cevap:**
- **Durum:** Açık

### TODO-040 — Teklif hazırlama deneyimi
- **Gerekli:** Aynı sorular (on-prem teklif asistanı vakasıyla bağlantılı olabilir).
- **Kullanıldığı yer:** `content/scenarios/en/quote-drafting.md`
- **Cevap:**
- **Durum:** Açık

### TODO-041 — Sipariş–irsaliye–fatura eşleştirme deneyimi
- **Gerekli:** Aynı sorular (akaryakıt dağıtım vakasıyla bağlantılı olabilir).
- **Kullanıldığı yer:** `content/scenarios/en/order-matching.md`
- **Cevap:**
- **Durum:** Açık

### TODO-042 — Çağrı kaydı analizi deneyimi
- **Gerekli:** Aynı sorular.
- **Kullanıldığı yer:** `content/scenarios/en/call-analysis.md`
- **Cevap:**
- **Durum:** Açık

### TODO-043 — Kurumsal bilgi asistanı (RAG) deneyimi
- **Gerekli:** Aynı sorular.
- **Kullanıldığı yer:** `content/scenarios/en/knowledge-assistant.md`
- **Cevap:**
- **Durum:** Açık

### TODO-044 — Eğitim içeriğinden soru üretimi deneyimi
- **Gerekli:** Aynı sorular (eğitim platformu AI modülü vakasıyla bağlantılı olabilir).
- **Kullanıldığı yer:** `content/scenarios/en/question-generation.md`
- **Cevap:**
- **Durum:** Açık

---

## H. Vaka analizleri

Vaka taslakları `content/case-studies/en/` altında `draft: true` olarak duruyor ve **yayında değil**. Her vaka için dört madde var. Metrik kuralı: her sayı için taban değer, yeni değer, ölçüm dönemi ve örneklem birlikte verilir. Ölçülmemiş fayda "müşteri geri bildirimi" diye etiketlenir. Müşteri adı ve logosu yalnızca **yazılı izinle** kullanılır.

### Vaka 1 — On-prem teklif asistanı (`onprem-quote-assistant.md`)

#### TODO-045 — İzin ve adlandırma
- **Gerekli:** Yayın izni var mı (yazılı)? Müşteri adı mı kullanılacak, anonim mi ("bir medikal teknoloji firması")?
- **Cevap:**
- **Durum:** Açık

#### TODO-046 — Künye
- **Gerekli:** Sektör, şirket ölçeği, proje süresi, ekip (kaç kişi, hangi roller), teknoloji, model (proje / NGSD / stüdyo).
- **Cevap:**
- **Durum:** Açık

#### TODO-047 — Problem, taban değer ve sonuç
- **Gerekli:** Başlangıçtaki ölçülmüş durum (ör. teklif taslağı süresi), sonraki değer, ölçüm yöntemi, dönem, örneklem (kaç teklif).
- **Cevap:**
- **Durum:** Açık

#### TODO-048 — Öğrenilenler ve müşteri sözü
- **Gerekli:** Projede öğrendiğiniz 2–3 dürüst ders; müşteri sözü (isim/rol ve izinle).
- **Cevap:**
- **Durum:** Açık

### Vaka 2 — Eğitim platformunda AI modülü (`education-ai-module.md`)

#### TODO-049 — İzin ve adlandırma
- **Gerekli:** Aynı (hangi platform, kendi ürününüz mü müşteri mi?).
- **Cevap:**
- **Durum:** Açık

#### TODO-050 — Künye
- **Cevap:**
- **Durum:** Açık

#### TODO-051 — Problem, taban değer ve sonuç
- **Gerekli:** Ör. üretilen soruların düzeltilmeden onaylanma oranı, hazırlık süresi (önce/sonra), örneklem.
- **Cevap:**
- **Durum:** Açık

#### TODO-052 — Öğrenilenler ve müşteri sözü
- **Cevap:**
- **Durum:** Açık

### Vaka 3 — Akaryakıt dağıtım yönetim sistemi (`fuel-distribution-system.md`)

#### TODO-053 — İzin ve adlandırma
- **Cevap:**
- **Durum:** Açık

#### TODO-054 — Künye
- **Cevap:**
- **Durum:** Açık

#### TODO-055 — Problem, taban değer ve sonuç
- **Gerekli:** Ör. gün sonu mutabakat süresi, teslimat–fatura uyuşmazlığı (önce/sonra), dönem.
- **Cevap:**
- **Durum:** Açık

#### TODO-056 — Öğrenilenler ve müşteri sözü
- **Cevap:**
- **Durum:** Açık

### Vaka 4 — Mobil uygulama ürünleştirme / Petopiya (`petopiya-mobile-app.md`)

#### TODO-057 — İzin ve adlandırma
- **Gerekli:** Uygulama adı ve mağaza bağlantısı kullanılabilir mi?
- **Cevap:**
- **Durum:** Açık

#### TODO-058 — Künye
- **Cevap:**
- **Durum:** Açık

#### TODO-059 — Problem ve sonuç
- **Gerekli:** Fikirden yayına süre, yayın tarihi, (varsa) kullanıcı/indirme verisi — yalnızca müşteri izin verirse.
- **Cevap:**
- **Durum:** Açık

#### TODO-060 — Öğrenilenler ve müşteri sözü
- **Cevap:**
- **Durum:** Açık

### Vaka 5 — Kamu kütüphane sistemi / Koha (`koha-library-system.md`)

#### TODO-061 — İzin ve adlandırma
- **Gerekli:** Kurum adı kullanılabilir mi? Kamu kurumlarında genellikle ayrıca onay gerekir.
- **Cevap:**
- **Durum:** Açık

#### TODO-062 — Künye
- **Cevap:**
- **Durum:** Açık

#### TODO-063 — Problem ve sonuç
- **Gerekli:** Hangi özelleştirmeler yapıldı, güncellemelerde bozulmama nasıl sağlandı, ölçülebilir sonuç varsa.
- **Cevap:**
- **Durum:** Açık

#### TODO-064 — Öğrenilenler ve müşteri sözü
- **Cevap:**
- **Durum:** Açık

### TODO-065 — Diğer müşteri sözleri
- **Gerekli:** İzinli müşteri sözleri (isim, rol, sektör). Sahte veya genel ("Harika ekip!") söz kullanılmaz. Önerilen sorular: Başlamadan önce sizi en çok ne endişelendiriyordu? Sizi en çok ne şaşırttı? Benzer durumdaki birine ne söylersiniz?
- **Kullanıldığı yer:** `src/content/testimonials.ts` (boşken gizli)
- **Cevap:**
- **Durum:** Açık

### TODO-066 — Müşteri logoları
- **Gerekli:** Yazılı izinle kullanılabilecek müşteri logoları.
- **Kullanıldığı yer:** ana sayfa kanıt bölümü (boşken gizli)
- **Cevap:**
- **Durum:** Açık

---

## I. Görsel ve medya

### TODO-067 — Ekip fotoğrafları
- **Gerekli:** Gerçek ekip fotoğrafları (stok veya AI üretimi görsel kullanılmaz).
- **Kullanıldığı yer:** `src/content/team.ts`
- **Cevap:**
- **Durum:** Açık

### TODO-068 — /hello için kurucu videosu
- **Gerekli:** 60 saniyelik, telefonla çekilmiş doğal kurucu videosu (YouTube unlisted veya dosya). Yoksa bölüm gizlenir.
- **Kullanıldığı yer:** `hello.json`
- **Cevap:**
- **Durum:** Açık

### TODO-069 — Arayüz ekran görüntüleri
- **Gerekli:** Vakalar için sentetik veriyle hazırlanmış gerçek arayüz görüntüleri.
- **Kullanıldığı yer:** vaka sayfaları
- **Cevap:**
- **Durum:** Açık

### TODO-070 — Örnek değerlendirme raporu
- **Gerekli:** Anonimleştirilmiş örnek AI hazırlık değerlendirmesi raporu (PDF). Ücretsiz değerlendirmenin işe yarar bir çıktı verdiğini gösterir.
- **Kullanıldığı yer:** `ai-readiness.json`
- **Cevap:**
- **Durum:** Açık

---

## J. Diğer

### TODO-071 — KOSGEB programı teyidi
- **Gerekli:** KOSGEB KOBİ Dijital Dönüşüm Destek Programı koşullarının resmî kaynaktan güncel teyidi (kapsam, sektör, alt/üst limit, olgunluk raporu şartı). Sitede bahsedilsin mi?
- **Kullanıldığı yer:** `pricing.json` → "Public funding" bölümü, `ai-readiness.json`
- **Cevap:**
- **Durum:** Açık

### TODO-072 — Yayın tarihi
- **Gerekli:** Yeni sitenin yayına gireceği tarih. Senaryo sayfalarının `datePublished` alanı bu tarihe çekilir.
- **Kullanıldığı yer:** `content/scenarios/en/*.md`
- **Cevap:**
- **Durum:** Açık

### TODO-073 — Ürünlerin sahipliği
- **Gerekli:** ILC, StudyScore AI ve Eğitim İste Genixo'nun kendi ürünleri mi, Genixo tarafından mı işletiliyor? Sitede "Products we built and still run" yazıyor.
- **Kullanıldığı yer:** `home.json`, `about.json`, `product-studio.json`, `src/locales/en/seo.json` → `pages.products` açıklaması
- **Cevap:**
- **Durum:** Açık

### TODO-074 — Çalışılan sektörler
- **Gerekli:** Proje yaptığınız sektörlerin listesi (ör. eğitim, enerji dağıtım, sağlık, sigorta, kamu). Sadece gerçekten proje yapılanlar.
- **Kullanıldığı yer:** Henüz metinde yok. Cevap gelince `about.json` ve `hello.json`'a eklenir.
- **Cevap:**
- **Durum:** Açık

---

## Notlar (TODO değil)

### /hello sayfası ve UTM
`/en/hello` ve `/tr/hello` noindex'tir ve sitemap'te yer almaz. Kartvizit QR'ı, BNI sunumu ve e-posta imzası bu sayfaya şu kalıpla bağlanır:

- Kartvizit QR: `https://genixo.ai/tr/hello?utm_source=card&utm_medium=qr&utm_campaign=hello`
- BNI sunumu: `https://genixo.ai/tr/hello?utm_source=bni&utm_medium=referral&utm_campaign=hello`
- E-posta imzası: `https://genixo.ai/tr/hello?utm_source=email&utm_medium=signature&utm_campaign=hello`

`utm_source` kanalı, `utm_medium` ortamı söyler; `utm_campaign` her zaman `hello` kalır. Analytics'te kanallar bu alanla ayrılır.

