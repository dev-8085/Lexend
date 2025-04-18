import React from 'react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Proposals',
    description: 'Share Tools in minutes with pre-built, customizable templates.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 8H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Quotes',
    description: 'Find out in real time when they’re opened, viewed and signed.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l2.09 6.26L20 9.27l-5 3.64 1.91 6.09L12 16.77 7.09 19l1.91-6.09-5-3.64 5.91-.91L12 2z" />
      </svg>
    ),
    alwaysActive: true,
  },
  {
    title: 'Contracts',
    description: 'Use our native CRM integrations to pull customer data into your Tools fast.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v7a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'eSignatures',
    description: 'Keep your data secure with our legally-binding e-Signature software.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 4H8m8-8H8m4 12h.01M12 3v1m0 16v1m9-9h-1M4 12H3" />
      </svg>
    ),
  },
];

const Card2 = () => {
  return (
    <section className="bg-[#F6EEE9] py-16 px-4">
      <h2 className="text-center text-4xl md:text-5xl font-extrabold text-[#111827] mb-16">
        Prevent costly mistakes
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto h-full">
        {cards.map((card, idx) => {
          const isActive = card.alwaysActive;

          return (
            <motion.div
              key={idx}
              whileHover={{ scale: isActive ? 1 : 1.05 }}
              className={`group rounded-[20px] p-8 min-h-[310px] text-center transition-all duration-300 ${
                isActive
                  ? 'bg-[#17694a] text-white'
                  : 'bg-white text-[#111827] hover:bg-[#17694a] hover:text-white'
              }`}
            >
              <div
                className={`w-[85px] h-[85px] mb-6 flex items-center justify-center rounded-full mx-auto transition-colors ${
                  isActive ? 'bg-[#13715B]' : 'bg-gray-100 group-hover:bg-[#145c3f]'
                }`}
              >
                <div className={`transition-colors ${isActive ? 'text-white' : 'text-black group-hover:text-white'}`}>
                  {card.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-medium leading-relaxed">{card.description}</p>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#"
          className="text-sm font-semibold text-[#17694a] inline-flex items-center space-x-1 hover:underline"
        >
          <span className='4xl'>Discover all features</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Card2;
