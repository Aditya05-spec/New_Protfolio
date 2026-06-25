import { motion } from 'framer-motion';
import { personalInfo } from '../data/resumeData';

/**
 * Footer — Copyright, social icons, tagline, and a back-to-top button.
 */
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socials = [
    { icon: 'fab fa-github', href: personalInfo.github, label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: 'fas fa-envelope', href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <footer className="relative border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="text-xl font-bold gradient-text"
            >
              &lt;Aditya&nbsp;/&gt;
            </a>
            <p className="text-muted/60 text-sm mt-2">
              Building the future, one line at a time.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.92 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-white hover:border-primary/40 transition-all duration-300"
                aria-label={s.label}
              >
                <i className={s.icon} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.92 }}
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/25 transition-shadow hover:shadow-primary/40"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up text-sm" />
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-white/[0.04] text-center">
          <p className="text-muted/50 text-sm">
            © {new Date().getFullYear()} Aditya Pratap Singh. All rights reserved.
          </p>
          <p className="text-muted/30 text-xs mt-2">
            Designed &amp; Built with{' '}
            <span className="text-red-400/80">♥</span> using React &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
