import { motion } from 'framer-motion';
import { experience } from '../data/resumeData';

/**
 * Experience — Vertical timeline with glowing dots,
 * glass cards, hover animations, and staggered reveals.
 */
export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent md:-translate-x-px" />

          {experience.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                className={`relative mb-12 last:mb-0 pl-12 md:pl-0 ${
                  isLeft
                    ? 'md:pr-[calc(50%+2rem)] md:text-right'
                    : 'md:pl-[calc(50%+2rem)]'
                }`}
              >
                {/* Timeline dot with glow */}
                <div
                  className={`absolute top-7 left-[11px] md:left-1/2 w-[16px] h-[16px] rounded-full bg-primary border-[3px] border-background glow-primary z-10 md:-translate-x-1/2`}
                />

                {/* Card */}
                <div className="glass rounded-2xl p-6 md:p-8 card-hover group hover:border-primary/30 transition-all duration-500">
                  {/* Duration badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4">
                    <i className="fas fa-calendar-alt text-[10px]" />
                    {exp.duration}
                  </div>

                  {/* Role */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                    {exp.role}
                  </h3>

                  {/* Company */}
                  <div className={`flex items-center gap-2 text-muted mb-1 ${isLeft ? 'md:justify-end' : ''}`}>
                    <i className="fas fa-building text-primary/60 text-sm" />
                    <span className="text-sm font-medium">{exp.company}</span>
                  </div>

                  {/* Location */}
                  <div className={`flex items-center gap-2 text-muted/60 mb-6 ${isLeft ? 'md:justify-end' : ''}`}>
                    <i className="fas fa-map-marker-alt text-primary/40 text-xs" />
                    <span className="text-xs">{exp.location}</span>
                  </div>

                  {/* Achievement bullets */}
                  <ul className={`space-y-3 ${isLeft ? 'md:text-left' : ''}`}>
                    {exp.achievements.map((item, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: isLeft ? -10 : 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.08 }}
                        className="flex items-start gap-3 text-sm text-muted leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
