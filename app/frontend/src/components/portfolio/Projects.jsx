import { Github, ArrowUpRight, ExternalLink } from "lucide-react";

/* ── Per-project SVG thumbnails ── */

const PortfolioThumb = () => (
  <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="30" y="20" width="360" height="160" rx="6" fill="#0e0e0e" stroke="#ffffff12" strokeWidth="1"/>
    <rect x="30" y="20" width="360" height="28" rx="6" fill="#161616"/>
    <rect x="30" y="34" width="360" height="14" fill="#161616"/>
    <circle cx="48" cy="34" r="4" fill="#E6394630"/>
    <circle cx="62" cy="34" r="4" fill="#ffffff15"/>
    <circle cx="76" cy="34" r="4" fill="#ffffff15"/>
    <rect x="90" y="27" width="200" height="14" rx="3" fill="#1e1e1e"/>
    <text x="100" y="38" fontFamily="monospace" fontSize="7" fill="#ffffff25">hridyansh18.netlify.app</text>
    <rect x="50" y="62" width="80" height="8" rx="2" fill="#E6394622"/>
    <rect x="50" y="76" width="140" height="14" rx="2" fill="#ffffff18"/>
    <rect x="50" y="96" width="110" height="14" rx="2" fill="#ffffff12"/>
    <rect x="50" y="116" width="60" height="10" rx="2" fill="#E6394640"/>
    <rect x="260" y="62" width="40" height="6" rx="1" fill="#ffffff10"/>
    <rect x="310" y="62" width="40" height="6" rx="1" fill="#ffffff10"/>
    <rect x="260" y="76" width="90" height="6" rx="1" fill="#ffffff08"/>
    <circle cx="330" cy="115" r="28" fill="#161616" stroke="#ffffff10" strokeWidth="1"/>
    <circle cx="330" cy="108" r="10" fill="#ffffff12"/>
    <ellipse cx="330" cy="130" rx="16" ry="9" fill="#ffffff08"/>
  </svg>
);

const CollegeSnapThumb = () => (
  <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#a855f7"/>
        <stop offset="100%" stopColor="#ec4899"/>
      </linearGradient>
      <linearGradient id="btnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7c3aed"/>
        <stop offset="100%" stopColor="#db2777"/>
      </linearGradient>
    </defs>

    {/* navbar */}
    <rect x="0" y="0" width="420" height="28" fill="#080808"/>
    <text x="16" y="18" fontFamily="sans-serif" fontSize="10" fontWeight="bold" fill="white">CollegeSnaps</text>
    <text x="296" y="18" fontFamily="sans-serif" fontSize="7" fill="#ffffff60">Home</text>
    <text x="326" y="18" fontFamily="sans-serif" fontSize="7" fill="#ffffff60">Albums</text>
    <rect x="358" y="8" width="46" height="14" rx="7" fill="url(#btnGrad)"/>
    <text x="368" y="18" fontFamily="sans-serif" fontSize="7" fill="white">Logout</text>

    {/* badge */}
    <rect x="145" y="36" width="130" height="16" rx="8" fill="#1a1a1a" stroke="#ffffff15" strokeWidth="1"/>
    <text x="165" y="47" fontFamily="sans-serif" fontSize="7" fill="#ffffff60">✦ Your Digital Memory Album</text>

    {/* hero heading */}
    <text x="75" y="80" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="white">Capture</text>
    <text x="175" y="80" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="url(#purpleGrad)">Every College</text>
    <text x="105" y="104" fontFamily="sans-serif" fontSize="20" fontWeight="bold" fill="url(#purpleGrad)">Moment Forever</text>

    {/* subtext */}
    <text x="210" y="124" fontFamily="sans-serif" fontSize="7" fill="#ffffff35" textAnchor="middle">Upload memories, create albums, and relive your college life forever ✦</text>

    {/* Open Albums button */}
    <rect x="102" y="136" width="92" height="22" rx="11" fill="url(#btnGrad)"/>
    <text x="148" y="151" fontFamily="sans-serif" fontSize="8" fill="white" textAnchor="middle">Open Albums</text>

    {/* Explore Gallery button */}
    <rect x="206" y="136" width="106" height="22" rx="11" fill="transparent" stroke="#ffffff30" strokeWidth="1"/>
    <text x="259" y="151" fontFamily="sans-serif" fontSize="8" fill="white" textAnchor="middle">Explore Gallery</text>
  </svg>
);

