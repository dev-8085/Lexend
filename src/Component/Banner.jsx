import React from 'react';
import hero from '../assets/hero-two.png'; 

const Banner = () => {
  return (
    <section className="bg-[#F6EEE9] section-outer panel py-6 xl:py-9 pt-9 lg:pt-10 bg-secondary ">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center lg:justify-between gy-4 sm:gy-6 gx-0">

          {/* Left Content */}
          <div className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end left-content reveal reveal-left">
            <h2 className="fs-6 fw-bold text-primary dark:text-secondary reveal">CRM Tool Workflow</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-4 reveal">Streamline your Tool Workflow.</h1>
            <p className="text-lg text-gray-600 mb-6 reveal">
              Keep data consistent, with native CRM integrations that streamline your entire Tool workflow.
            </p>
            <div className="flex items-center mb-2 w-full max-w-md reveal">
              <input
                type="email"
                placeholder="Your email address"
                aria-label="Enter your email address"
                className="p-3 border border-gray-300 rounded-l-md w-full"
              />
              <button className="bg-green-700 text-white p-3 rounded-r-md whitespace-nowrap hover:bg-green-800 transition reveal">
                Start free trial
              </button>
            </div>
            <p className="text-sm text-gray-500 reveal ">No credit card required.</p>
          </div>

          {/* Right Images */}
          <div className="col-12 lg:col-6 xl:col-7 right-image reveal reveal-right">
            <img
              src={hero}
              alt="Illustration of a team collaborating"
              className='hero-scene panel rtl:me-6 rtl:ms-n6 reveal'
            />
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-center mt-12 flex-wrap gap-6 bottom-icons reveal reveal-icons">
          {[
            { name: 'Segment', icon: 'fas fa-segment' },
            { name: 'Alt+Shift', icon: 'fas fa-shift' },
            { name: 'Lightbox', icon: 'fas fa-lightbulb' },
            { name: 'Capsule', icon: 'fas fa-capsules' },
            { name: 'Layers', icon: 'fas fa-layer-group' },
            { name: 'Polymath', icon: 'fas fa-brain' },
          ].map((item) => (
            <div key={item.name} className="flex items-center space-x-2 text-gray-600">
              <i className={`${item.icon} text-gray-700`}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
