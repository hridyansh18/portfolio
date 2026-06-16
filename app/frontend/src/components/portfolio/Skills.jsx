import { Code2, Database, Cpu, Wrench } from "lucide-react";

const groups = [
  {
    icon: Code2,
    title: "Languages & Frontend",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Bootstrap",
      "React.js (Learning)",
    ],
  },
  {
    icon: Database,
    title: "Backend & Databases",
    items: [
      "Python",
      "Node.js (Learning)",
      "REST APIs (Learning)",
      "SQL",
      "MySQL",
    ],
  },
  {
    icon: Cpu,
    title: "Core Computer Science",
    items: [
      "DSA",
      "DBMS",
      "OOPs",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Canva",
      "Adobe Photoshop",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 bg-[#070707]"
      data-testid="skills-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="font-mono-acc text-[10px] tracking-[0.32em] uppercase text-white/50 reveal">
              [ 03 / Toolkit ]
            </p>

            <h2 className="reveal mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Skills &amp; <span className="text-[#E63946]">Stack</span>
            </h2>
          </div>

          <p className="reveal text-white/55 max-w-md text-sm md:text-base">
            A growing toolkit. Strong on fundamentals, comfortable with modern
            frontend, actively expanding into backend and AI/ML.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {groups.map((group, index) => {
            const Icon = group.icon;

            const spanClass =
              index === 0
                ? "lg:col-span-7"
                : index === 1
                ? "lg:col-span-5"
                : index === 2
                ? "lg:col-span-4"
                : index === 3
                ? "lg:col-span-5"
                : "lg:col-span-3";

            return (
              <div
                key={group.title}
                className={`reveal ${spanClass} group relative p-6 md:p-7 bg-[#0A0A0A] border border-white/5 hover:border-white/15 transition-colors overflow-hidden`}
                data-testid={`skill-group-${group.title
                  .toLowerCase()
                  .replace(/[^a-z]/g, "-")}`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 flex items-center justify-center border border-white/10 group-hover:border-[#E63946]/60 transition-colors">
                    <Icon className="w-4 h-4 text-[#E63946]" />
                  </span>

                  <h3 className="text-lg font-bold tracking-tight">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="font-mono-acc text-[11px] px-2.5 py-1.5 border border-white/10 bg-white/[0.02] text-white/80 hover:border-[#E63946]/60 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;