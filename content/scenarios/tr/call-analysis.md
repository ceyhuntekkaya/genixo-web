---
title: "Türkçe çağrı kaydı analizi: her çağrı özetlenir, riskliler işaretlenir"
metaTitle: "Türkçe yapay zekâ çağrı kaydı analizi"
description: "Her çağrı metne dökülür, özetlenir ve etiketlenir; riskli çağrılar bir yönetici için işaretlenir. Türkçe çağrı analizi nasıl çalışır, sınırları ve KVKK."
translationKey: "scenario-call-analysis"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "Çağrı analizi, kaydedilen her çağrıyı metne çevirir, bir özet yazar, konuyu etiketler ve dikkat isteyen çağrıları işaretler. Yöneticiler küçük bir rastgele örneklem dinlemek yerine işaretlenen çağrıları inceler."
relatedServices: ["ai-automation"]
order: 4
card:
  today: "Çağrıların küçük bir örneklemi elle dinleniyor."
  withAi: "Her çağrı metne dökülür, özetlenir ve etiketlenir; riskli çağrılar incelemeye işaretlenir."
  measure: "Kapsanan çağrı payı, kontrol edilen örneklemde etiket doğruluğu ve bir sorunu fark etme süresi."
cta:
  title: "On anonim kayıt gönderin."
  lead: "Ses kalitesine, konulara ve bugünkü inceleme sürecinize bakar, ilk görüşmede bir pilotun neyi kapsayabileceğini söyleriz."
faq:
  - q: "Çağrı kaydı analizi nedir?"
    a: "Kaydedilen çağrıları metne çevirmek, özetlemek, konusunu etiketlemek ve şikâyet, iptal talebi veya uyum sorunu gibi dikkat isteyen çağrıları işaretlemektir."
  - q: "Türkçe konuşmadan metne ne kadar doğru?"
    a: "Çoğu kayıtta özet ve konu etiketi için yeterince doğrudur; insan kontrolü olmadan kelimesi kelimesine döküm için değil. Telefon ses kalitesi, ağız ve üst üste konuşma sonucu etkiler; doğruluğu kendi kayıtlarınız üzerinde ölçeriz."
  - q: "Çağrı analizi KVKK'ya göre serbest mi?"
    a: "Çağrı kayıtları kişisel veri içerir. Arayanlar bilgilendirilmeli, amaç tanımlanmalı ve verinin nerede işlendiği önemlidir. Sistemi kendi sunucularınızda çalıştırmak yurt dışına aktarımı ortadan kaldırır. Kurulumu hukuk danışmanınız teyit etmelidir."
  - q: "Bir pilot ne kadar sürer?"
    a: "Pilot tek bir çağrı türü veya ekiple başlar ve bugünkü inceleme sürecinize göre ölçülür. Tipik süre ve ücret fiyatlandırma sayfasında listelenir."
  - q: "Maliyeti nedir?"
    a: "Maliyet çağrı hacmine, ses kalitesine, ihtiyaç duyduğunuz etiketlere ve sistemin nerede çalıştığına bağlıdır. Fiyatlandırma sayfasına bakın."
relatedCases: []
draft: false
---

## Bugün

Yöneticiler her hafta bir avuç çağrı dinler ve bir form doldurur. Çağrıların çoğu hiç duyulmaz. Şikâyetler ve riskli vaatler, oldukları anda değil, müşteri üst makama taşıdığında ortaya çıkar.

## Yapay zekâ ile

1. **Kayıtlar toplanır.** Santralinizden veya çağrı merkezi sisteminizden.
2. **Konuşma metne çevrilir.** Gerektiğinde Türkçe telefon sesine göre ayarlanmış bir konuşmadan metne modeli döküm üretir.
3. **Çağrı özetlenir ve etiketlenir.** Dil modeli kısa bir özet yazar ve sizin tanımladığınız konuları atar: sipariş, şikâyet, iptal veya ödeme gibi.
4. **Riskli çağrılar işaretlenir.** Ölçütlerinize uyan çağrılar bir yöneticinin inceleme listesine konur.
5. **Bir kişi inceler.** Yöneticiler işaretlenen çağrıları dinler ve gerektiğinde etiketleri düzeltir.
6. **Düzeltmeler saklanır.** Düzeltilen etiketler test setinin parçası olur.

## Teknoloji

Bir konuşmadan metne modeli (Whisper ailesi modeller Türkçe için ince ayarlanabilir), özet ve etiketleme için bir dil modeli ve santral sisteminize bağlı bir inceleme ekranı. Çağrı kayıtları kişisel veri içerdiği için modelleri genel olarak kendi sunucularınızda çalıştırmayı öneririz.

## Neyi ölçeriz

Pilotta şunları ölçeriz:

- analiz edilen çağrıların payı, bugünkü örneklemle karşılaştırılarak;
- yöneticilerin kontrol ettiği bir örneklemde etiket doğruluğu;
- kendi kayıtlarınızdan bir sette döküm kalitesi;
- sorunlu bir çağrının yöneticiye ulaşma hızı.

Başlangıç ölçümü ve hedef, pilot başlamadan önce yazılır.

## Sınırlar

- Dökümler özet ve etiket için yeterlidir; incelemesiz hukuki kayıt için değil.
- Kötü ses, arka plan gürültüsü ve üst üste konuşma kaliteyi düşürür.
- Arayanlar, kayıt ve amacı hakkında KVKK kapsamında bilgilendirilmelidir. Bkz. [veri güvenliği ve KVKK](/data-security).

## Pilot

Tek bir çağrı türü veya tek bir ekiple başlar, son çağrıları bugünkü incelemenizle paralel işler ve sonuçları her hafta karşılaştırırız. Tipik süre ve ücret: [[TODO-023]].

## Bu senaryodaki deneyimimiz

[[TODO-042]]

## Sonraki adım

[Yapay zekâ hazırlık değerlendirmesi](/ai-readiness-assessment) ile başlayın veya [fiyat ve süreler](/pricing) sayfasına bakın.
