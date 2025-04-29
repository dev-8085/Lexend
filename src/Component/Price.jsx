import React from 'react';
import talking from '/talking.svg';
import chatting from '/chatting.svg';
import star1 from '/star-1.svg';
import star2 from '/star-2.svg';

export default function Getter() {
  return (
    <div className="relative w-full bg-white py-12 md:py-22 px-4 flex justify-center items-center overflow-hidden reveal">
      {/* Left corner illustration - hidden on small screens */}
      <img 
        src={talking}
        alt="Person waving" 
        className="hidden md:block absolute bottom-0 left-[-2rem] h-60 md:h-80 w-auto z-0"
      />

      {/* Right corner illustration - hidden on small screens */}
      <img 
        src={chatting} 
        alt="Person with balloons" 
        className="hidden md:block absolute bottom-0 right-[-3rem] h-60 md:h-80 w-auto z-0"
      />

      {/* Central Content */}
<div className="max-w-3xl w-full text-center z-10 px-4 md:px-8 font-sans">
  <h1 className="text-[40px] md:text-[56px] font-bold leading-[1.2] text-[#0A0A0A] mb-6">
    Get started with<br className="hidden sm:block" />
    Lexend today
  </h1>
  
  <p className="text-[18px] text-[#6B7280] mb-8">
    With native CRM integrations that streamline your entire Tool workflow.
  </p>
  
  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-5">
    <input
      type="email"
      placeholder="Your email address"
      className="px-4 py-3 w-full sm:w-[320px] border border-gray-300 rounded-md text-[16px] focus:outline-none focus:ring-2 focus:ring-[#13715B]"
    />
    <button className="w-full sm:w-auto px-6 py-3 bg-[#13715B] text-white text-[16px] rounded-md hover:bg-[#2f5348] transition-colors">
      Start free trial
    </button>
  </div>
  
  <p className="text-[14px] text-[#6B7280]">
    14-day trial, no credit card required.
  </p>
</div>


      {/* Decorative Stars - hidden on small screens */}
      <img 
        src={star1} 
        alt="Star decoration" 
        className="hidden md:block absolute left-[15%] md:left-[25%] top-1/3 h-8 w-auto z-0" 
      />
      <img 
        src={star2} 
        alt="Star decoration" 
        className="hidden md:block absolute right-[15%] md:right-[25%] bottom-1/3 h-8 w-auto z-0" 
      />
    </div>
  );
}