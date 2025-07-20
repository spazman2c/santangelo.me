'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showAllSkills, setShowAllSkills] = useState(false);

  const skills = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'PostgreSQL', 'Docker',
    'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Git', 'REST APIs', 'GraphQL', 'MongoDB',
    'Express.js', 'Redux', 'Context API', 'Jest', 'Cypress', 'CI/CD', 'Agile', 'Scrum'
  ];

  const displayedSkills = showAllSkills ? skills : skills.slice(0, 8);

  return (
    <div className="bg-black text-white font-inter antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-neutral-900 rounded-full"></div>
            <span className="font-semibold text-sm">Christopher Santangelo</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-400 hover:text-white transition-colors text-sm">Work</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Technical Support Engineer
                  </h1>
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                I build fast, scalable web applications with modern technologies. Currently based in Toronto.
              </p>
              <div className="flex flex-col sm:flex-row items-start gap-4 pt-6">
                <button className="bg-white text-black px-6 py-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2">
                  <span>View My Work</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
                <button className="border border-gray-700 px-6 py-3 rounded-lg text-sm font-medium hover:border-gray-400 transition-colors">
                  Get in Touch
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-4 left-4 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-8 space-y-3 font-mono text-sm">
                  <div className="text-purple-400">const developer = {'{'}</div>
                  <div className="ml-4 text-gray-400">name: <span className="text-green-400">'Christopher Santangelo'</span>,</div>
                  <div className="ml-4 text-gray-400">skills: [<span className="text-blue-400">'React', 'Next.js'</span>],</div>
                  <div className="ml-4 text-gray-400">experience: <span className="text-orange-400">5</span>,</div>
                  <div className="text-purple-400">{'}'};</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Technical support professional with over four years of experience in resolving technical issues and enhancing customer satisfaction, expert in managing support interactions and collaborating with cross-functional teams.
                </p>
                <p>
                  Key achievements include the resolution of over 500 live chats monthly with a 90% customer satisfaction rate and a response time improved by 25% through departmental collaboration.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-xl font-semibold mb-6">Technologies & Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 flex bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mr-auto mb-3 ml-auto items-center justify-center">
                    <span className="text-white font-bold">OK</span>
                  </div>
                  <div className="text-sm font-medium">Okta</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">MS</span>
                  </div>
                  <div className="text-sm font-medium">Microsoft 365</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">GW</span>
                  </div>
                  <div className="text-sm font-medium">Google Workspace</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">OL</span>
                  </div>
                  <div className="text-sm font-medium">OneLogin</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">AWS</span>
                  </div>
                  <div className="text-sm font-medium">AWS</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">GCP</span>
                  </div>
                  <div className="text-sm font-medium">Google Cloud</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">AZ</span>
                  </div>
                  <div className="text-sm font-medium">Azure</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">GH</span>
                  </div>
                  <div className="text-sm font-medium">GitHub</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">GL</span>
                  </div>
                  <div className="text-sm font-medium">GitLab</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">AD</span>
                  </div>
                  <div className="text-sm font-medium">Azure DevOps</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">IN</span>
                  </div>
                  <div className="text-sm font-medium">Intune</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">JF</span>
                  </div>
                  <div className="text-sm font-medium">Jamf</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">KN</span>
                  </div>
                  <div className="text-sm font-medium">Kandji</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">HX</span>
                  </div>
                  <div className="text-sm font-medium">Hexnode</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">RP</span>
                  </div>
                  <div className="text-sm font-medium">Rippling</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">JC</span>
                  </div>
                  <div className="text-sm font-medium">JumpCloud</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">OS</span>
                  </div>
                  <div className="text-sm font-medium">Mac/Windows/Linux</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">JR</span>
                  </div>
                  <div className="text-sm font-medium">Jira</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">DG</span>
                  </div>
                  <div className="text-sm font-medium">Datadog</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">MG</span>
                  </div>
                  <div className="text-sm font-medium">Merge.dev</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">CR</span>
                  </div>
                  <div className="text-sm font-medium">CRM Systems</div>
                </div>
                <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-center hover:border-blue-500 transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold">SO</span>
                  </div>
                  <div className="text-sm font-medium">Support Operations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center">Featured Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Standfinder */}
              <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-400">Event Platform</div>
                      <div className="text-sm font-medium">Next.js + Stripe</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Standfinder</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Event management platform for finding and booking event spaces with integrated payment processing.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black text-xs rounded-md">React</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">Next.js</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">Stripe</span>
                  </div>
                </div>
              </div>

              {/* Tikkit */}
              <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-green-500/20 to-emerald-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-400">Ticketing System</div>
                      <div className="text-sm font-medium">React + Node.js</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Tikkit</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Digital ticketing platform for events with QR code generation and real-time validation.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black text-xs rounded-md">React</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">Node.js</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">MongoDB</span>
                  </div>
                </div>
              </div>

              {/* Frameriq */}
              <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-orange-500/20 to-red-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-400">AI Platform</div>
                      <div className="text-sm font-medium">Next.js + AI</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Frameriq</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    AI-powered platform for automated content generation and management.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black text-xs rounded-md">Next.js</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">TypeScript</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">OpenAI</span>
                  </div>
                </div>
              </div>

              {/* FridgeChef */}
              <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-400">Recipe App</div>
                      <div className="text-sm font-medium">React + API</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">FridgeChef</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Recipe recommendation app that suggests meals based on available ingredients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black text-xs rounded-md">React</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">API</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">CSS</span>
                  </div>
                </div>
              </div>

              {/* Genimotion */}
              <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-400">AI Motion</div>
                      <div className="text-sm font-medium">AI + Animation</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Genimotion</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    AI-powered motion generation platform for creating animated content.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black text-xs rounded-md">AI</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">Animation</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">WebGL</span>
                  </div>
                </div>
              </div>

              {/* SwiftApply */}
              <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-green-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-400">Job Platform</div>
                      <div className="text-sm font-medium">React + Node.js</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">SwiftApply</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Streamlined job application platform with automated resume parsing and matching.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black text-xs rounded-md">React</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">Node.js</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">AI</span>
                  </div>
                </div>
              </div>

              {/* WillTheyHireMe */}
              <div className="group bg-gray-900 border border-gray-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-pink-500/20 to-rose-500/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs text-gray-400">Career Tool</div>
                      <div className="text-sm font-medium">AI + Analytics</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">WillTheyHireMe</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    AI-powered career assessment tool that predicts job application success rates.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-black text-xs rounded-md">AI</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">Analytics</span>
                    <span className="px-2 py-1 bg-black text-xs rounded-md">ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <div className="space-y-8">
                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Technical Support Representative</h3>
                        <div className="text-blue-500">SaaS Platform</div>
                      </div>
                      <div className="text-sm text-gray-400">03/2022 — 12/2023</div>
                    </div>
                    <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                      <li>• Resolving 500+ live chats/month</li>
                      <li>• Supporting Strategic, Enterprise, Scale customers</li>
                      <li>• Querying, analyzing application logs, JSON to identify remediation steps for customers (Datadog)</li>
                      <li>• Recording personalized videos of step-by-step workflows to unblock customers (Vidyard)</li>
                      <li>• Surfacing optimizations within inbox for conversation routing via Rules</li>
                      <li>• Introducing attributes, macros, tags for metrics collection</li>
                      <li>• Working with Engineering to deflect 2.5k conversations/year (17% overall volume)</li>
                    </ul>
                  </div>

                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Technical Support Specialist II</h3>
                        <div className="text-blue-500">Telecommunications Company</div>
                      </div>
                      <div className="text-sm text-gray-400">07/2021 — 03/2022</div>
                    </div>
                    <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                      <li>• Receive inbound support calls and online chat inquiries from customers to answer technical questions and solve technical issues</li>
                      <li>• Communicate using phone, chat, screen sharing, email and other technologies</li>
                      <li>• Make outbound calls to customers to resolve issues, conduct customer trainings, and follow up on customer requests</li>
                      <li>• Work with external IT, ISPS (internet service provider), or vendors to resolve customer problems while maintaining a positive attitude</li>
                      <li>• Collaborate cross departmentally to do special projects for customers and address complex issues</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <div className="space-y-8">
                  <div className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">Technical Support Specialist</h3>
                        <div className="text-blue-500">Technology Company</div>
                      </div>
                      <div className="text-sm text-gray-400">01/2024 — Present</div>
                    </div>
                    <ul className="text-gray-400 text-sm leading-relaxed space-y-2">
                      <li>• Receive inbound support calls and online email inquiries from customers to answer technical questions and solve technical issues</li>
                      <li>• Communicate using phone, chat, screen sharing, email and other technologies</li>
                      <li>• Make outbound calls to customers to resolve issues, conduct customer trainings, and follow up on customer requests</li>
                      <li>• Collaborate cross departmentally to do special projects for customers and address complex issues</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              I'm always interested in hearing about new opportunities and interesting projects.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a href="mailto:Chris@santangelo.me" className="bg-white text-black px-8 py-4 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Chris@santangelo.me
              </a>
              <div className="flex items-center space-x-4">
                <a href="https://www.linkedin.com/in/chrissantangelo96/" target="_blank" rel="noopener noreferrer" className="bg-black border border-gray-700 p-3 rounded-lg text-gray-400 hover:text-white hover:border-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-black border border-gray-700 p-3 rounded-lg text-gray-400 hover:text-white hover:border-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© 2024 Christopher Santangelo</div>
            <div className="text-sm text-gray-400">Built with Next.js and deployed on Vercel</div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, #333 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
} 