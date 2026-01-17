import React from 'react';
import { CheckCircle, Smartphone, Image as ImageIcon, Search, Lock } from 'lucide-react';

export default function ComparisonSection() {
  const features = [
    { 
      icon: <Smartphone className="w-5 h-5" />, 
      label: "User Experience", 
      old: "Complex & Clunky", 
      new: "Mobile-First Fluidity" 
    },
    { 
      icon: <ImageIcon className="w-5 h-5" />, 
      label: "Asset Management", 
      old: "Manual Uploads", 
      new: "Auto-Optimized CDN" 
    },
    { 
      icon: <Search className="w-5 h-5" />, 
      label: "Discovery", 
      old: "Static Lists", 
      new: "Instant Smart Search" 
    },
    { 
      icon: <Lock className="w-5 h-5" />, 
      label: "Access Control", 
      old: "Basic Passwords", 
      new: "Cookie-Based Auth" 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            The New Standard in Tracking
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            See how NexusList compares to traditional inventory methods.
          </p>
        </div>

        {/* Table Container */}
        <div className="overflow-x-auto rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50">
          <table className="w-full text-left bg-white border-collapse">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="p-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Capability
                </th>
                <th className="p-8 text-sm font-bold text-gray-400 uppercase tracking-wider">
                  Traditional
                </th>
                <th className="p-8 text-sm font-bold text-blue-600 uppercase tracking-wider bg-blue-50/50">
                  NexusList
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((row, i) => (
                <tr key={i} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="p-8 font-semibold text-gray-900 flex items-center gap-3">
                    <span className="text-blue-500 bg-blue-50 p-2 rounded-lg group-hover:bg-blue-100 transition-colors">
                      {row.icon}
                    </span> 
                    {row.label}
                  </td>
                  <td className="p-8 text-gray-500 font-medium">
                    {row.old}
                  </td>
                  <td className="p-8 font-bold text-blue-600 bg-blue-50/20">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" /> 
                      {row.new}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          * Comparison based on standard industry benchmarks and user feedback surveys.
        </div>
      </div>
    </section>
  );
}