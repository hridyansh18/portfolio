import { GraduationCap, Briefcase, Shield } from "lucide-react";

const timeline = [
  {
    period: "Jun 2026 — Present",
    title: "Frontend Developer Intern",
    company: "KaalCyberSec",
    description:
      "Contributing to modern frontend development workflows by building responsive, user-centric interfaces. Collaborating with cross-functional teams to improve platform performance, accessibility, and overall user experience.",
    icon: Briefcase,
    accent: true,
  },
  {
    period: "Dec 2022 — Jan 2023",
    title: "Graphic Design Intern",
    company: "Skydoor EdTech",
    description:
      "Designed engaging digital creatives and promotional assets using Canva and Adobe Photoshop. Maintained consistent visual branding across marketing campaigns and social media platforms.",
    icon: Briefcase,
    accent: false,
  },
  {
    period: "2025 — Present",
    title: "Master of Computer Applications (MCA)",
    company: "School of Computer Science & Information Technology (SCSIT), DAVV",
    description:
      "Pursuing postgraduate studies in Computer Applications with a focus on software development, databases, algorithms, and modern computing technologies.",
    icon: GraduationCap,
    accent: false,
  },
  {
    period: "2022 — 2025",
    title: "Bachelor of Science in Computer Science",
    company: "PMB Gujarati Science College, DAVV University",
    description:
      "Graduated with a CGPA of 7.80, developing a strong foundation in programming, database systems, computer networks, and software engineering fundamentals.",
    icon: GraduationCap,
    accent: false,
  },
  {
    period: "2022 — 2025",
    title: "Senior Under Officer (SUO)",
    company: "National Cadet Corps (NCC)",
    description:
      "Led and mentored over 100+ cadets while coordinating training activities and leadership programs. Earned the NCC 'C' Certificate and successfully completed National Camp and the Army Attachment Camp under the Assam Regiment.",
    icon: Shield,
    accent: true,
    fullWidth: true,
  },
];

const Experience = () => {
  return (
    <section
      id="exp"
      className="py-24 md:py-32 border-t border-white/5"
      data-testid="experience-section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-14">
          <p className="reveal font-mono-acc text-[10px] tracking-[0.32em] uppercase text-white/35 mb-4">
            [ 05 / Experience ]
          </p>

          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-extrabold tracking-tight">
            Experience,
            <span className="block text-[#E63946]">
              Education & Leadership
            </span>
          </h2>

          <p className="reveal reveal-delay-2 mt-5 max-w-2xl text-white/50 text-sm md:text-base leading-relaxed">
            A journey shaped by professional internships, academic excellence,
            and leadership experience through the National Cadet Corps,
            combining technical expertise with discipline, teamwork, and
            problem-solving abilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {timeline.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                data-testid={`timeline-item-${idx}`}
                className={`reveal border border-white/10 bg-[#0A0A0A] p-7 hover:border-[#E63946]/40 transition-all duration-300 ${
                  item.fullWidth ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-11 h-11 flex items-center justify-center border ${
                      item.accent
                        ? "border-[#E63946]/40 bg-[#E63946]/10 text-[#E63946]"
                        : "border-white/10 text-[#E63946]"
                    }`}
                  >
                    <Icon size={18} />
                  </div>

                  <span className="font-mono-acc text-[11px] tracking-[0.15em] uppercase text-white/35">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-1 text-[#E63946] text-sm font-medium">
                  {item.company}
                </p>

                <p className="mt-4 text-white/55 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;