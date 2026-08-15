import { useEffect, useState } from "react";

const skills = [
  {
    number: "01",
    title: "React Development",
    description:
      "Building scalable, component-driven interfaces with React and modern frontend architecture.",
  },
  {
    number: "02",
    title: "UI Engineering",
    description:
      "Turning designs into responsive, accessible, pixel-conscious user interfaces.",
  },
  {
    number: "03",
    title: "JavaScript",
    description:
      "Writing clean, maintainable JavaScript for interactive and production-ready applications.",
  },
  {
    number: "04",
    title: "Tailwind CSS",
    description:
      "Creating consistent, responsive design systems with utility-first CSS.",
  },
  {
    number: "05",
    title: "Performance",
    description:
      "Optimizing websites for speed, usability, Core Web Vitals, and better user experiences.",
  },
  {
    number: "06",
    title: "Responsive Design",
    description:
      "Designing experiences that work beautifully across mobile, tablet, desktop, and large screens.",
  },
];

const projects = [
  {
    number: "01",
    category: "WEB APPLICATION",
    title: "Modern Dashboard",
    description:
      "A responsive dashboard experience designed around clear information hierarchy, usability, and performance.",
    technologies: ["React", "Tailwind", "JavaScript"],
    link: "#",
  },
  {
    number: "02",
    category: "LANDING PAGE",
    title: "Digital Product",
    description:
      "A conversion-focused product website with premium visual design, responsive layouts, and subtle interactions.",
    technologies: ["React", "Tailwind", "SEO"],
    link: "#",
  },
  {
    number: "03",
    category: "PORTFOLIO",
    title: "Creative Portfolio",
    description:
      "A professional portfolio platform built to showcase work, experience, capabilities, and personal brand.",
    technologies: ["Vite", "React", "Tailwind"],
    link: "#",
  },
];

const services = [
  {
    icon: "↗",
    title: "Web Development",
    description:
      "Modern, responsive websites and applications built with clean and maintainable frontend architecture.",
  },
  {
    icon: "✦",
    title: "UI Implementation",
    description:
      "High-quality implementation of designs with attention to spacing, typography, responsiveness, and accessibility.",
  },
  {
    icon: "◎",
    title: "Website Optimization",
    description:
      "Improving website performance, SEO, responsiveness, and overall user experience.",
  },
];

