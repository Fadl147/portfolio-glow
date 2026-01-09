import { Code, Palette, Zap } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left Column: Bio & Tech Stack */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <span className="text-[hsl(var(--primary))] font-mono text-xl">01.</span>
            About Me
          </h2>

          <div className="text-[hsl(var(--muted-foreground))] space-y-4 text-lg leading-relaxed">
            <p>
             Hello! I’m Fadlullah MS, a passionate developer who enjoys building practical and user-focused web applications. I have hands-on experience with full-stack development and love turning ideas into clean, functional products. I’m always learning, improving my skills, and exploring new technologies to build better solutions.
            </p>
            <p>
             I’ve gained hands-on experience building real-world projects during my college journey, focusing on full-stack web development. My current focus is creating clean, efficient, and user-friendly applications that solve practical problems.
            </p>
            <p>
              Here are a few technologies I've been working with recently:
            </p>
          </div>

          <ul className="grid grid-cols-2 gap-2 font-mono text-sm text-[hsl(var(--muted-foreground))]">
            {['TypeScript', 'React', 'Node.js', 'Next.js', 'PostgreSQL', 'Tailwind CSS'].map((tech) => (
              <li key={tech} className="flex items-center gap-2">
                <span className="text-[hsl(var(--primary))]">▹</span> {tech}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Feature Card */}
        {/* Added 'group' to parent to control the background blur opacity on hover */}
        <div className="relative mt-4 md:mt-12 group">
           
           {/* 1. Background Glow: opacity increases from 20% to 60% on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-br from-[hsl(var(--primary))] to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          {/* 2. Main Card: Added hover effects for translate, border, and shadow */}
          <div className="relative bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-2xl p-8 space-y-8 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[hsl(var(--primary))] hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)]">
            
            {/* Feature 1 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] flex items-center justify-center text-[hsl(var(--primary))] shrink-0">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">Clean Code</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                  Writing maintainable and scalable solutions
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] flex items-center justify-center text-purple-500 shrink-0">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">UI/UX Focused</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                  Creating beautiful, intuitive interfaces
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-lg bg-[hsl(var(--background))] border border-[hsl(var(--border))] flex items-center justify-center text-blue-400 shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-[hsl(var(--foreground))]">Performance</h3>
                <p className="text-[hsl(var(--muted-foreground))] text-sm mt-1">
                  Optimizing for speed and efficiency
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}