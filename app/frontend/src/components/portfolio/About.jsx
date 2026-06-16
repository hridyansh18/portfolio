const stats = [
  { num: "4+", label: "Projects Shipped" },
  { num: "5+", label: "Languages" },
  { num: "'C'", label: "NCC Certificate" },
  { num: "2025", label: "MCA In Progress" },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-white/5"
      data-testid="about-section"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4">
          <p className="reveal font-mono-acc text-[10px] tracking-[0.32em] uppercase text-white/35 mb-4">
            [ 02 / About ]
          </p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            Code with
            <span className="block text-[#E63946]">discipline.</span>
          </h2>
        </div>

        <div className="lg:col-span-8 lg:pt-3 space-y-6">
          <p className="reveal text-lg md:text-xl text-white/80 leading-relaxed">
            I'm an <span className="text-white font-semibold">MCA student</span> at SCSIT,
            DAVV Indore, with a B.Sc. in Computer Science. My focus is building{" "}
            <span className="text-white font-semibold">
              modern, responsive web applications
            </span>{" "}
            while expanding into Python, backend development, and AI/ML.
          </p>

          <p className="reveal reveal-delay-1 text-base md:text-lg text-white/55 leading-relaxed">
            Beyond the editor, I trained for years as a{" "}
            <span className="text-white">
              Senior Under Officer in the National Cadet Corps
            </span>
            , commanding a platoon, clearing the NCC 'C' Certificate, and completing an
            Army Attachment Camp. That training shaped how I plan, communicate, and ship —
            calmly, on time, end-to-end.
          </p>

          <div className="reveal reveal-delay-2 pt-4 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 mt-8">
            {stats.map((s) => (
              <div key={s.label} className="pt-6">
                <div className="text-3xl md:text-4xl font-black text-white">{s.num}</div>
                <div className="mt-1 font-mono-acc text-[10px] tracking-[0.22em] uppercase text-white/40">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
