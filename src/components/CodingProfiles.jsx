import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { codingProfiles } from '../data/resumeData';

/* ── Mini SVG line chart for rating history ── */
function RatingGraph({ data, color, width = 280, height = 80 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const min = Math.min(...data) - 50;
  const max = Math.max(...data) + 50;
  const range = max - min || 1;
  const step = width / (data.length - 1);

  const points = data.map((v, i) => ({
    x: i * step,
    y: height - ((v - min) / range) * height,
  }));

  const linePath = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

  /* Area fill path (closes to bottom) */
  const areaPath = `${linePath} L ${points[points.length - 1].x} ${height} L 0 ${height} Z`;

  const pathLength = 1200;

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-20 md:h-24"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id={`grad-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area fill */}
      <path
        d={areaPath}
        fill={`url(#grad-${color.replace('#', '')})`}
        className={`transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Line */}
      <path
        d={linePath}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={pathLength}
        strokeDashoffset={visible ? 0 : pathLength}
        style={{ transition: 'stroke-dashoffset 2s ease-out' }}
      />

      {/* Last point dot */}
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="4"
        fill={color}
        className={`transition-opacity duration-1000 delay-[2000ms] ${visible ? 'opacity-100' : 'opacity-0'}`}
      />
      <circle
        cx={points[points.length - 1].x}
        cy={points[points.length - 1].y}
        r="8"
        fill={color}
        opacity="0.2"
        className={`transition-opacity duration-1000 delay-[2000ms] ${visible ? 'opacity-100' : 'opacity-0'}`}
      />
    </svg>
  );
}

/* ── Rating badge with rank-appropriate colour ── */
function RatingBadge({ rating, rank, color }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="text-4xl md:text-5xl font-extrabold font-mono" style={{ color }}>
        {rating}
      </span>
      <span
        className="text-sm font-semibold px-2.5 py-1 rounded-full border"
        style={{ color, borderColor: `${color}40`, backgroundColor: `${color}12` }}
      >
        {rank}
      </span>
    </div>
  );
}

/* ── Animated counter ── */
function AnimatedCounter({ target, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start = 0;
        const steps = 60;
        const inc = target / steps;
        const timer = setInterval(() => {
          start += inc;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, duration / steps);
        obs.disconnect();
      }
    }, { threshold: 0.3 });
    obs.observe(node);
    return () => obs.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count}</span>;
}

/* ── Profile Card ── */
function ProfileCard({ profile, index }) {
  const isLeetCode = profile.platform === 'LeetCode';

  /* Difficulty breakdown for LeetCode */
  const lcDifficulty = isLeetCode
    ? [
        { label: 'Easy', solved: 320, total: 850, color: '#00B8A3' },
        { label: 'Medium', solved: 380, total: 1800, color: '#FFC01E' },
        { label: 'Hard', solved: 100, total: 800, color: '#FF375F' },
      ]
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="glass rounded-2xl overflow-hidden card-hover group hover:border-primary/30 transition-all duration-500"
    >
      {/* Top accent bar */}
      <div className="h-1 w-full" style={{ background: profile.color }} />

      <div className="p-6 md:p-8">
        {/* Platform header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${profile.color}18`, border: `1px solid ${profile.color}30` }}
            >
              <i className={`${profile.icon} text-xl`} style={{ color: profile.color }} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
              <p className="text-xs text-muted font-mono">@{profile.username}</p>
            </div>
          </div>

          <a
            href={profile.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg glass text-sm font-medium text-muted hover:text-white hover:border-primary/40 transition-all duration-300"
          >
            View Profile
            <i className="fas fa-external-link-alt text-xs" />
          </a>
        </div>

        {/* Rating + Rank */}
        <div className="mb-6">
          <p className="text-xs text-muted uppercase tracking-wider mb-2 font-medium">Contest Rating</p>
          <RatingBadge rating={profile.rating} rank={profile.rank} color={profile.color} />
        </div>

        {/* Rating graph */}
        <div className="mb-6">
          <p className="text-xs text-muted uppercase tracking-wider mb-3 font-medium">Rating Progress</p>
          <div className="glass rounded-xl p-4">
            <RatingGraph data={profile.ratingHistory} color={profile.color} />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {profile.stats.map((s) => (
            <div key={s.label} className="glass rounded-xl p-3 text-center">
              <div className="text-lg md:text-xl font-bold font-mono text-white">{s.value}</div>
              <div className="text-[10px] text-muted mt-1 uppercase tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* LeetCode difficulty breakdown */}
        {lcDifficulty && (
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-3 font-medium">Problems by Difficulty</p>
            <div className="space-y-3">
              {lcDifficulty.map((d) => (
                <div key={d.label} className="group/diff">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium" style={{ color: d.color }}>
                      {d.label}
                    </span>
                    <span className="text-xs text-muted font-mono">
                      {d.solved} / {d.total}
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: d.color }}
                      initial={{ width: '0%' }}
                      whileInView={{ width: `${(d.solved / d.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Codeforces — rank color bar visualization */}
        {!isLeetCode && (
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-3 font-medium">Rating Tiers</p>
            <div className="flex items-end gap-1 h-16">
              {[
                { name: 'Newbie', min: 0, max: 1199, color: '#808080' },
                { name: 'Pupil', min: 1200, max: 1399, color: '#008000' },
                { name: 'Specialist', min: 1400, max: 1599, color: '#03A89E' },
                { name: 'Expert', min: 1600, max: 1899, color: '#0000FF' },
                { name: 'CM', min: 1900, max: 2099, color: '#AA00AA' },
                { name: 'Master', min: 2100, max: 2299, color: '#FF8C00' },
              ].map((tier) => {
                const isCurrentTier = profile.rating >= tier.min && profile.rating <= tier.max;
                const isPassed = profile.rating > tier.max;
                const heightPercent = isPassed ? 100 : isCurrentTier ? ((profile.rating - tier.min) / (tier.max - tier.min)) * 100 : 0;

                return (
                  <div key={tier.name} className="flex-1 flex flex-col items-center gap-1">
                    <motion.div
                      className="w-full rounded-t-md relative group/tier"
                      style={{
                        background: isPassed || isCurrentTier ? tier.color : 'rgba(255,255,255,0.04)',
                        opacity: isPassed || isCurrentTier ? 1 : 0.3,
                      }}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${Math.max(heightPercent, isPassed ? 100 : 8)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      {isCurrentTier && (
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-white shadow-lg shadow-white/40" />
                      )}
                    </motion.div>
                    <span className={`text-[8px] font-medium ${isCurrentTier ? 'text-white' : 'text-muted/50'}`}>
                      {tier.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

/**
 * CodingProfiles — Competitive Programming section
 * showcasing LeetCode and Codeforces profiles with
 * rating graphs, stats, and difficulty breakdowns.
 */
export default function CodingProfiles() {
  const profiles = [codingProfiles.leetcode, codingProfiles.codeforces];

  return (
    <section id="cp" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[350px] h-[350px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* ── Section header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">
            Competitive Programming
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mt-3 mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm md:text-base mt-4">
            Consistent problem-solving across competitive programming platforms.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-6" />
        </motion.div>

        {/* ── Profile Cards ── */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {profiles.map((profile, i) => (
            <ProfileCard key={profile.platform} profile={profile} index={i} />
          ))}
        </div>

        {/* ── Totals strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 glass rounded-2xl p-6 flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {[
            { icon: 'fas fa-fire', label: 'Total Problems', value: '1000+', color: '#FF6B6B' },
            { icon: 'fas fa-trophy', label: 'Best LC Rating', value: '1714', color: '#FFA116' },
            { icon: 'fas fa-star', label: 'CF Rating', value: '1239', color: '#008000' },
            { icon: 'fas fa-bolt', label: 'Platforms Active', value: '2', color: '#00E5FF' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: `${s.color}15`, border: `1px solid ${s.color}25` }}
              >
                <i className={`${s.icon} text-sm`} style={{ color: s.color }} />
              </div>
              <div>
                <div className="text-xl font-bold font-mono text-white">{s.value}</div>
                <div className="text-[10px] text-muted uppercase tracking-wide">{s.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
