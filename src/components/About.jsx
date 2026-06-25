import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';
import { personalInfo, stats } from '../data/resumeData';

/* ── Stat Card with animated counter ── */
function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.value, 2000, stat.isDecimal);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-2xl p-6 md:p-7 text-center card-hover group"
    >
      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-500">
        <i
          className={`${stat.icon} text-xl text-primary group-hover:text-accent transition-colors duration-300`}
        />
      </div>
      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 font-mono">
        {stat.isDecimal ? count.toFixed(2) : count}
        {stat.suffix}
      </div>
      <div className="text-sm text-muted font-medium">{stat.label}</div>
    </motion.div>
  );
}

/* ── About Section ── */
export default function About() {
  /* Highlight facts derived from the resume */
  const highlights = [
    { icon: 'fas fa-briefcase', text: 'Full Stack Developer with production experience' },
    { icon: 'fas fa-brain', text: '800+ DSA problems solved on LeetCode' },
    { icon: 'fas fa-trophy', text: 'Hackathon winner with entrepreneurial mindset' },
    { icon: 'fas fa-robot', text: 'AI/ML enthusiast building intelligent systems' },
    { icon: 'fas fa-rocket', text: 'CI/CD, Cloud, and DevOps practitioner' },
  ];

  /* Key tech badges */
  const keyTech = ['Java', 'Python', 'React.js', 'Node.js', 'MongoDB', 'Docker'];

  return (
    <section id="about" className="section-padding relative">
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
            About Me
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Passionate about building{' '}
            <span className="gradient-text">great software</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        {/* ── Content grid ── */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-20">
          {/* Left — Summary + tech badges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-muted text-lg leading-relaxed mb-8">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap gap-2.5">
              {keyTech.map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 text-xs font-mono rounded-lg glass text-primary border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-3"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-white/[0.04] transition-colors group cursor-default"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <i className={`${item.icon} text-primary text-sm`} />
                </div>
                <span className="text-muted group-hover:text-white transition-colors duration-300">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Statistics Cards ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
