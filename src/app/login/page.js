'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Demo Credentials check
    if (email === 'demo@gmail.com' && password === '123456') {
      setCookie('auth_token', 'true', { maxAge: 60 * 60 * 24 });
      toast.success('Welcome back, Admin!');
      
      router.push('/items');
      router.refresh(); 
    } else {
      toast.error('Invalid demo credentials. Use admin@nexus.com / password123');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">NexusList Login</h2>
          <p className="text-gray-500 mt-2">Use demo credentials to access Admin features</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <input
              type="email"
              placeholder="demo@gmail.com"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="123456"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
            Sign In
          </button>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-xs text-blue-700 font-medium text-center">
            Demo Mode: Use <span className="underline">demo@gmail.com</span> / <span className="underline">123456</span>
          </p>
        </div>
      </div>
    </div>
  );
}