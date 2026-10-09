import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="tr">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: "4rem auto", maxWidth: 640, padding: "0 1.5rem" }}>
        <h1>Sayfa bulunamadı</h1>
        <p>Aradığınız adres yayında değil.</p>
        <p>
          <Link href="/tr">Ana sayfa</Link>
          {" · "}
          <Link href="/tr/services">Hizmetler</Link>
          {" · "}
          <Link href="/tr/contact">İletişim</Link>
          {" · "}
          <Link href="/en">English</Link>
        </p>
      </body>
    </html>
  );
}
