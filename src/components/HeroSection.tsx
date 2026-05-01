import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github as GithubIcon, Linkedin as LinkedinIcon, Mail, ArrowDown, Sparkles, ArrowUpRight } from 'lucide-react';

const ROTATING_WORDS = ['products', 'experiences', 'interfaces', 'ideas'];

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  // Mouse parallax via motion values (smooth via spring)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const gridX = useTransform(springX, [-0.5, 0.5], [-20, 20]);
  const gridY = useTransform(springY, [-0.5, 0.5], [-20, 20]);
  const blob1X = useTransform(springX, [-0.5, 0.5], [40, -40]);
  const blob1Y = useTransform(springY, [-0.5, 0.5], [40, -40]);
  const blob2X = useTransform(springX, [-0.5, 0.5], [-40, 40]);
  const blob2Y = useTransform(springY, [-0.5, 0.5], [-40, 40]);

  // Word cycler
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left - rect.width / 2) / rect.width);
      mouseY.set((e.clientY - rect.top - rect.height / 2) / rect.height);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid */}
      <motion.div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          x: gridX,
          y: gridY,
        }}
      />

      {/* Radial mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background)) 75%)',
        }}
      />

      {/* Gradient blobs */}
      <motion.div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)',
          x: blob1X,
          y: blob1Y,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] rounded-full blur-[120px] opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(var(--secondary)) 0%, transparent 70%)',
          x: blob2X,
          y: blob2Y,
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl w-full px-6">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-1.5 text-xs mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-white/70">Available for opportunities</span>
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-[hsl(var(--primary))] mb-6 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Hey there, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl md:text-8xl font-black tracking-tight mb-6 leading-[0.95]"
        >
          <span className="block bg-gradient-to-br from-white via-white to-white/60 bg-clip-text text-transparent">
            Fadlullah
          </span>
          <span className="block gradient-text">
            Mohammed Siddiqui.
          </span>
        </motion.h1>

        {/* Tagline with word cycler */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl font-bold text-white/40 mb-8 leading-tight"
        >
          I build{' '}
          <span className="relative inline-block">
            <motion.span
              key={wordIndex}
              initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
              exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] bg-clip-text text-transparent"
            >
              {ROTATING_WORDS[wordIndex]}
            </motion.span>
            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] opacity-50" />
          </span>
          <br />
          that <span className="text-white">matter.</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg text-white/50 max-w-xl mb-10 leading-relaxed"
        >
          Full-stack developer crafting clean, performant web applications.
          Currently turning caffeine into code and ideas into pixels from{' '}
          <span className="text-white/80">Hyderabad, India</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)]"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <span className="relative z-10 transition-colors group-hover:text-white">
              View my work
            </span>
            <ArrowUpRight className="relative z-10 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.02] backdrop-blur px-7 py-3.5 text-sm font-semibold text-white/90 transition-all hover:border-white/40 hover:bg-white/[0.05]"
          >
            <Mail className="h-4 w-4" />
            Let's talk
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6"
        >
          {[
            { Icon: GithubIcon, label: 'GitHub', href: 'https://github.com/Fadl147' },
            { Icon: LinkedinIcon, label: 'LinkedIn', href: 'https://www.linkedin.com/in/fadlullah-mohammed-siddiqui-5464a0339/' },
            { Icon: Mail, label: 'Email', href: 'mailto:fadlullahmohammedsiddiqui@gmail.com' },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="group relative text-white/40 transition-all hover:text-white hover:-translate-y-0.5"
            >
              <Icon className="h-5 w-5" />
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono opacity-0 transition-opacity group-hover:opacity-100">
                {label}
              </span>
            </a>
          ))}
          <div className="h-px w-16 bg-gradient-to-r from-white/20 to-transparent" />
          <span className="font-mono text-xs text-white/30">Hyderabad, IN</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}