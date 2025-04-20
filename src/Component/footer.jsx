import React from 'react';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-8">
      {/* Top separator line */}
      <div className="border-t border-gray-200 mb-12"></div>
      
      {/* Footer content */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and description column */}
        <div className="md:col-span-1">
          <div className="bg-emerald-100 text-emerald-600 p-2 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14"></path>
              <path d="M5 12h14"></path>
            </svg>
          </div>
          <p className="text-gray-700 mb-6">
            This powerfull tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables.
          </p>
          
          {/* App store buttons */}
          <div className="flex space-x-3">
            <a href="#" className="border border-gray-300 rounded-lg px-2 py-1 flex items-center">
              <img src="/api/placeholder/120/40" alt="Google Play" className="h-8" />
            </a>
            <a href="#" className="border border-gray-300 rounded-lg px-2 py-1 flex items-center">
              <img src="/api/placeholder/120/40" alt="App Store" className="h-8" />
            </a>
          </div>
        </div>
        
        {/* Navigation columns */}
        <div>
          <h3 className="font-medium text-gray-900 mb-4">About</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Features</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Integrations</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Career</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact v2</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Shop</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">With sidebar</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Product detail</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Product detail v2</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Cart</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Checkout</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Order confirmation</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Request a demo</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign in</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign in v2</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign up</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Sign up v2</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Reset password</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Reset password v2</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-gray-900 mb-4">Blog</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog detail</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">404</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Coming Soon</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Terms of service</a></li>
            <li><a href="#" className="text-gray-600 hover:text-gray-900">Privacy policy</a></li>
          </ul>
        </div>
      </div>
      
      {/* Bottom section with copyright and links */}
      <div className="mt-16 pt-6 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <p className="text-gray-600">Lexend © 2025, All rights reserved.</p>
        </div>
        
        <div className="flex flex-wrap gap-6 mb-6 md:mb-0">
          <a href="#" className="text-gray-600 hover:text-gray-900">Privacy notice</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Legal</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Cookie settings</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4.01A1 1 0 0 0 21 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4.01ZM8 20V8.6l4 4 4-4V20" fill="none" />
                <path d="M7.72 2.56L2 8.28V2h5.72Z" />
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
          
          <div className="border-l border-gray-300 pl-4 flex items-center">
            <button className="flex items-center text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              English
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;