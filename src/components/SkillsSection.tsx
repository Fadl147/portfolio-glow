

const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"]
  },
  {
    title: "Tools",
    skills: ["Git", "Docker", "AWS", "Figma", "VS Code"]
  },
  {
    title: "Other",
    skills: ["REST APIs", "CI/CD", "Testing", "Agile", "Linux"]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
        <span className="text-[hsl(var(--primary))] font-mono text-xl">02.</span>
        Skills & Tools
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-xl p-6 hover:border-[hsl(var(--primary))] hover:-translate-y-1 transition-all duration-300 group shadow-lg"
          >
            {/* Category Title */}
            <h3 className="text-[hsl(var(--primary))] font-bold mb-6 text-sm uppercase tracking-widest">
              {category.title}
            </h3>
            
            {/* Skills List */}
            <ul className="space-y-4">
              {category.skills.map((skill) => (
                <li 
                  key={skill} 
                  className="flex items-center gap-3 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--foreground))] transition-colors duration-300"
                >
                  {/* Custom Blue Bullet Point */}
                  <span className="w-2 h-2 rounded-full bg-[hsl(var(--primary))] shadow-[0_0_8px_hsl(var(--primary)/0.6)]"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}