
'use client';

import { useState } from 'react';
import { locationsByCounty, services } from '../lib/data';
import { Card, CTAButton } from './ui/button';

interface FormData {
  service: string;
  county: string;
  city: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  smsOptOut: boolean;
}

export default function LeadCaptureForm() {
  const initialFormState: FormData = { 
    service: '', 
    county: '', 
    city: '', 
    details: '', 
    name: '', 
    email: '', 
    phone: '', 
    smsOptOut: false 
  };
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cities, setCities] = useState<string[]>([]);

  const handleCountyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const county = e.target.value;
    setFormData(prev => ({ ...prev, county: county, city: '' }));
    setCities(county ? locationsByCounty[county] || [] : []);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = () => { 
    setIsSubmitted(true); 
  };

  const handleReset = () => {
    setFormData(initialFormState);
    setCities([]);
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <section id="lead-form" className="py-24 section-gradient brand-pattern">
      <div className="container mx-auto px-6">
        <Card className="max-w-5xl mx-auto">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="mb-6">
                <i className="fas fa-check-circle text-green-500 text-6xl mb-4 animate-pulse"></i>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://cdn.abacus.ai/images/927605bf-d12d-4a05-8488-5bc996269b59.png" 
                    alt="HD Connex" 
                    className="w-10 h-10 object-contain rounded"
                  />
                </div>
              </div>
              <h2 className="text-4xl font-bold gradient-text mb-4">Thank You!</h2>
              <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                Your project request has been submitted successfully. Our vetted contractors will be in touch within 24 hours to provide you with competitive quotes.
              </p>
              <CTAButton onClick={handleReset} variant="secondary">
                <i className="fas fa-plus mr-2"></i>Submit Another Project
              </CTAButton>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="https://cdn.abacus.ai/images/927605bf-d12d-4a05-8488-5bc996269b59.png" 
                    alt="HD Connex" 
                    className="w-10 h-10 object-contain rounded"
                  />
                </div>
                <h2 className="text-4xl font-bold gradient-text mb-3">Let&apos;s Get Your Project Started</h2>
                <p className="text-gray-600 text-lg">Get matched with pre-screened contractors in just a few steps</p>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>1</div>
                  <div className={`w-20 h-1 ${step >= 2 ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= 2 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>2</div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2 max-w-32 mx-auto">
                  <span>Project</span>
                  <span>Contact</span>
                </div>
              </div>
              
              {step === 1 && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
                    <i className="fas fa-tools mr-3"></i>Project Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Service Category</label>
                      <select 
                        name="service" 
                        value={formData.service} 
                        onChange={handleChange} 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
                      >
                        <option value="">Choose a service...</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">County</label>
                      <select 
                        name="county" 
                        value={formData.county} 
                        onChange={handleCountyChange} 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg"
                      >
                        <option value="">Choose a county...</option>
                        {Object.keys(locationsByCounty).map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="mt-8">
                    <label className="block text-gray-700 font-bold mb-3 text-lg">City</label>
                    <select 
                      name="city" 
                      value={formData.city} 
                      onChange={handleChange} 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg" 
                      disabled={!formData.county}
                    >
                      <option value="">{formData.county ? 'Choose a city...' : 'Select a county first'}</option>
                      {cities.map(city => <option key={city} value={city}>{city}</option>)}
                    </select>
                  </div>
                  <div className="mt-8">
                    <label className="block text-gray-700 font-bold mb-3 text-lg">Project Details</label>
                    <textarea 
                      name="details" 
                      value={formData.details} 
                      onChange={handleChange} 
                      rows={4} 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg resize-none" 
                      placeholder="Describe your project in detail..."
                    ></textarea>
                  </div>
                  <div className="text-center mt-10">
                    <CTAButton onClick={() => setStep(2)} variant="secondary" className="text-xl">
                      Continue <i className="fas fa-arrow-right ml-3"></i>
                    </CTAButton>
                  </div>
                </div>
              )}
              
              {step === 2 && (
                <div className="animate-fade-in">
                  <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
                    <i className="fas fa-user mr-3"></i>Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg" 
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-bold mb-3 text-lg">Email Address</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg" 
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  <div className="mt-8">
                    <label className="block text-gray-700 font-bold mb-3 text-lg">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all text-lg" 
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="mt-6 flex items-center bg-blue-50 p-4 rounded-xl">
                    <input 
                      type="checkbox" 
                      id="smsOptOut" 
                      name="smsOptOut" 
                      checked={formData.smsOptOut} 
                      onChange={handleChange} 
                      className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="smsOptOut" className="ml-3 block text-gray-700 font-medium">
                      I prefer not to receive SMS updates
                    </label>
                  </div>
                  <div className="flex justify-center gap-4 mt-10">
                    <CTAButton onClick={() => setStep(1)} variant="secondary" className="text-xl">
                      <i className="fas fa-arrow-left mr-3"></i>Back
                    </CTAButton>
                    <CTAButton onClick={handleSubmit} className="text-xl">
                      <i className="fas fa-paper-plane mr-3"></i>Submit Request
                    </CTAButton>
                  </div>
                </div>
              )}
            </>
          )}
        </Card>
      </div>
    </section>
  );
}
