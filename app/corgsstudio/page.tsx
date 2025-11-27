import Link from 'next/link';

export default function About() {
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
            <Link href="/home" className="text-gray-600 hover:text-pink-900 transition-colors">
              Home
            </Link>
            <a href="#graphics" className="text-gray-600 hover:text-pink-900 transition-colors">
              Illos+Graphic
            </a>
            <Link href="/about" className="text-gray-600 hover:text-pink-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>
    

    <section className="max-w-7xl mx-auto px-6 pt-32 pb-20">
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
            <h1 className="text-5xl leading-tight mb-6 font-bold">
            CorgsStudio
            </h1>
            <p className="text-xl">
            Inspired by a Youtube creator turned passion project.
            </p>
        </div>

        {/* Design choice */}
        <div className="max-w-3xl">
            <h2 className="text-xl font-bold mt-4 mb-4">
            About the Project
            </h2>
            <p className="text-md text-gray-700 leading-relaxed">
            CorgsStudio is a 0–1 passion project I developed from 2020–2022, evolving from hand-drawn stationery into a small Etsy shop. 
            The products accumulated hundreds of online traction and over 100 successful sales. 
            I designed the stationary products using Procreate, produced 90% of the products in-house, and partnered with an overseas company produce washi tapes.
            I also managed socials such as Tiktok and Instagram to showcase new products and engage with my audience.     
            </p>
        </div>
        </section>

      </div>

  )
}