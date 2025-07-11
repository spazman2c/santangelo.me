'use client'

import { useEffect, useState } from 'react'
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react'

export default function Home() {
  const [showAllSkills, setShowAllSkills] = useState(false);
  useEffect(() => {
    // Fade-in sequence
    const fadeElements = document.querySelectorAll('.fade-in')
    fadeElements.forEach((el, idx) => {
      setTimeout(() => {
        if (el instanceof HTMLElement) {
          el.classList.remove('opacity-0')
          el.classList.add('transition', 'duration-1000')
          el.style.opacity = '1'
        }
      }, idx * 300)
    })
  }, [])

  return (
    <div className="min-h-screen font-[Inter] bg-[#050514] text-white flex flex-col items-center relative overflow-x-hidden">
      {/* Aura Background Blobs */}
      <div className="absolute -top-40 -left-20 h-96 w-96 bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-600 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute top-60 right-0 h-96 w-96 bg-gradient-to-tr from-blue-700 via-purple-700 to-indigo-700 opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-10 h-72 w-72 bg-gradient-to-tr from-cyan-500 via-sky-500 to-indigo-500 opacity-20 rounded-full blur-3xl"></div>

      {/* Hero Card */}
      <section className="relative z-10 pt-24 pb-16 w-full px-6 max-w-3xl mx-auto flex flex-col items-center fade-in opacity-0">
        <div className="w-full backdrop-blur-sm bg-white/10 border border-white/20 rounded-3xl shadow-lg ring-1 ring-white/10 px-8 py-12 flex flex-col items-center">
          <img 
            src="/profile.jpg" 
            alt="Christopher Santangelo portrait" 
            className="w-32 h-32 rounded-full ring-2 ring-white/20 mb-6 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80';
            }}
          />

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 text-center">
            Christopher Santangelo
          </h1>
          <p className="text-white/80 text-center max-w-md mb-6">
            Delivering expert technical support and solutions.
          </p>

          {/* Contact Links */}
          <div className="flex gap-6">
            <a 
              href="https://www.linkedin.com/in/chrissantangelo96/" 
              aria-label="LinkedIn" 
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 stroke-[1.75] text-blue-400 group-hover:text-white transition" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/spazman2c" 
              aria-label="GitHub" 
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6 stroke-[1.75] text-white group-hover:text-purple-400 transition" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="mailto:Cjsantangelo96@gmail.com" 
              aria-label="Email" 
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
            >
              <Mail className="w-6 h-6 stroke-[1.75] text-teal-400 group-hover:text-white transition" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="w-full max-w-3xl px-6">
        <hr className="border-white/10 mb-16" />
      </div>

      {/* About Section */}
      <section className="relative z-10 w-full px-6 max-w-3xl mx-auto fade-in opacity-0">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">About Me</h2>
        <p className="text-white/80 leading-7 mb-4">
          Technical support professional with over four years of experience in resolving technical issues and enhancing customer satisfaction. Expert in managing support interactions, collaborating with cross-functional teams, and driving process improvements. Recognized for resolving high volumes of live chats monthly with a 90%+ customer satisfaction rate and for improving response times through effective teamwork.
        </p>
        <ul className="list-disc list-inside text-white/70 leading-7 mb-2">
          <li>Skilled in troubleshooting complex technical issues and providing exceptional customer support.</li>
          <li>Experienced in conducting customer trainings and creating step-by-step workflows.</li>
          <li>Proven ability to reduce escalations and improve support metrics through collaboration and innovation.</li>
        </ul>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 w-full px-6 max-w-3xl mx-auto fade-in opacity-0 mt-8 mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4 flex items-center">Skills
          <button
            onClick={() => setShowAllSkills((prev) => !prev)}
            className="ml-4 px-3 py-1 text-xs font-medium rounded transition-all duration-300 border border-indigo-400 bg-white/10 text-indigo-300 hover:bg-indigo-500 hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            aria-expanded={showAllSkills}
          >
            {showAllSkills ? 'See Less' : 'See More'}
          </button>
        </h2>
        {(() => {
          const skills = [
            'Okta', 'Microsoft 365', 'Google Workspace', 'OneLogin', 'AWS', 'GCP', 'Azure', 'GitHub',
            'GitLab', 'Azure DevOps', 'Intune', 'Jamf', 'Kandji', 'Hexnode', 'Rippling', 'JumpCloud',
            'Mac', 'Windows', 'Linux', 'Jira', 'PCI DSS', 'CRM Systems', 'Datadog', 'PCI', 'Merge.dev',
            'Gusto', 'Workday', 'ISO 27001', 'Paylocity', 'Checker', 'Certn', 'HIPAA', 'Support Operations',
            'AI', 'Machine Learning', 'LangChain', 'OpenAI API', 'Web Development', 'JavaScript', 'TypeScript',
            'React', 'Next.js', 'Vercel', 'Tailwind CSS', 'Node.js', 'Express'
          ];
          const keySkills = [
            'AI', 'React', 'Next.js', 'Web Development', 'JavaScript', 'TypeScript', 'AWS', 'Azure',
            'Tailwind CSS', 'Node.js'
          ];
          const displaySkills = showAllSkills ? skills : keySkills;
          return (
            <div
              className={`flex flex-wrap gap-2 text-white/90 transition-all duration-500 ${showAllSkills ? 'max-h-[1000px]' : 'max-h-24 overflow-hidden'}`}
            >
              {displaySkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-white/10 border border-white/20 rounded px-3 py-1 text-sm transition-all duration-300 transform hover:scale-110 hover:bg-indigo-500/80 hover:text-white hover:shadow-lg hover:border-indigo-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          );
        })()}
      </section>

      {/* Divider */}
      <div className="w-full max-w-3xl px-6">
        <hr className="border-white/10 my-16" />
      </div>

      {/* My Work Section */}
      <section className="relative z-10 w-full px-6 max-w-5xl mx-auto fade-in opacity-0">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">My Work</h2>
          <a
            href="/work"
            className="inline-block px-4 py-2 text-sm font-medium text-indigo-400 bg-white/10 border border-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            See More
          </a>
        </div>
        <p className="text-white/80 leading-7 mb-8">
          A curated collection of websites I've designed & developed.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Standfinder */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🌾</div>
                <div className="text-white font-bold text-xl">Standfinder</div>
                <div className="text-green-100 text-sm">Farm Stand Directory</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Standfinder</h3>
                <p className="text-white/70 text-sm mt-1">A comprehensive platform connecting local farmers with consumers through an interactive farm stand directory and mapping system.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://farmstandlisting.com/" 
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>
          </article>

          {/* Tikkit */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🎫</div>
                <div className="text-white font-bold text-xl">Tikkit</div>
                <div className="text-blue-100 text-sm">Support Desk</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Tikkit</h3>
                <p className="text-white/70 text-sm mt-1">A modern support desk and ticketing system designed to streamline customer service operations and improve response times.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://tikkitdesk.com/" 
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>
          </article>

          {/* AppSyndiq */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg">
            <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">📱</div>
                <div className="text-white font-bold text-xl">AppSyndiq</div>
                <div className="text-indigo-100 text-sm">Mobile App Platform</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">AppSyndiq</h3>
                <p className="text-white/70 text-sm mt-1">A revolutionary mobile app platform designed to streamline app distribution and discovery. Coming soon to appsyndiq.com!</p>
              </header>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 max-w-3xl mx-auto mt-24 mb-12 text-center text-xs text-white/60 fade-in opacity-0">
        © {new Date().getFullYear()} Christopher Santangelo. All rights reserved.
      </footer>
    </div>
  )
} 