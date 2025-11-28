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
            src="/images/banner.png" 
            alt="CorgsStudio Banner" 
            className="w-full rounded-2xl"
            />
        </div>

        {/* Main Heading - Centered */}
        <div className="text-center mb-16">
            <h2 className="text-4xl leading-tight mb-6 font-bold">
            CorgsStudio
            </h2>
            <p className="text-xl">
            Inspired by a Youtube creator turned passion project.
            </p>
        </div>

        {/* About the Project */}
        <div className="max-w-3xl mb-12">
            <h2 className="text-xl font-bold mt-4 mb-4">
            About the Project
            </h2>
            <p className="text-md text-gray-700 leading-relaxed">
            CorgsStudio is a 0 to 1 passion project I developed from 2020–2022, evolving from hand-drawn stationery into a small Etsy shop. 
            The products accumulated hundreds of online traction and over 100 successful sales. 
            I designed the stationary products using Procreate, produced 90% of the products in-house, and partnered with an overseas company produce washi tapes.
            I also managed socials such as Tiktok and Instagram to showcase new products and engage with my audience.     
            </p>
        </div>

        {/* Branding - Full Width */}
        <div>
            <h2 className="text-xl font-bold mt-4 mb-4">
            Branding
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-8 max-w-3xl">
            Inspired by my love of corgis, I decided to make the mascot Floof the Corgi.
            Doing some research into other small art businesses, I realized the importance of having a recognizable art style and theme.
            I wanted the theme and branding to accomplish 3 main goals:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Box 1 */}
                <div className="bg-gradient-to-br from-pink-200 to-pink-100 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-4">Friendly, Welcoming</h3>
                    <p className="text-gray-700">
                        Using warm, pastel colors such as yellow and pink, this creates an inviting ambience for my audience.
                    </p>
                </div>

                {/* Box 2 */}
                <div className="bg-gradient-to-br from-yellow-200 to-yellow-100 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-4">Playful</h3>
                    <p className="text-gray-700">
                        Choosing to handwrite my font allowed me to keep a doodle-y feel to my products.
                    </p>
                </div>

                {/* Box 3 */}
                <div className="bg-gradient-to-br from-cyan-200 to-cyan-100 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-bold mb-4">Recognizable</h3>
                    <p className="text-gray-700">
                        With many other corgi-themed art businesses, I had to make my shop's name and mascot stand out. This resulted in multiple character changes until one stuck.
                    </p>
                </div>
            </div>
        </div>

        <h2 className="text-xl font-bold mt-4 mb-4">Finding My Style</h2>
            
        <div className="grid md:grid-cols-2 gap-8">
            {/* First Design Iteration */}
            <div>
                <div className="mb-4">
                    <img 
                        src="/images/old.png" 
                        alt="old" 
                        className="w-full rounded-2xl"
                    />
                </div>
                <p className="text-lg font-medium mb-2">First Design Iteration</p>
            </div>

            {/* Final Design Iteration */}
            <div>
                <div className="mb-4">
                    <img 
                        src="/images/new.png" 
                        alt="new" 
                        className="w-full rounded-2xl"
                    />
                </div>
                <p className="text-lg font-medium mb-2">Final Design Iteration</p>
            </div>
        </div>

         </section>

      </div>

  )
}