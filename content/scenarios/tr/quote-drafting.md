---
title: "Satışçının onayladığı, yapay zekâ ile teklif taslağı"
metaTitle: "Satış onayıyla yapay zekâ teklif taslağı"
description: "Yapay zekâ talebi okur, kalemleri kataloğunuza eşler ve teklif taslağını hazırlar. Fiyatları kod hesaplar, her teklifi satışçınız onaylar."
translationKey: "scenario-quote-drafting"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "Yapay zekâ destekli teklif taslağı, müşteri talebini okur, kalemleri kataloğunuza eşler, fiyatları fiyat kurallarınıza hesaplatır ve bir taslak hazırlar. Satışçı her teklifi göndermeden önce düzeltir ve onaylar."
relatedServices: ["ai-automation"]
order: 2
card:
  today: "Her teklif eski tekliflerden, fiyat listesinden ve hafızadan yeniden kuruluyor."
  withAi: "Kalemler kataloğa eşlenir, fiyatları kod hesaplar, taslak satışçıya gider."
  measure: "Taslak süresi, düzeltme oranı ve müşterinin teklifi alma süresi."
cta:
  title: "Son 20 teklifinizi getirin."
  lead: "Birlikte inceler, ilk görüşmede bu yaklaşımın kataloğunuz için işe yarayıp yaramayacağını söyleriz."
faq:
  - q: "Yapay zekâ ile teklif taslağı nedir?"
    a: "Teklif talebini okuyan, istenen kalemleri kataloğunuza eşleyen, fiyat kurallarınızı uygulayan ve taslak bir teklif hazırlayan sistemdir. Satışçı göndermeden önce inceler, düzeltir ve onaylar."
  - q: "Fiyatı yapay zekâ mı belirliyor?"
    a: "Hayır. Fiyatlar, iskontolar ve toplamlar koddaki kurallarla hesaplanır veya ERP'nizden alınır. Dil modeli yalnızca talebi okur, kalemleri eşler ve metni yazar."
  - q: "Bir pilot ne kadar sürer?"
    a: "Pilot genellikle tek bir ürün grubuyla, son teklifler test seti olarak kullanılarak başlar ve her hafta ölçülür. Tipik süre ve ücret fiyatlandırma sayfasında listelenir."
  - q: "Riskler neler?"
    a: "Katalogda olmayan kalemler, belirsiz talepler ve tutarsız ürün tanımları yanlış eşleşmeye yol açar. Bu kalemler satışçı için işaretlenir ve düzeltme oranı izlenir."
  - q: "Maliyeti nedir?"
    a: "Maliyet katalog büyüklüğüne, fiyat kurallarına, veri temizliğine ve CRM veya ERP entegrasyonuna bağlıdır. Fiyatlandırma sayfası değerlendirme ve pilot tekliflerini anlatır."
relatedCases: []
draft: false
---

## Bugün

Talep e-posta veya telefonla gelir. Satışçı eski teklifleri arar, fiyat listesini açar, bu müşteriye hangi iskontonun uygulandığını hatırlamaya çalışır ve teklifi Excel veya Word'de kurar. Sonuç, kimin hazırladığına bağlıdır. Teklifler uzun sürer, fiyatlar tutarsızdır ve şirket bir iki deneyimli kişiye dayanır.

## Yapay zekâ ile

1. **Talep okunur.** E-posta metni, ekler veya bir form, istenen kalemlerin ve miktarların listesine dönüşür.
2. **Kalemler kataloğunuza eşlenir.** Vektör arama, aynı ürünün farklı adları dahil en yakın katalog kayıtlarını bulur.
3. **Fiyatları kod hesaplar.** Fiyat listeniz, müşteriye özel iskontolar ve asgari miktarlar bir fiyatlandırma hizmetiyle uygulanır; dil modeliyle asla.
4. **Taslak yazılır.** Açıklamalar, koşullar ve kapak notu şablonlarınızdan ve geçmiş tekliflerden hazırlanır.
5. **Satışçı onaylar.** Emin olunmayan eşleşmeler ve katalogda bulunamayan kalemler vurgulanır. Satışçı teklifi düzeltir ve onaylar.
6. **Düzeltmeler saklanır.** Her düzeltme test setine eklenir.

## Teknoloji

Katalog ve geçmiş teklifler üzerinde vektör arama, kodla yazılmış bir fiyatlandırma hizmeti, talepleri okumak ve metin taslağı yazmak için bir dil modeli ve CRM veya ERP'nizle bir entegrasyon. Model, müşteri verisi şirketin içinde kalsın diye açık bir modelle kendi sunucularınızda veya kendi bulut hesabınızda çalışabilir. Bkz. [veri güvenliği ve KVKK](/data-security).

## Neyi ölçeriz

İlk sürüm teklifin tamamını değil, taslağın büyük kısmını hazırlar. Pilotta şunları ölçeriz:

- taslak üretme süresi, önce ve sonra;
- satışçının düzelttiği satırların payı;
- müşterinin teklifi alma süresi;
- gönderdikten sonra bulunan fiyat hataları.

Başlangıç ölçümü ve hedef, pilot başlamadan önce yazılır.

## Sınırlar

- Katalogda olmayan kalemler bir kişiye gider.
- İlk haftalarda düzeltme oranı yüksek olabilir; gizlenmez, ölçülür.
- Tutarsız katalog tanımları eşleşme kalitesini düşürür. Bunları temizlemek bazen pilotun parçasıdır.

## Pilot

Tek bir ürün grubuyla başlarız. Son tekliflerden bir test seti kurulur, sistem mevcut sürecinizle yan yana çalışır ve sonuçlar her hafta raporlanır. Tipik süre ve ücret: [[TODO-023]].

## Bu senaryodaki deneyimimiz

[[TODO-040]]

## Sonraki adım

[Yapay zekâ hazırlık değerlendirmesi](/ai-readiness-assessment), teklif taslağının doğru ilk süreç olup olmadığını kontrol eder. Maliyeti belirleyen etkenler [fiyat ve süreler](/pricing) sayfasında anlatılır.
