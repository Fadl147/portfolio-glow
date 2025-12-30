export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur bg-black/30">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="text-xl font-mono text-primary">&lt;Dev /&gt;</span>

        <div className="hidden md:flex gap-8 text-sm text-muted-foreground">
          <a href="#about"  className="nav-link">About</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#projects"  className="nav-link">Projects</a>
          <a href="#contact"  className="nav-link">Contact</a>
        </div>

        <a
  href="/Fadlullah Mohammed Siddiqui (6)-1 (1).pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:shadow-[0_0_20px_rgba(56,189,248,0.6)] transition-all"
>
  Resume
</a>

      </nav>
    </header>
  );
}
