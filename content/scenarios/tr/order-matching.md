---
title: "Yalnızca istisnaları gösteren sipariş, irsaliye ve fatura eşleştirme"
metaTitle: "Yapay zekâ ile sipariş, irsaliye ve fatura eşleştirme"
description: "Sipariş, irsaliye ve faturalar çıkarılır ve kurallarla eşleştirilir. Muhasebe ekibiniz yalnızca tutmayan kayıtları inceler. Nasıl çalışır."
translationKey: "scenario-order-matching"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "Sipariş eşleştirme, sipariş, irsaliye ve faturalardaki veriyi çıkarır ve deterministik kurallarla eşleştirir. Farklar sınıflanır; muhasebe ekibiniz yalnızca tutmayan kayıtları inceler."
relatedServices: ["ai-automation", "custom-software"]
order: 3
card:
  today: "Muhasebe siparişi, irsaliyeyi ve faturayı satır satır karşılaştırıyor."
  withAi: "Belgeler kurallarla eşlenir, farklar sınıflanır, yalnızca istisnalar bir kişiye gider."
  measure: "Elle incelenen kayıtlar, istisna oranı ve ay kapanış süresi."
cta:
  title: "Bir aylık uyuşmazlığınızı gösterin."
  lead: "Belgelerinizin nerede ayrıştığına bakar, ilk görüşmede eşleştirmenin ne kadarının güvenle otomatikleşebileceğini söyleriz."
faq:
  - q: "Üçlü eşleştirme nedir?"
    a: "Bir fatura onaylanmadan önce siparişin, irsaliyenin ve faturanın kalem, miktar ve fiyat bakımından uyuştuğunu kontrol etmektir."
  - q: "Yapay zekâ nerede işe yarar, nerede yaramaz?"
    a: "Yapay zekâ, farklı biçimlerde gelen belgeleri okumaya ve kayıtların neden ayrıştığını sınıflamaya yardım eder. Eşleştirmenin kendisi koddaki deterministik kurallarla yapılır; sonuç öngörülebilir ve açıklanabilir olur."
  - q: "Bir pilot ne kadar sürer?"
    a: "Pilot tek bir tedarikçi grubu veya tek bir belge akışıyla başlar ve bugünkü elle efora göre ölçülür. Tipik süre ve ücret fiyatlandırma sayfasında listelenir."
  - q: "Riskler neler?"
    a: "Asıl risk, her belgede farklı yazılan sipariş numarası gibi tutarsız anahtar alanlardır. Pilotun bir parçası, güvenilir eşleştirme anahtarlarını tanımlamaktır."
  - q: "Maliyeti nedir?"
    a: "Maliyet belge hacmine, biçim sayısına ve ERP entegrasyonuna bağlıdır. Değerlendirme ve pilot teklifleri için fiyatlandırma sayfasına bakın."
relatedCases: []
draft: false
---

## Bugün

Her hafta veya ay sonunda muhasebeden biri siparişi, irsaliyeyi ve faturayı yan yana koyar; kalemleri, miktarları ve fiyatları kontrol eder. Kayıtların çoğu tutar. Tutmayan az sayıdaki kayıt asıl önemli olandır ama onları bulmak her şeyi okumayı gerektirir.

## Yapay zekâ ile

1. **Belgeler toplanır.** Sisteminizdeki siparişler; e-posta, e-fatura dosyaları veya taramalardaki irsaliye ve faturalar.
2. **Veri çıkarılır.** Yapılandırılmış dosyalar doğrudan okunur; PDF ve taramalar OCR ve bir dil modeliyle okunur.
3. **Kayıtlar kurallarla eşlenir.** Kod, belgeleri sipariş numarası, tedarikçi, kalem, miktar ve fiyata göre, sizin tanımladığınız toleranslarla eşler.
4. **Farklar sınıflanır.** Tutmayan kayıtlarda sistem bir neden önerir: eksik teslimat, fiyat farkı, kısmi sevkiyat, mükerrer fatura.
5. **İnsanlar istisnaları inceler.** Muhasebe yalnızca tutmayan kayıtları, belgeler ve önerilen neden yan yana görür.
6. **Kararlar kaydedilir.** Her çözüm saklanır; sınıflama zamanla iyileşir.

## Teknoloji

Yapılandırılmamış belgeler için veri çıkarma, kodla yazılmış deterministik eşleştirme kuralları, farklar için bir sınıflayıcı ve ERP ile e-fatura verinize bir entegrasyon. Bu senaryo genellikle mevcut sistemlerdeki temiz verinin üzerine kurulur; o veri yoksa bir [özel yazılım](/custom-software) projesi olarak başlar.

## Neyi ölçeriz

Pilotta şunları ölçeriz:

- elle incelenen kayıt sayısı, önce ve sonra;
- otomatik eşlenip sonra yanlış olduğu anlaşılan kayıtların payı;
- dönemi kapatmak için gereken süre;
- doğru sınıflanan farkların payı.

Başlangıç ölçümü ve hedef, pilot başlamadan önce yazılır.

## Sınırlar

- Sipariş numaraları ve ürün kodları belgeler arasında tutarsızsa eşleştirme kuralları önce tanımlanmalıdır.
- Sistem farkları işaretler ve açıklar. Ödenip ödenmeyeceğine karar ekibinizde kalır.
- Eşleştirme toleransları sizin verdiğiniz bir iş kararıdır.

## Pilot

Tek bir belge akışı veya tedarikçi grubuyla başlar, eşleştirmeyi mevcut sürecinizle paralel çalıştırır ve sonuçları her hafta karşılaştırırız. Tipik süre ve ücret: [[TODO-023]].

## Bu senaryodaki deneyimimiz

[[TODO-041]]

## Sonraki adım

[Yapay zekâ hazırlık değerlendirmesi](/ai-readiness-assessment) ile başlayın veya [fiyat ve süreler](/pricing) sayfasına bakın.
