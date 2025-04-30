import React from 'react';
import charts from '../assets/charts.svg';

const Gain = () => {
  return (
    <div className="bg-[#f7efea] px-6 md:px-14 py-16 rounded-2xl max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-[32px] md:text-[45px] leading-[1.2] font-extrabold text-black mb-8">
            Create stunning websites<br />
            that fits your needs.
          </h2>

          <div>
            <button className="w-full bg-[#176e57] hover:bg-[#145c4a] text-white text-base font-medium py-4 px-6 rounded transition-colors">
              Try Lexend today
            </button>

            <p className="text-sm text-gray-500 mt-3">
              14-day trial, no credit card required.
            </p>
          </div>
        </div>

        {/* Right Side */}
<div className="flex justify-center hidden md:block">
  <img
    src={charts}
    alt="Chart with arrow showing growth"
    className="w-[220px] md:w-[280px] h-auto"
  />
</div>
      </div>
    </div>
  );
};

export default Gain;
