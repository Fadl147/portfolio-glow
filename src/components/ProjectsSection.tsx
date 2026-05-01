import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import type { MouseEvent } from 'react';
import { Github as GithubIcon, ArrowUpRight, Sparkles, Lock, Maximize2, X } from 'lucide-react';

// Project images
import curePharmaImg from '../assets/CurePharmaX.png';
import billinGoImg from '../assets/BillinGo.png';

type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: { name: string; color: string }[];
  links: {
    github: string | null;
    external: string | null;
  };
  image: string | null;
  imageAlt: string;
  year: string;
  role: string;
  featured?: boolean;
  status?: 'live' | 'wip' | 'archived';
};

const PROJECTS: Project[] = [
  {
    title: 'CurePharma X',
    tagline: 'Pharmacy management, reimagined',
    description:
      'A comprehensive pharmacy inventory management system designed to streamline billing, stock tracking, and sales analytics. Recently refactored from a standard SPA to an SEO-friendly architecture to improve search visibility and performance for local pharmacies.',
    tech: [
      { name: 'React', color: '#61dafb' },
      { name: 'Node.js', color: '#5fa04e' },
      { name: 'PostgreSQL', color: '#4169e1' },
      { name: 'Tailwind', color: '#06b6d4' },
    ],
    links: {
      github: null,
      external: 'https://curepharmax.netlify.app',
    },
    image: curePharmaImg,
    imageAlt: 'CurePharma X dashboard screenshot',
    year: '2024',
    role: 'Solo build',
    featured: true,
    status: 'live',
  },
  {
    title: 'BillinGO',
    tagline: 'Invoicing for small businesses',
    description:
      'A full-stack SaaS platform for small businesses to manage invoices and inventory. Features automated tax calculations, PDF generation, and real-time dashboard analytics for tracking monthly revenue growth.',
    tech: [
      { name: 'Next.js', color: '#ffffff' },
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'SQLAlchemy', color: '#dc2626' },
      { name: 'Python', color: '#ffd43b' },
    ],
    links: {
      github: null,
      external: null,
    },
    image: '/RBAClandingpage.png',
    imageAlt: 'BillinGO invoice dashboard screenshot',
    year: '2024',
    role: 'Full-stack',
    featured: true,
    status: 'wip',
  },
  {
    title: 'Aura-The Copilot',
    tagline: 'Enterprise Artificial intelligence for business analysis.',
    description:
      'Your next showcase project goes here. Replace this placeholder with the project that best demonstrates a different skill from your first two — maybe an open-source tool, a scraper, an ML experiment, or a slick frontend-only app.',
    tech: [
      { name: 'Next.js', color: '#a259ff' },
      { name: 'FastAPI', color: '#06b6d4' },
      { name: 'PostgreSQL', color: '#f59e0b' },
    ],
    links: {
      github: null,
      external: null,
    },
    image: '/AURA-dashboard.png',
    imageAlt: 'Project three placeholder',
    year: '2026',
    role: 'AI',
    status: 'wip',
  },
];

// ───────────────────────────────────────────────────────────
// Lightbox — full-screen image viewer
// ───────────────────────────────────────────────────────────

