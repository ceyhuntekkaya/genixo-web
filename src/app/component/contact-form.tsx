'use client';

import { useState, useRef, useEffect } from 'react';
import { Dictionary } from '@/i18n/types';

const MIN_FILL_SECONDS = 4; // Insanlar en az bu sürede formu doldurur; daha hızlı gönderim bot sayılır

interface ContactFormProps {
  dict: Dictionary;
  locale: string;
}

export default function ContactForm({ dict }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');
  const formMountedAt = useRef<number | null>(null);

  useEffect(() => {
    formMountedAt.current = Date.now();
  }, []);

  if (!dict.contact?.form) {
    return <div>Contact form data not available</div>;
  }

  const formDict = dict.contact.form;
  const services = dict.services;

  // Get active services
  const activeServices = Object.entries(services)
    .filter(([key, service]) => {
      if (key === 'general') return false;
      const serviceObj = service as { active?: boolean; name?: string };
      return serviceObj.active !== false && serviceObj.name;
    })
    .map(([key, service]) => {
      const serviceObj = service as { name: string };
      return {
        key,
        name: serviceObj.name,
      };
    });

  const submitForm = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const companyNameInput = document.getElementById('companyName') as HTMLInputElement;
    const questionAboutSelect = document.getElementById('questionAbout') as HTMLSelectElement;
    const tellUsMoreTextarea = document.getElementById('tellUsMore') as HTMLTextAreaElement;
    const honeypotInput = document.getElementById('website_hp') as HTMLInputElement | null;

    // Bot koruması: honeypot doluysa (gizli alan – sadece botlar doldurur) gönderme
    if (honeypotInput?.value?.trim()) {
      setSubmitStatus('error');
      setStatusMessage(formDict.botDetectedMessage || 'We could not verify your submission. Please try again.');
      return;
    }

    // Bot koruması: form çok hızlı gönderildiyse (insan en az birkaç saniye doldurur)
    if (formMountedAt.current != null) {
      const elapsed = (Date.now() - formMountedAt.current) / 1000;
      if (elapsed < MIN_FILL_SECONDS) {
        setSubmitStatus('error');
        setStatusMessage(formDict.botDetectedMessage || 'We could not verify your submission. Please try again.');
        return;
      }
    }

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const companyName = companyNameInput?.value.trim();
    const selectedService = questionAboutSelect?.value;
    const message = tellUsMoreTextarea?.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      setSubmitStatus('error');
      setStatusMessage(formDict.errorMessage || 'Please fill in all required fields.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('error');
      setStatusMessage(formDict.errorMessage || 'Please enter a valid email address.');
      return;
    }

    if (!formDict.servicePlaceholder || !formDict.otherOption) {
      setSubmitStatus('error');
      setStatusMessage('Form configuration error. Please refresh the page.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setStatusMessage('');

    // Build message content: service + company name + message
    const messageParts: string[] = [];
    
    if (selectedService && selectedService !== formDict.servicePlaceholder) {
      const serviceName = selectedService === formDict.otherOption 
        ? formDict.otherOption || 'Other'
        : activeServices.find(s => s.key === selectedService)?.name || selectedService;
      if (formDict.serviceLabel) {
        messageParts.push(`${formDict.serviceLabel} ${serviceName}`);
      }
    }
    
    if (companyName && formDict.companyLabel) {
      messageParts.push(`${formDict.companyLabel} ${companyName}`);
    }
    
    messageParts.push(message);
    
    const messageContent = messageParts.join('\n\n');

    const formData = {
      site_id: 'genixo',
      name: name,
      email: email,
      phone: '', // Phone field is not in the form, but API expects it
      message: messageContent,
    };

    try {
      const response = await fetch('https://speaking.ai.eltaexams.com/api/send-contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setStatusMessage(formDict.successMessage || 'Your message has been sent successfully!');
        
        // Reset form
        const form = document.querySelector('form[name="contactform"]') as HTMLFormElement;
        if (form) {
          form.reset();
          if (questionAboutSelect && formDict.servicePlaceholder) {
            questionAboutSelect.value = formDict.servicePlaceholder;
          }
        }
      } else {
        setSubmitStatus('error');
        setStatusMessage(data.detail || formDict.errorMessage || 'An error occurred. Please try again.');
      }
    } catch {
      setSubmitStatus('error');
      setStatusMessage(formDict.connectionError || 'Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modern-contact-form">
      <form name="contactform" className="contact-form-modern">
        <div className="form-group-modern">
          {formDict.serviceLabel && (
            <label htmlFor="questionAbout" className="form-label-modern">
              {formDict.serviceLabel}
            </label>
          )}
          {formDict.serviceDescription && (
            <p className="form-description">{formDict.serviceDescription}</p>
          )}
          <select
            id="questionAbout"
            className="form-input-modern form-select-modern"
            aria-label="Service selection"
            defaultValue={formDict.servicePlaceholder || ''}
          >
            <option value={formDict.servicePlaceholder || ''}>
              {formDict.servicePlaceholder || 'Select Service'}
            </option>
            {activeServices.map((service) => (
              <option key={service.key} value={service.key}>
                {service.name}
              </option>
            ))}
            {formDict.otherOption && (
              <option value={formDict.otherOption}>{formDict.otherOption}</option>
            )}
          </select>
        </div>

        <div className="form-group-modern">
          {formDict.nameLabel && (
            <label htmlFor="name" className="form-label-modern">
              {formDict.nameLabel}
            </label>
          )}
          {formDict.nameDescription && (
            <p className="form-description">{formDict.nameDescription}</p>
          )}
          <input
            type="text"
            name="name"
            id="name"
            className="form-input-modern"
            placeholder={formDict.namePlaceholder}
            required
          />
        </div>

        <div className="form-group-modern">
          {formDict.companyLabel && (
            <label htmlFor="companyName" className="form-label-modern">
              {formDict.companyLabel}
            </label>
          )}
          {formDict.companyDescription && (
            <p className="form-description">{formDict.companyDescription}</p>
          )}
          <input
            type="text"
            name="companyName"
            id="companyName"
            className="form-input-modern"
            placeholder={formDict.companyPlaceholder || ''}
          />
        </div>

        <div className="form-group-modern">
          {formDict.emailLabel && (
            <label htmlFor="email" className="form-label-modern">
              {formDict.emailLabel}
            </label>
          )}
          {formDict.emailDescription && (
            <p className="form-description">{formDict.emailDescription}</p>
          )}
          <input
            type="email"
            name="email"
            id="email"
            className="form-input-modern"
            placeholder={formDict.emailPlaceholder}
            required
          />
        </div>

        {/* Honeypot: Gizli alan – kullanıcıya görünmez, botlar doldurur. Doluysa gönderim reddedilir. */}
        <div
          className="form-group-modern"
          style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
          aria-hidden="true"
        >
          <label htmlFor="website_hp">Website (leave blank)</label>
          <input
            type="text"
            id="website_hp"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        <div className="form-group-modern">
          {formDict.messageLabel && (
            <label htmlFor="tellUsMore" className="form-label-modern">
              {formDict.messageLabel}
            </label>
          )}
          {formDict.messageDescription && (
            <p className="form-description">{formDict.messageDescription}</p>
          )}
          <textarea
            className="form-input-modern form-textarea-modern"
            id="tellUsMore"
            name="tellUsMore"
            rows={6}
            placeholder={formDict.messagePlaceholder}
            required
          ></textarea>
        </div>

        <div className="form-submit-wrapper">
          <button
            type="button"
            onClick={submitForm}
            className="btn-submit-modern"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner-modern"></span>
                {formDict.submitting || 'Sending...'}
              </>
            ) : (
              formDict.submitButton
            )}
          </button>
        </div>

        <div className="form-message-wrapper">
          {submitStatus === 'success' && (
            <div className="alert-modern alert-success-modern">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM8 15L3 10L4.41 8.59L8 12.17L15.59 4.58L17 6L8 15Z" fill="#10b981"/>
              </svg>
              {statusMessage}
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert-modern alert-error-modern">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C4.486 0 0 4.486 0 10C0 15.514 4.486 20 10 20C15.514 20 20 15.514 20 10C20 4.486 15.514 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z" fill="#ef4444"/>
              </svg>
              {statusMessage}
            </div>
          )}
        </div>
      </form>
    </div>
  );
}

