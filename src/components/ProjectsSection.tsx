
import { Github, ExternalLink } from 'lucide-react';

// Ensure CurePharmaX.png is inside your 'src/assets' folder
import curePharmaImg from '../assets/CurePharmaX.png';
import BillinGoImg from '../assets/BillinGo.png'

export default function ProjectsSection() {
  const projects = [
    {
      title: "CurePharma X",
      overline: "Featured Project",
      description: "A comprehensive pharmacy inventory management system designed to streamline billing, stock tracking, and sales analytics. Recently refactored from a standard SPA to an SEO-friendly architecture to improve search visibility and performance for local pharmacies.",
      tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
      // 1. URL updated here
      links: { github: "#", external: "https://curepharmax.netlify.app" },
      image: curePharmaImg 
    },
    {
      title: "BillinGO",
      overline: "Featured Project",
      description: "A full-stack SaaS platform for small businesses to manage invoices and inventory. Features automated tax calculations, PDF generation, and real-time dashboard analytics for tracking monthly revenue growth.",
      tech: ["Next.js", "TypeScript", "SQLAlchemy", "Python"],
      links: { github: "#", external: "#" },
      image: BillinGoImg
    }
  ];




  return (
    <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
      
      {/* Section Header */}
      <h2 className="text-3xl font-bold mb-16 flex items-center gap-2">
        <span className="text-[hsl(var(--primary))] font-mono text-xl">03.</span>
        Some Things I've Built
      </h2>

      <div className="flex flex-col gap-24">
        {projects.map((project, index) => (
          <div key={index} className="relative grid md:grid-cols-12 gap-4 items-center group">
            
            {/* Project Image Area */}
            <div className={`md:col-span-7 relative rounded-lg overflow-hidden border border-[hsl(var(--border))] ${index % 2 !== 0 ? 'md:order-2' : 'md:order-1'}`}>
              <div className="absolute inset-0 bg-[hsl(var(--primary))] opacity-20 group-hover:opacity-0 transition-all duration-300 z-10"></div>
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
              />
            </div>

            {/* Project Content Area */}
            <div className={`md:col-span-5 flex flex-col z-20 ${index % 2 !== 0 ? 'md:items-start md:text-left md:order-1' : 'md:items-end md:text-right md:order-2'}`}>
              
              <p className="text-[hsl(var(--primary))] font-mono text-sm mb-2">
                {project.overline}
              </p>
              
              <h3 className="text-2xl font-bold text-[hsl(var(--foreground))] mb-4 hover:text-[hsl(var(--primary))] transition-colors cursor-pointer">
                <a href={project.links.external} target="_blank" rel="noopener noreferrer">
                  {project.title}
                </a>
              </h3>

              {/* Description Box */}
              <div className={`bg-[hsl(var(--card))] p-6 rounded-lg shadow-xl text-[hsl(var(--muted-foreground))] text-sm leading-relaxed mb-6 border border-[hsl(var(--border))] ${index % 2 !== 0 ? '-mr-12' : '-ml-12'} relative`}>
                {project.description}
              </div>

              {/* Tech Stack */}
              <ul className={`flex flex-wrap gap-4 text-xs font-mono text-[hsl(var(--muted-foreground))] mb-6 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'}`}>
                {project.tech.map(t => <li key={t}>{t}</li>)}
              </ul>

              {/* Links */}
              <div className="flex items-center gap-4 text-[hsl(var(--foreground))]">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[hsl(var(--primary))] transition-colors"
                  aria-label="View Source Code"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={project.links.external} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[hsl(var(--primary))] transition-colors"
                  aria-label="View Live Project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}