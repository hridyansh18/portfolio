import { Mail, Linkedin, Github } from "lucide-react";

const FOOTER_LINKS = [
  { testid: "footer-link-email", href: "mailto:hridyanshchaudhary18@gmail.com", icon: Mail, label: "Email" },
  { testid: "footer-link-linkedin", href: "https://www.linkedin.com/in/hridyanshchaudhary18", icon: Linkedin, label: "LinkedIn" },
  { testid: "footer-link-github", href: "https://github.com/hridyansh18", icon: Github, label: "GitHub" },
];

const Footer = () => {
  const year = new Date().getFullYear();git add .
git commit -m "feat: update hero starfield bg, experience reveal animations, project thumbnails"
git push origin main

  return (
    <footer className="border-t border-white/5 px-6 md:px-10 py-7">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
        <div className="font-mono-acc text-[11px] text-white/25 tracking-[0.08em] leading-relaxed">
          // HRIDYANSH CHAUDHARY
          <br />
          © {year} All Rights Reserved.
        </div>
        <div className="flex gap-3">
          {FOOTER_LINKS.map((l) => {
            const Icon = l.icon;
            return (
              <a
                key={l.testid}
                data-testid={l.testid}
                href={l.href}
                aria-label={l.label}
                className="w-9 h-9 flex items-center justify-center border border-white/10 text-white/35 hover:text-white hover:border-white/30 transition-colors"
              >
                <Icon size={15} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
