import { Github, ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    slug: "portfolio-website",
    num: "01",
    title: "Portfolio Website",
    desc: "A modern personal portfolio showcasing projects, skills, education, achievements, and professional experience. Built with a focus on responsiveness, performance, accessibility, and clean user experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    span: "lg:col-span-7",
    links: [
      { label: "Live Demo", href: "#", icon: ExternalLink },
      { label: "GitHub", href: "#", icon: Github },
    ],
  },
  {
    slug: "student-management-system",
    num: "02",
    title: "Student Management System",
    desc: "A full-stack academic management platform enabling efficient student record handling through CRUD operations, database integration, and RESTful API architecture.",
    tags: ["Python", "MySQL", "REST API"],
    span: "lg:col-span-5",
    links: [{ label: "GitHub", href: "#", icon: Github }],
  },
  {
    slug: "weather-dashboard",
    num: "03",
    title: "Weather Dashboard",
    desc: "A responsive weather application that fetches real-time weather information through public APIs, providing dynamic forecasts and location-based insights.",
    tags: ["JavaScript", "REST API", "Bootstrap"],
    span: "lg:col-span-5",
    links: [{ label: "GitHub", href: "#", icon: Github }],
  },
  {
    slug: "expense-tracker",
    num: "04",
    title: "Expense Tracker",
    desc: "A personal finance management tool built with Python and SQL featuring expense categorization, transaction tracking, monthly summaries, and analytics.",
    tags: ["Python", "SQL", "DSA"],
    span: "lg:col-span-7",
    links: [{ label: "GitHub", href: "#", icon: Github }],
  },
];

const ProjectCard = ({ slug, num, title, desc, tags, span, links }) => (
  <div
    data-testid={`project-card-${slug}`}
    className={`reveal corner-ticks border border-white/10 bg-white/[0.015] flex flex-col ${span}`}
  >
    {/* Placeholder visual */}
    <div className="relative h-48 md:h-56 bg-gradient-to-br from-[#101010] via-[#161616] to-[#0a0a0a] flex items-center justify-center overflow-hidden border-b border-white/10">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)",
        }}
      />
      <span className="font-mono-acc text-[40px] text-white/10">{"</>"}</span>
      <span className="absolute top-4 left-5 font-mono-acc text-[11px] text-white/25 tracking-[0.1em]">
        {num}
      </span>
    </div>

    {/* Body */}
    <div className="p-7 md:p-8 flex flex-col flex-1">
      <div className="flex flex-wrap gap-1.5 mb-4">
        {tags.map((t) => (
          <span
            key={t}
            className="font-mono-acc text-[10px] px-2 py-0.5 border border-white/10 text-white/35 uppercase tracking-[0.1em]"
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="text-[22px] font-bold tracking-tight mb-2">{title}</h3>
      <p className="text-[13px] text-white/45 leading-relaxed flex-1 mb-5">{desc}</p>
      <div className="flex gap-5">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="flex items-center gap-1.5 font-mono-acc text-[11px] uppercase tracking-[0.08em] text-white/45 border-b border-white/15 pb-0.5 hover:text-[#E63946] hover:border-[#E63946] transition-colors"
          >
            <l.icon size={12} />
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 md:py-32 border-t border-white/5"
      data-testid="projects-section"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="reveal font-mono-acc text-[10px] tracking-[0.32em] uppercase text-white/35 mb-4">
              [ 04 / Selected Work ]
            </p>
            <h2 className="reveal mt-4 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
      Featured <span className="text-[#E63946]">Projects.</span>
    </h2>

    <p className="reveal reveal-delay-1 max-w-2xl text-white/50 text-sm md:text-base leading-relaxed mt-5">
      Selected projects that demonstrate my ability to design, develop, and
      deploy modern web applications. From responsive user interfaces to
      backend-integrated solutions, these projects highlight my technical
      growth, attention to detail, and passion for building impactful digital
      experiences.
    </p>
          </div>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="reveal reveal-delay-1 flex items-center gap-2 font-mono-acc text-[11px] uppercase tracking-[0.1em] text-white/40 hover:text-white transition-colors whitespace-nowrap"
          >
            <Github size={14} />
            View All on GitHub
            <ArrowUpRight size={12} />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {projects.map((p) => (
            <ProjectCard key={p.slug} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
