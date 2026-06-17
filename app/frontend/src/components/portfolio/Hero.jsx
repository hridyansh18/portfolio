import { Download, ArrowUpRight, MapPin } from "lucide-react";
import { cvDownloadUrl } from "../../lib/api";
import { useEffect, useRef } from "react";

const StarField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Star layers — 3 depths for parallax feel
    const layers = [
      { count: 180, speed: 0.12, minR: 0.2, maxR: 0.6, alpha: 0.4 },  // far
      { count: 100, speed: 0.28, minR: 0.5, maxR: 1.0, alpha: 0.65 }, // mid
      { count: 40,  speed: 0.55, minR: 0.9, maxR: 1.8, alpha: 0.9 },  // near
    ];

    const stars = layers.flatMap(({ count, speed, minR, maxR, alpha }) =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 2000,
        y: Math.random() * 1200,
        r: minR + Math.random() * (maxR - minR),
        speed,
        alpha: alpha * (0.6 + Math.random() * 0.4),
        twinkleOffset: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.008 + Math.random() * 0.012,
      }))
    );

    // Occasional shooting stars
    let shooters = [];
    const spawnShooter = () => {
      shooters.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * 0.5,
        len: 80 + Math.random() * 120,
        speed: 6 + Math.random() * 6,
        angle: Math.PI / 5 + (Math.random() - 0.5) * 0.3,
        alpha: 1,
        life: 1,
      });
    };
    const shooterInterval = setInterval(() => {
      if (Math.random() < 0.6) spawnShooter();
    }, 2200);

    // Nebula blobs (static, painted once per resize)
    const nebulas = [
      { x: 0.75, y: 0.25, r: 0.28, color: "230,57,70",  a: 0.045 },
      { x: 0.15, y: 0.65, r: 0.22, color: "100,80,200", a: 0.035 },
      { x: 0.55, y: 0.80, r: 0.18, color: "230,57,70",  a: 0.025 },
    ];

    let frame = 0;

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      // Deep space bg
      ctx.fillStyle = "#04040a";
      ctx.fillRect(0, 0, W, H);

      // Nebula glow
      nebulas.forEach(({ x, y, r, color, a }) => {
        const grd = ctx.createRadialGradient(
          x * W, y * H, 0,
          x * W, y * H, r * Math.max(W, H)
        );
        grd.addColorStop(0, `rgba(${color},${a})`);
        grd.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
      });

      // Stars
      stars.forEach((s) => {
        // Move downward (simulate flying through space)
        s.y += s.speed;
        if (s.y > H + 4) {
          s.y = -4;
          s.x = Math.random() * W;
        }

        // Twinkle
        const twinkle = 0.7 + 0.3 * Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        const a = s.alpha * twinkle;

        // Glow for brighter stars
        if (s.r > 1.0) {
          const glow = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
          glow.addColorStop(0, `rgba(255,255,255,${a * 0.4})`);
          glow.addColorStop(1, "rgba(255,255,255,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 4, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a})`;
        ctx.fill();
      });

      // Shooting stars
      shooters = shooters.filter((sh) => sh.life > 0);
      shooters.forEach((sh) => {
        const tx = sh.x + Math.cos(sh.angle) * sh.len;
        const ty = sh.y + Math.sin(sh.angle) * sh.len;
        const grad = ctx.createLinearGradient(sh.x, sh.y, tx, ty);
        grad.addColorStop(0, `rgba(255,255,255,0)`);
        grad.addColorStop(0.6, `rgba(255,255,255,${sh.alpha * 0.8})`);
        grad.addColorStop(1, `rgba(255,255,255,${sh.alpha})`);
        ctx.beginPath();
        ctx.moveTo(sh.x, sh.y);
        ctx.lineTo(tx, ty);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        sh.x += Math.cos(sh.angle) * sh.speed;
        sh.y += Math.sin(sh.angle) * sh.speed;
        sh.alpha -= 0.022;
        sh.life = sh.alpha;
      });

      frame++;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      clearInterval(shooterInterval);
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
      <StarField />

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
    </section>
  );
};

export default Hero;