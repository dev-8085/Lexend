import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';
import logo from '/logo-mark.svg';
import appstor from '/appstore.svg';
import playstore from '/playstore.svg';

// A fully responsive footer that preserves your original design
export default function Footer() {
  return (
    <footer className="bg-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Divider */}
        <hr className="border-gray-200 mb-8" />

        {/* Top Section */}
        <div className="flex flex-col gap-12 md:flex-row md:gap-16 lg:gap-24 pb-12">
          {/* Left */}
          <div className="w-full md:w-1/3">
            <img src={logo} alt="Logo" className="h-10 md:h-12 mb-4" />
            <p className="text-gray-700 text-base leading-relaxed mb-6 max-w-md lg:max-w-none">
              This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables.
            </p>
            <div className="flex space-x-3">
              <img src={playstore} alt="Play Store" className="h-10" />
              <img src={appstor} alt="App Store" className="h-10" />
            </div>
          </div>

          {/* Right - Links */}
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-10 gap-x-6">
            {[
              {
                title: 'About',
                links: ['Pricing', 'Features', 'Integrations', 'Career', 'Contact', 'Contact v2'],
              },
              {
                title: 'Shop',
                links: ['With sidebar', 'Product detail', 'Product detail v2', 'Cart', 'Checkout', 'Order confirmation'],
              },
              {
                title: 'Request a demo',
                links: ['Sign in', 'Sign in v2', 'Sign up', 'Sign up v2', 'Reset password', 'Reset password v2'],
              },
              {
                title: 'Blog',
                links: ['Blog detail', 'FAQ', '404', 'Coming Soon', 'Terms of service', 'Privacy policy'],
              },
            ].map(({ title, links }) => (
              <div key={title}>
                <h3 className="font-semibold text-base text-black mb-4">{title}</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-black transition-colors duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col-reverse items-center justify-between gap-6 sm:flex-row py-8 text-center sm:text-left">
          {/* Left */}
          <div className="space-y-2 text-sm">
            <p className="text-gray-400">Lexend © 2025, All rights reserved.</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-2">
              {['Privacy notice', 'Legal', 'Cookie settings'].map((item) => (
                <a key={item} href="#" className="text-gray-900 hover:underline">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Socials */}
          <div className="flex items-center space-x-4">
            {[Linkedin, Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
              <a key={idx} href="#" aria-label={Icon.displayName} className="text-gray-800 hover:text-black transition-colors duration-200">
                <Icon size={20} />
              </a>
            ))}
            <span className="hidden sm:block border-l h-6 border-gray-300" />
            <div className="flex items-center space-x-1 cursor-pointer">
              <Globe size={16} className="text-gray-800" />
              <span className="text-gray-800 font-medium">English</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-800"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
