import Image from 'next/image';
import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  ArrowUpRight,
  Download,
  Github,
  Globe2,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react';

type Project = {
  name: string;
  type: string;
  url?: string;
  description: string;
  tags: string[];
};

const projects: Project[] = [
  {
    name: 'Produl',
    type: 'Product management',
    url: 'https://produl.tech',
    description: 'Product management and roadmap tooling for fast-moving teams.',
    tags: ['Next.js', 'Postgres', 'AI'],
  },
  {
    name: 'Browser Grab',
    type: 'Browser extension',
    url: 'https://browsergrab.app',
    description: 'Capture, annotate, and share browser context in one focused workflow.',
    tags: ['Chrome', 'TypeScript', 'WebRTC'],
  },
  {
    name: 'Prequal Pilot',
    type: 'AI workflow',
    url: 'https://prequalpilot.com',
    description: 'AI-assisted prequalification flows for lenders, brokers, and operators.',
    tags: ['Next.js', 'OpenAI', 'Stripe'],
  },
  {
    name: 'Clearvew',
    type: 'Analytics',
    url: 'https://clearvew.io',
    description: 'Visibility tools for product teams across events, sessions, and signal.',
    tags: ['Analytics', 'Postgres', 'Edge'],
  },
  {
    name: 'Cal Budget',
    type: 'Personal finance',
    url: 'https://calbudget.com',
    description: 'Calendar-native budgeting that shows money on the days it moves.',
    tags: ['React', 'Plaid', 'Tailwind'],
  },
  {
    name: 'Simmerly',
    type: 'Commerce',
    url: 'https://simmerly.shop',
    description: 'A curated kitchen storefront with a hand-built commerce stack.',
    tags: ['Shopify', 'Next.js', 'Edge'],
  },
  {
    name: 'Standfinder',
    type: 'Marketplace',
    url: 'https://farmstandlisting.com/',
    description: 'A directory and discovery surface connecting local farm stands with customers.',
    tags: ['Maps', 'Marketplace', 'Payments'],
  },
  {
    name: 'Tikkit',
    type: 'Support desk',
    url: 'https://tikkitdesk.com/',
    description: 'A modern ticketing system for cleaner customer service operations.',
    tags: ['Support', 'React', 'Automation'],
  },
];

const metrics = [
  ['25%', 'faster response times'],
  ['40%', 'fewer escalations'],
  ['90%', 'CSAT maintained'],
  ['2,500+', 'cases deflected yearly'],
];

const skillGroups = [
  {
    label: 'Support & operations',
    items: ['Tier 1/Tier 2', 'SaaS support', 'Ticket triage', 'Escalations', 'SLA compliance', 'Onboarding'],
  },
  {
    label: 'Identity & SaaS admin',
    items: ['Okta', 'Azure Active Directory', 'JumpCloud', '1Password', 'HRIS integrations'],
  },
  {
    label: 'Cloud, systems & endpoint',
    items: ['Microsoft 365', 'Azure', 'AWS', 'Google Cloud', 'Windows', 'macOS', 'Linux', 'Jamf', 'Kandji'],
  },
  {
    label: 'Monitoring & workflow',
    items: ['Datadog', 'JSON logs', 'Jira', 'GitHub', 'HubSpot', 'Workday', 'Gusto', 'Paylocity', 'Certn'],
  },
  {
    label: 'Product build stack',
    items: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Postgres', 'Vercel', 'Stripe', 'OpenAI'],
  },
];

const experience = [
  {
    role: 'Technical Support Engineer',
    company: 'IQReseller',
    location: 'Wayzata, MN (Remote)',
    period: 'Jan 2024 - Present',
    points: [
      'Provide Tier 1 and Tier 2 support across SaaS and IT systems while maintaining SLA compliance and reducing support backlog.',
      'Troubleshoot access, application, integration, endpoint, and workflow issues using diagnostics, logs, reproduction steps, and clear customer communication.',
      'Partner with engineering and product teams on defects, feature-impacting issues, and escalation paths, translating technical findings into customer-ready updates.',
      'Build and improve knowledge resources and training materials that increased adoption and reduced repeat tickets by 20%.',
    ],
  },
  {
    role: 'Technical Support Representative I',
    company: 'Drata',
    location: 'San Diego, CA (Remote)',
    period: 'Mar 2022 - Dec 2023',
    points: [
      'Handled 500+ monthly live chats for enterprise customers while sustaining 90% CSAT and exceeding SLA targets.',
      'Used Datadog and JSON logs to diagnose platform, account, workflow, and integration issues.',
      'Automated repeat support workflows and improved internal processes, increasing team efficiency by 17% and improving response times by 25%.',
      'Created help articles, internal documentation, and customer videos that reduced recurring issues by 30% and deflected 2,500+ cases annually.',
      'Reduced escalations by 40% through proactive troubleshooting, clearer handoffs, and complete root-cause documentation.',
    ],
  },
  {
    role: 'Technical Support Specialist II',
    company: 'Clarity Voice',
    location: 'Southfield, MI (Remote)',
    period: 'Jun 2019 - Apr 2020',
    points: [
      'Delivered Tier 1 VoIP and network support by phone, chat, and screen share to restore service and minimize business downtime.',
      'Coordinated with IT providers and ISPs to resolve connectivity, provisioning, and service-impacting issues.',
      'Led client onboarding and tailored training sessions that improved customer technical proficiency by 30%.',
    ],
  },
];

