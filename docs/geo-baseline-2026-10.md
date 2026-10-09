# GEO sıfır noktası — 9 Ekim 2026

Bu kayıt, kod değişiklikleri yayına alınmadan önceki canlı siteye aittir. Motor cevapları ve PageSpeed skorları bu oturumda ölçülmedi; uydurulmadı.

## Canlı site (`scripts/seo-check.mjs https://genixo.ai`)

41 değil, canlı sitemap 110 URL döndü. Betik 115 hata verdi (110 sitemap URL + 5 noindex kontrolü). Özet:

- `html lang` birçok adreste `tr` (İngilizce ve Almanca yollar dahil).
- Meta `keywords` duruyor.
- `x-default` hreflang yok.
- JSON-LD gerçek `<script type="application/ld+json">` olarak görünmüyor; `#organization` yok.
- `og:image` 404 (`/images/og-image.jpg`, `/images/solutions/{slug}.jpg`, `/images/products/{slug}.jpg`).
- Pasif ürünler sitemap'te ve 404 (`genixo-work-ai`, `genixo-assistant`, `tomer-e-yadis`, `retired-travel-app`).
- `/de`, `/fr`, `/ru`, `/tr/chat`, `/tr/case-study` noindex değil.
- Bazı başlıklar 65 karakteri aşıyor (`… | Genixo Bilişim ve Teknoloji` / `Genixo IT und Technologie`).
- `/tr/government-support` ve `/tr/case-study` sayfalarında iki `h1`.

Ayrıntı komut çıktısı bu ölçümde üretildi; yayındaki HTML değişince aynı komut yeniden çalıştırılmalı.

## DNS

`dig +short genixo.ai A` ve `www.genixo.ai` ikisi de `185.72.9.213`. Cloudflare anycast aralığı değil. WAF/Bot Fight ayarı bu kayıttan doğrulanamaz; sunucu panelinden bakılmalı.

## Arama ve hız

- `site:genixo.ai` sonuç sayısı ve "Software, App, SaaS & Startup Landing Pages Pack" başlığının hâlâ görünüp görünmediği bu oturumda aranmadı (arama aracı sonuç döndürmedi).
- PageSpeed Insights mobil skorları (`/tr`, `/tr/solutions/ai-integration`, blog) ölçülmedi.

## Prompt seti

`docs/geo-prompt-seti.md` içindeki 60 soru yazıldı. ChatGPT, Gemini, AI Mode, Copilot, Perplexity ve Claude üzerinde çalıştırılmadı.

## Yerel doğrulama (bu çalışma ağacı, `http://localhost:3010`)

`node scripts/seo-check.mjs http://localhost:3010` → 41 sitemap URL, 5 noindex URL, 0 hata.

- `/tr` `lang="tr"`, `/en` `lang="en"`.
- `/xx` ve `/tr/yok/yol` 404.
- `/llms.txt` 200 `text/plain`.
- `robots.txt` içinde `_next` yok; `/api/` kapalı.
- `/tr/service` ve `/tr/service/ai-integration` 308 ile çözüm adresine gidiyor.
- `Host: www.genixo.ai` isteği 308 ile `https://genixo.ai/...` adresine gidiyor.
- `/tr/about` HTML'inde "Ar-Ge şirketidir" var.
- Eksik frontmatter'lı deneme dosyası içerik yükleyicisinde `description length` hatasıyla duruyor; dosya silindi.
