import { motion } from 'framer-motion';
import { achievements } from '../data/resumeData';

/**
 * Achievements — Cards with category-colored glow,
 * animated icons, and hover-lift effects.
 */

/* Subtle glow colour per card to add visual variety */
const glowStyles = [
  'hover:shadow-purple-500/15',
  'hover:shadow-cyan-500/15',
  'hover:shadow-yellow-500/15',
  'hover:shadow-blue-500/15',
  'hover:shadow-pink-500/15',
];

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative">
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
            Recognition
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* ── Achievement Cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className={`glass rounded-2xl p-7 md:p-8 text-center group hover:border-primary/30 transition-all duration-500 hover:shadow-xl ${
                glowStyles[index % glowStyles.length]
              }`}
            >
              {/* Icon with glow ring */}
              <div className="relative mb-6 inline-flex">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
                  <i
                    className={`${a.icon} text-2xl text-primary group-hover:text-accent transition-colors duration-500`}
                  />
                </div>
                {/* Glow behind icon on hover */}
                <div className="absolute inset-0 rounded-2xl bg-primary/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-150" />
              </div>

              <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all">
                {a.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
