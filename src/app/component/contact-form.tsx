'use client';

import { useState, useRef, useEffect } from 'react';
import { Dictionary } from '@/i18n/types';

const MIN_FILL_SECONDS = 4; // Insanlar en az bu sürede formu doldurur; daha hızlı gönderim bot sayılır

interface ContactFormProps {
  dict: Dictionary;
  locale: string;
}

export default function ContactForm({ dict, locale }: ContactFormProps) {
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
    } catch (error) {
      setSubmitStatus('error');
      setStatusMessage(formDict.connectionError || 'Connection error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="section-title title-02 mb-20">
            <h2 className="h2-xs">{formDict.mainTitle || formDict.title}</h2>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          <div className="form-holder">
            <form name="contactform" className="row contact-form">
              <div className="col-md-12 input-subject">
                {formDict.serviceLabel && <p className="p-lg">{formDict.serviceLabel}</p>}
                {formDict.serviceDescription && <span>{formDict.serviceDescription}</span>}
                <select
                  id="questionAbout"
                  className="form-select subject"
                  aria-label="Default select example"
                  defaultValue={formDict.servicePlaceholder || ''}
                >
                  <option value={formDict.servicePlaceholder || ''}>{formDict.servicePlaceholder || 'Select Service'}</option>
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
              <div className="col-md-12">
                {formDict.nameLabel && <p className="p-lg">{formDict.nameLabel}</p>}
                {formDict.nameDescription && <span>{formDict.nameDescription}</span>}
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control name"
                  placeholder={formDict.namePlaceholder}
                  required
                />
              </div>
              <div className="col-md-12">
                {formDict.companyLabel && <p className="p-lg">{formDict.companyLabel}</p>}
                {formDict.companyDescription && <span>{formDict.companyDescription}</span>}
                <input
                  type="text"
                  name="companyName"
                  id="companyName"
                  className="form-control name"
                  placeholder={formDict.companyPlaceholder || ''}
                />
              </div>
              <div className="col-md-12">
                {formDict.emailLabel && <p className="p-lg">{formDict.emailLabel}</p>}
                {formDict.emailDescription && <span>{formDict.emailDescription}</span>}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control email"
                  placeholder={formDict.emailPlaceholder}
                  required
                />
              </div>
              {/* Honeypot: Gizli alan – kullanıcıya görünmez, botlar doldurur. Doluysa gönderim reddedilir. */}
              <div
                className="col-md-12"
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
              <div className="col-md-12">
                {formDict.messageLabel && <p className="p-lg">{formDict.messageLabel}</p>}
                {formDict.messageDescription && <span>{formDict.messageDescription}</span>}
                <textarea
                  className="form-control message"
                  id="tellUsMore"
                  name="tellUsMore"
                  rows={6}
                  placeholder={formDict.messagePlaceholder}
                  required
                ></textarea>
              </div>
              <div className="col-md-12 mt-15 form-btn text-right">
                <button
                  type="button"
                  onClick={submitForm}
                  className="btn btn-skyblue tra-grey-hover submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (formDict.submitting || 'Sending...') : formDict.submitButton}
                </button>
              </div>
              <div className="col-lg-12 contact-form-msg">
                {submitStatus === 'success' && (
                  <span className="text-success" style={{ display: 'block', marginTop: '10px' }}>
                    {statusMessage}
                  </span>
                )}
                {submitStatus === 'error' && (
                  <span className="text-danger" style={{ display: 'block', marginTop: '10px' }}>
                    {statusMessage}
                  </span>
                )}
                {isSubmitting && (
                  <span className="loading" style={{ display: 'block', marginTop: '10px' }}>
                    {formDict.submitting || 'Sending...'}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

