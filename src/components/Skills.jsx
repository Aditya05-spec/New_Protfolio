import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsWithProficiency } from '../data/resumeData';

/**
 * AnimatedBar — A single skill progress bar that animates
 * its width from 0 → level% when scrolled into view.
 */
function AnimatedBar({ name, level, barColor, delay }) {
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          /* Small delay for stagger effect */
          setTimeout(() => setWidth(level), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="group/bar">
      {/* Label row */}
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm text-muted group-hover/bar:text-white transition-colors duration-300">
          {name}
        </span>
        <span
          className="text-xs font-mono font-semibold transition-colors duration-300"
          style={{ color: barColor }}
        >
          {width > 0 ? `${level}%` : '0%'}
        </span>
      </div>

      {/* Track */}
      <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
        {/* Fill */}
        <motion.div
          className="h-full rounded-full relative"
          style={{ background: barColor }}
          initial={{ width: '0%' }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Shine effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover/bar:translate-x-[200%]" style={{ transition: 'transform 0.8s ease, opacity 0.3s ease' }} />
        </motion.div>
      </div>
    </div>
  );
}

/**
 * SkillCard — A single category card with icon, title,
 * and a list of animated progress bars.
 */
function SkillCard({ category, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="glass rounded-2xl p-6 card-hover group hover:border-primary/30 transition-all duration-500"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
          style={{ boxShadow: `0 4px 20px ${category.barColor}30` }}
        >
          <i className={`${category.icon} text-white text-sm`} />
        </div>
        <h3 className="text-lg font-bold text-white">{category.category}</h3>
      </div>

      {/* Skill bars */}
      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <AnimatedBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
            barColor={category.barColor}
            delay={i * 120}
          />
        ))}
      </div>
    </motion.div>
  );
}

/**
 * Skills Section — Interactive grid of skill category cards,
 * each with animated progress bars inspired by the reference design.
 */
export default function Skills() {
  /* Split into two rows for visual balance */
  const topRow = skillsWithProficiency.slice(0, 4);
  const bottomRow = skillsWithProficiency.slice(4);

  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm md:text-base mt-4">
            Proficiency levels based on project experience, problem-solving depth, and production usage.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* ── Top Row — 4 columns ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-6">
          {topRow.map((cat, i) => (
            <SkillCard key={cat.category} category={cat} delay={i * 0.1} />
          ))}
        </div>

        {/* ── Bottom Row — centered 2 columns ── */}
        {bottomRow.length > 0 && (
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-3xl mx-auto">
            {bottomRow.map((cat, i) => (
              <SkillCard key={cat.category} category={cat} delay={0.4 + i * 0.1} />
            ))}
          </div>
        )}

        {/* ── Total skills summary ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-10"
        >
          {[
            { label: 'Categories', value: skillsWithProficiency.length, icon: 'fas fa-layer-group' },
            { label: 'Total Skills', value: skillsWithProficiency.reduce((a, c) => a + c.skills.length, 0), icon: 'fas fa-cubes' },
            { label: 'Avg. Proficiency', value: `${Math.round(skillsWithProficiency.flatMap(c => c.skills).reduce((a, s) => a + s.level, 0) / skillsWithProficiency.flatMap(c => c.skills).length)}%`, icon: 'fas fa-chart-bar' },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3 text-muted">
              <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center">
                <i className={`${stat.icon} text-primary text-sm`} />
              </div>
              <div>
                <div className="text-white font-bold text-lg font-mono">{stat.value}</div>
                <div className="text-xs text-muted">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
