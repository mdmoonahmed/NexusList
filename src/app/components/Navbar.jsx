'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getCookie } from 'cookies-next'; 

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = document.cookie.includes('auth_token=true');
    setIsLoggedIn(auth);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              NexusList
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Home</Link>
              <Link href="/items" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">Explore Items</Link>
              
              {isLoggedIn ? (
                <Link href="/add-item" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                  + Add Item
                </Link>
              ) : (
                <Link href="/login" className="text-gray-600 hover:text-blue-600 px-3 py-2 font-medium">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}