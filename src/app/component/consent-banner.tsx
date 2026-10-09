"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";

const STORAGE_KEY = "genixo-consent";
const COOKIE = "genixo_consent";
const MAX_AGE = 60 * 60 * 24 * 180;

type Choice = { necessary: true; analytics: boolean };

const text = {
  tr: {
    body: "Zorunlu çerezler sitenin çalışması için kullanılır. Analitik çerezler yalnızca onay verirseniz yüklenir.",
    accept: "Kabul et",
    reject: "Reddet",
    prefs: "Tercihler",
    save: "Kaydet",
    analytics: "Analitik",
  },
  en: {
    body: "Essential cookies keep the site working. Analytics cookies load only if you allow them.",
    accept: "Accept",
    reject: "Reject",
    prefs: "Preferences",
    save: "Save",
    analytics: "Analytics",
  },
};

function persist(choice: Choice) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...choice, at: Date.now() }));
  document.cookie = `${COOKIE}=${choice.analytics ? "analytics" : "denied"}; Max-Age=${MAX_AGE}; Path=/; SameSite=Lax`;
  window.dispatchEvent(new Event("genixo-consent"));
}

export default function ConsentBanner({ locale }: { locale: Locale }) {
  const t = locale === "tr" ? text.tr : text.en;
  const [visible, setVisible] = useState(false);
  const [prefs, setPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label={t.prefs}
      style={{
        position: "fixed",
        zIndex: 1080,
        left: 16,
        right: 16,
        bottom: 16,
        maxWidth: 720,
        margin: "0 auto",
        background: "#0e1a2b",
        color: "#fff",
        padding: "16px 18px",
        borderRadius: 12,
        boxShadow: "0 8px 30px rgba(0,0,0,.25)",
      }}
    >
      <p style={{ margin: "0 0 12px" }}>{t.body}</p>
      {prefs && (
        <label style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
          <input type="checkbox" checked={analytics} onChange={(event) => setAnalytics(event.target.checked)} />
          {t.analytics}
        </label>
      )}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button type="button" className="btn btn-primary btn-sm" onClick={() => { persist({ necessary: true, analytics: true }); setVisible(false); }}>
          {t.accept}
        </button>
        <button type="button" className="btn btn-light btn-sm" onClick={() => { persist({ necessary: true, analytics: false }); setVisible(false); }}>
          {t.reject}
        </button>
        {prefs ? (
          <button type="button" className="btn btn-outline-light btn-sm" onClick={() => { persist({ necessary: true, analytics }); setVisible(false); }}>
            {t.save}
          </button>
        ) : (
          <button type="button" className="btn btn-outline-light btn-sm" onClick={() => setPrefs(true)}>
            {t.prefs}
          </button>
        )}
      </div>
    </div>
  );
}
