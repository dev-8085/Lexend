import React from 'react';
import hero from '../assets/hero-two.png'; 
import brand01 from '../assets/brand01.svg';
import brand02 from '../assets/brand02.svg';
import brand03 from '../assets/brand03.svg';
import brand04 from '../assets/brand04.svg';
import brand05 from '../assets/brand05.svg';
import brand06 from '../assets/brand06.svg';


const Banner = () => {
  return (
    <section className="bg-[#F6EEE9] section-outer panel py-6 xl:py-9 pt-9 lg:pt-10 bg-secondary">
      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gy-4 sm:gy-6 gx-0 md:flex-row ">

        <div className="py-12 sm:px-1 font-['Inter'] reveal reveal-left ">
  <main className="max-w-xl mx-auto">
    <h2 className="text-[#1b5e4a] font-semibold text-sm sm:text-base leading-tight  mb-3 reveal ">
      CRM Tool Workflow
    </h2>

    <h1 className="font-extrabold text-[2.75rem] sm:text-[4.25rem] leading-[1.1] text-black mb-6 tracking-tight reveal">
      Streamline your<br />Tool Workflow.
    </h1>

    <p className="text-[#0E0E10] text-base sm:text-lg leading-relaxed mb-8 max-w-3xl reveal">
      Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.
    </p>

    <form className="flex flex-col sm:flex-row gap-4 max-w-xl reveal">
      <input
        type="email"
        placeholder="Your email address"
        className="flex-grow rounded-md border border-gray-300 bg-white px-5 py-4 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1b5e4a]"
        required
      />
      <button
        type="submit"
        className="bg-[#0E614D] text-white font-medium text-base sm:text-lg rounded-md px-6 py-4 hover:bg-[#16503b] transition-colors"
      >
        Start free trial
      </button>
    </form>

    <p className="text-gray-600 text-sm mt-4 reveal">No credit card required.</p>
  </main>
</div>


          {/* Right Images */}
          <div className="col-12 lg:col-2 xl:col-7 right-image reveal reveal-right flex justify-center items-center">
            <img
              src={hero}
              alt="Illustration of a team collaborating"
              className='w-200 h-auto hero-scene panel rtl:me-6 rtl:ms-n6 reveal'
            />
          </div>
        </div>
      </div> 
{/* Bottom Icons */}
<section className="brands panel overflow-hidden mt-4 sm:mt-6 lg:mt-8 opacity-50">
  <div className="flex justify-center mt-12 flex-wrap gap-12 bottom-icons reveal reveal-icons active">
    {[
      { icon: brand04 },
      { icon: brand05 },
      { icon: brand06 },
      { icon: brand01 },
      { icon: brand02 },
      { icon: brand03 },
    ].map((item, index) => (
      <div key={index} className="flex items-center justify-center mx-6">
        <img
          src={item.icon}
          alt={`brand-${index + 1}`}
          className="h-20 w-[130px] object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
    ))}
  </div>
</section>


    </section>
  );
};

export default Banner;


