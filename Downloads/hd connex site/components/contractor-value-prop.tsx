
'use client';

import { Card, CTAButton } from './ui/button';

interface ContractorValuePropProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

export default function ContractorValueProp({ onNavigate }: ContractorValuePropProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Join Our Elite Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with quality customers and grow your business with HD Connex&apos;s exclusive contractor network
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-handshake text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Quality Leads</h3>
            <p className="text-gray-600">
              Get connected with serious customers who are ready to hire. Our pre-qualification process ensures you spend time on real opportunities.
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-star text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Build Your Reputation</h3>
            <p className="text-gray-600">
              Showcase your work and collect verified reviews to build trust with potential customers and grow your online presence.
            </p>
          </Card>
          
          <Card className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-chart-line text-3xl text-white"></i>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Grow Your Business</h3>
            <p className="text-gray-600">
              Access tools and analytics to track your performance, optimize your profile, and maximize your earning potential.
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <CTAButton 
            onClick={() => onNavigate('contractor-signup')} 
            className="text-2xl px-12 py-6"
          >
            <i className="fas fa-user-plus mr-3"></i>Join HD Connex Today
          </CTAButton>
          <p className="text-gray-500 mt-4">Free to join • Start getting leads immediately</p>
        </div>
      </div>
    </section>
  );
}
