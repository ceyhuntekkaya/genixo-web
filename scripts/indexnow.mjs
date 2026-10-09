const KEY = process.env.INDEXNOW_KEY;
const host = "genixo.ai";
const urls = process.argv.slice(2);

if (!KEY) {
  console.error("INDEXNOW_KEY eksik");
  process.exit(1);
}

if (urls.length === 0) {
  console.error("Değişen URL'leri argüman olarak verin. Tüm sitemap gönderilmez.");
  process.exit(1);
}

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key: KEY,
    keyLocation: `https://${host}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(res.status);
if (res.status !== 200 && res.status !== 202) process.exit(1);
