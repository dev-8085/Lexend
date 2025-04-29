import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
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
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // GSAP Animation
  useEffect(() => {
    gsap.killTweensOf('.fade-up');
    gsap.fromTo(
      '.fade-up',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      }
    );
  }, []);

  const brands = [brand01, brand02, brand03, brand04, brand05, brand06];

  // Drag logic
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
      slider.scrollLeft = 0;
    }
    if (slider.scrollLeft <= 0) {
      slider.scrollLeft = slider.scrollWidth - slider.clientWidth;
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
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
  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    handleScroll();
  };
  const handleTouchEnd = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className="relative overflow-hidden" style={{ backgroundColor: '#F6EEE9' }}>
      {/* Floating Icons */}
      <div className="absolute top-[13%] right-[14%] transform rotate-45 hidden lg:block fade-up">
        <img alt="star-2" loading="lazy" className="w-[24px]" src={star2} />
      </div>
      <div className="absolute top-[17%] left-[35%] transform -rotate-12 hidden lg:block fade-up">
        <img alt="icon-trophy-dark" className="w-[48px] xl:w-[56px] hidden dark:block" src={Trophy} />
      </div>
      <div className="absolute bottom-[2%] left-[30%] transform -translate-y-1/2 hidden lg:block fade-up">
        <img alt="icon-globe-dark" className="w-[40px] xl:w-[48px] hidden dark:block" src={global} />
      </div>
      <div className="absolute rotate-45 hidden lg:block" style={{ bottom: '20%', right: '8%' }}>
        <img alt="icon-crown-dark" className="w-[48px] xl:w-[56px] hidden dark:block fade-up" src={Crown} />
      </div>
      <div className="absolute -translate-y-1/2 rotate-45 -ms-3 hidden lg:block" style={{ top: '41%' }}>
        <img alt="icon-location-dark" className="w-[48px] xl:w-[56px] hidden dark:block fade-up" src={location} />
      </div>
      <div className="absolute -rotate-12 -me-3 top-[38%] translate-y-1/2 hidden lg:block fade-up">
        <img src={chat} alt="icon-chat" className="w-12 xl:w-14 block dark:hidden" />
        <img src={chat} alt="icon-chat-dark" className="w-12 xl:w-14 hidden dark:block" />
      </div>
      <div className="absolute top-[60%] right-[48%] -translate-y-1/2 -rotate-12 hidden lg:block fade-up">
        <img alt="icon-diamond" className="w-[48px] xl:w-[56px] block dark:hidden" src={diamond} />
        <img alt="icon-diamond-dark" className="w-[48px] xl:w-[56px] hidden dark:block" src={diamondDark} />
      </div>

      {/* Main Content */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between pt-16 lg:pt-24">
          <div className="py-24 px-1 fade-up">
            <main className="max-w-xl mx-auto">
              <h2 className="text-[#1b5e4a] font-semibold text-sm sm:text-base leading-tight mb-3 fade-up">
              India's #1 
              </h2>
              <h1 className="font-extrabold text-[2.75rem] sm:text-[2.75rem] leading-[1.1] text-black mb-6 tracking-tight fade-up">
               E-commerce Website <br /> & App Development Company
              </h1>
              <p className="text-[#0E0E10] text-base sm:text-lg leading-relaxed mb-8 max-w-3xl fade-up">
              Build Stunning E-commerce Websites & Apps That Sell — Trusted by India's Fastest-Growing Brands instead of Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl fade-up">
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
              <p className="text-gray-600 text-sm mt-4 fade-up">No credit card required.</p>
            </main>
          </div>

          <div className="col-12 lg:col-2 xl:col-7 flex justify-center items-center fade-up">
            <img src={hero} alt="Illustration of a team collaborating" className="w-full max-w-md md:max-w-lg xl:max-w-2xl h-auto" />
          </div>
        </div>
      </div>

      {/* Brands Carousel */}
      <section className="brands panel overflow-hidden opacity-50 py-6">
        <div className="max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8">
          <div
            ref={sliderRef}
            className={`flex justify-start mb-5 overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{
              scrollBehavior: isDragging ? 'auto' : 'smooth',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              paddingBottom: '20px',
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {brands.concat(brands).map((icon, index) => (
              <div key={index} className="flex items-center justify-center mx-6 flex-none">
                <img
                  src={icon}
                  alt={`brand-${index + 1}`}
                  className="h-20 w-[130px] object-contain transition-transform duration-300"
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
