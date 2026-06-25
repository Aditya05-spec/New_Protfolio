import { motion } from 'framer-motion';
import { projects } from '../data/resumeData';

/**
 * Projects — Responsive card grid with gradient image placeholders,
 * tech-stack badges, feature bullets, GitHub/Live-demo buttons,
 * and premium hover-lift animations.
 */
export default function Projects() {
  return (
    <section id="projects" className="section-padding relative">
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
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* ── Project Cards ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col"
            >
              {/* Image placeholder */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}
              >
                {/* Radial highlight */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.12),transparent_70%)]" />

                {/* Icon */}
                <motion.i
                  className={`${project.icon} text-5xl text-white/20 group-hover:text-white/40 transition-all duration-500`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                />

                {/* Duration badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full glass text-[11px] font-mono text-muted">
                  {project.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold text-white mb-3 group-hover:gradient-text transition-all leading-snug">
                  {project.title}
                </h3>

                <p className="text-muted text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Feature highlights */}
                <ul className="space-y-2 mb-5">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-xs text-muted/80 leading-relaxed"
                    >
                      <i className="fas fa-check text-accent mt-0.5 text-[10px] flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-[10px] font-mono rounded-md bg-primary/10 text-primary border border-primary/15 leading-none"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl glass text-sm font-medium text-white hover:bg-white/[0.08] transition-all duration-300 ripple-btn"
                  >
                    <i className="fab fa-github" />
                    GitHub
                  </a>
                  <button
                    disabled={!project.live}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                      project.live
                        ? 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:shadow-primary/25 ripple-btn'
                        : 'glass text-muted/40 cursor-not-allowed'
                    }`}
                  >
                    <i className="fas fa-external-link-alt text-xs" />
                    {project.live ? 'Live Demo' : 'Coming Soon'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
