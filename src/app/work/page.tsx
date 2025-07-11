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

          {/* Coming Soon 2 */}
          <article className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
            <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-2">✨</div>
                <div className="text-white font-bold text-xl">Coming Soon</div>
                <div className="text-purple-100 text-sm">New Project</div>
              </div>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <header>
                <h3 className="text-lg font-medium tracking-tight">Coming Soon</h3>
                <p className="text-white/70 text-sm mt-1">Stay tuned for more exciting projects and updates!</p>
              </header>
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