export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold text-blue-600 mb-4">NexusList</h2>
            <p className="text-gray-500 max-w-xs">
              The ultimate platform for catalog management and item exploration. 
              Built with Next.js and Express for high-performance inventory tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-500 hover:text-blue-600 transition">Home</a></li>
              <li><a href="/items" className="text-gray-500 hover:text-blue-600 transition">Explore</a></li>
              <li><a href="/login" className="text-gray-500 hover:text-blue-600 transition">Login</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">Support</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-500">Documentation</span></li>
              <li><span className="text-gray-500">API Status</span></li>
              <li><span className="text-gray-500">Privacy Policy</span></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-100">
          <p className="text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NexusList. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}