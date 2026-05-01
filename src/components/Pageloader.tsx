import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [show, setShow] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulated progress that finishes after assets load
    const startTime = Date.now();
    const minDuration = 1200; // minimum visible time so it doesn't flash

    const tick = () => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min(100, (elapsed / minDuration) * 100);
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    const handleLoad = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDuration - elapsed);
      setTimeout(() => setShow(false), remaining + 200);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[hsl(var(--background))]"
        >
          {/* Center content */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Animated logo mark */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Spinning gradient ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, transparent 0deg, hsl(var(--primary)) 90deg, hsl(var(--secondary)) 180deg, hsl(var(--accent)) 270deg, transparent 360deg)',
                  mask: 'radial-gradient(circle, transparent 50%, black 51%)',
                  WebkitMask: 'radial-gradient(circle, transparent 50%, black 51%)',
                }}
              />

              {/* Center monogram */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  className="font-display text-3xl font-black gradient-text"
                  style={{ animation: 'shimmer 2s ease-in-out infinite' }}
                >
                  F
                </span>
              </div>
            </motion.div>

            {/* Loading text + progress */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col items-center gap-3"
            >
              <p className="font-mono text-xs text-white/40 uppercase tracking-[0.3em]">
                Loading portfolio
              </p>

              {/* Progress bar */}
              <div className="relative w-48 h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))]"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <p className="font-mono text-[10px] text-white/30 tabular-nums">
                {Math.round(progress).toString().padStart(3, '0')}%
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}