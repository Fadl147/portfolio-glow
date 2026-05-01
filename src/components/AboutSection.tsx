import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Zap} from 'lucide-react';

const TECH_STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Tailwind CSS',
  'Python',
  'Git',
];

const FEATURES = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-tested solutions',
    color: 'hsl(var(--primary))',
    bgColor: 'hsl(var(--primary) / 0.1)',
  },
  {
    icon: Palette,
    title: 'UI/UX Focused',
    description: 'Crafting beautiful, intuitive, and accessible interfaces',
    color: 'hsl(var(--secondary))',
    bgColor: 'hsl(var(--secondary) / 0.1)',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed, efficiency, and Core Web Vitals',
    color: 'hsl(var(--accent))',
    bgColor: 'hsl(var(--accent) / 0.1)',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-32 max-w-6xl mx-auto px-6"
    >
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="font-mono text-sm text-[hsl(var(--primary))]">01.</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          About <span className="gradient-text">me</span>
        </h2>
        <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[hsl(var(--border))] to-transparent ml-4" />
      </motion.div>

      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Left: Photo (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative group"
        >
          <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-br from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] rounded-2xl opacity-50 blur-sm group-hover:opacity-100 group-hover:blur-md transition-all duration-500" />

        {/* Photo container */}
            <div className="relative h-full w-full rounded-2xl overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))]">
              
              <img
                src="/myaipic.png"
                alt="Fadlullah Mohammed Siddiqui"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle overlay on hover */}
          
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--background))]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Corner accent */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]" />
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--secondary))]" />
                <div className="w-2 h-2 rounded-full bg-[hsl(var(--accent))]" />
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-3 -right-3 glass rounded-full px-4 py-2 text-xs font-mono text-white/80 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Coding now
            </div>
          </div>
        </motion.div>

        {/* Right: Bio + Tech (7 cols) */}
        <div className="md:col-span-7 space-y-8">
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
            className="space-y-5 text-[hsl(var(--muted-foreground))] text-lg leading-relaxed"
          >
            <motion.p variants={fadeInUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              I'm a developer who treats every project like it's going to be{' '}
              <span className="text-white font-medium">studied by interviewers</span> — because
              sometimes it is. I love turning fuzzy ideas into clean, functional products that
              real people actually want to use.
            </motion.p>

            <motion.p variants={fadeInUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              My journey started in college with side projects that quickly turned into{' '}
              <span className="text-white font-medium">real-world tools</span> — pharmacy
              inventory systems, billing platforms, and SaaS dashboards. I focus on full-stack
              web development with a soft spot for clean UI and snappy performance.
            </motion.p>

            <motion.p variants={fadeInUp} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}>
              When I'm not shipping code, I'm probably reading docs of a framework I'll never
              use, or refactoring something that worked perfectly fine.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/70 pt-2"
            >
              Here's what I've been building with lately:
            </motion.p>
          </motion.div>

          {/* Tech chips */}
          <motion.ul
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05, delayChildren: 0.6 } },
            }}
            className="flex flex-wrap gap-2"
          >
            {TECH_STACK.map((tech) => (
              <motion.li
                key={tech}
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 10 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                whileHover={{ y: -2, transition: { duration: 0.2 } }}
                className="group cursor-default px-3 py-1.5 rounded-full text-sm font-mono bg-white/[0.03] border border-white/10 text-white/70 hover:border-[hsl(var(--primary)/0.5)] hover:text-white hover:bg-[hsl(var(--primary)/0.05)] transition-colors"
              >
                <span className="text-[hsl(var(--primary))] mr-1.5">▹</span>
                {tech}
              </motion.li>
            ))}
          </motion.ul>

          {/* Feature cards — horizontal row */}
          <motion.div
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.8 } },
            }}
            className="grid sm:grid-cols-3 gap-3 pt-4"
          >
            {FEATURES.map(({ icon: Icon, title, description, color, bgColor }) => (
              <motion.div
                key={title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors overflow-hidden"
              >
                {/* Subtle glow on hover */}
                <div
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: color }}
                />

                <div
                  className="relative w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                  style={{ background: bgColor, color }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="relative font-bold text-white mb-1 text-sm">{title}</h3>
                <p className="relative text-xs text-white/50 leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}