
'use client';

import { useState } from 'react';
import Header from './header';
import HomePage from './home-page';
import ContractorSignup from './contractor-signup';
import ContractorDashboard from './contractor-dashboard';

type View = 'home' | 'contractor-signup' | 'contractor-dashboard';

export default function HDConnexApp() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [isAdminView, setIsAdminView] = useState(false);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
  };

  const handleToggleAdminView = () => {
    setIsAdminView(!isAdminView);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        onNavigate={handleNavigate} 
        isAdminView={isAdminView}
        onToggleAdminView={handleToggleAdminView}
      />
      
      <main>
        {currentView === 'home' && (
          <HomePage onNavigate={handleNavigate} />
        )}
        {currentView === 'contractor-signup' && (
          <ContractorSignup onNavigate={handleNavigate} />
        )}
        {currentView === 'contractor-dashboard' && (
          <ContractorDashboard 
            isAdminView={isAdminView} 
            onNavigate={handleNavigate} 
          />
        )}
      </main>
      
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                  <img 
                    src="https://cdn.abacus.ai/images/927605bf-d12d-4a05-8488-5bc996269b59.png" 
                    alt="HD Connex" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="text-xl font-bold">HD CONNEX</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Connecting property owners with quality contractors throughout Central Florida.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Homeowners</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-search mr-2"></i>Find Contractors</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-star mr-2"></i>Read Reviews</a></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-phone mr-2"></i>Get Support</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">For Contractors</h4>
              <ul className="space-y-2 text-sm">
                <li><button onClick={() => handleNavigate('contractor-signup')} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-user-plus mr-2"></i>Join Network</button></li>
                <li><a href="#" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-chart-line mr-2"></i>Get Leads</a></li>
                <li><button onClick={() => handleNavigate('contractor-dashboard')} className="text-gray-300 hover:text-blue-400 transition-colors flex items-center"><i className="fas fa-tachometer-alt mr-2"></i>Dashboard</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><i className="fas fa-phone mr-2"></i>(555) 123-4567</li>
                <li className="flex items-center"><i className="fas fa-envelope mr-2"></i>info@hdconnex.com</li>
                <li className="flex items-center"><i className="fas fa-map-marker-alt mr-2"></i>Central Florida</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 HD Connex Consulting and Brokerage. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
