const base = (process.argv[2] || "https://genixo.ai").replace(/\/$/, "");
const UA = "Mozilla/5.0 (compatible; GPTBot/1.1)";

function rewrite(url) {
  return url.replace("https://genixo.ai", base);
}

function decode(value) {
  return value
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

const sm = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sm.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => rewrite(m[1]));
const titles = new Map();
let fail = 0;

async function checkOg(html, errs) {
  const images = [...html.matchAll(/property="og:image" content="([^"]+)"/g)].map((m) => m[1]);
  if (images.length === 0) {
    errs.push("no og:image");
    return;
  }
  for (const image of images) {
    const target = image.startsWith("http") ? rewrite(image) : new URL(image, base).href;
    const res = await fetch(target, { headers: { "User-Agent": UA }, redirect: "follow" });
    if (res.status !== 200) errs.push(`og:image ${res.status} ${target}`);
  }
}

async function checkPage(url, { indexable }) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "manual" });
  const html = await res.text();
  const errs = [];
  if (res.status !== 200) errs.push(`status ${res.status}`);
  const lang = html.match(/<html[^>]*lang="([^"]+)"/)?.[1];
  const locale = new URL(url).pathname.split("/")[1];
  if (lang !== locale) errs.push(`lang=${lang}`);
  const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] ?? "");
  if (indexable) {
    if (!title || title.length > 65) errs.push(`title len ${title.length}: ${title}`);
    if (titles.has(title)) errs.push(`duplicate title with ${titles.get(title)}`);
    titles.set(title, url);
    const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
    if (desc.length < 120 || desc.length > 155) errs.push(`desc len ${desc.length}`);
    if (/name="keywords"/.test(html)) errs.push("meta keywords");
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    if (!canonical || rewrite(canonical) !== url) errs.push(`canonical ${canonical}`);
    const hreflang = html.match(/hrefLang="([^"]+)"/gi)?.map((item) => item.toLowerCase()) ?? [];
    if (!hreflang.some((item) => item.includes("x-default"))) errs.push("no x-default");
    if (url.includes("/government-support")) {
      if (!hreflang.some((item) => item.includes('"tr"'))) errs.push("no tr hreflang");
      if (hreflang.some((item) => item.includes('"en"'))) errs.push("en hreflang on tr-only page");
    } else if (!hreflang.some((item) => item.includes('"tr"')) || !hreflang.some((item) => item.includes('"en"'))) {
      errs.push("hreflang set incomplete");
    }
    if (url.includes("/blog/yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu") && !html.includes("/en/blog/ai-not-just-technology")) {
      errs.push("blog hreflang missing en slug");
    }
    if (url.includes("/blog/ai-not-just-technology") && !html.includes("/tr/blog/yapay-zeka-sadece-bir-teknoloji-degil-yeni-bir-calisma-kulturu")) {
      errs.push("blog hreflang missing tr slug");
    }
    const visible = html.replace(/self\.__next_s[^<]*/g, "");
    if (!/application\/ld\+json/.test(visible)) errs.push("no JSON-LD <script>");
    let sawOrg = false;
    for (const m of visible.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)) {
      try {
        const data = JSON.parse(m[1]);
        const blob = JSON.stringify(data);
        if (blob.includes("#organization")) sawOrg = true;
      } catch {
        errs.push("invalid JSON-LD");
      }
    }
    if (!sawOrg) errs.push("no #organization");
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) errs.push(`h1 count ${h1}`);
    await checkOg(html, errs);
  } else {
    if (!/noindex/i.test(html)) errs.push("missing noindex");
    if (/hrefLang=/i.test(html)) errs.push("hreflang on noindex page");
  }
  if (errs.length) {
    fail++;
    console.log("✗", url, errs.join("; "));
  } else {
    console.log("✓", url);
  }
}

for (const url of urls) {
  await checkPage(url, { indexable: true });
}

const extras = ["/de", "/fr", "/ru", "/tr/chat", "/tr/case-study"].map((path) => `${base}${path}`);
for (const url of extras) {
  await checkPage(url, { indexable: false });
}

console.log(`\n${urls.length} sitemap URL, ${extras.length} noindex URL, ${fail} hatalı`);
process.exit(fail ? 1 : 0);