const WeatherThumb = () => (
  <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="40" y="14" width="340" height="172" rx="8" fill="#0c0c0c" stroke="#ffffff10" strokeWidth="1"/>
    <rect x="60" y="26" width="220" height="18" rx="4" fill="#161616" stroke="#ffffff0e" strokeWidth="1"/>
    <text x="72" y="38" fontFamily="monospace" fontSize="7" fill="#ffffff25">Search city...</text>
    <rect x="292" y="26" width="70" height="18" rx="4" fill="#E6394620" stroke="#E6394635" strokeWidth="1"/>
    <text x="310" y="38" fontFamily="monospace" fontSize="7" fill="#E63946">Search</text>
    <text x="70" y="105" fontFamily="monospace" fontSize="52" fontWeight="bold" fill="#ffffff18">32°</text>
    <text x="72" y="120" fontFamily="monospace" fontSize="8" fill="#ffffff30">Indore, IN · Partly Cloudy</text>
    <circle cx="330" cy="88" r="30" fill="none" stroke="#E6394618" strokeWidth="12"/>
    <circle cx="330" cy="88" r="18" fill="#E6394625"/>
    {[["Humidity","72%"],["Wind","14 km/h"],["Feels","30°"]].map(([label, val], i) => (
      <g key={i}>
        <rect x={62 + i*108} y="138" width="96" height="36" rx="4" fill="#141414" stroke="#ffffff08" strokeWidth="1"/>
        <text x={80 + i*108} y="153" fontFamily="monospace" fontSize="6" fill="#ffffff25">{label}</text>
        <text x={80 + i*108} y="166" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#ffffff45">{val}</text>
      </g>
    ))}
  </svg>
);

const CGPAThumb = () => (
  <svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="28" y="14" width="364" height="172" rx="6" fill="#0c0c0c" stroke="#ffffff10" strokeWidth="1"/>
    <text x="44" y="36" fontFamily="monospace" fontSize="8" fill="#ffffff30" fontWeight="bold">CGPA CALCULATOR</text>
    {[
      ["Mathematics","4","A+",10],
      ["Physics","3","A",9],
      ["CS-101","4","A+",10],
      ["English","2","B+",8],
    ].map(([course, cr, grade, pts], i) => (
      <g key={i}>
        <rect x="40" y={48 + i*26} width="250" height="20" rx="3" fill="#121212" stroke="#ffffff08" strokeWidth="1"/>
        <text x="50" y={62 + i*26} fontFamily="monospace" fontSize="7" fill="#ffffff35">{course}</text>
        <text x="190" y={62 + i*26} fontFamily="monospace" fontSize="7" fill="#ffffff20">Cr:{cr}</text>
        <text x="222" y={62 + i*26} fontFamily="monospace" fontSize="7" fill={grade==="A+"?"#E63946":"#ffffff30"}>{grade}</text>
        <rect x="302" y={53 + i*26} width="70" height="8" rx="2" fill="#1a1a1a"/>
        <rect x="302" y={53 + i*26} width={pts*7} rx="2" height="8" fill={grade==="A+"?"#E6394650":"#ffffff18"}/>
      </g>
    ))}
    <rect x="40" y="158" width="340" height="20" rx="3" fill="#E6394612" stroke="#E6394625" strokeWidth="1"/>
    <text x="52" y="172" fontFamily="monospace" fontSize="7" fill="#ffffff30">Calculated CGPA</text>
    <text x="310" y="172" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#E63946">9.46</text>
  </svg>
);

