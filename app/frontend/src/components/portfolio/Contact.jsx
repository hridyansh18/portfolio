import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from "lucide-react";
import { sendContactMessage, cvDownloadUrl } from "../../lib/api";

const contactDetails = [
  {
    icon: Mail,
    label: "hridyanshchaudhary18@gmail.com",
    href: "mailto:hridyanshchaudhary18@gmail.com",
  },
  {
    icon: Phone,
    label: "+91 6265687847",
    href: "tel:+916265687847",
  },
  {
    icon: MapPin,
    label: "Indore, Madhya Pradesh — India",
    href: null,
  },
];

const socials = [
  { label: "LinkedIn", href: "https://linkedin.com/in/hridyanshchaudhary18", icon: Linkedin, red: false },
  { label: "GitHub", href: "https://github.com/hridyansh18", icon: Github, red: false },
  { label: "CV", href: cvDownloadUrl, icon: Download, red: true },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message can't be empty";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await sendContactMessage(form);
      toast.success("Message sent! I'll reply within 24 hours.");
      setForm(initialForm);
    } catch (err) {
      toast.error("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-t border-white/5"
      data-testid="contact-section"
    >
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 grid lg:grid-cols-12 gap-16 items-start">
        {/* LEFT — Info */}
        <div className="lg:col-span-4">
          <p className="reveal font-mono-acc text-[10px] tracking-[0.32em] uppercase text-white/35 mb-4">
            [ 06 / Contact ]
          </p>
          <h2 className="reveal reveal-delay-1 text-4xl md:text-5xl font-extrabold uppercase tracking-tight leading-tight mb-5">
            Let's build
            <span className="block text-[#E63946]">something.</span>
          </h2>
          <p className="reveal reveal-delay-1 text-[14px] text-white/45 leading-relaxed mb-8">
            Open to internships, freelance frontend work, and collaboration on interesting
            full-stack or AI/ML projects. Drop a note — I respond within a day.
          </p>

          <div className="reveal reveal-delay-2 flex flex-col gap-3 mb-7">
            {contactDetails.map((c) => {
              const Icon = c.icon;
              const content = (
                <>
                  <span className="w-9 h-9 flex items-center justify-center bg-[#E63946]/10 border border-[#E63946]/20 text-[#E63946] flex-shrink-0">
                    <Icon size={15} />
                  </span>
                  {c.label}
                </>
              );
              return c.href ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-4 px-4 py-3 border border-white/10 text-[13px] text-white/55 hover:border-[#E63946]/50 hover:text-white transition-colors"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={c.label}
                  className="flex items-center gap-4 px-4 py-3 border border-white/10 text-[13px] text-white/55"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="reveal reveal-delay-2 flex flex-wrap gap-2">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  className={`flex items-center gap-2 px-4 py-2.5 border font-mono-acc text-[10px] tracking-[0.16em] uppercase transition-colors ${
                    s.red
                      ? "bg-[#E63946] border-[#E63946] text-white hover:bg-[#F87171] hover:border-[#F87171]"
                      : "border-white/15 text-white/45 hover:border-white/40 hover:text-white"
                  }`}
                >
                  <Icon size={12} />
                  {s.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* RIGHT — Form */}
        <form
          onSubmit={handleSubmit}
          className="reveal reveal-delay-1 lg:col-span-8 corner-ticks border border-white/10 bg-white/[0.015] p-8 md:p-12"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col gap-2">
              <label className="font-mono-acc text-[10px] tracking-[0.16em] uppercase text-white/30">
                Name
              </label>
              <input
                data-testid="contact-form-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="bg-transparent border-b border-white/15 focus:border-[#E63946] outline-none text-white text-[14px] py-2 transition-colors"
              />
              {errors.name && (
                <span className="text-[11px] text-[#E63946]">{errors.name}</span>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-mono-acc text-[10px] tracking-[0.16em] uppercase text-white/30">
                Email
              </label>
              <input
                data-testid="contact-form-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="bg-transparent border-b border-white/15 focus:border-[#E63946] outline-none text-white text-[14px] py-2 transition-colors"
              />
              {errors.email && (
                <span className="text-[11px] text-[#E63946]">{errors.email}</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            <label className="font-mono-acc text-[10px] tracking-[0.16em] uppercase text-white/30">
              Subject
            </label>
            <input
              data-testid="contact-form-subject"
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="What is this about?"
              className="bg-transparent border-b border-white/15 focus:border-[#E63946] outline-none text-white text-[14px] py-2 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2 mb-8">
            <label className="font-mono-acc text-[10px] tracking-[0.16em] uppercase text-white/30">
              Message
            </label>
            <textarea
              data-testid="contact-form-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="Tell me about your project, role, or idea..."
              className="bg-transparent border-b border-white/15 focus:border-[#E63946] outline-none text-white text-[14px] py-2 resize-none transition-colors"
            />
            {errors.message && (
              <span className="text-[11px] text-[#E63946]">{errors.message}</span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <span className="font-mono-acc text-[10px] tracking-[0.14em] uppercase text-white/25">
              AVG. RESPONSE — &lt; 24 HRS
            </span>
            <button
              data-testid="contact-form-submit"
              type="submit"
              disabled={submitting}
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={14} />
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