function Lightbox({ image, alt, onClose }: { image: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      {/* Hint text */}
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-mono text-white/40 uppercase tracking-widest pointer-events-none">
        Click anywhere or press ESC to close
      </p>

      {/* Image container */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-7xl w-full max-h-[85vh] cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-contain rounded-xl shadow-2xl"
          style={{ maxHeight: '85vh' }}
        />
      </motion.div>
    </motion.div>
  );
}

// ───────────────────────────────────────────────────────────
// 3D Tilt wrapper
// ───────────────────────────────────────────────────────────

function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
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
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ───────────────────────────────────────────────────────────
// Project Card
// ───────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  onImageClick,
}: {
  project: Project;
  index: number;
  onImageClick: (image: string, alt: string) => void;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isReversed = index % 2 !== 0;
  const hasLinks = project.links.github || project.links.external;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative grid md:grid-cols-12 gap-8 md:gap-6 items-center group"
    >
      {/* ─── Image side ─── */}
      <div className={`md:col-span-7 ${isReversed ? 'md:order-2' : 'md:order-1'}`}>
        <TiltCard className="relative">
          {/* Animated gradient border */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] opacity-0 group-hover:opacity-60 blur transition-all duration-500" />

          <div
            onClick={() => project.image && onImageClick(project.image, project.imageAlt)}
            className={`relative aspect-[16/10] rounded-2xl overflow-hidden bg-[hsl(var(--card))] border border-[hsl(var(--border))] group-hover:border-white/20 transition-colors ${project.image ? 'cursor-zoom-in' : ''}`}
          >
            {project.image ? (
              <>
                {/* Branded background fills aspect ratio */}
                <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--background-soft))] via-[hsl(var(--card))] to-[hsl(var(--background-soft))]" />
                {/* Image — object-contain shows the full screenshot, with padding */}
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="relative z-[1] w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-[1.02]"
                />
                {/* Shine sweep */}
                <div className="absolute inset-0 z-[2] -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

                {/* Click-to-expand hint */}
                <div className="absolute bottom-3 right-3 z-[3] flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur border border-white/15 text-[10px] font-mono uppercase tracking-wider text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <Maximize2 className="h-3 w-3" />
                  <span>Click to expand</span>
                </div>
              </>
            ) : (
              // Placeholder when no image
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[hsl(var(--card))] via-[hsl(var(--background-soft))] to-[hsl(var(--card))]">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-[hsl(var(--primary)/0.2)] to-[hsl(var(--secondary)/0.2)] flex items-center justify-center border border-white/10">
                    <Sparkles className="w-7 h-7 text-white/40" />
                  </div>
                  <p className="font-mono text-xs text-white/30">screenshot.placeholder</p>
                </div>
              </div>
            )}

            {/* Status badge */}
            {project.status && (
              <div className="absolute top-4 left-4 z-[3] flex items-center gap-2 backdrop-blur bg-black/40 border border-white/10 rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-wider">
                {project.status === 'live' && (
                  <>
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-emerald-300">Live</span>
                  </>
                )}
                {project.status === 'wip' && (
                  <>
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span className="text-amber-300">In progress</span>
                  </>
                )}
                {project.status === 'archived' && (
                  <>
                    <Lock className="h-3 w-3 text-white/50" />
                    <span className="text-white/50">Archived</span>
                  </>
                )}
              </div>
            )}
          </div>
        </TiltCard>
      </div>

      {/* ─── Content side ─── */}
      <div
        className={`md:col-span-5 flex flex-col ${isReversed ? 'md:order-1 md:items-start md:text-left' : 'md:order-2 md:items-end md:text-right'}`}
      >
        {/* Meta row */}
        <div className={`flex items-center gap-3 mb-3 text-xs font-mono ${isReversed ? '' : 'md:flex-row-reverse'}`}>
          {project.featured && (
            <span className="text-[hsl(var(--primary))] uppercase tracking-widest">
              Featured
            </span>
          )}
          <span className="text-white/30">{project.year}</span>
          <span className="text-white/20">·</span>
          <span className="text-white/30">{project.role}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-3xl md:text-4xl font-bold mb-2 leading-tight">
          <a
            href={project.links.external ?? '#'}
            target={project.links.external ? '_blank' : undefined}
            rel={project.links.external ? 'noopener noreferrer' : undefined}
            className="inline-block hover:text-[hsl(var(--primary))] transition-colors"
          >
            {project.title}
          </a>
        </h3>

        {/* Tagline */}
        <p className="text-[hsl(var(--secondary))] font-medium mb-5">{project.tagline}</p>

        {/* Description card — no negative margin, sits cleanly */}
        <div className="relative p-5 md:p-6 rounded-xl bg-[hsl(var(--card))]/80 backdrop-blur border border-[hsl(var(--border))] mb-5 text-white/60 text-sm leading-relaxed shadow-xl">
          {project.description}
        </div>

        {/* Tech pills */}
        <ul className={`flex flex-wrap gap-2 mb-5 ${isReversed ? 'justify-start' : 'md:justify-end'}`}>
          {project.tech.map((t) => (
            <li
              key={t.name}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono bg-white/[0.03] border border-white/10 text-white/70"
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: t.color, boxShadow: `0 0 6px ${t.color}` }}
              />
              {t.name}
            </li>
          ))}
        </ul>

        {/* Links */}
        {hasLinks && (
          <div className={`flex items-center gap-3 ${isReversed ? '' : 'md:justify-end'}`}>
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} source code`}
                className="group/link inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 text-white/60 hover:text-white hover:border-white/30 hover:bg-white/[0.05] transition-all hover:-translate-y-0.5"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
            {project.links.external && (
              <a
                href={project.links.external}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-sm font-medium text-white/80 hover:text-white hover:border-[hsl(var(--primary)/0.5)] hover:bg-[hsl(var(--primary)/0.05)] transition-all hover:-translate-y-0.5"
              >
                Visit site
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </a>
            )}
          </div>
        )}

        {!hasLinks && (
          <div className={`text-xs font-mono text-white/30 italic ${isReversed ? '' : 'md:text-right'}`}>
            {project.title === 'Project Three' ? '// add your project details' : '// links coming soon'}
          </div>
        )}
      </div>
    </motion.div>
  );
}

// ───────────────────────────────────────────────────────────
// Main Section
// ───────────────────────────────────────────────────────────

export default function ProjectsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });
  const [lightbox, setLightbox] = useState<{ image: string; alt: string } | null>(null);

  return (
    <>
      <section id="projects" className="relative py-32 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-6"
        >
          <span className="font-mono text-sm text-[hsl(var(--primary))]">03.</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Things I've <span className="gradient-text">built</span>
          </h2>
          <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-[hsl(var(--border))] to-transparent ml-4" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-white/50 max-w-2xl mb-20"
        >
          A few selected projects I've shipped recently. Click any screenshot to view it full-size.
        </motion.p>

        {/* Projects grid */}
        <div className="flex flex-col gap-32">
          {PROJECTS.map((project, idx) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={idx}
              onImageClick={(image, alt) => setLightbox({ image, alt })}
            />
          ))}
        </div>

        {/* CTA at the end */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mt-24"
        >
          <p className="text-white/40 mb-4 text-sm">More projects on GitHub</p>
          <a
            href="https://github.com/Fadl147"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 font-mono text-sm text-white/70 hover:text-white transition-colors"
          >
            <GithubIcon className="h-4 w-4" />
            <span className="border-b border-white/20 group-hover:border-[hsl(var(--primary))] transition-colors pb-0.5">
              github.com/Fadl147
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </section>

      {/* Lightbox modal */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            image={lightbox.image}
            alt={lightbox.alt}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}