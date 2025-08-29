
'use client';

interface HeaderProps {
  onNavigate: (view: 'home' | 'contractor-signup' | 'contractor-dashboard') => void;
  isAdminView: boolean;
  onToggleAdminView: () => void;
}

export default function Header({ onNavigate, isAdminView, onToggleAdminView }: HeaderProps) {
  return (
    <header className="navbar-glass sticky top-0 z-50 shadow-xl">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
          <div className="navbar-logo logo-glow mr-4">
            <img 
              src="https://cdn.abacus.ai/images/927605bf-d12d-4a05-8488-5bc996269b59.png" 
              alt="HD Connex Logo" 
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div>
            <span className="text-2xl font-bold gradient-text">HD CONNEX</span>
            <p className="text-xs text-gray-600 -mt-1">CONSULTING AND BROKERAGE</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => onNavigate('home')} 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            For Homeowners
          </button>
          <button 
            onClick={() => onNavigate('contractor-signup')} 
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
          >
            For Contractors
          </button>
          
          <div className="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-2 rounded-full border border-blue-200">
            <span className="text-sm font-semibold text-gray-700">Admin View</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                checked={isAdminView} 
                onChange={onToggleAdminView} 
                className="sr-only peer" 
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-indigo-500"></div>
            </label>
          </div>
          
          <button 
            onClick={() => onNavigate('contractor-dashboard')} 
            className="btn-secondary px-6 py-2 font-bold text-white rounded-full text-sm"
          >
            <i className="fas fa-user-circle mr-2"></i>Login
          </button>
        </div>
      </nav>
    </header>
  );
}
