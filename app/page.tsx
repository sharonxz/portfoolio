import React from 'react';
import Link from 'next/link';


export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-lg font-medium text-gray-700">
            <span className="text-xl">𐙚</span>
            <span>SHARON ZHENG</span>
          </div>
          <div className="flex gap-8 text-sm">
            <a href="/home" className="text-gray-600 hover:text-blue-900 transition-colors">
              Home
            </a>
            <a href="/graphics" className="text-gray-600 hover:text-blue-900 transition-colors">
              Illos+Graphic
            </a>
            <Link href="/about" className="text-gray-600 hover:text-blue-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl leading-tight mb-6 font-bold">
            Sharon Zheng
          </h1>
          <h2 className="text-2xl leading-relaxed mb-6 font-medium">
            is a coder & designer, blending artistry with clean code to build interactive digital experiences.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Currently based in NY  
          </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-gray-500 font-semibold tracking-widest mb-8 pb-2 border-b border-gray-200">
          FEATURED WORKS
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Project 1 - Research Link */}

          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-cyan-200 to-cyan-100 rounded-lg overflow-hidden mb-4 h-72 flex items-center justify-center p-8 hover:shadow-xl transition-shadow">

            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Research Link
              </h3>
            <p className="text-gray-700 mb-3">
              Designing a platform for students to find research labs on campus.
            </p>
            <p className="text-sm text-gray-500 italic">
              User Research / Prototyping / Human-Computer Interaction Design
            </p>
          </div>

          {/* Project 2 - Scute Shoot */}
          <Link href="/scute" className="group cursor-pointer">

           <div className="scale-90 overflow-hidden rounded-2xl mb-4 transition-all duration-300 hover:scale-95 hover:shadow-2xl">

             <img 
                src="/images/scute.png"
                alt="scute" 
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Scute Shoot</h3>
            <p className="text-gray-700 mb-3">
              Programmed in C# and designed game objects for a fast-paced, accuracy game.
            </p>
            <p className="text-sm text-gray-500 italic">
              Programmer / Game Development / Unity Engine
            </p>
          </Link>

          {/* Project 3 - Gone Astray */}

          <Link href="/goneastray" className="group cursor-pointer">
           <div className="scale-90 overflow-hidden rounded-2xl mb-4 transition-all duration-300 hover:scale-95 hover:shadow-2xl">

              <img 
                src="/images/goneastray.png"
                alt="astray" 
              />

            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Gone Astray
              </h3>
            <p className="text-gray-700 mb-3">
              Programmed in Java to implement game screens and dynamic assets.
            </p>
            <p className="text-sm text-gray-500 italic">
              Programmer / Gravity Platformer / Game Development 
            </p>
          </Link>

         {/* Project 4 - CorgsStudio */}
          <Link href="/corgsstudio" className="block group cursor-pointer">
            <div className="scale-90 overflow-hidden rounded-2xl mb-4 transition-all duration-300 hover:scale-95 hover:shadow-2xl">
              <img 
                src="/images/corgs.png"
                alt="corgsstudio" 
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">CorgsStudio</h3>
            <p className="text-gray-700 mb-3">
              Designed and managed an Etsy shop specializing in stationary items.
            </p>
            <p className="text-sm text-gray-500 italic">
              Entrepreneur / Product Design / Social Media
            </p>
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 mt-20 border-t border-gray-200">
        <div className="text-center text-sm text-gray-500">
          <p>made w/ next.js in 2025</p>
        </div>
      </footer>
    </div>
  );
}