'use client';

import { useEffect, useRef, useState } from 'react';
import type { Dictionary } from '@/i18n/types';
import { track } from '@/lib/track';
import h from './home/home.module.css';
import styles from './page/page.module.css';

const MIN_FILL_SECONDS = 4; // Insanlar en az bu sürede formu doldurur; daha hızlı gönderim bot sayılır
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = { state: 'idle' | 'success' | 'error'; message: string };

export default function ContactForm({ dict }: { dict: Dictionary }) {
  const t = dict.contactForm;
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status>({ state: 'idle', message: '' });
  const mountedAt = useRef<number | null>(null);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) ?? '').trim();

    const tooFast = mountedAt.current != null && (Date.now() - mountedAt.current) / 1000 < MIN_FILL_SECONDS;
    if (value('website') || tooFast) {
      setStatus({ state: 'error', message: t.botDetectedMessage });
      return;
    }

    const name = value('name');
    const email = value('email');
    const message = value('message');
    const budget = value('budget');
    if (!name || !message || !EMAIL.test(email)) {
      setStatus({ state: 'error', message: t.errorMessage });
      return;
    }

    setSubmitting(true);
    setStatus({ state: 'idle', message: '' });

    try {
      const response = await fetch('https://speaking.ai.eltaexams.com/api/send-contact-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          site_id: 'genixo',
          name,
          email,
          phone: '',
          message: budget ? `${message}\n\n${t.budgetLabel}: ${budget}` : message,
        }),
      });
      const body = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus({ state: 'success', message: t.successMessage });
        track('generate_lead');
        form.reset();
      } else {
        setStatus({ state: 'error', message: body.detail || t.connectionError });
      }
    } catch {
      setStatus({ state: 'error', message: t.connectionError });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form className={styles.form} onSubmit={onSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="cf-name">{t.nameLabel}</label>
        <input id="cf-name" name="name" type="text" autoComplete="name" placeholder={t.namePlaceholder} required />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-email">{t.emailLabel}</label>
        <input id="cf-email" name="email" type="email" autoComplete="email" placeholder={t.emailPlaceholder} required />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-message">{t.messageLabel}</label>
        <p id="cf-message-help" className={styles.fieldHelp}>{t.messageDescription}</p>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          placeholder={t.messagePlaceholder}
          aria-describedby="cf-message-help"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="cf-budget">{t.budgetLabel}</label>
        <input id="cf-budget" name="budget" type="text" placeholder={t.budgetPlaceholder} />
      </div>

      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="cf-website">Website (leave blank)</label>
        <input id="cf-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" className={`${h.btn} ${styles.submit}`} disabled={submitting}>
        {submitting ? t.submitting : t.submitButton}
      </button>

      {status.state !== 'idle' && (
        <p className={styles.formStatus} data-state={status.state} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
