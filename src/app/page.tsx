'use client'

import { useEffect } from 'react'
import { Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react'

export default function Home() {
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
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80" 
            alt="Christopher Santangelo portrait" 
            className="w-32 h-32 rounded-full ring-2 ring-white/20 mb-6 object-cover"
          />

          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2 text-center">
            Christopher Santangelo
          </h1>
          <p className="text-white/80 text-center max-w-md mb-6">
            Crafting elegant solutions through code, design, and innovation.
          </p>

          {/* Contact Links */}
          <div className="flex gap-6">
            <a 
              href="https://linkedin.com" 
              aria-label="LinkedIn" 
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
            >
              <Linkedin className="w-6 h-6 stroke-[1.75] text-blue-400 group-hover:text-white transition" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="https://github.com" 
              aria-label="GitHub" 
              className="relative group focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
            >
              <Github className="w-6 h-6 stroke-[1.75] text-white group-hover:text-purple-400 transition" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="mailto:you@example.com" 
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
        <p className="text-white/80 leading-7">
          I'm a passionate software engineer with a love for creating impactful digital experiences.
          My expertise spans full-stack development, DevOps, and UI/UX design. When I'm not building, 
          you'll find me mentoring budding developers or exploring the latest in tech.
        </p>
      </section>

      {/* Divider */}
      <div className="w-full max-w-3xl px-6">
        <hr className="border-white/10 my-16" />
      </div>

      {/* My Work Section */}
      <section className="relative z-10 w-full px-6 max-w-5xl mx-auto fade-in opacity-0">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">My Work</h2>
        <p className="text-white/80 leading-7 mb-8">
          A curated collection of websites I've designed & developed.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
              alt="Modern Portfolio screenshot" 
              className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Modern Portfolio</h3>
                <p className="text-white/70 text-sm mt-1">A sleek personal portfolio showcasing interactive animations and dark-mode support.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
                >
                  Visit Site
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>
          </article>

          {/* Project 2 */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&w=800&q=80" 
              alt="E-Commerce Platform screenshot" 
              className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">E-Commerce Platform</h3>
                <p className="text-white/70 text-sm mt-1">Full-stack storefront featuring secure authentication, cart, and order management.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
                >
                  Visit Site
                  <ArrowUpRight className="w-4 h-4 stroke-[2]" />
                </a>
              </div>
            </div>
          </article>

          {/* Project 3 */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1544716278-fa03830d81d7?auto=format&fit=crop&w=800&q=80" 
              alt="Tech Blog screenshot" 
              className="w-full h-48 object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Tech Insights Blog</h3>
                <p className="text-white/70 text-sm mt-1">Content-rich blog with CMS integration, optimized for accessibility and SEO.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="#" 
                  className="inline-flex items-center gap-1 text-indigo-400 hover:text-white font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 rounded"
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
      <footer className="relative z-10 w-full px-6 max-w-3xl mx-auto mt-24 mb-12 text-center text-xs text-white/60 fade-in opacity-0">
        © {new Date().getFullYear()} Christopher Santangelo. All rights reserved.
      </footer>
    </div>
  )
} 