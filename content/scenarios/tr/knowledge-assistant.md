---
title: "Kaynağını gösteren ve “bilmiyorum” diyebilen kurum bilgi asistanı"
metaTitle: "RAG ile kurum bilgi asistanı"
description: "Bir bilgi asistanı personel sorularını belgelerinizden yanıtlar, kaynağı gösterir ve yetkilere uyar. RAG nasıl çalışır, sınırları, neyi ölçeriz."
translationKey: "scenario-knowledge-assistant"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "Kurum bilgi asistanı, çalışanların sorularını yalnızca sizin belgelerinizle yanıtlar, her yanıtın kaynağını gösterir ve sonuçları her kullanıcının yetkisine göre süzer. Belgelerde yanıt yoksa bunu söyler."
relatedServices: ["ai-automation"]
order: 5
card:
  today: "Yeni gelenler, işlerin nerede ve nasıl yürüdüğünü kıdemli meslektaşlarına soruyor."
  withAi: "Yanıtlar belgelerinizden, kaynaklarıyla ve her kullanıcının yetkisine göre süzülerek gelir."
  measure: "Test setinde yanıt doğruluğu, “bilmiyorum” yanıtlarının payı ve kıdemli personele giden sorular."
cta:
  title: "Ekibinizin en çok sorduğu 30 soruyu seçin."
  lead: "Belgelerinizin bunları yanıtlayıp yanıtlayamayacağına bakar, ilk görüşmede bir asistanın ne yapıp ne yapamayacağını söyleriz."
faq:
  - q: "Kurum bilgi asistanı nedir?"
    a: "Prosedür, ürün bilgisi ve politika gibi kendi belgelerinizle çalışanların sorularını yanıtlayan ve her yanıtın hangi belgeden geldiğini gösteren bir sohbet aracıdır."
  - q: "RAG nedir?"
    a: "Getirme destekli üretim (retrieval-augmented generation). Sistem önce belgelerinizde ilgili pasajları arar, sonra dil modeli yanıtı yalnızca o pasajlara dayanarak, kaynaklarıyla yazar."
  - q: "Belgelerimizde olmayan şeyler hakkında yanıt verebilir mi?"
    a: "Vermemeli ve öyle tasarlarız. Belgelerde yanıt yoksa asistan tahmin etmek yerine bilmediğini söyler."
  - q: "Bir pilot ne kadar sürer?"
    a: "Pilot tek bir belge koleksiyonu ve tek bir ekiple, gerçek sorulardan ve doğru yanıtlardan oluşan bir test setiyle başlar. Tipik süre ve ücret fiyatlandırma sayfasında listelenir."
  - q: "Maliyeti nedir?"
    a: "Maliyet belgelerin hacmine ve biçimine, yetki kurallarına ve modelin nerede çalıştığına bağlıdır. Fiyatlandırma sayfasına bakın."
sources:
  - title: "Brynjolfsson, Li ve Raymond, Generative AI at Work (NBER Working Paper 31161; Quarterly Journal of Economics, 2025)"
    url: "https://www.nber.org/papers/w31161"
relatedCases: []
draft: false
---

## Bugün

Prosedürler, ürün sayfaları ve politikalar paylaşılan klasörlere, e-posta zincirlerine ve insanların kafasına dağılmıştır. Yeni gelenler aynı deneyimli meslektaşlara aynı soruları sorar. Yanıt kime sorduğunuza bağlıdır ve güncelliğini yitirmiş belgeler hâlâ dolaşımdadır.

## Yapay zekâ ile

1. **Belgeler toplanır.** Sizin seçtiğiniz paylaşılan sürücülerden, belge sistemlerinden veya vikilerden.
2. **Belgeler hazırlanır.** Metin çıkarılır, pasajlara bölünür ve arama için dizinlenir. Güncel olmayan sürümler işaretlenir veya dışarıda bırakılır.
3. **Yetkiler uygulanır.** Her kullanıcı yalnızca görmesine izin verilen belgelerden yanıt alır.
4. **Bir soru sorulur.** Sistem en ilgili pasajları bulur.
5. **Yanıt yalnızca o pasajlardan yazılır.** Yanıt kaynaklarını gösterir; kullanıcı kontrol edebilir.
6. **“Bilmiyorum” geçerli bir yanıttır.** Pasajlarda yanıt yoksa asistan bunu söyler.
7. **Geri bildirim saklanır.** Yanlış veya eksik yanıtlar test setine girer ve güncellenmesi gereken belgelere işaret eder.

## Teknoloji

Belge çıkarma ve dizinleme, vektör arama, belge düzeyinde yetki kontrolleri ve getirilen pasajlardan yanıt veren bir dil modeli. Model açık bir modelle kendi sunucularınızda, kendi bulut hesabınızda veya bir API sağlayıcısı üzerinden çalışabilir. Bkz. [veri güvenliği ve KVKK](/data-security).

## Yeni personel için neden daha çok işe yarar

5.179 müşteri destek temsilcisini kapsayan bir çalışmada, üretken yapay zekâ asistanına erişim saatte çözülen konu sayısını ortalama yüzde 14, acemi ve düşük vasıflı çalışanlarda yüzde 34 artırmış; deneyimlilerde etki asgari kalmıştır (Brynjolfsson, Li ve Raymond). O çalışma destek işini ölçmüştür, kurum içi bilgi asistanlarını değil; yine de bu araçların en çok nerede işe yaradığına işaret eder: işlerin nerede olduğunu henüz bilmeyen kişiler.

## Neyi ölçeriz

Pilotta şunları ölçeriz:

- doğru yanıtları bilinen gerçek sorulardan oluşan bir test setinde yanıt doğruluğu;
- doğru kaynağı olan yanıtların payı;
- asistanın bilmediğini doğru söylediği sıklık;
- hâlâ kıdemli personele giden sorular.

Başlangıç ölçümü ve hedef, pilot başlamadan önce yazılır.

## Sınırlar

- Taranmış PDF'ler ve karmaşık tablolar kaliteyi düşürür.
- Güncel olmayan veya çelişen belgeler yanlış yanıt üretir. Belge temizliği çoğu zaman işin parçasıdır.
- Hesaplar modele bırakılmaz. Yanıt bir sayı istiyorsa o sayı üretilmiş metinden değil, bir sistemden gelir.
- Belgelerin içine gizlenmiş talimatlar (prompt injection, istem enjeksiyonu) bilinen bir risktir; asistanın erişimi salt okunurdur ve araçları sınırlıdır.

## Pilot

Tek bir belge koleksiyonu ve tek bir ekiple başlar, gerçek sorulardan bir test seti kurar ve doğruluğu her hafta raporlarız. Tipik süre ve ücret: [[TODO-023]].

## Bu senaryodaki deneyimimiz

[[TODO-043]]

## Sonraki adım

[Yapay zekâ hazırlık değerlendirmesi](/ai-readiness-assessment) ile başlayın veya [fiyat ve süreler](/pricing) sayfasına bakın.
