import React from 'react';
import Link from 'next/link';

import Navigation from '@/components/Navigation';
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
  <Navigation>
  
        </Navigation>

      {/* Intro Section */}
      <section className="max-w-5xl mx-auto px-8 pt-32 pb-20">
        <div className="items-center">
        <div>
          <h1 className="text-5xl leading-tight mb-6 font-semibold">
            Sharon Zheng
          </h1>
          <h2 className="text-2xl leading-relaxed font-medium">
            is a coder & designer, blending artistry with clean code 
            
          </h2>

          <h2 className="text-2xl leading-relaxed mb-6 font-medium">
            to build interactive digital experiences.
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Currently based in NY  
          </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-5xl mx-auto px-8">
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
      <footer className="max-w-5xl mx-auto px-8 py-12 mt-20 border-t border-gray-200">
        <div className="text-center text-sm text-gray-500">
          <p>made w/ next.js in 2025</p>
        </div>
      </footer>
    </div>

  );
}