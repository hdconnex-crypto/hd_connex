
'use client';

import { useState, useEffect } from 'react';
import { Shield, Award, Phone, Clock, CheckCircle, Star, Users, TrendingUp, MapPin, Zap } from 'lucide-react';

interface EnhancedTrustSectionProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function EnhancedTrustSection({ onNavigate }: EnhancedTrustSectionProps) {
  const [activeContractors, setActiveContractors] = useState(127);
  const [completedJobs, setCompletedJobs] = useState(5420);
  const [showCallbackForm, setShowCallbackForm] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveContractors((prev) => prev + Math.floor(Math.random() * 3));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleInstantCallback = () => {
    setShowCallbackForm(true);
  };

  const handleSubmitCallback = () => {
    if (callbackPhone) {
      console.log('Callback requested for:', callbackPhone);
      setShowCallbackForm(false);
      setCallbackPhone('');
    }
  };

  const trustFeatures = [
    {
      icon: Shield,
      title: "100% Verified Contractors",
      description: "Every contractor is background-checked, licensed, and insured",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Award,
      title: "Quality Guarantee", 
      description: "If you're not satisfied, we'll make it right or refund your money",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Our customer success team is available around the clock",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: CheckCircle,
      title: "No Upfront Fees",
      description: "Get quotes and compare contractors completely free",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    }
  ];

  const locations = [
    "Orlando", "Tampa", "Miami", "Jacksonville", "Fort Lauderdale",
    "St. Petersburg", "Hialeah", "Tallahassee", "Port St. Lucie", "Cape Coral"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-lg mb-6">
            <Shield className="w-6 h-6 mr-2 text-green-600" />
            <span className="font-bold text-gray-800">Trusted by 50,000+ Florida Homeowners</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Your Peace of Mind is
            <span className="block bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Guaranteed
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We take the risk out of hiring contractors with our comprehensive vetting process and satisfaction guarantee.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-black text-blue-600 mb-2">{activeContractors}</div>
            <div className="text-sm text-gray-600">Active Contractors</div>
            <div className="flex items-center justify-center mt-1">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1"></div>
              <span className="text-xs text-green-600">Online Now</span>
            </div>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-black text-green-600 mb-2">{completedJobs.toLocaleString()}</div>
            <div className="text-sm text-gray-600">Jobs Completed</div>
            <div className="flex items-center justify-center mt-1">
              <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
              <span className="text-xs text-green-600">+12% this month</span>
            </div>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="flex justify-center mb-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" />
                ))}
              </div>
            </div>
            <div className="text-3xl font-black text-orange-600 mb-1">4.9</div>
            <div className="text-sm text-gray-600">Average Rating</div>
          </div>
          
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-black text-purple-600 mb-2">&lt; 2hr</div>
            <div className="text-sm text-gray-600">Avg Response</div>
            <div className="flex items-center justify-center mt-1">
              <Zap className="w-3 h-3 text-purple-600 mr-1" />
              <span className="text-xs text-purple-600">Lightning Fast</span>
            </div>
          </div>
        </div>

        {/* Instant Callback CTA */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Need Help Right Now?</h3>
              <p className="text-orange-100 mb-6">
                Speak with our contractor matching specialists. Average callback time: 90 seconds.
              </p>
              
              {!showCallbackForm ? (
                <button
                  onClick={handleInstantCallback}
                  className="bg-white text-orange-600 font-bold py-4 px-8 rounded-xl text-lg hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Phone className="inline w-5 h-5 mr-2" />
                  Get Instant Callback
                </button>
              ) : (
                <div className="bg-white bg-opacity-20 rounded-xl p-6">
                  <input
                    type="tel"
                    value={callbackPhone}
                    onChange={(e) => setCallbackPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded-lg text-gray-800 mb-4 text-center text-lg"
                  />
                  <div className="flex gap-3 justify-center">
                    <button
                      onClick={handleSubmitCallback}
                      className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700"
                    >
                      Call Me Now
                    </button>
                    <button
                      onClick={() => setShowCallbackForm(false)}
                      className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Trust Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Service Areas */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            <MapPin className="inline w-6 h-6 mr-2 text-blue-600" />
            Serving All of Central Florida
          </h3>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {locations.map((location, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full shadow-md text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
              >
                {location}
              </span>
            ))}
          </div>
          
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
            <Users className="w-8 h-8 text-blue-600 mr-4" />
            <div className="text-left">
              <h4 className="font-bold text-gray-900 mb-1">Can&apos;t find your city?</h4>
              <p className="text-gray-600 text-sm">We&apos;re expanding daily. Contact us to see if we serve your area.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
