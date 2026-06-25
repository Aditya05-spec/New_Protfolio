import { motion } from 'framer-motion';
import { education } from '../data/resumeData';

/**
 * Education — Timeline layout with gradient icon badges,
 * score pills, and slide-in card animations.
 */
export default function Education() {
  return (
    <section id="education" className="section-padding relative">
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
            Education
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[23px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-transparent" />

          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="relative pl-16 mb-12 last:mb-0"
            >
              {/* Gradient icon */}
              <div className="absolute left-0 top-5 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                <i className={`fas fa-${edu.icon} text-white text-lg`} />
              </div>

              {/* Card */}
              <div className="glass rounded-2xl p-6 md:p-8 card-hover group hover:border-primary/30 transition-all duration-500">
                {/* Badges row */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                    {edu.duration}
                  </span>
                  <span className="px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono">
                    {edu.score}
                  </span>
                </div>

                {/* Institution */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:gradient-text transition-all">
                  {edu.institution}
                </h3>

                {/* Degree */}
                <p className="text-muted mb-2">{edu.degree}</p>

                {/* Location */}
                <p className="text-muted/60 text-sm flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-primary/40" />
                  {edu.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
