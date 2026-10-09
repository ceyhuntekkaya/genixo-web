---
title: "Öğretim materyalinden soru üretimi, öğretmen onayıyla"
metaTitle: "Eğitim için yapay zekâ ile soru üretimi"
description: "Yapay zekâ ders materyalinizden soru taslağı çıkarır, öğretmen her birini düzenler ve onaylar. Soru üretimi nasıl çalışır, sınırları ve neyi ölçeriz."
translationKey: "scenario-question-generation"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "Yapay zekâ ile soru üretimi, ders materyalinizden sınav ve alıştırma soruları taslağı çıkarır; her soru dayandığı pasaja bağlanır. Öğretmen, öğrenciler görmeden önce her soruyu düzenler ve onaylar."
relatedServices: ["ai-automation", "product-studio"]
order: 6
card:
  today: "Öğretmenler her ders ve seviye için soru bankalarını elle yazıyor."
  withAi: "Sorular ders materyalinden taslak olarak çıkar, öğretmen her birini düzenler ve onaylar."
  measure: "Düzenlemeden onaylanan pay, soru seti başına hazırlık süresi ve hata bildirimleri."
cta:
  title: "Bir ünitelik ders materyali getirin."
  lead: "Biçime, ihtiyaç duyduğunuz soru türlerine ve inceleme sürecinize bakar, ilk görüşmede bir pilotun ne üretebileceğini söyleriz."
faq:
  - q: "Yapay zekâ ile soru üretimi nedir?"
    a: "PDF, slayt veya metin gibi ders materyalini okuyan ve dayandığı pasaja bağlı soru taslakları çıkaran sistemdir. Öğretmen her soruyu inceler, düzenler ve onaylar."
  - q: "Öğrenciler soruları öğretmen incelemesi olmadan kullanabilir mi?"
    a: "Önermeyiz. Üretilen sorular belirsiz veya yanlış olabilir; her soru yayımlanmadan önce öğretmen onayından geçer."
  - q: "Hangi soru türleri desteklenir?"
    a: "Çoktan seçmeli, doğru-yanlış, kısa yanıt ve açık uçlu sorular yaygındır. Türler ve zorluk düzeyleri pilot sırasında öğretmenlerinizle tanımlanır."
  - q: "Bir pilot ne kadar sürer?"
    a: "Pilot tek bir ders veya üniteyle başlar ve öğretmenlerin bugün harcadığı süreye göre ölçülür. Tipik süre ve ücret fiyatlandırma sayfasında listelenir."
  - q: "Maliyeti nedir?"
    a: "Maliyet materyal biçimlerine, soru türlerine, dillere ve soruların gittiği platforma bağlıdır. Fiyatlandırma sayfasına bakın."
relatedCases: []
draft: false
---

## Bugün

Öğretmenler ve içerik ekipleri her ünite, seviye ve sınav için soruları elle yazar. Büyük bir soru bankası kurmak haftalar alır; yazarlar arasında tutarlı tutmak zordur.

## Yapay zekâ ile

1. **Materyal yüklenir.** Bir üniteye ait PDF'ler, slaytlar veya metinler.
2. **İçerik hazırlanır.** Metin çıkarılır ve pasajlara bölünür; varsa öğrenme hedefleri eklenir.
3. **Sorular taslak olarak çıkar.** Dil modeli istenen türde ve düzeyde sorular hazırlar; her biri kaynak pasajına bağlanır.
4. **Öğretmen inceler.** Her soru kaynağının yanında gösterilir. Öğretmen düzenler, onaylar veya reddeder.
5. **Onaylanan sorular yayımlanır.** Soru bankanıza veya öğrenme platformunuza gider.
6. **Düzenlemeler saklanır.** Öğretmen düzeltmeleri istemleri ve kontrolleri iyileştirmek için kullanılır.

## Teknoloji

Belge çıkarma, taslak için bir dil modeli, her soruyu kaynağına bağlayan getirme ve öğretmenler için bir inceleme ekranı. PDF'lerdeki formül ve tablolar özel işlem ister; bu içerikte tam üretimden çok “öner ve düzenle” akışı daha iyi çalışır.

## Neyi ölçeriz

Pilotta şunları ölçeriz:

- düzenlemeden onaylanan soruların payı;
- reddedilenlerin payı ve nedeni;
- onaylanan soru başına öğretmen süresi, önce ve sonra;
- yayımlandıktan sonra bildirilen hatalar.

Başlangıç ölçümü ve hedef, pilot başlamadan önce yazılır.

## Sınırlar

- PDF'lerdeki formüller, şemalar ve tablolar en zor kısımdır.
- Sorular teknik olarak doğru olup pedagojik olarak zayıf olabilir. Karar öğretmenindir.
- Zorluk düzeyleri zamanla gerçek öğrenci sonuçlarıyla kalibre edilmelidir.

## Pilot

Tek bir ders veya ünite ve tek bir soru türüyle başlar, onay oranlarını her hafta ölçer ve öğretmenlerinizle ayarlarız. Tipik süre ve ücret: [[TODO-023]].

## Bu senaryodaki deneyimimiz

[[TODO-044]]

## Sonraki adım

[Yapay zekâ hazırlık değerlendirmesi](/ai-readiness-assessment) ile başlayın. Sorular bir öğrenme ürününün parçasıysa [ürün stüdyosu](/product-studio) sayfasına bakın.
