---
title: "Fatura ve belge işleme, muhasebecinizin onayıyla"
metaTitle: "Yapay zekâ ile fatura ve belge işleme"
description: "Yapay zekâ fatura ve irsaliyeleri okur, alanları çıkarır ve taslak bir ERP kaydı açar. Emin olunmayan alanlar ekibinize gider. Nasıl çalışır, neyi ölçeriz."
translationKey: "scenario-document-processing"
type: "scenario"
author: "ceyhun-tekkaya"
datePublished: "2026-10-09"
dateModified: "2026-10-09"
summary: "Yapay zekâ ile belge işleme, fatura ve irsaliyeleri okur, ERP'nizin ihtiyaç duyduğu alanları çıkarır ve taslak bir kayıt hazırlar. Sistemin emin olmadığı alanlar bir kişiye gider; ekibiniz onaylamadan hiçbir şey kayda geçmez."
relatedServices: ["ai-automation"]
order: 1
card:
  today: "Fatura ve irsaliyeler ERP'ye elle giriliyor."
  withAi: "Alanlar çıkarılır, emin olunmayanlar bir kişiye gider, taslak kayıt açılır."
  measure: "Belge başına süre, düzeltme oranı ve elle kontrole giden pay."
cta:
  title: "Bir aylık faturanızı getirin."
  lead: "Belge türlerinize, tarama kalitesine ve ERP'nize birlikte bakar, ilk görüşmede pilotun anlamlı olup olmadığını söyleriz."
faq:
  - q: "Yapay zekâ ile belge işleme nedir?"
    a: "Fatura, irsaliye veya form gibi belgeleri okuyan, ihtiyaç duyduğunuz alanları çıkaran ve taslak bir kayıt hazırlayan sistemdir. Kayıt geçilmeden önce sistemin emin olmadığı alanları bir kişi kontrol eder."
  - q: "ERP'mizle nasıl çalışır?"
    a: "Çıkarılan alanlar ERP'nizin yapısına eşlenir ve API'si ya da bir içe aktarma dosyası üzerinden taslak olarak gönderilir. Onay olmadan hiçbir şey kayda geçmez."
  - q: "Bir pilot ne kadar sürer?"
    a: "Pilot bir veya iki belge türünü kapsar ve başlamadan alınan bir başlangıç ölçümüne göre ölçülür. Tipik süre ve ücret fiyatlandırma sayfasında listelenir."
  - q: "Riskler neler?"
    a: "Kötü taramalar, el yazısı notlar ve alışılmadık yerleşimler çıkarma kalitesini düşürür. Bu yüzden güven eşiğinin altındaki alanlar her zaman bir kişiye gider ve hata oranı her hafta ölçülür."
  - q: "Maliyeti nedir?"
    a: "Maliyet belge türü sayısına, hacme, tarama kalitesine ve ERP entegrasyonuna bağlıdır. Fiyatlandırma sayfası değerlendirme ve pilot tekliflerini anlatır."
relatedCases: []
draft: false
---

## Bugün

Belgeler e-posta, PDF, sahadan fotoğraf veya kâğıt olarak gelir. Biri her birini açar, tedarikçiyi, tarihi, tutarları ve satırları bulur, ERP'ye yazar. Hatalar sonra, genellikle ay sonunda tutarlar tutmayınca bulunur. Hacim artınca birikmiş iş de onunla büyür.

## Yapay zekâ ile

1. **Belge gelir.** Ortak bir kutudan, bir klasörden veya bir taramadan.
2. **Metin okunur.** OCR, tarama ve fotoğrafları metne çevirir; dijital PDF'ler doğrudan okunur.
3. **Alanlar çıkarılır.** Dil modeli sizin tanımladığınız alanları ayırt eder: tedarikçi, vergi numarası, tarih, satırlar ve toplamlar. Her birine bir güven puanı verir.
4. **Kurallar sonucu kontrol eder.** Kod, satır toplamlarının tuttuğunu, vergi numarası biçiminin geçerli olduğunu ve tedarikçinin kayıtlarınızda olduğunu doğrular. Modeli aritmetik yapmaz.
5. **Bir kişi inceler.** Güven eşiğinin altındaki alanlar ve bir kuralı geçemeyen belgeler, aslı yanında duracak biçimde ekibinize gösterilir.
6. **Taslak kayıt açılır.** Onaylanan veri ERP'ye taslak olarak gönderilir.
7. **Düzeltmeler saklanır.** Her düzeltme test setine eklenir; sonraki değişiklikler gerçek hatalara göre kontrol edilir.

## Teknoloji

Taranmış belgeler için OCR, alan çıkarma için bir dil modeli, kodla yazılmış kural kontrolleri ve ERP'nizle bir entegrasyon. Model, Ollama üzerinden sunulan açık bir modelle kendi sunucularınızda, kendi bulut hesabınızda veya bir API sağlayıcısı üzerinden çalışabilir. Nerede çalışacağı veri kurallarınıza bağlıdır; bkz. [veri güvenliği ve KVKK](/data-security).

## Neyi ölçeriz

Beklenen tasarruf yayımlamayız. Pilotta, sizin belgelerinizde şunları ölçeriz:

- belge başına harcanan süre, önce ve sonra;
- bir kişinin düzelttiği alanların payı;
- tamamen elle kontrole giden belgelerin payı;
- kayda geçtikten sonra bulunan hatalar.

Başlangıç ölçümü ve hedef, pilot başlamadan önce yazılır.

## Sınırlar

- Kötü taramalar, el yazısı ve metnin üstündeki kaşeler kaliteyi düşürür. Bu belgeler bir kişiye gider.
- Alışılmadık yerleşimli yeni tedarikçiler, yeterince örnek birikene kadar inceleme isteyebilir.
- Sistem kayıt hazırlar; bir faturanın ödenip ödenmeyeceğine karar vermez.

## Pilot

Pilot bir veya iki belge türüyle başlar. Son belgelerinizden doğru değerleriyle bir test seti kurar, sistemi yeni belgelerde mevcut sürecinizle paralel çalıştırır ve rakamları her hafta raporlarız. Tipik süre ve ücret: [[TODO-023]].

## Bu senaryodaki deneyimimiz

[[TODO-039]]

## Sonraki adım

[Yapay zekâ hazırlık değerlendirmesi](/ai-readiness-assessment), belge işlemenin doğru başlangıç yeri olup olmadığını söyler. Maliyeti belirleyen etkenler için bkz. [fiyat ve süreler](/pricing).