const thumbs = {
  "portfolio-website": PortfolioThumb,
  "college-snap": CollegeSnapThumb,
  "weather-cast": WeatherThumb,
  "cgpa calculator": CGPAThumb,
};

/* ── Project data ── */

const projects = [
  {
    slug: "portfolio-website",
    num: "01",
    title: "Portfolio Website",
    desc: "A minimal, responsive personal portfolio built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies. Focuses on fast load times, clean layout, and smooth navigation across projects, skills, and experience.",
    tags: ["HTML", "Tailwind CSS", "JavaScript", "Responsive Design", "Node.js", "Express.js", "Netlify"],
    span: "lg:col-span-7",
    links: [
      { label: "Live Demo", href: "https://hridyansh18.netlify.app/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/hridyansh18/portfolio", icon: Github },
    ],
  },
  {
    slug: "college-snap",
    num: "02",
    title: "College Snap",
    desc: "A dynamic college memories platform designed to showcase campus events, celebrations, and student activities. Includes event-based photo galleries, image uploads, and a responsive interface for an immersive browsing experience.",
    tags: ["React", "Firebase", "Tailwind CSS", "Image Upload", "Netlify"],
    span: "lg:col-span-5",
    links: [
      { label: "Live Demo", href: "https://collegesnaps.netlify.app/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/hridyansh18/college-snap", icon: Github },
    ],
  },
  {
    slug: "weather-cast",
    num: "03",
    title: "Weather Cast",
    desc: "A real-time weather app powered by a public weather API. Enter any city to get current temperature, humidity, wind speed, and conditions — all in a responsive Bootstrap layout that works across devices.",
    tags: ["JavaScript", "REST API", "Bootstrap", "Github Live"],
    span: "lg:col-span-5",
    links: [
      { label: "Live Demo", href: "https://hridyansh18.github.io/weathercast/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/hridyansh18/weathercast", icon: Github },
    ],
  },
  {
    slug: "cgpa calculator",
    num: "04",
    title: "Modern CGPA Calculator",
    desc: "A simple CGPA calculator for students to compute their cumulative grade point average based on individual course grades and credits.",
    tags: ["JavaScript", "HTML", "CSS"],
    span: "lg:col-span-7",
    links: [
      { label: "Live Demo", href: "https://hridyansh18.github.io/cgpa-calculator/", icon: ExternalLink },
      { label: "GitHub", href: "https://github.com/hridyansh18/cgpa-calculator", icon: Github },
    ],
  },
];

/* ── Card ── */

const ProjectCard = ({ slug, num, title, desc, tags, span, links }) => {
  const Thumb = thumbs[slug];
  return (
    <div
      data-testid={`project-card-${slug}`}
      className={`reveal corner-ticks border border-white/10 bg-white/[0.015] flex flex-col ${span}`}
    >
      <div className="relative h-48 md:h-56 bg-gradient-to-br from-[#101010] via-[#161616] to-[#0a0a0a] flex items-center justify-center overflow-hidden border-b border-white/10">
        {Thumb ? (
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <Thumb />
          </div>
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)",
              }}
            />
            <span className="font-mono-acc text-[40px] text-white/10">{"</>"}</span>
          </>
        )}
        <span className="absolute top-4 left-5 font-mono-acc text-[11px] text-white/25 tracking-[0.1em] z-10">
          {num}
        </span>
      </div>

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
};

/* ── Section ── */

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
              Selected projects that demonstrate my ability to design, develop, and deploy modern
              web applications. From responsive user interfaces to backend-integrated solutions,
              these projects highlight my technical growth, attention to detail, and passion for
              building impactful digital experiences.
            </p>
          </div>
          <a
            href="https://github.com/hridyansh18"
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