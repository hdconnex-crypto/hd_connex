
'use client';

import { useState } from 'react';
import { services, locationsByCounty } from '../lib/data';
import { Card, CTAButton } from './ui/button';

interface ContractorSignupProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
}

interface ContractorFormData {
  companyName: string;
  license: string;
  yearsInBusiness: string;
  isInsured: boolean;
  insuranceAmount: string;
  specialties: string[];
  serviceAreas: string[];
  phone: string;
  email: string;
  website: string;
  aboutUs: string;
}

export default function ContractorSignup({ onNavigate }: ContractorSignupProps) {
  const [formData, setFormData] = useState<ContractorFormData>({ 
    companyName: '',
    license: '',
    yearsInBusiness: '',
    isInsured: false,
    insuranceAmount: '',
    specialties: [],
    serviceAreas: [],
    phone: '',
    email: '',
    website: '',
    aboutUs: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSpecialtyToggle = (specialty: string) => {
    setFormData(prev => {
      const specialties = prev.specialties.includes(specialty)
        ? prev.specialties.filter(s => s !== specialty)
        : [...prev.specialties, specialty];
      return { ...prev, specialties };
    });
  };

  const handleServiceAreaToggle = (area: string) => {
    setFormData(prev => {
      const serviceAreas = prev.serviceAreas.includes(area)
        ? prev.serviceAreas.filter(s => s !== area)
        : [...prev.serviceAreas, area];
      return { ...prev, serviceAreas };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = () => {
    if (formData.companyName && formData.license) {
      // onRegister({ ...formData, id: Date.now(), status: 'pending' });
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-24 section-gradient brand-pattern min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <i className="fas fa-check-circle text-green-500 text-6xl mb-6 animate-pulse"></i>
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <img 
                  src="https://cdn.abacus.ai/images/927605bf-d12d-4a05-8488-5bc996269b59.png" 
                  alt="HD Connex" 
                  className="w-12 h-12 object-contain rounded"
                />
              </div>
            </div>
            <h2 className="text-4xl font-bold gradient-text mb-4">Application Submitted!</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Thank you for applying to join the HD Connex contractor network. 
              We&apos;ll review your application and get back to you within 2-3 business days.
            </p>
            <div className="space-y-4">
              <CTAButton onClick={() => onNavigate('home')} variant="secondary">
                <i className="fas fa-home mr-2"></i>Back to Home
              </CTAButton>
              <p className="text-gray-500 text-sm">
                Questions? Contact us at <a href="mailto:contractors@hdconnex.com" className="text-blue-600 hover:underline">contractors@hdconnex.com</a>
              </p>
            </div>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 section-gradient brand-pattern min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <img 
              src="https://cdn.abacus.ai/images/927605bf-d12d-4a05-8488-5bc996269b59.png" 
              alt="HD Connex" 
              className="w-10 h-10 object-contain rounded"
            />
          </div>
          <h2 className="text-4xl font-bold gradient-text mb-3">Join Our Contractor Network</h2>
          <p className="text-gray-600 text-lg">Start receiving quality leads from verified customers</p>
        </div>
        
        <Card className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Company Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Company Name *</label>
                  <input 
                    type="text" 
                    name="companyName" 
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50" 
                    placeholder="Your Company LLC"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">License Number *</label>
                  <input 
                    type="text" 
                    name="license" 
                    value={formData.license}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50" 
                    placeholder="FL123456"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Years in Business</label>
                  <input 
                    type="number" 
                    name="yearsInBusiness" 
                    value={formData.yearsInBusiness}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50" 
                    placeholder="5"
                  />
                </div>
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    name="isInsured" 
                    checked={formData.isInsured} 
                    onChange={handleChange} 
                    className="h-4 w-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-500 mr-2 mt-1"
                  />
                  <div className="flex-1">
                    <label className="block text-gray-700 font-semibold">General Liability Insurance</label>
                    <p className="text-sm text-gray-500">Check if you carry general liability insurance</p>
                  </div>
                </div>
                {formData.isInsured && (
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Insurance Coverage Amount</label>
                    <input 
                      type="text" 
                      name="insuranceAmount" 
                      value={formData.insuranceAmount}
                      onChange={handleChange} 
                      className="w-full p-3 border rounded-lg bg-gray-50" 
                      placeholder="$1,000,000" 
                    />
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4 gradient-text">Contact & Services</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50" 
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50" 
                    placeholder="info@yourcompany.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Website (Optional)</label>
                  <input 
                    type="url" 
                    name="website" 
                    value={formData.website}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-lg bg-gray-50" 
                    placeholder="www.yourcompany.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">About Your Company</label>
                  <textarea 
                    name="aboutUs" 
                    value={formData.aboutUs} 
                    onChange={handleChange} 
                    rows={3} 
                    className="w-full p-3 border rounded-lg bg-gray-50" 
                    placeholder="Tell us about your company, experience, and what sets you apart..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 gradient-text">Service Specialties</h3>
            <p className="text-gray-600 mb-4">Select all services that apply to your business:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {services.map(service => (
                <label key={service} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input 
                    type="checkbox" 
                    checked={formData.specialties.includes(service)} 
                    onChange={() => handleSpecialtyToggle(service)} 
                    className="mr-3 h-4 w-4 text-blue-600"
                  />
                  <span className="text-sm font-medium">{service}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 gradient-text">Service Areas</h3>
            <p className="text-gray-600 mb-4">Select the counties where you provide services:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {Object.keys(locationsByCounty).map(county => (
                <label key={county} className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input 
                    type="checkbox" 
                    checked={formData.serviceAreas.includes(county)} 
                    onChange={() => handleServiceAreaToggle(county)} 
                    className="mr-3 h-4 w-4 text-blue-600"
                  />
                  <span className="font-medium">{county} County</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <CTAButton onClick={handleSubmit} className="text-xl px-12">
              <i className="fas fa-paper-plane mr-3"></i>Submit Application
            </CTAButton>
            <p className="text-gray-500 text-sm mt-4">
              By applying, you agree to our terms of service and privacy policy
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}
