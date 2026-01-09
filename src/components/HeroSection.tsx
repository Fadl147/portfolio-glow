export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* glow */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-glow-cyan/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] bg-glow-purple/20 rounded-full blur-3xl" />

      <div className="relative z-10 text-center max-w-3xl px-6">
        <p className="text-primary font-mono mb-4">
          Hi, my name is
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Fadlullah MS
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-6">
          I build things for the web.
        </h2>

        <p className="text-muted-foreground text-lg mb-10">
          I’m a passionate full-stack developer focused on building clean,
          accessible, and human-centered digital experiences.
        </p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-background font-medium hover:opacity-90 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-background transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
