import React, { useState, useRef, useEffect } from 'react';
import hero from '../assets/hero-two.png';
import brand01 from '/brand01.svg';
import brand02 from '/brand02.svg';
import brand03 from '/brand03.svg';
import brand04 from '/brand04.svg';
import brand05 from '/brand05.svg';
import brand06 from '/brand06.svg';
import diamond from '/icon-diamond.svg';
import diamondDark from '/icon-diamond-dark.svg';
import chat from '/icon-chat.svg';
import location from '/icon-location.svg';
import Crown from '/icon-crown.svg';
import global from '/icon-globe.svg';
import Trophy from '/icon-trophy.svg';
import star2 from '/star-2.svg';

const Banner = () => {
  const brands = [brand01, brand02, brand03, brand04, brand05, brand06];
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
      slider.scrollLeft = 0;
    }
    
    if (slider.scrollLeft <= 10) {
      const scrollPosition = slider.scrollWidth - slider.clientWidth - 10;
      if (isDragging && scrollLeft < 10) {
        slider.scrollLeft = scrollPosition;
      }
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    handleScroll();
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    handleScroll();
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleMouseUp);
    
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="relative" style={{ backgroundColor: '#F6EEE9' }}>
      {/* Decorative elements - visible on all screens but possibly scaled down on mobile */}
      <div className="absolute top-[12%] right-[15%] transform rotate-45 reveal">
        <img alt="star-2" loading="lazy" width="50" height="50" className="w-[16px] md:w-[24px] text-gray-900 dark:text-white" src={star2} />
      </div>

      <div className="absolute top-[15%] left-[35%] transform -rotate-12 reveal">
        <img alt="icon-trophy-dark" loading="lazy" width="80" height="80" className="w-[32px] md:w-[48px] xl:w-[56px] hidden dark:block" src={Trophy} />
      </div>

      <div className="absolute bottom-[2%] left-[30%] transform -translate-y-1/2 reveal">
        <img alt="icon-globe-dark" loading="lazy" width="80" height="80" className="w-[28px] md:w-[40px] xl:w-[48px] hidden dark:block" src={global} />
      </div>

      <div className="absolute rotate-45 reveal" style={{ bottom: '20%', right: '8%' }}>
        <img alt="icon-crown-dark" loading="lazy" width={80} height={80} className="w-[32px] md:w-[48px] xl:w-[56px] hidden dark:block" style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }} src={Crown} />
      </div>

      <div className="absolute -translate-y-1/2 rotate-45 -ms-3 reveal" style={{ top: '45%' }}>
        <img alt="icon-location-dark" loading="lazy" width={80} height={80} className="w-[32px] md:w-[48px] xl:w-[56px] hidden dark:block" style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }} src={location} />
      </div>

      <div className="absolute -rotate-12 -me-3 top-[38%] translate-y-1/2 reveal">
        <img src={chat} alt="icon-chat" width={80} height={80} className="w-8 md:w-12 xl:w-14 block dark:hidden" style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }} />
        <img src={chat} alt="icon-chat-dark reveal" width={80} height={80} className="w-8 md:w-12 xl:w-14 hidden dark:block" style={{ color: 'transparent', transform: 'translateX(0px) translateY(0.0097341px)', opacity: 0.999797 }} />
      </div>

      <div className="absolute top-[60%] right-[48%] -translate-y-1/2 -rotate-12 reveal">
        <img alt="icon-diamond" loading="lazy" width="80" height="80" decoding="async" className="w-[32px] md:w-[48px] xl:w-[56px] block dark:hidden" style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }} src={diamond} />
        <img alt="icon-diamond-dark" loading="lazy" width="80" height="80" decoding="async" className="w-[32px] md:w-[48px] xl:w-[56px] hidden dark:block" style={{ color: 'transparent', transform: 'translateX(0px) translateY(0px)', opacity: 1 }} src={diamondDark} />
      </div>

      <div className="max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gy-4 sm:gy-6 gx-0 pt-10 md:pt-29">
          <div className="py-10 md:py-20 font-['Inter'] reveal reveal-left px-4">
            <main className="max-w-xl mx-auto">
              <h2 className="text-[#1b5e4a] font-semibold text-sm sm:text-base leading-tight mb-3 reveal">CRM Tool Workflow</h2>
              <h1 className="font-extrabold text-2xl sm:text-[2.75rem] md:text-[4.25rem] leading-[1.1] text-black mb-6 tracking-tight reveal">
                Streamline your<br />Tool Workflow.
              </h1>
              <p className="text-[#0E0E10] text-base sm:text-lg leading-relaxed mb-8 max-w-3xl reveal">
                Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.
              </p>

              <form className="flex flex-col sm:flex-row gap-4 max-w-xl reveal">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow rounded-md border border-gray-300 bg-white px-4 py-3 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1b5e4a]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0E614D] text-white font-medium text-base sm:text-lg rounded-md px-6 py-3 hover:bg-[#16503b] transition-colors"
                >
                  Start free trial
                </button>
              </form>

              <p className="text-gray-600 text-sm mt-4 reveal">No credit card required.</p>
            </main>
          </div>

          <div className="col-12 lg:col-2 xl:col-7 right-image reveal reveal-right flex justify-center items-center px-4 mt-8 md:mt-0">
            <img src={hero} alt="Illustration of a team collaborating" className="w-full max-w-md md:w-200 h-auto hero-scene panel rtl:me-6 rtl:ms-n6 reveal" />
          </div>
        </div>
      </div>

      <section className="brands panel overflow-hidden opacity-50 py-6">
        <div className="max-w-7xl mx-auto relative">
          <div
            ref={sliderRef}
            className={`flex justify-start mb-5 overflow-x-auto scrollbar-hide d-flex justify-content space-evenly ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ 
              scrollBehavior: isDragging ? 'auto' : 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '20px'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {brands.map((icon, index) => (
              <div key={index} className="flex items-center justify-center mx-6 md:mx-9 flex-none">
                <img
                  src={icon}
                  alt={`brand-${index + 1}`}
                  className="h-16 md:h-20 w-[100px] md:w-[130px] object-contain transition-transform duration-300"
                  style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                />
              </div>
            ))}

            {brands.map((icon, index) => (
              <div key={`clone-${index}`} className="flex items-center justify-center mx-4 md:mx-6 flex-none">
                <img
                  src={icon}
                  alt={`brand-${index + 1}`}
                  className="h-16 md:h-20 w-[100px] md:w-[130px] object-contain transition-transform duration-300"
                  style={{ pointerEvents: isDragging ? 'none' : 'auto' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
