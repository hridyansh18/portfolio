import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { cvDownloadUrl } from "../../lib/api";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#exp" },
  { label: "Contact", href: "#contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      data-testid="site-nav"
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "nav-glass border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono-acc text-[12px] tracking-[0.2em] uppercase text-white/60"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#E63946] animate-pulse" />
          <span className="text-white font-semibold">// HRIDYANSH</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-9">
          {NAV_LINKS.map((l) => (
            <li key={l.label}>
              <a
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                href={l.href}
                className="text-[13px] text-white/55 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CV button - hidden on mobile */}
        <div className="hidden md:block">
          <a
            data-testid="nav-download-cv"
            href={cvDownloadUrl}
            className="btn-primary"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>

        {/* Mobile hamburger toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-white/80"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden nav-glass border-t border-white/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3.5 border-b border-white/5 last:border-0 text-white/55 hover:text-white font-mono-acc text-[12px] uppercase tracking-[0.16em] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            data-testid="nav-download-cv"
            href={cvDownloadUrl}
            className="btn-primary mt-4 justify-center"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;