import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            Manage Your Catalog with <span className="text-blue-600">NexusList</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            The modern way to organize, track, and showcase your premium items. 
            Built for speed, designed for clarity.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/items" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 shadow-lg transition">
              View Catalog
            </Link>
            <Link href="/login" className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
    </section>
  );
}