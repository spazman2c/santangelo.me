import { ArrowUpRight } from 'lucide-react';

export default function Work() {
  return (
    <div className="min-h-screen font-[Inter] bg-[#050514] text-white flex flex-col items-center relative overflow-x-hidden py-16">
      <div className="w-full max-w-5xl px-6 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">My Work</h1>
          <a
            href="/"
            className="inline-block px-4 py-2 text-sm font-medium text-indigo-400 bg-white/10 border border-indigo-400 rounded-lg hover:bg-indigo-500 hover:text-white transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          >
            Back
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Standfinder */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
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
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
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
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
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

          {/* FridgeChef */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">👨‍🍳</div>
                <div className="text-white font-bold text-xl">FridgeChef</div>
                <div className="text-orange-100 text-sm">Recipe Generator</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">FridgeChef</h3>
                <p className="text-white/70 text-sm mt-1">An intelligent recipe generator that creates personalized meal suggestions based on available ingredients, helping reduce food waste.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://app--fridge-chef-d6b7b34d.base44.app/" 
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

          {/* Frameriq */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-48 bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🖼️</div>
                <div className="text-white font-bold text-xl">Frameriq</div>
                <div className="text-teal-100 text-sm">Frame Generator</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Frameriq</h3>
                <p className="text-white/70 text-sm mt-1">An innovative platform for creating and customizing frames with advanced design tools and seamless user experience.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://frameriq.com/" 
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

          {/* Genimotion */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-48 bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🎬</div>
                <div className="text-white font-bold text-xl">Genimotion</div>
                <div className="text-emerald-100 text-sm">Motion Generator</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Genimotion</h3>
                <p className="text-white/70 text-sm mt-1">A cutting-edge platform for generating dynamic motion graphics and animations with AI-powered tools.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://genimotion.dev/" 
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

          {/* SwiftApply */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-48 bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">⚡</div>
                <div className="text-white font-bold text-xl">SwiftApply</div>
                <div className="text-violet-100 text-sm">Job Application Tool</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">SwiftApply</h3>
                <p className="text-white/70 text-sm mt-1">Streamlined job application platform that simplifies the hiring process with intelligent automation and tracking.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://swiftapply.app/" 
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

          {/* WillTheyHireMe */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-48 bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🔮</div>
                <div className="text-white font-bold text-xl">WillTheyHireMe</div>
                <div className="text-rose-100 text-sm">Hiring Predictor</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">WillTheyHireMe</h3>
                <p className="text-white/70 text-sm mt-1">An AI-powered platform that analyzes job applications and predicts hiring outcomes with advanced algorithms.</p>
              </header>
              <div className="mt-auto">
                <a 
                  href="https://willtheyhireme.com/" 
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

          {/* Coming Soon 3 */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-sky-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">🚀</div>
                <div className="text-white font-bold text-xl">Coming Soon</div>
                <div className="text-cyan-100 text-sm">New Project</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Coming Soon</h3>
                <p className="text-white/70 text-sm mt-1">Stay tuned for more exciting projects and updates!</p>
              </header>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 