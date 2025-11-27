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
      </div>
  )
}