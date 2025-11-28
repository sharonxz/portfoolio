import Link from 'next/link';
import Navigation from '@/components/Navigation';
export default function About() {
  return (
    <div className="min-h-screen bg-white">
     <Navigation>

     </Navigation>


     <section className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Banner Image */}
        <div className="mb-12">
            <img 
            src="/images/astraybanner.png" 
            alt="Gone Astray Banner" 
            className="w-full rounded-2xl"
            />
        </div>

        {/* Main Heading - Centered */}
        <div className="grid md:grid-cols-2 mb-16">
            <h2 className="text-4xl mb-6 font-bold">
            Gone Astray
            </h2>
             <p className="leading-relaxed mb-6 font-sm">
            Drifting in the vast expanse of space, a lone canine astronaut named
            Laika awakens in the wreckage of their spaceship, thousands of miles from home. 
            To survive, they must traverse the remnants of the ship to reach the damaged escape pod 
            in the docking bay on the other side of the ship. With no supplies but a magnetic suit and 
            their own two legs, they must rely on controlling their distant home world to change the 
            direction of their gravity within the ship. As they navigate through the increasingly damaged
            sections, Laika must collect scraps to repair the escape pod and slowly piece together the mystery of the wrecked ship.
            </p>
           
            
        </div>

        </section>
      </div>
  )
}