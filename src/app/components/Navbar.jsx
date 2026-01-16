"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation"; 
import { hasCookie, deleteCookie } from "cookies-next"; 
import toast from "react-hot-toast"; 

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window !== "undefined") {
      return hasCookie("auth_token");
    }
    return false;
  });

  useEffect(() => {
    const authStatus = hasCookie("auth_token");
    const timeoutId = setTimeout(() => {
      setIsLoggedIn((prev) => (prev !== authStatus ? authStatus : prev));
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  const handleLogout = () => {
    deleteCookie("auth_token");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
    router.push("/");
    router.refresh(); 
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            NexusList
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/items" className="text-gray-600 hover:text-blue-600 font-medium">
              Explore
            </Link>

            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/add-item"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  + Add Item
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-500 hover:text-red-600 text-sm font-medium transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="text-gray-600 hover:text-blue-600 font-medium">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}