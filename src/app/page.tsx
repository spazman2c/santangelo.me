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
    <div className="min-h-screen font-[Inter] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 w-full px-6 max-w-4xl mx-auto flex flex-col items-center fade-in opacity-0">
        <div className="w-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5 px-10 py-16 flex flex-col items-center">
          <div className="relative mb-8">
            <img 
              src="/profile.jpg" 
              alt="Christopher Santangelo portrait" 
              className="w-36 h-36 rounded-full ring-4 ring-white/20 object-cover shadow-2xl"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80';
              }}
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-3 text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Christopher Santangelo
          </h1>
          <p className="text-gray-300 text-lg text-center max-w-lg mb-8 leading-relaxed">
            Technical Support Engineer & Developer
          </p>

          {/* Contact Links */}
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/chrissantangelo96/" 
              aria-label="LinkedIn" 
              className="relative group p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 stroke-[1.75] text-blue-400 group-hover:text-white transition" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com/spazman2c" 
              aria-label="GitHub" 
              className="relative group p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 stroke-[1.75] text-white group-hover:text-purple-400 transition" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="mailto:Cjsantangelo96@gmail.com" 
              aria-label="Email" 
              className="relative group p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              <Mail className="w-5 h-5 stroke-[1.75] text-teal-400 group-hover:text-white transition" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative z-10 w-full px-6 max-w-4xl mx-auto fade-in opacity-0 mt-16">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5 p-10">
          <h2 className="text-3xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">About Me</h2>
          <p className="text-gray-300 leading-8 text-lg mb-6">
            Technical support professional with over four years of experience in resolving technical issues and enhancing customer satisfaction. Expert in managing support interactions, collaborating with cross-functional teams, and driving process improvements. Recognized for resolving high volumes of live chats monthly with a 90%+ customer satisfaction rate and for improving response times through effective teamwork.
          </p>
          <ul className="list-disc list-inside text-gray-300 leading-7 text-lg space-y-2">
            <li>Skilled in troubleshooting complex technical issues and providing exceptional customer support.</li>
            <li>Experienced in conducting customer trainings and creating step-by-step workflows.</li>
            <li>Proven ability to reduce escalations and improve support metrics through collaboration and innovation.</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative z-10 w-full px-6 max-w-4xl mx-auto fade-in opacity-0 mt-16">
        <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl shadow-2xl ring-1 ring-white/5 p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Skills</h2>
            <button
              onClick={() => setShowAllSkills((prev) => !prev)}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 border border-blue-500/50 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 hover:text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              aria-expanded={showAllSkills}
            >
              {showAllSkills ? 'Show Less' : 'Show More'}
            </button>
          </div>
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
                className={`flex flex-wrap gap-3 text-gray-300 transition-all duration-500 ${showAllSkills ? 'max-h-[1000px]' : 'max-h-32 overflow-hidden'}`}
              >
                {displaySkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-sm transition-all duration-300 transform hover:scale-105 hover:bg-blue-500/20 hover:text-white hover:border-blue-400/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* My Work Section */}
      <section className="relative z-10 w-full px-6 max-w-6xl mx-auto fade-in opacity-0 mt-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Featured Work</h2>
          <a
            href="/work"
            className="inline-block px-6 py-3 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/50 rounded-lg hover:bg-blue-500/20 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            View All Projects
          </a>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-3xl">
          A curated collection of websites and applications I've designed & developed.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Standfinder */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🌾</div>
                <div className="text-white font-bold text-2xl">Standfinder</div>
                <div className="text-green-100 text-sm">Farm Stand Directory</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">Standfinder</h3>
                <p className="text-gray-300 text-base leading-relaxed">A comprehensive platform connecting local farmers with consumers through an interactive farm stand directory and mapping system.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://farmstandlisting.com/" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
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
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🎫</div>
                <div className="text-white font-bold text-2xl">Tikkit</div>
                <div className="text-blue-100 text-sm">Support Desk</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">Tikkit</h3>
                <p className="text-gray-300 text-base leading-relaxed">A modern support desk and ticketing system designed to streamline customer service operations and improve response times.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://tikkitdesk.com/" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>
          </article>

          {/* Frameriq */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🖼️</div>
                <div className="text-white font-bold text-2xl">Frameriq</div>
                <div className="text-teal-100 text-sm">Frame Generator</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">Frameriq</h3>
                <p className="text-gray-300 text-base leading-relaxed">An innovative platform for creating and customizing frames with advanced design tools and seamless user experience.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://frameriq.com/" 
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-white font-medium transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 rounded"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Site
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full px-6 max-w-4xl mx-auto mt-24 mb-12 text-center text-sm text-gray-400 fade-in opacity-0">
        © {new Date().getFullYear()} Christopher Santangelo. All rights reserved.
      </footer>
    </div>
  )
} 