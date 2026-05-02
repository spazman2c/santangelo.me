'use client';

import { useEffect, useState } from 'react';

type Project = {
  name: string;
  domain: string;
  url: string;
  description: string;
  tags: string[];
  status: 'LIVE' | 'BETA' | 'WIP' | 'ARCHIVED';
  accent: string; // tailwind color class for top border + glow
  initial: string;
};

const projects: Project[] = [
  {
    name: 'Produl',
    domain: 'produl.tech',
    url: 'https://produl.tech',
    description: 'Product management & roadmap tooling for fast-moving teams.',
    tags: ['Next.js', 'Postgres', 'AI'],
    status: 'LIVE',
    accent: 'from-cyan-400 to-sky-500',
    initial: 'P',
  },
  {
    name: 'Browser Grab',
    domain: 'browsergrab.app',
    url: 'https://browsergrab.app',
    description: 'Capture, annotate, and share anything from your browser in one click.',
    tags: ['Chrome', 'TypeScript', 'WebRTC'],
    status: 'LIVE',
    accent: 'from-pink-400 to-rose-500',
    initial: 'B',
  },
  {
    name: 'Prequal Pilot',
    domain: 'prequalpilot.com',
    url: 'https://prequalpilot.com',
    description: 'AI-driven prequalification flows for lenders and brokers.',
    tags: ['Next.js', 'OpenAI', 'Stripe'],
    status: 'BETA',
    accent: 'from-violet-400 to-purple-500',
    initial: 'P',
  },
  {
    name: 'Clearvew',
    domain: 'clearvew.io',
    url: 'https://clearvew.io',
    description: 'Visibility tools for product teams — events, sessions, and signal.',
    tags: ['Analytics', 'Postgres', 'Edge'],
    status: 'LIVE',
    accent: 'from-blue-400 to-indigo-500',
    initial: 'C',
  },
  {
    name: 'vPoleMarket',
    domain: 'vpolemarket.com',
    url: 'https://vpolemarket.com',
    description: 'Marketplace platform with realtime listings and integrated payments.',
    tags: ['Next.js', 'Stripe', 'Realtime'],
    status: 'LIVE',
    accent: 'from-sky-400 to-cyan-500',
    initial: 'V',
  },
  {
    name: 'Cal Budget',
    domain: 'calbudget.com',
    url: 'https://calbudget.com',
    description: 'Calendar-native budgeting — see your money on the days it moves.',
    tags: ['React', 'Plaid', 'Tailwind'],
    status: 'LIVE',
    accent: 'from-emerald-400 to-teal-500',
    initial: 'C',
  },
  {
    name: 'Simmerly',
    domain: 'simmerly.shop',
    url: 'https://simmerly.shop',
    description: 'Curated kitchen storefront with a hand-built commerce stack.',
    tags: ['Shopify', 'Next.js', 'Edge'],
    status: 'LIVE',
    accent: 'from-orange-400 to-red-500',
    initial: 'S',
  },
  {
    name: 'Conjoin',
    domain: 'conjoin.app',
    url: 'https://conjoin.app',
    description: 'Connect identities, accounts, and integrations under one roof.',
    tags: ['OAuth', 'Node', 'Merge.dev'],
    status: 'LIVE',
    accent: 'from-amber-400 to-orange-500',
    initial: 'C',
  },
  {
    name: 'Upgrade Firm',
    domain: 'upgraidefirm.com',
    url: 'https://upgraidefirm.com',
    description: 'Modern operations, automation, and tooling for service businesses.',
    tags: ['Automation', 'Next.js', 'GPT'],
    status: 'LIVE',
    accent: 'from-green-400 to-emerald-500',
    initial: 'U',
  },
  {
    name: 'Standfinder',
    domain: 'standfinder',
    url: '#',
    description: 'Event space discovery & booking with integrated payments.',
    tags: ['Next.js', 'Stripe', 'Maps'],
    status: 'ARCHIVED',
    accent: 'from-blue-400 to-purple-500',
    initial: 'S',
  },
  {
    name: 'Tikkit',
    domain: 'tikkit',
    url: '#',
    description: 'Digital ticketing with QR generation and real-time validation.',
    tags: ['React', 'Node', 'Mongo'],
    status: 'ARCHIVED',
    accent: 'from-emerald-400 to-green-500',
    initial: 'T',
  },
  {
    name: 'Frameriq',
    domain: 'frameriq',
    url: '#',
    description: 'AI-powered automation for content generation & management.',
    tags: ['Next.js', 'OpenAI', 'TS'],
    status: 'WIP',
    accent: 'from-orange-400 to-rose-500',
    initial: 'F',
  },
];

const stack = [
  'TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Postgres',
  'AWS', 'GCP', 'Vercel', 'Docker', 'Tailwind', 'Stripe',
  'OpenAI', 'Datadog', 'Okta', 'Jamf', 'Kandji', 'Intune',
];

const experience = [
  {
    role: 'Technical Support Engineer',
    company: 'Technology Company',
    period: '2024 — Present',
    points: [
      'Frontline technical owner across phone, chat, screen-share, and email.',
      'Drives resolution on complex customer issues across cross-functional teams.',
      'Builds tooling and runbooks that compound team-wide leverage.',
    ],
  },
  {
    role: 'Technical Support Representative',
    company: 'SaaS Platform',
    period: '2022 — 2023',
    points: [
      'Resolved 500+ live chats per month at a 90% CSAT.',
      'Partnered with engineering to deflect ~2.5k conversations/yr (17% of volume).',
      'Owned log/JSON triage in Datadog and shipped Vidyard walkthroughs.',
    ],
  },
  {
    role: 'Technical Support Specialist II',
    company: 'Telecommunications',
    period: '2021 — 2022',
    points: [
      'Inbound + outbound support across phone, chat, and screen-share.',
      'Coordinated with ISPs and vendors to unblock customer issues.',
      'Cross-departmental delivery on complex multi-team escalations.',
    ],
  },
];

