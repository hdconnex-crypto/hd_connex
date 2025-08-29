
'use client';

import { useState } from 'react';
import { ChevronDown, Clock, Search, MapPin, Phone, Shield } from 'lucide-react';
import { services } from '../lib/data';

interface PrimarySearchSectionProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function PrimarySearchSection({ onNavigate }: PrimarySearchSectionProps) {
  const [service, setService] = useState('');
  const [location, setLocation] = useState('');
  const [urgency, setUrgency] = useState('asap');
  const [showInstantCallback, setShowInstantCallback] = useState(false);

  const handleSearch = () => {
    if (service && location) {
      // Navigate to lead capture form with pre-filled data
      console.log('Searching for:', { service, location, urgency });
    }
  };

  const handleInstantCallback = () => {
    setShowInstantCallback(true);
    // In a real app, this would trigger a callback request
    setTimeout(() => setShowInstantCallback(false), 3000);
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
            Find Your Perfect
            <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Contractor Match
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get connected with vetted, licensed professionals in Central Florida. Quick quotes, guaranteed quality.
          </p>
        </div>

        {/* Primary Search Interface */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 relative overflow-hidden">
            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Service Selection */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Search className="inline w-4 h-4 mr-1" />
                  What service do you need?
                </label>
                <div className="relative">
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all text-lg appearance-none cursor-pointer"
                  >
                    <option value="">Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Location Input */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  ZIP Code or City
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="32789, Orlando, Tampa..."
                  className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all text-lg"
                />
              </div>

              {/* Urgency Toggle */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock className="inline w-4 h-4 mr-1" />
                  When do you need this?
                </label>
                <div className="flex rounded-xl border-2 border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setUrgency('asap')}
                    className={`flex-1 p-4 text-lg font-semibold transition-all ${
                      urgency === 'asap' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    ASAP
                  </button>
                  <button
                    onClick={() => setUrgency('planned')}
                    className={`flex-1 p-4 text-lg font-semibold transition-all ${
                      urgency === 'planned' 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    Planned
                  </button>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="text-center mb-6">
              <button
                onClick={handleSearch}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-12 rounded-xl text-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!service || !location}
              >
                <Search className="inline w-6 h-6 mr-2" />
                Get Free Quotes
              </button>
            </div>

            {/* Trust Indicators Row */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-600 border-t pt-6">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-green-500" />
                <span className="font-semibold">Verified & Licensed</span>
              </div>
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {'★'.repeat(5)}
                </div>
                <span className="font-semibold">4.9/5 Average Rating</span>
              </div>
              <button
                onClick={handleInstantCallback}
                className="flex items-center bg-green-50 text-green-700 px-4 py-2 rounded-lg hover:bg-green-100 transition-colors font-semibold"
              >
                <Phone className="w-4 h-4 mr-2" />
                {showInstantCallback ? "We'll call you!" : "Get Instant Callback"}
              </button>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span className="font-semibold">127 contractors available now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Guarantee Banner */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center justify-center mb-2">
              <Shield className="w-6 h-6 mr-2 text-green-600" />
              <span className="text-lg font-bold text-green-800">100% Satisfaction Guarantee</span>
            </div>
            <p className="text-green-700">
              If you're not completely satisfied with your contractor match, we'll find you a new one at no extra cost.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