function App() {
  const [dark, setDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      className={
        dark
          ? "min-h-screen overflow-hidden bg-[#07070b] text-white"
          : "min-h-screen overflow-hidden bg-slate-50 text-slate-950"
      }
    >
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[5%] h-[450px] w-[450px] rounded-full bg-violet-600/15 blur-[140px]" />

        <div className="absolute right-[-10%] top-[25%] h-[450px] w-[450px] rounded-full bg-sky-500/10 blur-[140px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[400px] w-[400px] rounded-full bg-fuchsia-600/10 blur-[140px]" />
      </div>

      {/* NAVIGATION */}

      <header>
        <nav
          aria-label="Main navigation"
          className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl border px-4 py-3 backdrop-blur-xl ${
            dark
              ? "border-white/10 bg-black/50"
              : "border-slate-200 bg-white/80"
          }`}
        >
          <div className="flex items-center justify-between">
            <a
              href="#home"
              onClick={closeMenu}
              className="flex items-center gap-3"
              aria-label="James home"
            >
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-sky-400 text-sm font-bold text-white">
                J
              </span>
              <span className="font-bold tracking-tight">
                I'm<span className="text-violet-400">James</span>
              </span>
             
            </a>

            {/* Desktop navigation */}

            <div className="hidden items-center gap-8 md:flex">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Work", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className={`text-sm transition ${
                    dark
                      ? "text-slate-400 hover:text-white"
                      : "text-slate-500 hover:text-slate-950"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setDark(!dark)}
                aria-label="Toggle dark mode"
                className={`grid h-9 w-9 place-items-center rounded-xl ${
                  dark
                    ? "bg-white/5 text-yellow-300"
                    : "bg-slate-100 text-slate-700"
                }`}
              >
                {dark ? "☀" : "☾"}
              </button>

              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle mobile navigation"
                aria-expanded={menuOpen}
                className={`grid h-9 w-9 place-items-center rounded-xl md:hidden ${
                  dark ? "bg-white/5" : "bg-slate-100"
                }`}
              >
                {menuOpen ? "×" : "☰"}
              </button>
            </div>
          </div>

          {/* Mobile navigation */}

          {menuOpen && (
            <div className="mt-3 border-t border-white/10 pt-3 md:hidden">
              {[
                ["About", "#about"],
                ["Services", "#services"],
                ["Work", "#projects"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-3 py-3 text-sm ${
                    dark
                      ? "text-slate-300 hover:bg-white/5"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      <main>
        {/* HERO */}

        <section
          id="home"
          className="mx-auto grid min-h-screen w-[min(1150px,90%)] items-center gap-16 pb-20 pt-36 lg:grid-cols-[1.15fr_.85fr]"
        >
          <div className="animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2 text-xs font-semibold tracking-wide text-violet-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              AVAILABLE FOR FREELANCE WORK
            </div>

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
              Frontend Developer
            </p>

            <h1 className="max-w-4xl text-6xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[6.8rem]">
              I build
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-sky-400 bg-clip-text text-transparent">
                digital
              </span>
              <br />
              experiences.
            </h1>

            <p
              className={`mt-8 max-w-xl text-base leading-8 ${
                dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              I’m James, a frontend developer focused on creating
              high-performance websites and applications that look exceptional
              and feel effortless to use.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-violet-600/20 transition hover:-translate-y-1 hover:bg-violet-500"
              >
                Explore my work
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center rounded-xl border px-6 py-3.5 text-sm font-bold transition hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.03] hover:bg-white/[0.07]"
                    : "border-slate-200 bg-white hover:bg-slate-100"
                }`}
              >
                Let's work together
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-6 text-sm text-slate-500">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-violet-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-violet-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:joves.jamescarl@gmail.com"
                className="transition hover:text-violet-400"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* Hero visual */}

          <div className="animate-float">
            <div
              className={`relative overflow-hidden rounded-3xl border shadow-2xl ${
                dark
                  ? "border-white/10 bg-[#0d0d13] shadow-black/50"
                  : "border-slate-200 bg-white shadow-slate-300/30"
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-sky-500/5" />

              <div
                className={`relative flex items-center gap-2 border-b px-5 py-4 ${
                  dark ? "border-white/10" : "border-slate-200"
                }`}
              >
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />

                <span className="ml-auto font-mono text-xs text-slate-500">
                  developer.js
                </span>
              </div>

              <div className="relative p-6 font-mono text-xs leading-8 sm:p-8 sm:text-sm">
                <div>
                  <span className="text-fuchsia-400">const</span>{" "}
                  <span className="text-sky-300">developer</span> = {"{"}
                </div>

                <div className="pl-6">
                  name:{" "}
                  <span className="text-emerald-300">
                    "James"
                  </span>
                  ,
                </div>

                <div className="pl-6">
                  role:{" "}
                  <span className="text-emerald-300">
                    "Frontend Developer"
                  </span>
                  ,
                </div>

                <div className="pl-6">
                  stack: [
                  <span className="text-amber-300">
                    "React", "Tailwind"
                  </span>
                  ],
                </div>

                <div className="pl-6">
                  focus:{" "}
                  <span className="text-emerald-300">
                    "Great UX"
                  </span>
                  ,
                </div>

                <div className="pl-6">
                  available:{" "}
                  <span className="text-sky-300">true</span>
                </div>

                <div>{"};"}</div>
              </div>

              <div className="border-t border-white/5 px-6 py-4">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-500">
                    status:{" "}
                    <span className="text-emerald-400">
                      online
                    </span>
                  </span>

                  <span className="text-violet-400">
                    ● available
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK */}

        <section
          aria-label="Technology stack"
          className={`overflow-hidden border-y py-5 ${
            dark
              ? "border-white/5 bg-white/[0.015]"
              : "border-slate-200 bg-white"
          }`}
        >
          <div className="animate-marquee flex min-w-max gap-12 text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
            {[
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Vite",
              "Responsive Design",
              "UI Engineering",
              "SEO",
              "Performance",
              "React",
              "JavaScript",
              "Tailwind CSS",
              "Vite",
              "Responsive Design",
              "UI Engineering",
              "SEO",
              "Performance",
            ].map((item, index) => (
              <span key={`${item}-${index}`} className="flex items-center gap-12">
                {item}
                <span className="text-violet-500">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* ABOUT */}

        <section
          id="about"
          className="mx-auto w-[min(1100px,90%)] py-28"
        >
          <SectionHeading
            eyebrow="ABOUT"
            title="A developer who cares about the details."
            description="Good websites are more than attractive screens. They should be fast, accessible, intuitive, and memorable."
            dark={dark}
          />

          <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr]">
            <div
              className={`space-y-5 text-base leading-8 ${
                dark ? "text-slate-400" : "text-slate-600"
              }`}
            >
              <p>
                I specialize in transforming ideas and designs into polished
                digital experiences using modern frontend technologies.
              </p>

              <p>
                My approach combines thoughtful UI design, clean code,
                responsive development, accessibility, and performance.
              </p>

              <p>
                I enjoy working on products where technology and design come
                together to solve real problems.
              </p>

              <a
                href="#contact"
                className="inline-flex pt-3 text-sm font-bold text-violet-400 transition hover:text-violet-300"
              >
                Let's build something together →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                ["3+", "Years experience"],
                ["20+", "Projects"],
                ["100%", "Attention to detail"],
                ["24/7", "Learning mindset"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className={`rounded-2xl border p-6 ${
                    dark
                      ? "border-white/10 bg-white/[0.025]"
                      : "border-slate-200 bg-white"
                  }`}
                >
                  <strong className="block text-3xl font-extrabold text-violet-400">
                    {value}
                  </strong>

                  <span className="mt-2 block text-xs text-slate-500">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}

        <section
          id="services"
          className="mx-auto w-[min(1100px,90%)] py-28"
        >
          <SectionHeading
            eyebrow="SERVICES"
            title="How I can help."
            description="From the first idea to the final pixel, I build digital experiences with purpose."
            dark={dark}
          />

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className={`rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.025] hover:border-violet-500/40"
                    : "border-slate-200 bg-white hover:border-violet-300 hover:shadow-xl"
                }`}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-500/10 text-xl text-violet-400">
                  {service.icon}
                </span>

                <h3 className="mt-7 text-lg font-bold">
                  {service.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    dark ? "text-slate-500" : "text-slate-600"
                  }`}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section className="mx-auto w-[min(1100px,90%)] py-28">
          <SectionHeading
            eyebrow="EXPERTISE"
            title="My toolkit."
            description="Technologies and capabilities I use to create modern web experiences."
            dark={dark}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <article
                key={skill.title}
                className={`group rounded-2xl border p-7 transition duration-300 hover:-translate-y-1 ${
                  dark
                    ? "border-white/10 bg-white/[0.025] hover:border-violet-500/40"
                    : "border-slate-200 bg-white hover:border-violet-300"
                }`}
              >
                <span className="font-mono text-xs font-bold text-violet-400">
                  {skill.number}
                </span>

                <h3 className="mt-7 text-lg font-bold">
                  {skill.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-7 ${
                    dark ? "text-slate-500" : "text-slate-600"
                  }`}
                >
                  {skill.description}
                </p>

                <div className="mt-6 h-px w-8 bg-violet-500 transition-all duration-300 group-hover:w-16" />
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}

        <section
          id="projects"
          className="mx-auto w-[min(1100px,90%)] py-28"
        >
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects worth exploring."
            description="A selection of work demonstrating my approach to design, development, and problem solving."
            dark={dark}
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.number}
                className={`group flex min-h-[410px] flex-col rounded-3xl border p-7 transition duration-500 hover:-translate-y-2 ${
                  dark
                    ? "border-white/10 bg-gradient-to-b from-white/[0.045] to-white/[0.015] hover:border-violet-500/40"
                    : "border-slate-200 bg-white hover:border-violet-300 hover:shadow-2xl"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold tracking-widest text-violet-400">
                    {project.number}
                  </span>

                  <span className="text-[10px] font-semibold tracking-widest text-slate-500">
                    {project.category}
                  </span>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      dark ? "text-slate-500" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    className="mt-7 inline-block text-sm font-bold transition hover:text-violet-400"
                  >
                    View project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}

        <section
          id="contact"
          className="mx-auto w-[min(1000px,90%)] py-28"
        >
          <div
            className={`relative overflow-hidden rounded-[2rem] border px-6 py-20 text-center sm:px-12 ${
              dark
                ? "border-white/10 bg-gradient-to-br from-violet-500/10 via-white/[0.02] to-sky-500/5"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[100px]" />

            <div className="relative">
              <p className="text-xs font-bold tracking-[0.25em] text-violet-400">
                HAVE A PROJECT?
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
                Let's create something{" "}
                <span className="bg-gradient-to-r from-violet-300 to-sky-400 bg-clip-text text-transparent">
                  remarkable.
                </span>
              </h2>

              <p
                className={`mx-auto mt-5 max-w-xl text-sm leading-7 ${
                  dark ? "text-slate-500" : "text-slate-600"
                }`}
              >
                Have a project in mind or want to discuss an opportunity?
                Send me a message and let's talk.
              </p>

              <a
                href="mailto:joves.jamescarl@gmail.com"
                className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition hover:-translate-y-1"
              >
                joves.jamescarl@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer
        className={`mx-auto flex w-[min(1100px,90%)] flex-col gap-4 border-t py-8 text-xs sm:flex-row sm:items-center sm:justify-between ${
          dark
            ? "border-white/10 text-slate-600"
            : "border-slate-200 text-slate-500"
        }`}
      >
        <p>
          © {new Date().getFullYear()} James. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a href="#home" className="hover:text-violet-400">
            Back to top ↑
          </a>

          <a href="#contact" className="hover:text-violet-400">
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}

function SectionHeading({ eyebrow, title, description, dark }) {
  return (
    <div className="mb-12">
      <p className="mb-3 text-xs font-bold tracking-[0.25em] text-violet-400">
        {eyebrow}
      </p>

      <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
        {title}
      </h2>

      <p
        className={`mt-4 max-w-2xl text-sm leading-7 ${
          dark ? "text-slate-500" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default App;