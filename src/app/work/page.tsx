import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  return (
    <div className="min-h-screen font-[Inter] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="relative z-10 w-full max-w-6xl px-6 mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">My Work</h1>
          <a
            href="/"
            className="inline-block px-6 py-3 text-sm font-medium text-blue-300 bg-blue-500/10 border border-blue-500/50 rounded-lg hover:bg-blue-500/20 hover:text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Back to Home
          </a>
        </div>
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

          {/* AppSyndiq */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">📱</div>
                <div className="text-white font-bold text-2xl">AppSyndiq</div>
                <div className="text-indigo-100 text-sm">Mobile App Platform</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">AppSyndiq</h3>
                <p className="text-gray-300 text-base leading-relaxed">A revolutionary mobile app platform designed to streamline app distribution and discovery. Coming soon to appsyndiq.com!</p>
              </header>
            </div>
          </article>

          {/* FridgeChef */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">👨‍🍳</div>
                <div className="text-white font-bold text-2xl">FridgeChef</div>
                <div className="text-orange-100 text-sm">Recipe Generator</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">FridgeChef</h3>
                <p className="text-gray-300 text-base leading-relaxed">An intelligent recipe generator that creates personalized meal suggestions based on available ingredients, helping reduce food waste.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://app--fridge-chef-d6b7b34d.base44.app/" 
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

          {/* Genimotion */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🎬</div>
                <div className="text-white font-bold text-2xl">Genimotion</div>
                <div className="text-emerald-100 text-sm">Motion Generator</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">Genimotion</h3>
                <p className="text-gray-300 text-base leading-relaxed">A cutting-edge platform for generating dynamic motion graphics and animations with AI-powered tools.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://genimotion.dev/" 
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

          {/* SwiftApply */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">⚡</div>
                <div className="text-white font-bold text-2xl">SwiftApply</div>
                <div className="text-violet-100 text-sm">Job Application Tool</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">SwiftApply</h3>
                <p className="text-gray-300 text-base leading-relaxed">Streamlined job application platform that simplifies the hiring process with intelligent automation and tracking.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://swiftapply.app/" 
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

          {/* WillTheyHireMe */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🔮</div>
                <div className="text-white font-bold text-2xl">WillTheyHireMe</div>
                <div className="text-rose-100 text-sm">Hiring Predictor</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">WillTheyHireMe</h3>
                <p className="text-gray-300 text-base leading-relaxed">An AI-powered platform that analyzes job applications and predicts hiring outcomes with advanced algorithms.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://willtheyhireme.com/" 
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

          {/* Coming Soon */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 transform transition duration-300 hover:scale-105 hover:shadow-3xl">
            <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl mb-3">🚀</div>
                <div className="text-white font-bold text-2xl">Coming Soon</div>
                <div className="text-cyan-100 text-sm">New Project</div>
              </div>
            </div>
            <div className="p-8 flex flex-col gap-4">
              <header>
                <h3 className="text-xl font-semibold tracking-tight mb-3">Coming Soon</h3>
                <p className="text-gray-300 text-base leading-relaxed">Stay tuned for more exciting projects and updates!</p>
              </header>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 