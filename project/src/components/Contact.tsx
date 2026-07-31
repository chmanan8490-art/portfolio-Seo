import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle2 } from 'lucide-react';
import { contactLinks } from '@/data/content';
import { iconMap } from '@/components/Icon';
import { useScrollReveal } from '@/hooks/useScroll';

export default function Contact() {
  const { ref, visible } = useScrollReveal();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', website: '', message: '' });

  const sendMailtoFallback = () => {
    const subject = `Free SEO Audit Request from ${form.name || 'Website visitor'}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\nWebsite: ${form.website}\n\nMessage:\n${form.message}`;
    window.location.href = `mailto:msuffyannadeem@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const fromEmail = import.meta.env.VITE_EMAILJS_FROM_EMAIL || 'msuffyannadeem@gmail.com';
    const toEmail = import.meta.env.VITE_EMAILJS_RECEIVER_EMAIL || 'msuffyannadeem@gmail.com';

    if (!serviceId || !templateId || !publicKey) {
      console.warn('EmailJS configuration is missing. Falling back to mailto.');
      sendMailtoFallback();
      return;
    }

    const subject = `Free SEO Audit Request from ${form.name || 'Website visitor'}`;

    const templateParams = {
      from_name: form.name || 'Website visitor',
      from_email: fromEmail,
      reply_to: form.email,
      subject,
      website: form.website,
      message: form.message,
      to_email: toEmail,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setSent(true);
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', website: '', message: '' });
      }, 3500);
    } catch (error) {
      console.error('Email send failed:', error);
    }
  };

  return (
    <section id="contact" className="section-pad bg-lightgray dark:bg-gray-900/30">
      <div ref={ref} className={`container-px reveal ${visible ? 'is-visible' : ''}`}>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-subtitle mb-3">Let's Talk</p>
          <h2 className="section-title">Get a <span className="gradient-text">Free SEO Audit</span></h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Tell me about your website and goals. I'll send you a free mini-audit with quick wins.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <div className="lg:col-span-2 space-y-3">
            {contactLinks.map((link) => {
              const Icon = iconMap[link.icon];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="card p-4 flex items-center gap-4 group hover:-translate-y-0.5"
                >
                  <div className="grid place-items-center w-11 h-11 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 text-white shrink-0 group-hover:scale-110 transition-transform">
                    {Icon ? <Icon size={20} /> : null}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400">{link.label}</p>
                    <p className="font-semibold text-sm text-dark dark:text-white truncate">{link.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <form onSubmit={handleSubmit} className="lg:col-span-3 card p-6 lg:p-8 space-y-4 relative z-10">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="John Doe" required />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="john@company.com" required />
            </div>
            <Field label="Website URL" value={form.website} onChange={(v) => setForm({ ...form, website: v })} placeholder="https://yoursite.com" />
            <div>
              <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                required
                placeholder="Tell me about your SEO goals..."
                className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-dark dark:text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="btn-primary w-full disabled:opacity-70"
            >
              {sent ? (
                <><CheckCircle2 size={18} /> Audit Request Sent!</>
              ) : (
                <>Get Free SEO Audit <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text', required }: { label: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark dark:text-white mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 px-4 py-3 text-dark dark:text-white placeholder-gray-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
      />
    </div>
  );
}
