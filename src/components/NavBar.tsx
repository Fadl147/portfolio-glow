import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FileText } from 'lucide-react';

const NAV_LINKS = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'Skills', href: '#skills', num: '02' },
  { label: 'Projects', href: '#projects', num: '03' },
  { label: 'Contact', href: '#contact', num: '04' },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  // Track scroll for nav background blur
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-[hsl(var(--background))]/70 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#"
            className="group flex items-center gap-2 font-mono text-base"
          >
            <span className="text-[hsl(var(--primary))]">&lt;</span>
            <span className="text-white group-hover:text-[hsl(var(--primary))] transition-colors">
              Fadlullah
            </span>
            <span className="text-[hsl(var(--primary))]">/&gt;</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group flex items-center gap-1.5 text-sm font-mono transition-colors ${
                  activeSection === link.href
                    ? 'text-white'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                <span className="text-[hsl(var(--primary))] text-xs">{link.num}.</span>
                <span className="relative">
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--secondary))] transition-transform origin-left ${
                      activeSection === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </span>
              </a>
            ))}
          </div>

          {/* Resume CTA */}
          <a
            href="/Resume 26'.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium border border-[hsl(var(--primary)/0.4)] text-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/0.1)] hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all"
          >
            <FileText className="h-3.5 w-3.5" />
            Resume
          </a>
        </nav>

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX }}
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] origin-left"
        />
      </header>
    </>
  );
}