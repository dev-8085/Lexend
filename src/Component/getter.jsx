import React from 'react';
import talking from '../assets/talking.svg';
import chatting from '../assets/chatting.svg';
import star1 from '../assets/star-1.svg'
import star2 from '../assets/star-2.svg'

export default function GetStarted() {
  return (
    <div className="relative w-full bg-white py-20 px-4 flex justify-center items-center overflow-hidden">
      {/* Left corner illustration */}
      <img 
        src={talking}
        alt="Person waving" 
        className="absolute bottom-0 left-0 h-64 w-auto z-0"
      />

      {/* Right corner illustration */}
      <img 
        src={chatting} 
        alt="Person with balloons" 
        className="absolute bottom-0 right-0 h-64 w-auto z-0"
      />

      {/* Central Content */}
      <div className="max-w-4xl w-full text-center z-10 px-8">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">
          Get started with<br />
          Lexend today
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          With native CRM integrations that streamline your entire Tool workflow.
        </p>
        
        <div className="flex justify-center space-x-3 mb-4">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2.5 w-72 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="px-6 py-2.5 bg-[#13715B] text-white rounded-md hover:bg[#13715B] transition-colors">
            Start free trial
          </button>
        </div>

        <p className="text-sm text-gray-500">
          14-day trial, no credit card required.
        </p>
      </div>

      {/* Decorative Stars */}
      <div className="absolute left-[25%] top-1/3  z-0"
      img={star1}></div>
      <div className="absolute right-[25%] bottom-1/3  z-0"
      img={star2}></div>
    </div>
  );
}
