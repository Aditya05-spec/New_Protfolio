import { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/resumeData';

/**
 * Contact — Split layout with a glass contact form and
 * clickable contact-info cards.
 */
export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    /* Simulate network request */
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSent(false), 4000);
    }, 1500);
  };

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  /* Contact info cards */
  const contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: 'fab fa-linkedin-in',
      label: 'LinkedIn',
      value: 'linkedin.com/in/Aditya',
      href: personalInfo.linkedin,
    },
    {
      icon: 'fab fa-github',
      label: 'GitHub',
      value: 'github.com/Aditya05-spec',
      href: personalInfo.github,
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
  ];

  /* Shared input classes */
  const inputCls =
    'w-full px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-muted/40 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 backdrop-blur-sm';

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* ── Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-muted mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={form.name}
                  onChange={update('name')}
                  className={inputCls}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-muted mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  className={inputCls}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className={`${inputCls} resize-none`}
                  placeholder="Your message..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg ripple-btn transition-all duration-300 hover:shadow-2xl hover:shadow-primary/25 disabled:opacity-60 disabled:cursor-wait"
              >
                {sending ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-circle-notch fa-spin" />
                    Sending…
                  </span>
                ) : sent ? (
                  <span className="flex items-center justify-center gap-2 text-green-300">
                    <i className="fas fa-check-circle" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-paper-plane" />
                    Send Message
                  </span>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* ── Contact Info Cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {contactInfo.map((info, i) => {
              const Inner = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                    <i className={`${info.icon} text-primary text-lg`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted mb-0.5">{info.label}</p>
                    <p className="text-white font-medium truncate group-hover:text-primary transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                  {info.href && (
                    <i className="fas fa-arrow-right text-muted/20 ml-auto flex-shrink-0 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  )}
                </>
              );

              const cls =
                'flex items-center gap-4 p-4 rounded-xl glass hover:bg-white/[0.04] hover:border-primary/30 transition-all duration-300 group';

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className={cls}
                    >
                      {Inner}
                    </a>
                  ) : (
                    <div className={cls}>{Inner}</div>
                  )}
                </motion.div>
              );
            })}

            {/* Availability note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-5 rounded-2xl glass text-center"
            >
              <p className="text-muted text-sm">
                <i className="fas fa-clock text-primary mr-2" />
                Open to full-time opportunities &amp; freelance projects
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
