'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { setCookie } from 'cookies-next';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@nexus.com' && password === 'password123') {
      setCookie('auth_token', 'true', { maxAge: 60 * 60 * 24 }); 
      
      router.push('/items');
      router.refresh();
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input 
          type="email" 
          placeholder="admin@nexus.com" 
          className="w-full p-3 border rounded mb-4 outline-none focus:border-blue-500"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input 
          type="password" 
          placeholder="password123" 
          className="w-full p-3 border rounded mb-6 outline-none focus:border-blue-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded font-bold hover:bg-blue-700">
          Sign In
        </button>
      </form>
    </div>
  );
}