import { Download, ArrowUpRight, MapPin } from "lucide-react";
import { cvDownloadUrl } from "../../lib/api";
import { useEffect, useRef } from "react";

const GeoMesh = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;
    const RED2 = "rgba(230,57,70,";
    const COLS = 14, ROWS = 9;
    let pts = [], W, H, frame = 0;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
      buildGrid();
    };

    const buildGrid = () => {
      const gx = W / (COLS - 1), gy = H / (ROWS - 1);
      pts = [];
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const bx = c * gx, by = r * gy;
          pts.push({
            bx, by, x: bx, y: by,
            amp: 8 + Math.random() * 18,
            phase: Math.random() * Math.PI * 2,
            speed: 0.003 + Math.random() * 0.005,
            bright: Math.random() < 0.08,
            pulse: Math.random() * Math.PI * 2,
            pulseSpeed: 0.02 + Math.random() * 0.03,
          });
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "#060608";
      ctx.fillRect(0, 0, W, H);

      // Subtle red corner glow
      const vg = ctx.createRadialGradient(W, 0, 0, W, 0, W * 0.7);
      vg.addColorStop(0, "rgba(230,57,70,0.07)");
      vg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, W, H);

      // Animate
      pts.forEach((p) => {
        p.x = p.bx + Math.sin(frame * p.speed + p.phase) * p.amp;
        p.y = p.by + Math.cos(frame * p.speed * 0.8 + p.phase) * p.amp * 0.6;
        p.pulse += p.pulseSpeed;
      });

      const maxD = Math.max(W / (COLS - 1), H / (ROWS - 1)) * 2.0;

      // Edges
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const ri = Math.floor(i / COLS), ci = i % COLS;
          const rj = Math.floor(j / COLS), cj = j % COLS;
          if (Math.abs(ri - rj) > 1 || Math.abs(ci - cj) > 1) continue;
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d > maxD) continue;
          const alpha = 0.04 + 0.04 * (1 - d / maxD);
          if (a.bright || b.bright) {
            ctx.strokeStyle = RED2 + alpha * 2.5 + ")";
            ctx.lineWidth = 0.7;
          } else {
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 0.4;
          }
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Nodes
      pts.forEach((p) => {
        const pv = 0.55 + 0.45 * Math.sin(p.pulse);
        if (p.bright) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 3.5 * pv, 0, Math.PI * 2);
          ctx.fillStyle = RED2 + 0.7 * pv + ")";
          ctx.fill();
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
          ctx.fillStyle = "#fff";
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${0.12 * pv + 0.05})`;
          ctx.fill();
        }
      });

      frame++;
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
      {/* Space background */}
      <div className="absolute inset-0 bg-[#04040a]" />
      <GeoMesh />

      {/* Bottom & side fades so text stays readable */}
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