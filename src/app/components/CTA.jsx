import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section-container">
      <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-xl shadow-blue-200">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to organize your inventory?
        </h2>
        <p className="text-blue-100 text-lg mb-10 max-w-xl mx-auto">
          Join NexusList today and start managing your premium items with our 
          modern, high-performance catalog system.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/login" 
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-md"
          >
            Get Started for Free
          </Link>
          <Link 
            href="/items" 
            className="bg-blue-500 text-white border border-blue-400 px-8 py-4 rounded-xl font-bold hover:bg-blue-400 transition"
          >
            Browse Catalog
          </Link>
        </div>
      </div>
    </section>
  );
}