import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-blue-600 mb-4">NexusList</h2>
            <p className="text-gray-500 max-w-xs">
              The ultimate platform for catalog management. Built with Next.js 15.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link></li>
              <li><Link href="/items" className="text-gray-500 hover:text-blue-600">Explore</Link></li>
              <li><Link href="/login" className="text-gray-500 hover:text-blue-600">Login</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} NexusList.
        </div>
      </div>
    </footer>
  );
}