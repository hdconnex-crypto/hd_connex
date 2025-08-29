
'use client';

import { CTAButton } from './ui/button';

interface HeroSectionProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="hero-section text-white relative overflow-hidden floating-shapes min-h-screen flex items-center">
      <div className="container mx-auto px-6 py-20 text-center relative z-10 animate-fade-in">
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
        
        <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
          Your Direct Connection to
          <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
            Quality Contractors
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-4xl mx-auto font-light leading-relaxed">
          We connect property owners with vetted, reliable professionals throughout Central Florida. 
          From pools to roofing, find your perfect contractor match.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-2xl mx-auto mb-12">
          <CTAButton className="flex-1 text-lg">
            <i className="fas fa-search mr-3"></i> Find a Contractor
          </CTAButton>
          <CTAButton 
            onClick={() => onNavigate('contractor-signup')} 
            variant="secondary" 
            className="flex-1 text-lg"
          >
            <i className="fas fa-handshake mr-3"></i> Join Our Network
          </CTAButton>
        </div>
        
        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-white/70">
          <div className="flex items-center">
            <i className="fas fa-shield-alt text-2xl mr-2 text-green-400"></i>
            <span className="font-semibold">Licensed & Insured</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-star text-2xl mr-2 text-yellow-400"></i>
            <span className="font-semibold">5-Star Rated</span>
          </div>
          <div className="flex items-center">
            <i className="fas fa-clock text-2xl mr-2 text-blue-400"></i>
            <span className="font-semibold">24/7 Support</span>
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
