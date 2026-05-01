import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Skills organized into two rows — top scrolls left, bottom scrolls right
const ROW_1 = [
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Node.js', color: '#5fa04e' },
  { name: 'PostgreSQL', color: '#4169e1' },
  { name: 'Tailwind CSS', color: '#06b6d4' },
  { name: 'Python', color: '#ffd43b' },
  { name: 'Express', color: '#ffffff' },
  { name: 'MongoDB', color: '#47a248' },
  { name: 'GraphQL', color: '#e10098' },
];

const ROW_2 = [
  { name: 'Git', color: '#f05032' },
  { name: 'Docker', color: '#2496ed' },
  { name: 'AWS', color: '#ff9900' },
  { name: 'Figma', color: '#a259ff' },
  { name: 'REST APIs', color: '#06b6d4' },
  { name: 'Framer Motion', color: '#ff0080' },
  { name: 'CI/CD', color: '#22c55e' },
  { name: 'Linux', color: '#ffd43b' },
  { name: 'Vite', color: '#bd34fe' },
  { name: 'Vercel', color: '#ffffff' },
];

const STAT_CARDS = [
  { value: '3+', label: 'Years coding', suffix: '' },
  { value: '15+', label: 'Projects built', suffix: '' },
  { value: '10+', label: 'Technologies', suffix: '' },
  { value: '∞', label: 'Cups of chai', suffix: '' },
];

function SkillChip({ name, color }: { name: string; color: string }) {
  return (
    <div
      className="group flex items-center gap-2.5 shrink-0 px-5 py-3 mx-2 rounded-full bg-white/[0.02] border border-white/10 hover:border-white/30 hover:bg-white/[0.05] transition-colors cursor-default"
    >
      <span
        className="w-2 h-2 rounded-full transition-transform group-hover:scale-150"
        style={{ background: color, boxShadow: `0 0 12px ${color}` }}
      />
      <span className="font-mono text-sm text-white/70 group-hover:text-white whitespace-nowrap transition-colors">
        {name}
      </span>
    </div>
  );
}

function Marquee({
  items,
  direction = 'left',
  duration = 40,
}: {
  items: { name: string; color: string }[];
  direction?: 'left' | 'right';
  duration?: number;
}) {
  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2 group">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[hsl(var(--background))] to-transparent z-10 pointer-events-none" />

      <div
        className="flex group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((item, idx) => (
          <SkillChip key={`${item.name}-${idx}`} {...item} />
        ))}
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-32 overflow-hidden"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-sm text-[hsl(var(--primary))]">02.</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Skills & <span className="gradient-text">tools</span>
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[hsl(var(--border))] to-transparent ml-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 max-w-2xl"
        >
          The toolkit I reach for to ship modern web apps. Always learning, always experimenting.
          Hover to pause.
        </motion.p>
      </div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.3 }}
        className="space-y-3 mb-16"
      >
        <Marquee items={ROW_1} direction="left" duration={45} />
        <Marquee items={ROW_2} direction="right" duration={50} />
      </motion.div>

      {/* Stat cards */}
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.6 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {STAT_CARDS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
            >
              {/* Background number watermark */}
              <span
                className="absolute -top-6 -right-2 font-display text-8xl font-black text-white/[0.02] select-none pointer-events-none"
                aria-hidden="true"
              >
                0{idx + 1}
              </span>

              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--primary)/0.05)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="font-display text-4xl md:text-5xl font-black gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-mono uppercase tracking-widest text-white/50">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}