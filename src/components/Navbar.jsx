import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ============================================
   Navigation links — order matches section flow
   ============================================ */
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'CP', href: '#cp' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  /* Track scroll position for glass effect + active section */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      /* Determine which section is currently in view */
      const sectionIds = navLinks.map((l) => l.href.slice(1));
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* ── Desktop / Mobile Navbar ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-strong shadow-lg shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
              className="text-xl md:text-2xl font-bold gradient-text select-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              &lt;Aditya&nbsp;/&gt;
            </motion.a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    activeSection === link.href.slice(1)
                      ? 'text-white'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {/* Active pill indicator */}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="navActive"
                      className="absolute inset-0 rounded-lg bg-white/[0.08] border border-white/[0.06]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileOpen((v) => !v)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <div className="flex flex-col items-center justify-center gap-[5px]">
                <motion.span
                  animate={
                    isMobileOpen
                      ? { rotate: 45, y: 7, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }
                  }
                  transition={{ duration: 0.3 }}
                  className="block h-[2px] bg-white rounded-full origin-center"
                  style={{ width: 24 }}
                />
                <motion.span
                  animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                  className="block w-6 h-[2px] bg-white rounded-full"
                />
                <motion.span
                  animate={
                    isMobileOpen
                      ? { rotate: -45, y: -7, width: 24 }
                      : { rotate: 0, y: 0, width: 24 }
                  }
                  transition={{ duration: 0.3 }}
                  className="block h-[2px] bg-white rounded-full origin-center"
                  style={{ width: 24 }}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Fullscreen Menu ── */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-background/95 backdrop-blur-2xl" />

            {/* Links */}
            <div className="relative flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className={`text-3xl font-semibold tracking-tight transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'gradient-text'
                      : 'text-muted hover:text-white'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
