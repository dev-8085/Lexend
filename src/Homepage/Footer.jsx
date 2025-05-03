import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-tr from-white to-gray-50 text-gray-800 pt-12 pb-6 px-4 border-t border-gray-200">
      <div className="container mx-auto max-w-6xl">
        {/* Floating back to top button */}
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo and company info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-4 p-2  w-fit">
              <img src={logo} alt="Logo" className="h-12 object-contain drop-shadow-lg" />
            </div>
            <p className="text-gray-600 text-center md:text-left mb-4">
              It's time to take your business online with our cutting-edge digital solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600"><FaFacebook size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-sky-500"><FaTwitter size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-pink-500"><FaInstagram size={20} /></a>
              <a href="#" className="text-gray-600 hover:text-blue-700"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-green-500 w-fit">Quick Links</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/" className="hover:text-green-500">Home</Link></li>
              <li><Link to="/services" className="hover:text-green-500">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-green-500">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-green-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-green-500">Contact</Link></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-green-500 w-fit">Legal</h3>
            <ul className="space-y-2 text-gray-700">
              <li><Link to="/terms-of-service" className="hover:text-green-500">Terms of Service</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-green-500">Privacy Policy</Link></li>
              <li><Link to="/refund-cancellation" className="hover:text-green-500">Refund Policy</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-green-500">Cookie Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-green-500 w-fit">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to our newsletter for the latest updates.</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <button 
                type="submit" 
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Services Keywords Scroll */}
        <div className="relative overflow-hidden mb-10 py-4 border-t border-b border-gray-200">
          <div className="flex items-center">
            <span className="text-gray-500 mr-4 whitespace-nowrap">Our Services:</span>
            <div className="flex-1 overflow-hidden">
              <div className="animate-scroll whitespace-nowrap">
                {[
                  "Mobile App Development", "eCommerce Solutions", "Web Design", 
                  "Shopify Development", "Android & iOS Apps", "UI/UX Design",
                  "WordPress Development", "Custom Software", "Digital Marketing"
                ].map((text, index) => (
                  <span key={index} className="text-gray-600 mx-4 inline-block">{text}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 AmazingWeb.Design. All Rights Reserved.
          </div>
          <div className="flex space-x-4 text-sm text-gray-600">
            <Link to="/sitemap" className="hover:text-green-500">Sitemap</Link>
            <Link to="/careers" className="hover:text-green-500">Careers</Link>
            <Link to="/faq" className="hover:text-green-500">FAQ</Link>
          </div>
        </div>
      </div>

      {/* Scroll Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: inline-block;
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