const education = [
  {
    date: 'Aug 2023',
    title: 'A+ Security Certification',
    subtitle: 'Technical certification',
  },
  {
    date: 'Coursework',
    title: 'Information Technology & Business',
    subtitle: 'University of Phoenix / Coursera',
  },
  {
    date: 'Diploma',
    title: 'Middletown High School',
    subtitle: 'Middletown, CT',
  },
];

function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-5 px-4 py-10 sm:px-7 min-[500px]:flex-row min-[500px]:items-center min-[500px]:justify-between">
      <div>
        <p className="text-sm font-medium uppercase tracking-[2px] text-primary">{eyebrow}</p>
        {title ? <h2 className="mt-3 text-2xl font-normal text-primary sm:text-3xl">{title}</h2> : null}
      </div>
      {action}
    </div>
  );
}

function Divider() {
  return (
    <div className="site-container">
      <div className="h-4 border border-border" />
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <article className="group flex h-full flex-col gap-5 border-b border-dashed border-border p-5 transition-colors hover:bg-[#1c212b]/[0.03] md:border-b-0 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-base font-semibold text-primary shadow-sm">
          {String(index + 1).padStart(2, '0')}
        </div>
        {project.url ? (
          <ArrowUpRight className="h-5 w-5 text-secondary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        ) : null}
      </div>
      <div>
        <p className="text-sm font-medium text-violet-700">{project.type}</p>
        <h3 className="mt-1 text-2xl font-normal text-primary">{project.name}</h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">{project.description}</p>
      </div>
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-lg border border-border px-3 py-1 text-xs font-medium text-primary">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );

  if (!project.url) {
    return content;
  }

  return (
    <Link href={project.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
    </Link>
  );
}

export default function Home() {
  return (
    <main>
      <section className="pt-10">
        <div className="site-container">
          <div className="relative h-56 overflow-hidden sm:h-72">
            <Image
              src="/images/hero-sec/banner-bg-img.png"
              alt="Abstract warm gradient banner"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="border-x border-border">
            <div className="relative mx-auto flex max-w-3xl flex-col items-center justify-center gap-10 px-4 pb-8 pt-24 text-center sm:px-7 sm:pb-12 min-[500px]:flex-row min-[500px]:items-start min-[500px]:justify-between min-[500px]:text-left">
              <div className="absolute top-0 -translate-y-1/2">
                <Image
                  src="/profile.jpg"
                  alt="Christopher Santangelo"
                  width={145}
                  height={145}
                  className="rounded-full border-4 border-white object-cover"
                />
                <span className="absolute bottom-3 right-5 h-4 w-4 rounded-full border-2 border-white bg-green-500" />
              </div>
              <div className="flex flex-col items-center gap-3 min-[500px]:items-start">
                <h1 className="text-2xl font-normal text-primary md:text-3xl lg:text-[32px]">
                  Christopher Santangelo
                </h1>
                <p className="font-normal text-violet-700">
                  Technical Support Engineer | SaaS Support | IAM, Cloud, Endpoint & VoIP Troubleshooting
                </p>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-primary min-[500px]:justify-start">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-secondary" />
                    South Windham, CT
                  </span>
                  <Link href="https://santangelo.me" className="inline-flex items-center gap-2 hover:text-violet-700">
                    <Globe2 className="h-5 w-5 text-secondary" />
                    Santangelo.me
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                  <Link
                    href="https://github.com/spazman2c"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-border p-3 transition-colors hover:bg-[#1c212b]/5"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/chrissantangelo96/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-border p-3 transition-colors hover:bg-[#1c212b]/5"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link
                    href="mailto:CJSANTANGELO96@gmail.com"
                    aria-label="Email"
                    className="rounded-full border border-border p-3 transition-colors hover:bg-[#1c212b]/5"
                  >
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
                <Link
                  href="mailto:CJSANTANGELO96@gmail.com"
                  className="inline-block rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] p-0.5"
                >
                  <span className="flex items-center gap-3 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-transparent sm:text-base">
                    <Sparkles className="h-4 w-4" />
                    Get in touch
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="about">
        <div className="site-container">
          <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
            <div className="mx-auto flex max-w-3xl flex-col gap-9 px-4 py-11 sm:gap-12 sm:px-7 md:py-20">
              <div className="flex flex-col gap-4">
                <p className="text-sm font-medium uppercase tracking-[2px] text-primary">About me</p>
                <h2 className="text-xl font-normal text-primary sm:text-2xl md:text-3xl lg:text-[32px]">
                  I support complex technical workflows by day and build web products after hours, pairing customer-facing support instincts with practical product engineering.
                </h2>
                <p className="text-lg font-normal text-secondary">
                  My work spans SaaS support, identity and access tools, cloud systems, endpoints, VoIP, documentation, automation, and a portfolio of shipped products.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
                {metrics.map(([value, label]) => (
                  <div key={label} className="bg-white p-5">
                    <div className="text-2xl font-semibold text-primary">{value}</div>
                    <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="projects">
        <div className="site-container">
          <div className="border-x border-border">
            <div className="mx-auto max-w-3xl">
              <SectionHeading
                eyebrow="Featured work"
                title="Products, tools, and experiments I have shipped."
                action={
                  <Link
                    href="/chris-santangelo-resume-may-2026.pdf"
                    className="inline-flex h-auto items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-[#1c212b]/5"
                  >
                    <Download className="h-4 w-4" />
                    Download resume
                  </Link>
                }
              />
            </div>
            <div className="grid grid-cols-1 border-t border-border md:grid-cols-2">
              {projects.map((project, index) => (
                <div key={project.name} className={index % 2 === 1 ? 'md:border-l md:border-border' : ''}>
                  <ProjectCard project={project} index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="skills">
        <div className="site-container">
          <div className="border-x border-border">
            <div className="mx-auto max-w-3xl">
              <SectionHeading eyebrow="Core technical skills" title="Support depth with builder range." />
              <div className="border-t border-border px-4 py-10 sm:px-7">
                <div className="flex flex-col gap-7">
                  {skillGroups.map((group) => (
                    <div key={group.label} className="grid gap-3 md:grid-cols-[180px_1fr]">
                      <h3 className="text-base font-semibold text-primary">{group.label}</h3>
                      <div className="flex flex-wrap gap-2">
                        {group.items.map((item) => (
                          <span key={item} className="rounded-lg border border-border px-3 py-1.5 text-sm font-medium text-primary">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="experience">
        <div className="site-container">
          <div className="border-x border-border">
            <div className="mx-auto max-w-3xl">
              <SectionHeading eyebrow="Experience" />
              <div className="border-t border-border px-4 py-9 sm:px-7 md:py-16">
                <div className="flex flex-col">
                  {experience.map((job) => (
                    <article
                      key={`${job.company}-${job.role}`}
                      className="flex flex-col gap-5 border-b border-dashed border-border pb-8 pt-8 first:pt-0 last:border-b-0 last:pb-0 sm:pb-10 sm:pt-10"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-5">
                        <div>
                          <h3 className="text-lg font-medium text-primary sm:text-xl">{job.role}</h3>
                          <p className="text-primary">{job.company}</p>
                        </div>
                        <div className="flex items-center gap-2.5 rounded-lg border border-border px-3 py-1.5">
                          <div className={job.period.includes('Present') ? 'h-2 w-4 rounded-sm bg-primary' : 'h-2 w-4 rounded-sm bg-[#1c212b]/10'} />
                          <p className="text-sm text-primary sm:text-base">
                            {job.period} - {job.location}
                          </p>
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {job.points.map((point) => (
                          <li key={point} className="flex items-start gap-2 text-base font-normal text-muted-foreground">
                  <span className="mt-0.5 text-muted-foreground">-</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="education">
        <div className="site-container">
          <div className="border-x border-border">
            <div className="mx-auto max-w-3xl">
              <SectionHeading eyebrow="Education & certifications" />
              <div className="relative border-t border-border px-4 py-10 sm:px-7">
                <div className="absolute bottom-10 left-8 top-10 hidden w-px bg-[#1c212b]/10 sm:block" />
                <div className="relative flex flex-col gap-8">
                  {education.map((item) => (
                    <div key={`${item.date}-${item.title}`} className="relative grid gap-3 sm:grid-cols-[160px_1fr] sm:gap-10">
                      <div className="flex items-center gap-3 sm:justify-end">
                        <span className="z-10 h-4 w-4 rounded-full border border-border bg-white p-1">
                          <span className="block h-full w-full rounded-full bg-primary" />
                        </span>
                        <p className="text-base leading-relaxed text-primary sm:order-first">{item.date}</p>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                        <p className="text-primary">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      <section id="contact">
        <div className="site-container">
          <div className="border-x border-border">
            <div className="mx-auto grid max-w-3xl gap-6 px-4 py-11 sm:px-7 md:grid-cols-[1fr_auto] md:items-center md:py-16">
              <div>
                <p className="text-sm font-medium uppercase tracking-[2px] text-primary">Contact</p>
                <h2 className="mt-3 text-2xl font-normal text-primary sm:text-3xl">Have a support problem, product idea, or role worth talking about?</h2>
                <p className="mt-4 text-secondary">I am easiest to reach by email or phone.</p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="mailto:CJSANTANGELO96@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-primary hover:bg-[#1c212b]/5">
                  <Mail className="h-4 w-4" />
                  CJSANTANGELO96@gmail.com
                </Link>
                <Link href="tel:+18607597047" className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-primary hover:bg-[#1c212b]/5">
                  <Phone className="h-4 w-4" />
                  860-759-7047
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
