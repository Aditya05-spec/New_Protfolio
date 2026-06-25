import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * App — Root component orchestrating all sections,
 * scroll progress bar, navbar, and floating back-to-top button.
 */
export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  /* Show floating back-to-top after scrolling 600px */
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-background min-h-screen text-white overflow-x-hidden">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Sticky navbar */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <CodingProfiles />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* ── Floating Scroll-to-Top Button ── */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 transition-shadow duration-300"
            aria-label="Scroll to top"
          >
            <i className="fas fa-chevron-up text-sm" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
