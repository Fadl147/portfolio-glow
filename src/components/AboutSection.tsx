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
              Hello! I'm John, a passionate developer who loves creating things that live on the internet. 
              My interest in web development started back in 2015 when I decided to try editing custom 
              Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p>
              Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation, 
              and a student-led design studio. My main focus these days is building accessible, inclusive 
              products and digital experiences.
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