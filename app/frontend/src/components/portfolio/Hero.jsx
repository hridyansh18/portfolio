import { Download, ArrowUpRight, MapPin } from "lucide-react";
import { cvDownloadUrl } from "../../lib/api";
import { useEffect, useRef } from "react";

const ArtisticBg = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    const ctx = cv.getContext("2d");
    let animId, t = 0;

    const resize = () => {
      cv.width = cv.offsetWidth;
      cv.height = cv.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.78, y: 0.25, r: 0.32, color: "230,57,70",   a: 0.06  },
      { x: 0.62, y: 0.72, r: 0.22, color: "120,100,255", a: 0.04  },
      { x: 0.90, y: 0.55, r: 0.18, color: "230,57,70",   a: 0.035 },
    ];

    const lines = Array.from({ length: 9 }, (_, i) => ({
      seed:  i * 1.3,
      speed: 0.0004 + i * 0.00007,
      width: 0.4 + (i % 3) * 0.3,
      red:   i === 2 || i === 6,
      yBase: 0.1 + i * 0.1,
      amp:   60 + i * 18,
      freq:  0.7 + i * 0.15,
      phase: i * 0.9,
    }));

    const dots = Array.from({ length: 38 }, () => ({
      x:   0.35 + Math.random() * 0.65,
      y:   Math.random(),
      r:   0.6  + Math.random() * 1.0,
      a:   0.06 + Math.random() * 0.12,
      red: Math.random() < 0.18,
    }));

    const draw = () => {
      const W = cv.width, H = cv.height;

      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#080809";
      ctx.fillRect(0, 0, W, H);

      // Soft orbs
      orbs.forEach(({ x, y, r, color, a }) => {
        const gx = x * W, gy = y * H, gr = r * Math.max(W, H);
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        g.addColorStop(0, `rgba(${color},${a})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      });

      // Flowing sine lines
      lines.forEach((l) => {
        const T = t * l.speed + l.phase;
        ctx.beginPath();
        for (let i = 0; i <= 6; i++) {
          const px = (i / 6) * W;
          const py =
            l.yBase * H +
            Math.sin(i * l.freq + T * 6) * l.amp +
            Math.sin(i * l.freq * 0.5 + T * 3.5 + l.seed) * l.amp * 0.5;
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
        }
        ctx.strokeStyle = l.red
          ? `rgba(230,57,70,${0.18 + 0.06 * Math.sin(T * 2)})`
          : `rgba(255,255,255,${0.028 + 0.01 * Math.sin(T)})`;
        ctx.lineWidth = l.width;
        ctx.stroke();
      });

      // Bold bezier curves
      for (let b = 0; b < 3; b++) {
        const T = t * 0.00055 + b * 2.1;
        const y0 = (0.25 + b * 0.28) * H;
        ctx.beginPath();
        ctx.moveTo(0, y0 + Math.sin(T) * 50);
        ctx.bezierCurveTo(
          W * 0.25, y0 + Math.sin(T + 0.5) * 90,
          W * 0.65, y0 + Math.cos(T * 0.8 + 1) * 80,
          W,        y0 + Math.sin(T * 1.1 + 2) * 60
        );
        const isRed = b === 1;
        ctx.strokeStyle = isRed
          ? `rgba(230,57,70,${0.22 + 0.07 * Math.sin(T * 1.5)})`
          : `rgba(255,255,255,${0.045 + 0.015 * Math.cos(T)})`;
        ctx.lineWidth = isRed ? 1.2 : 0.6;
        ctx.stroke();
      }

      // Scattered dots
      dots.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x * W, d.y * H, d.r, 0, Math.PI * 2);
        ctx.fillStyle = d.red
          ? `rgba(230,57,70,${d.a})`
          : `rgba(255,255,255,${d.a})`;
        ctx.fill();
      });

      // Subtle grid (right half)
      ctx.strokeStyle = "rgba(255,255,255,0.018)";
      ctx.lineWidth = 0.5;
      const gs = 48;
      for (let x = W * 0.35; x < W; x += gs) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
      }
      for (let y = 0; y < H; y += gs) {
        ctx.beginPath(); ctx.moveTo(W * 0.35, y); ctx.lineTo(W, y); ctx.stroke();
      }

      // Red vertical accent line
      ctx.strokeStyle = "rgba(230,57,70,0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(W * 0.36, H * 0.15);
      ctx.lineTo(W * 0.36, H * 0.85);
      ctx.stroke();

      t++;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="hero-section"
    >
      {/* Artistic background */}
      <div className="absolute inset-0 bg-[#080809]" />
      <ArtisticBg />

      {/* Fades for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/75 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 md:px-10 pt-28 pb-16">
        <div className="max-w-4xl">
          <div className="reveal flex items-center gap-3 mb-6 flex-wrap">
            <span className="font-mono-acc text-[10px] tracking-[0.32em] uppercase text-white/35">
              [ 01 / Introduction ]
            </span>
            <span className="flex items-center gap-2 font-mono-acc text-[10px] tracking-[0.18em] uppercase text-[#E63946]">
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
    </section>
  );
};

export default Hero;