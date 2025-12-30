
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-32 max-w-4xl mx-auto px-6 text-center">
      
      {/* 1. The 'What's Next' Label */}
      <p className="text-[hsl(var(--primary))] font-mono text-sm mb-4">
        04. What's Next?
      </p>

      {/* 2. Main Heading */}
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--foreground))]">
        Get In Touch
      </h2>

      {/* 3. Description Text */}
      <p className="text-[hsl(var(--muted-foreground))] text-lg mb-12 max-w-xl mx-auto leading-relaxed">
        I'm currently looking for new opportunities and my inbox is always open. 
        Whether you have a question, want to collaborate on a project, or just 
        want to say hi, I'll try my best to get back to you!
      </p>

      {/* 4. 'Say Hello' Button */}
      {/* Styled with a border and transparent background to match the screenshot */}
      <a
        href="mailto:your.email@example.com"
        className="inline-block border border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-8 py-4 rounded-md font-medium hover:bg-[hsl(var(--primary)/0.1)] transition-colors duration-300 mb-32"
      >
        Say Hello
      </a>

      {/* 5. Social Icons */}
      <div className="flex justify-center gap-8 text-[hsl(var(--muted-foreground))]">
        <a 
          href="https://github.com/Fadl147" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-[hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://www.linkedin.com/in/fadlullah-mohammed-siddiqui-5464a0339/" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-[hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a 
          href="https://twitter.com" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-[hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noreferrer" 
          className="hover:text-[hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
        >
          <Instagram className="w-5 h-5" />
        </a>
        <a 
          href="fadlullahmohammedsiddiqui@gmail.com" 
          className="hover:text-[hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>

    </section>
  );
}