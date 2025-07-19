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
    <div className="min-h-screen font-[Inter] bg-white text-gray-900">
      {/* Hero Section */}
      <section className="pt-16 pb-8 w-full px-6 max-w-6xl mx-auto fade-in opacity-0">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="relative mb-6">
            <img 
              src="/profile.jpg" 
              alt="Christopher Santangelo portrait" 
              className="w-24 h-24 rounded-full ring-2 ring-gray-200 object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80';
              }}
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
          </div>

          <h1 className="text-3xl font-bold tracking-tight mb-2 text-gray-900">
            Christopher Santangelo
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Technical Support Engineer & Developer
          </p>

          {/* Contact Links */}
          <div className="flex gap-3">
            <a 
              href="https://www.linkedin.com/in/chrissantangelo96/" 
              aria-label="LinkedIn" 
              className="p-2 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4 text-blue-600" />
            </a>
            <a 
              href="https://github.com/spazman2c" 
              aria-label="GitHub" 
              className="p-2 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 text-gray-700" />
            </a>
            <a 
              href="mailto:Cjsantangelo96@gmail.com" 
              aria-label="Email" 
              className="p-2 bg-gray-100 border border-gray-200 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Mail className="w-4 h-4 text-gray-600" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full px-6 max-w-4xl mx-auto fade-in opacity-0 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-3 text-gray-900">About</h2>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            Technical support professional with over four years of experience in resolving technical issues and enhancing customer satisfaction. Expert in managing support interactions, collaborating with cross-functional teams, and driving process improvements.
          </p>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Key achievements:</span> 90%+ customer satisfaction rate, 25% response time improvement, 40% escalation reduction.
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full px-6 max-w-4xl mx-auto fade-in opacity-0 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Skills</h2>
            <button
              onClick={() => setShowAllSkills((prev) => !prev)}
              className="text-xs px-3 py-1 border border-gray-300 bg-white rounded-md hover:bg-gray-50 transition-colors"
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
                className={`flex flex-wrap gap-2 text-gray-700 transition-all duration-500 ${showAllSkills ? 'max-h-[1000px]' : 'max-h-20 overflow-hidden'}`}
              >
                {displaySkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white border border-gray-200 rounded-md px-3 py-1 text-xs transition-all duration-300 hover:bg-gray-50 hover:border-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            );
          })()}
        </div>
      </section>

      {/* Projects Section */}
      <section className="w-full px-6 max-w-6xl mx-auto fade-in opacity-0 mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Standfinder */}
          <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="w-full h-32 bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-1">🌾</div>
                <div className="text-white font-bold text-sm">Standfinder</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">Standfinder</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">Farm stand directory connecting local farmers with consumers.</p>
              <a 
                href="https://farmstandlisting.com/" 
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>

          {/* Tikkit */}
          <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-1">🎫</div>
                <div className="text-white font-bold text-sm">Tikkit</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">Tikkit</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">Modern support desk and ticketing system.</p>
              <a 
                href="https://tikkitdesk.com/" 
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>

          {/* Frameriq */}
          <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="w-full h-32 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-1">🖼️</div>
                <div className="text-white font-bold text-sm">Frameriq</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">Frameriq</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">Innovative platform for creating and customizing frames.</p>
              <a 
                href="https://frameriq.com/" 
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>

          {/* FridgeChef */}
          <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="w-full h-32 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-1">👨‍🍳</div>
                <div className="text-white font-bold text-sm">FridgeChef</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">FridgeChef</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">Intelligent recipe generator based on available ingredients.</p>
              <a 
                href="https://app--fridge-chef-d6b7b34d.base44.app/" 
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>



          {/* Genimotion */}
          <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="w-full h-32 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-1">🎬</div>
                <div className="text-white font-bold text-sm">Genimotion</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">Genimotion</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">AI-powered motion graphics and animations.</p>
              <a 
                href="https://genimotion.dev/" 
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>

          {/* SwiftApply */}
          <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="w-full h-32 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-1">⚡</div>
                <div className="text-white font-bold text-sm">SwiftApply</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">SwiftApply</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">Streamlined job application platform.</p>
              <a 
                href="https://swiftapply.app/" 
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>

          {/* WillTheyHireMe */}
          <article className="group relative bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300">
            <div className="w-full h-32 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl mb-1">🔮</div>
                <div className="text-white font-bold text-sm">WillTheyHireMe</div>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold mb-2 text-gray-900">WillTheyHireMe</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-3">AI-powered hiring prediction platform.</p>
              <a 
                href="https://willtheyhireme.com/" 
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-6 max-w-4xl mx-auto mt-16 mb-8 text-center text-xs text-gray-500 fade-in opacity-0">
        © {new Date().getFullYear()} Christopher Santangelo. All rights reserved.
      </footer>
    </div>
  )
} 