import { Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          {/* Left: signature */}
          <div className="flex items-center gap-2 font-mono">
            <Code2 className="h-4 w-4 text-[hsl(var(--primary))]" />
            <span>Designed & built by Fadlullah MS</span>
          </div>

          {/* Center: built with */}
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span>Built with</span>
            <Heart className="h-3 w-3 text-[hsl(var(--accent))] fill-current" />
            <span>using React + Tailwind</span>
          </div>

          {/* Right: copyright */}
          <div className="font-mono text-xs">
            © {year} · All rights reserved
          </div>
        </div>

        {/* Easter egg comment for fellow devs viewing source */}
        <div className="hidden">
          {/* Hey, fellow dev 👋 thanks for checking the source. If you got here, let's chat — fadlullahmohammedsiddiqui@gmail.com */}
        </div>
      </div>
    </footer>
  );
}