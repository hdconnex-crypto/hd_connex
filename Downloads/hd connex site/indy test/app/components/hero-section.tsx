
'use client';

import { CTAButton } from './ui/button';

interface HeroSectionProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="hero-section text-white relative overflow-hidden floating-shapes min-h-[80vh] flex items-center">
      <div className="container mx-auto px-6 py-16 text-center relative z-10 animate-fade-in">
        {/* Large Hero Logo */}
        <div className="mb-8 flex justify-center">
          <div className="logo-showcase pulse-glow">
            <img 
              src="https://cdn.abacus.ai/images/927605bf-d12d-4a05-8488-5bc996269b59.png" 
              alt="HD Connex Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
          Florida's #1 Platform for
          <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Home Contractors
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
          Connect with vetted, licensed professionals in minutes. From emergency repairs to dream renovations.
        </p>
        
        {/* Key Value Props */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-8 text-white/90">
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <i className="fas fa-bolt text-yellow-400 mr-2"></i>
            <span className="font-semibold">Instant Matching</span>
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <i className="fas fa-shield-check text-green-400 mr-2"></i>
            <span className="font-semibold">100% Verified</span>
          </div>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
            <i className="fas fa-star text-yellow-400 mr-2"></i>
            <span className="font-semibold">4.9★ Average</span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center text-white/60 hover:text-white transition-colors cursor-pointer">
            <span className="text-sm mb-2 font-medium">Start Your Project Below</span>
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div 
          className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse" 
          style={{animationDelay: '1s'}}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-pulse" 
          style={{animationDelay: '2s'}}
        ></div>
      </div>
    </section>
  );
}
