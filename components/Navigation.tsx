import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-medium text-gray-700">
          <span className="text-xl">𐙚</span>
          <span>SHARON ZHENG</span>
        </div>
        <div className="flex gap-8 text-md">
          <Link 
          href="/home" 
          className="text-gray-600 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          Resume
        </Link>
          <Link 
          href="/about" 
          className="text-gray-600 hover:text-gray-900 transition-colors">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}