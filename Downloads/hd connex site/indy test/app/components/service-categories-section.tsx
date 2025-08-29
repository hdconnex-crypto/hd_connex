
'use client';

import { useState } from 'react';
import { 
  Wrench, 
  Home, 
  Droplets, 
  Zap, 
  Hammer, 
  TreePine, 
  Car, 
  Brush,
  ArrowRight,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';

interface ServiceCategoriesSectionProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function ServiceCategoriesSection({ onNavigate }: ServiceCategoriesSectionProps) {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const serviceCategories = [
    {
      id: 'plumbing',
      title: 'Plumbing',
      description: 'Leaks, repairs, installations',
      icon: Droplets,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      textColor: 'text-blue-700',
      popular: true,
      avgQuotes: 3.2,
      responseTime: '< 2 hrs'
    },
    {
      id: 'roofing',
      title: 'Roofing',
      description: 'Repairs, replacements, gutters',
      icon: Home,
      color: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100',
      textColor: 'text-red-700',
      popular: true,
      avgQuotes: 2.8,
      responseTime: '< 3 hrs'
    },
    {
      id: 'electrical',
      title: 'Electrical',
      description: 'Wiring, fixtures, panels',
      icon: Zap,
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-50',
      hoverColor: 'hover:bg-yellow-100',
      textColor: 'text-yellow-700',
      popular: false,
      avgQuotes: 2.5,
      responseTime: '< 4 hrs'
    },
    {
      id: 'remodel',
      title: 'Remodeling',
      description: 'Kitchen, bath, additions',
      icon: Hammer,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      textColor: 'text-purple-700',
      popular: true,
      avgQuotes: 4.1,
      responseTime: '< 6 hrs'
    },
    {
      id: 'handyman',
      title: 'Handyman',
      description: 'General repairs, maintenance',
      icon: Wrench,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      textColor: 'text-green-700',
      popular: true,
      avgQuotes: 2.9,
      responseTime: '< 1 hr'
    },
    {
      id: 'landscaping',
      title: 'Landscaping',
      description: 'Design, maintenance, cleanup',
      icon: TreePine,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-100',
      textColor: 'text-emerald-700',
      popular: false,
      avgQuotes: 3.5,
      responseTime: '< 5 hrs'
    },
    {
      id: 'driveway',
      title: 'Driveway/Patio',
      description: 'Concrete, pavers, repairs',
      icon: Car,
      color: 'from-gray-500 to-slate-500',
      bgColor: 'bg-gray-50',
      hoverColor: 'hover:bg-gray-100',
      textColor: 'text-gray-700',
      popular: false,
      avgQuotes: 2.2,
      responseTime: '< 8 hrs'
    },
    {
      id: 'painting',
      title: 'Painting',
      description: 'Interior, exterior, specialty',
      icon: Brush,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      hoverColor: 'hover:bg-pink-100',
      textColor: 'text-pink-700',
      popular: false,
      avgQuotes: 3.8,
      responseTime: '< 4 hrs'
    }
  ];

  const handleGetQuote = (categoryId: string) => {
    console.log(`Get quote for ${categoryId}`);
    // Pre-fill form with selected category
  };

  const handlePostJob = (categoryId: string) => {
    console.log(`Post job for ${categoryId}`);
    // Navigate to job posting
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Popular Home Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our most requested services. Each category is backed by pre-screened, 
            licensed professionals ready to help.
          </p>
        </div>

        {/* Service Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceCategories.map((category) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCategory === category.id;
            
            return (
              <div
                key={category.id}
                className={`relative ${category.bgColor} ${category.hoverColor} rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer group border border-gray-100`}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title & Description */}
                <h3 className={`text-xl font-bold mb-2 ${category.textColor}`}>
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>

                {/* Stats */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-500">
                    <Star className="w-3 h-3 mr-1 text-yellow-500 fill-current" />
                    <span>{category.avgQuotes} avg quotes</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Clock className="w-3 h-3 mr-1 text-green-500" />
                    <span>{category.responseTime} response</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  <button
                    onClick={() => handleGetQuote(category.id)}
                    className={`w-full bg-gradient-to-r ${category.color} text-white font-semibold py-2 px-4 rounded-lg hover:shadow-md transition-all transform hover:scale-105`}
                  >
                    Get Quote
                  </button>
                  <button
                    onClick={() => handlePostJob(category.id)}
                    className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all"
                  >
                    Post Job
                  </button>
                </div>

                {/* Hover Arrow */}
                {isHovered && (
                  <div className="absolute top-4 right-4">
                    <ArrowRight className={`w-5 h-5 ${category.textColor} animate-bounce`} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
            <div className="mr-4">
              <DollarSign className="w-8 h-8 text-green-600" />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-gray-900 mb-1">Free Quote Comparison</h4>
              <p className="text-gray-600 text-sm">Compare up to 5 quotes side-by-side at no cost</p>
            </div>
            <button className="ml-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:shadow-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