function Sparkline({ from, to }: { from: string; to: string }) {
  // Tiny decorative sparkline, mirrors the dashboard aesthetic.
  return (
    <svg viewBox="0 0 200 40" className="w-full h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g-${from}-${to}`} x1="0" x2="1">
          <stop offset="0" className={`[stop-color:var(--tw-gradient-from)]`} />
          <stop offset="1" className={`[stop-color:var(--tw-gradient-to)]`} />
        </linearGradient>
      </defs>
      <path
        d="M0 32 C 25 30, 35 12, 55 14 S 90 36, 110 30 S 150 8, 175 18 S 198 26, 200 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StatusPill({ status }: { status: Project['status'] }) {
  const map = {
    LIVE: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
    BETA: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
    WIP: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
    ARCHIVED: 'text-zinc-400 bg-zinc-500/10 border-zinc-500/30',
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border text-[10px] font-medium tracking-wide ${map[status]}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <a
      href={p.url}
      target={p.url.startsWith('http') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className="group relative block rounded-2xl bg-zinc-950/60 border border-zinc-800/80 hover:border-zinc-700 backdrop-blur transition-all overflow-hidden"
    >
      <div className={`h-px bg-gradient-to-r ${p.accent}`} />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${p.accent} flex items-center justify-center text-black font-semibold text-sm shrink-0`}>
              {p.initial}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-semibold text-white truncate">{p.name}</h3>
                <StatusPill status={p.status} />
              </div>
              <div className="text-xs text-zinc-500 truncate">{p.domain}</div>
            </div>
          </div>
        </div>

        <p className="mt-4 text-sm text-zinc-400 leading-relaxed line-clamp-2">{p.description}</p>

        <div className={`mt-4 text-zinc-700 group-hover:text-zinc-500 transition-colors`}>
          <Sparkline from="cyan" to="blue" />
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <span key={t} className="px-2 py-0.5 text-[10px] rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
              {t}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const now = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'America/Toronto',
        hour12: false,
      });
      setTime(`${now} TOR`);
    };
    tick();
    const id = setInterval(tick, 1000 * 30);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white selection:text-black">
      {/* Background mesh */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.08),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(168,85,247,0.06),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-zinc-900/80 bg-black/60 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
            <span className="text-sm font-medium tracking-tight">Christopher Santangelo</span>
          </a>
          <div className="hidden md:flex items-center gap-7 text-sm text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="hidden sm:block text-xs font-mono text-zinc-500 tabular-nums">{time}</div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/60 text-xs text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Open to interesting work · Toronto
          </div>

          <h1 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]">
            Building <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent">products</span>,
            <br />
            shipping <span className="text-zinc-400">in production.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-zinc-400 leading-relaxed">
            Technical support engineer by day, indie operator by night. I design,
            build, and run a small portfolio of web products — from marketplaces
            and budgeting tools to browser extensions and AI-powered workflows.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
            >
              See projects
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="mailto:Chris@santangelo.me"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 text-sm font-medium text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-zinc-900 bg-zinc-900">
            {[
              ['12+', 'shipped projects'],
              ['9', 'live domains'],
              ['4+', 'years in support'],
              ['100%', 'caffeinated'],
            ].map(([v, l]) => (
              <div key={l} className="bg-black p-5">
                <div className="text-2xl font-semibold tracking-tight">{v}</div>
                <div className="mt-1 text-xs text-zinc-500 uppercase tracking-wider">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">/ projects</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Things I've built</h2>
            </div>
            <p className="text-sm text-zinc-500 max-w-md">
              A live snapshot of what I'm shipping — across commerce, finance,
              browser tooling, and AI workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <ProjectCard key={p.name} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Stack */}
      <section id="stack" className="border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">/ stack</div>
              <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">The toolkit</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                I lean on a tight, opinionated stack: TypeScript, Next.js, and
                Postgres for the web; Vercel and AWS for the runtime; modern
                identity and MDM tooling for the day job.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="mb-10">
            <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">/ experience</div>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">Where I've worked</h2>
          </div>

          <ol className="relative border-l border-zinc-900 ml-2">
            {experience.map((e, i) => (
              <li key={i} className="pl-6 pb-10 last:pb-0 relative">
                <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-zinc-700 ring-4 ring-black" />
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div>
                    <h3 className="text-base font-semibold text-white">{e.role}</h3>
                    <div className="text-sm text-zinc-400">{e.company}</div>
                  </div>
                  <div className="text-xs font-mono text-zinc-500">{e.period}</div>
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-zinc-400">
                  {e.points.map((pt) => (
                    <li key={pt} className="flex gap-2">
                      <span className="text-zinc-600 mt-0.5">—</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="relative rounded-3xl border border-zinc-900 bg-gradient-to-br from-zinc-950 via-black to-zinc-950 overflow-hidden p-10 md:p-16">
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">/ contact</div>
              <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
                Got an idea, a problem, or just want to say hi?
              </h2>
              <p className="mt-4 text-zinc-400 max-w-xl">
                The fastest way to reach me is email. I read everything.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:Chris@santangelo.me"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors"
                >
                  Chris@santangelo.me
                </a>
                <a
                  href="https://www.linkedin.com/in/chrissantangelo96/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/spazman2c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-zinc-800 text-sm text-zinc-300 hover:border-zinc-600 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-900/80">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div>© {new Date().getFullYear()} Christopher Santangelo</div>
          <div className="font-mono">santangelo.me · built with Next.js · deployed on Vercel</div>
        </div>
      </footer>
    </div>
  );
}
