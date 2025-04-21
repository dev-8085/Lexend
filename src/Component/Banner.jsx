import React from 'react';
import hero from '../assets/hero-two.png'; 
import brand01 from '../assets/brand01.svg';
import brand02 from '../assets/brand02.svg';
import brand03 from '../assets/brand03.svg';
import brand04 from '../assets/brand04.svg';
import brand05 from '../assets/brand05.svg';
import brand06 from '../assets/brand06.svg';
import diamond from '../assets/icon-diamond.svg';
import diamondDark from '../assets/icon-diamond-dark.svg';
import chat from '../assets/icon-chat.svg';
import location from '../assets/icon-location.svg';
import Crown from '../assets/icon-crown.svg'; 
import global from '../assets/icon-globe.svg';
import Trophy from '../assets/icon-trophy.svg';
import star2 from '../assets/star-2.svg';


const Banner = () => {
  return (
    <div className="relative" style={{ backgroundColor: '#F6EEE9' }}>
      <div className="absolute top-[12%] right-[15%] transform rotate-45 reveal">
      <img
        alt="star-2"
        data-uc-svg=""
        loading="lazy"
        width="69"
        height="95"
        className="w-[24px] text-gray-900 dark:text-white"
        src={star2}
      />
    </div>
      <div className="absolute top-[15%] left-[35%] transform -rotate-12 reveal">
      <img
        alt="icon-trophy-dark"
        loading="lazy"
        width="100"
        height="100"
        className="w-[48px] xl:w-[56px] hidden dark:block"
        src={Trophy}
      />
    </div>
      <div className="absolute bottom-[7%] left-[30%] transform -translate-y-1/2 reveal">
      <img
        alt="icon-globe-dark"
        loading="lazy"
        width="100"
        height="100"
        className="w-[40px] xl:w-[48px] hidden dark:block"
        src={global}
      />
    </div>
      <div className="absolute rotate-45 reveal" style={{ bottom: '20%', right: '8%' }}>
      <img
        alt="icon-crown-dark"
        loading="lazy"
        width={100}
        height={100}
        className="w-[48px] xl:w-[56px] hidden dark:block"
        style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }}
        src={Crown}
      />
    </div>
      <div className="absolute -translate-y-1/2 rotate-45 -ms-3 reveal" style={{ top: '45%' }}>
      {/* Dark Mode Icon */}
      <img
        alt="icon-location-dark"
        loading="lazy"
        width={100}
        height={100}
        className="w-[48px] xl:w-[56px] hidden dark:block"
        style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }}
        src={location}
      />
    </div>
      <div className="absolute -rotate-12 -me-3 top-[38%] translate-y-1/2 reveal">
        {/* Light Mode Icon */}
        <img
          src={chat}
          alt="icon-chat"
          width={100}
          height={100}
          className="w-12 xl:w-14 block dark:hidden"
          style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }}
        />
        {/* Dark Mode Icon */}
        <img
          src={chat}
          alt="icon-chat-dark reveal"
          width={100}
          height={100}
          className="w-12 xl:w-14 hidden dark:block"
          style={{ color: 'transparent', transform: 'translateX(0px) translateY(0.0097341px)', opacity: 0.999797 }}
        />
      </div>

      {/* Diamond Icons */}
      <div className="absolute top-[60%] right-[48%] -translate-y-1/2 -rotate-12 reveal">
        <img
          alt="icon-diamond"
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          className="w-[48px] xl:w-[56px] block dark:hidden"
          style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }}
          src={diamond}
        />
        <img
          alt="icon-diamond-dark"
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          className="w-[48px] xl:w-[56px] hidden dark:block"
          style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }}
          src={diamondDark}
        />
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gy-4 sm:gy-6 gx-0 pt-29">
          {/* Left Text */}
          <div className="py-20 sm:px-1 font-['Inter'] reveal reveal-left">
            <main className="max-w-xl mx-auto">
              <h2 className="text-[#1b5e4a] font-semibold text-sm sm:text-base leading-tight mb-3 reveal">
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

          {/* Right Image */}
          <div className="col-12 lg:col-2 xl:col-7 right-image reveal reveal-right flex justify-center items-center">
            <img
              src={hero}
              alt="Illustration of a team collaborating"
              className="w-200 h-auto hero-scene panel rtl:me-6 rtl:ms-n6 reveal"
            />
          </div>
        </div>
      </div>

    {/* Bottom Icons */}
<section className="brands panel overflow-hidden opacity-50 py-6">
  <div className="flex justify-center mb-20 flex-wrap gap-12 bottom-icons reveal reveal-icons active">
    {[brand01, brand02, brand03, brand04, brand05, brand06].map((icon, index) => (
      <div key={index} className="flex items-center justify-center mx-6">
        <img
          src={icon}
          alt={`brand-${index + 1}`}
          className="h-20 w-[130px] object-contain transition-transform duration-300 "
        />
      </div>
    ))}
  </div>
</section>

    </div>
  );
};

export default Banner;
