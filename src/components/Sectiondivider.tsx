import { motion } from 'framer-motion';

type Props = {
  /** Optional glyph between the two lines, e.g. '✦' or '◆' */
  glyph?: string;
};

export default function SectionDivider({ glyph = '✦' }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className="relative max-w-6xl mx-auto px-6 py-8 flex items-center justify-center gap-6"
      aria-hidden="true"
    >
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <span
        className="font-mono text-xs select-none"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--accent)))',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        }}
      >
        {glyph}
      </span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </motion.div>
  );
}