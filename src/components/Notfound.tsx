import { motion } from 'framer-motion';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[hsl(var(--background))] text-[hsl(var(--foreground))] noise">
      {/* Background atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{
          background:
            'conic-gradient(from 90deg at 50% 50%, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)), hsl(var(--primary)))',
        }}
      />

      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center max-w-2xl px-6">
        {/* 404 number */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[10rem] md:text-[14rem] font-black leading-none tracking-tighter gradient-text"
        >
          404
        </motion.h1>

        {/* Mono error tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur px-4 py-1.5 text-xs font-mono mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
          <span className="text-white/60">error · page_not_found</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
        >
          Lost in the matrix.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-white/50 text-lg mb-10 max-w-md mx-auto leading-relaxed"
        >
          The page you're looking for doesn't exist — or it took a coffee break.
          Either way, let's get you back to safety.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)]"
          >
            <Home className="h-4 w-4" />
            Take me home
          </a>

          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.02] backdrop-blur px-6 py-3 text-sm font-medium text-white/80 hover:text-white hover:border-white/30 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
            Go back
          </button>
        </motion.div>

        {/* Easter egg footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 font-mono text-xs text-white/30"
        >
          {'// you found a page that doesn\'t exist. nice exploring.'}
        </motion.p>
      </div>
    </div>
  );
}