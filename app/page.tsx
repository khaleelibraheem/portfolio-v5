import { Logo, SiteNav } from "./site-nav";

const EMAIL = "alhajikhaleel@gmail.com";

const projects = [
  {
    name: "Kambit",
    tagline: "crypto trading with Naira",
    description:
      "An interface for buying and selling BTC, USDT and other assets in Nigeria, built around real‑time market rates and fast Naira settlement.",
    href: "https://kambit.vercel.app",
    host: "kambit.vercel.app",
  },
  {
    name: "MarginPlus",
    tagline: "agribusiness investment across Africa",
    description:
      "A digital investment platform that connects people with agribusiness opportunities. I built the interfaces for tracking investments, returns and investment cycles.",
    href: "https://marginplusgroup.com",
    host: "marginplusgroup.com",
  },
  {
    name: "Corium.ai",
    tagline: "skincare routines from skin data",
    description:
      "An AI skincare platform that generates a personalized routine from user input and skin data. I designed and built the frontend, with clarity and trust as the priorities.",
    href: "https://corium-ai.vercel.app",
    host: "corium-ai.vercel.app",
  },
  {
    name: "Atelier",
    tagline: "curated furniture and home objects",
    description:
      "A minimal e‑commerce store. I built the product browsing and checkout flow around a clear visual hierarchy.",
    href: "https://atelier-store-tau.vercel.app/",
    host: "atelier-store-tau.vercel.app",
  },
];

const experience = [
  { years: "2026–now", role: "Freelance frontend developer", note: "Independent" },
  { years: "2025–2026", role: "Frontend developer at MarginPlus", note: "Agritech investment" },
  { years: "2023–2024", role: "Freelance frontend developer", note: "Independent" },
  {
    years: "2021–2022",
    role: "Frontend developer at SOAIR",
    note: "School of Artificial Intelligence and Research",
  },
];

const principles = [
  "Background in computer science",
  "Builds with Next.js and Tailwind CSS",
  "Designs the interface, then ships it to production",
  "Real‑time data views, like live market rates on Kambit",
  "Built investment tracking dashboards at MarginPlus",
  "Prefers small startup teams that care about design",
];

const social = [
  { label: "GitHub", href: "https://github.com/khaleelibraheem" },
  { label: "X", href: "https://x.com/khaleelalhaji" },
  { label: "Instagram", href: "https://www.instagram.com/khaleelalhaji/" },
];

const pad = (n: number) => String(n).padStart(2, "0");

function Chevron() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 6l4 4-4 4" />
    </svg>
  );
}

function Hero() {
  return (
    <section id="top" className="pt-[52px] pb-[100px] lg:pt-[80px] lg:pb-[140px]">
      <h1 className="t-h2 max-w-[640px]">
        <span className="text-ink-3">Khaleel Alhaji, frontend engineer.</span>
        <br />
        I design and build web interfaces that hold up as products grow.
      </h1>
      <p className="t-lead mt-4 max-w-[480px]">
        Freelance frontend developer since January 2026, previously at MarginPlus
        building investment tools for agribusiness. Open to remote frontend roles and
        new freelance projects.
      </p>
      <div className="mt-[30px] flex flex-wrap gap-[10px]">
        <a href={`mailto:${EMAIL}`} className="btn btn-primary">
          Email me
        </a>
        <a href="#work" className="btn btn-secondary">
          See selected work
        </a>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="pb-[100px]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="t-h2">
          <span className="text-ink-3">Selected work</span>
          <br />
          from crypto trading to furniture retail
        </h2>
        <span className="t-mono text-ink-3">04 products</span>
      </div>

      <ol className="mt-12 lg:mt-24">
        {projects.map((p, i) => (
          <li
            key={p.name}
            className="grid gap-6 border-t border-line py-10 lg:min-h-[240px] lg:grid-cols-2 lg:gap-8 lg:py-12"
          >
            <div className="flex flex-col gap-2">
              <span className="t-h3 tabular-nums text-ink-3">{pad(i + 1)}</span>
              <h3 className="t-h3">{p.name}</h3>
            </div>
            <div className="flex flex-col gap-4 lg:justify-end">
              <p className="t-h4 text-ink-3">{p.tagline}</p>
              <p className="t-lead max-w-[563px]">{p.description}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent self-start"
              >
                Visit {p.host}
                <Chevron />
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="grid gap-6 pb-[100px] lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-8">
      <h2 className="t-h2">
        Experience
        <br />
        <span className="text-ink-3">since 2021</span>
      </h2>
      <ol>
        {experience.map((e, i) => (
          <li
            key={e.years}
            className={`grid grid-cols-[96px_minmax(0,1fr)] items-baseline gap-x-5 gap-y-2 pt-[15px] pb-4 lg:grid-cols-[112px_minmax(0,1fr)_auto] ${
              i === 0 ? "" : "border-t border-line"
            }`}
          >
            <span className="tabular-nums text-ink-3 lg:t-h4">{e.years}</span>
            <span className="truncate lg:t-h4">{e.role}</span>
            <span className="hidden text-ink-3 lg:block">{e.note}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="pb-[40px] lg:pb-[60px]">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col gap-6">
          <span className="eyebrow t-mono">How I work</span>
          <h2 className="t-h2">
            Less flashy UI,
            <br />
            <span className="text-ink-3">more care for how it feels</span>
          </h2>
        </div>
        <p className="t-lead max-w-[563px] lg:self-end">
          I’m a frontend engineer with a strong eye for design and a preference for
          simplicity. I care about how a product feels, performs and scales over time. The
          best work happens with startups that value thoughtful design.
        </p>
      </div>
      <ul className="mt-12 grid md:grid-cols-2 md:gap-x-8 lg:mt-24">
        {principles.map((item) => (
          <li key={item} className="border-t border-line-strong py-4 text-ink-3">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

function Closing() {
  return (
    <section className="border-t border-line">
      <div className="page-container flex flex-col items-center py-[100px] text-center lg:pt-[140px] lg:pb-[160px]">
        <h2 className="t-display">
          <span className="text-ink-3">Open to remote roles</span>
          <br />
          and freelance work
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-[10px]">
          <a href={`mailto:${EMAIL}`} className="btn btn-primary">
            Email me
          </a>
          <a
            href="https://github.com/khaleelibraheem"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="t-ui flex flex-col items-start gap-[6px]">
      <span className="mb-[6px]">{title}</span>
      {children}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="page-container flex flex-col gap-10 py-[60px] lg:min-h-[360px] lg:flex-row lg:justify-between">
        <div className="flex flex-col gap-4">
          <Logo />
          <span className="t-mono text-ink-3">Built with → Next.js // ©2026</span>
        </div>
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:grid-cols-3 lg:gap-x-20">
          <FooterColumn title="Work">
            {projects.map((p) => (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="link-muted">
                {p.name}
              </a>
            ))}
          </FooterColumn>
          <FooterColumn title="Connect">
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="link-muted">
                {s.label}
              </a>
            ))}
          </FooterColumn>
          <div className="col-span-2 sm:col-span-1">
            <FooterColumn title="Contact">
              <a href={`mailto:${EMAIL}`} className="link-muted">
                {EMAIL}
              </a>
            </FooterColumn>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="page-container">
        <div className="frame">
          <Hero />
          <Work />
          <Experience />
          <About />
        </div>
      </main>
      <Closing />
      <Footer />
    </>
  );
}
