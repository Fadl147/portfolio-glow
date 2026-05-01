import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { Github as GithubIcon, Linkedin as LinkedinIcon, Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

const SOCIALS = [
  {
    Icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/Fadl147',
    handle: '@Fadl147',
  },
  {
    Icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fadlullah-mohammed-siddiqui-5464a0339/',
    handle: 'Fadlullah MS',
  },
  {
    Icon: Mail,
    label: 'Email',
    href: 'mailto:fadlullahmohammedsiddiqui@gmail.com',
    handle: 'fadlullahmohammedsiddiqui@gmail.com',
  },
];

const EMAIL = 'fadlullahmohammedsiddiqui@gmail.com';

// ───────────────────────────────────────────────────────────
// Magnetic button — pulls toward cursor
// ───────────────────────────────────────────────────────────

function MagneticWrapper({ children, strength = 0.3 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}

// ───────────────────────────────────────────────────────────
// Main Section
// ───────────────────────────────────────────────────────────

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-32 max-w-5xl mx-auto px-6 overflow-hidden"
    >
      {/* Decorative background blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[140px] opacity-15 pointer-events-none"
        style={{
          background:
            'conic-gradient(from 180deg at 50% 50%, hsl(var(--primary)) 0deg, hsl(var(--secondary)) 120deg, hsl(var(--accent)) 240deg, hsl(var(--primary)) 360deg)',
        }}
      />

      <div className="relative z-10 text-center">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-sm text-[hsl(var(--primary))] mb-6"
        >
          04. What's next?
        </motion.p>

        {/* Big headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-7xl font-black tracking-tight mb-6 leading-[0.95]"
        >
          Let's build <br />
          <span className="gradient-text">something great</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 text-lg max-w-xl mx-auto mb-12 leading-relaxed"
        >
          I'm currently <span className="text-white">open to opportunities</span> — full-time, freelance, or just a chat.
          Got an interesting project, a role, or just want to say hi? My inbox is always open.
        </motion.p>

        {/* Primary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <MagneticWrapper>
            <a
              href={`mailto:${EMAIL}`}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_50px_hsl(var(--primary)/0.4)]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Mail className="relative z-10 h-5 w-5 transition-colors group-hover:text-white" />
              <span className="relative z-10 transition-colors group-hover:text-white">
                Say hello
              </span>
              <ArrowUpRight className="relative z-10 h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
            </a>
          </MagneticWrapper>

          <button
            onClick={handleCopyEmail}
            className="group inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur text-sm font-mono text-white/70 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-colors"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" />
                <span>Copy email</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Or divider */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-10 text-xs font-mono text-white/30 uppercase tracking-widest"
        >
          <div className="h-px w-16 bg-white/10" />
          <span>or find me on</span>
          <div className="h-px w-16 bg-white/10" />
        </motion.div>

        {/* Social cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
          }}
          className="grid sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
        >
          {SOCIALS.map(({ Icon, label, href, handle }) => (
            <motion.div
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <MagneticWrapper strength={0.15}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="group block p-5 rounded-xl bg-white/[0.02] border border-white/10 hover:border-white/25 hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center justify-between mb-3">
                    <Icon className="h-5 w-5 text-white/60 group-hover:text-white transition-colors" />
                    <ArrowUpRight className="h-4 w-4 text-white/30 group-hover:text-[hsl(var(--primary))] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <p className="text-xs font-mono text-white/40 uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-sm text-white/80 font-medium truncate">{handle}</p>
                </a>
              </MagneticWrapper>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer-style timezone hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 flex items-center justify-center gap-2 text-xs font-mono text-white/30"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Currently in Hyderabad, IN · IST (UTC+5:30) · Replying within 24h
        </motion.div>
      </div>
    </section>
  );
}