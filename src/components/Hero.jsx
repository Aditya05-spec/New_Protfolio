import { motion } from 'framer-motion';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { personalInfo } from '../data/resumeData';

/**
 * Hero — Full-screen landing section with animated gradient
 * orbs, grid overlay, floating particles, typing headline,
 * CTA buttons, social icons, and a scroll indicator.
 */
export default function Hero() {
  const typedText = useTypingEffect(personalInfo.roles, 80, 40, 2200);

  /* Social link data */
  const socials = [
    { icon: 'fab fa-github', href: personalInfo.github, label: 'GitHub' },
    { icon: 'fab fa-linkedin-in', href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: 'fas fa-envelope', href: `mailto:${personalInfo.email}`, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Animated Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-[15%] left-[20%] w-[420px] h-[420px] bg-primary/20 rounded-full blur-[120px] animate-float" />
        <div
          className="absolute bottom-[18%] right-[18%] w-[350px] h-[350px] bg-accent/15 rounded-full blur-[100px] animate-float"
          style={{ animationDelay: '-3s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-secondary/10 rounded-full blur-[140px] animate-float"
          style={{ animationDelay: '-1.5s' }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Floating particles */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/40"
            style={{
              top: `${12 + ((i * 37) % 70)}%`,
              left: `${8 + ((i * 53) % 80)}%`,
            }}
            animate={{ y: [0, -25, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              delay: i * 0.7,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass text-sm font-medium text-muted tracking-wide">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
            </span>
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]"
        >
          <span className="text-white">Hi, I'm </span>
          <span className="gradient-text">{personalInfo.firstName}</span>
        </motion.h1>

        {/* Typing effect headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-10 sm:h-12 flex items-center justify-center text-xl sm:text-2xl md:text-3xl font-light text-muted mb-8"
        >
          <span className="font-mono">{typedText}</span>
          <span className="inline-block w-[3px] h-6 sm:h-7 bg-primary ml-1 animate-pulse rounded-sm" />
        </motion.div>

        {/* Brief tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-muted text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Building scalable applications with modern technologies.
          Passionate about clean code, AI, and solving complex problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          {/* View Projects */}
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-lg ripple-btn overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center gap-2.5">
              <i className="fas fa-rocket text-base" />
              View Projects
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl glass text-white font-semibold text-lg transition-all duration-500 hover:bg-white/[0.08] hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5"
          >
            <i className="fas fa-download text-base group-hover:text-primary transition-colors" />
            Download Resume
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex items-center justify-center gap-4"
        >
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.15, y: -4 }}
              whileTap={{ scale: 0.92 }}
              className="w-12 h-12 rounded-xl glass flex items-center justify-center text-muted hover:text-white hover:border-primary/50 transition-all duration-300"
              aria-label={s.label}
            >
              <i className={`${s.icon} text-lg`} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted/40 uppercase tracking-[0.25em] font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 rounded-full border-2 border-muted/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2.5 rounded-full bg-gradient-to-b from-primary to-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
