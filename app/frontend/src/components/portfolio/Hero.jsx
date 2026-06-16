import { Download, ArrowUpRight, MapPin } from "lucide-react";
import { cvDownloadUrl } from "../../lib/api";
const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      data-testid="hero-section"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />

      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-10 pt-28 pb-16">
        <div className="max-w-4xl">
          <div className="reveal flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono-acc text-[10px] tracking-[0.32em] uppercase text-white/35">
              [ 01 / Introduction ]
            </span>

            <span className="flex items-center gap-2 font-mono-acc text-[10px] tracking-[0.18em] uppercase text-[#E63946]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse" />
              Available for Opportunities
            </span>
          </div>

          <h1
            data-testid="hero-name"
            className="reveal reveal-delay-1 font-extrabold uppercase leading-[0.95] tracking-tight text-[clamp(52px,9vw,104px)] mb-7"
          >
            HRIDYANSH
            <br />
            <span className="text-white/15">CHAUD</span>
            <span className="text-white">HARY.</span>
          </h1>

          <div className="reveal reveal-delay-2 flex flex-wrap items-center gap-2 mb-8 font-mono-acc text-[11px] tracking-[0.14em] uppercase text-white/50">
            <span>Frontend Developer</span>
            <span className="text-white/15">/</span>
            <span>MCA Student</span>
          </div>

          <p className="max-w-2xl text-white/70 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
            I design and develop modern, responsive, and high-performance web
            applications with a strong focus on clean code, user experience,
            scalability, and real-world problem solving.
          </p>


          <div className="reveal reveal-delay-3 flex flex-wrap gap-3 mb-10">
            <a
              data-testid="hero-download-cv"
              href={cvDownloadUrl}
              className="btn-primary"
            >
              <Download size={14} />
              Download CV
            </a>

            <a
              data-testid="hero-contact-cta"
              href="#contact"
              className="btn-outline"
            >
              Let's Talk
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="reveal reveal-delay-3 flex items-center gap-2 font-mono-acc text-[11px] tracking-[0.14em] uppercase text-white/30">
            <MapPin size={13} className="text-[#E63946]" />
            Indore, Madhya Pradesh — India
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/20">
        <span className="font-mono-acc text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;