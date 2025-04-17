import React from 'react';
import hero from '../assets/hero-two.png'; 

const Banner = () => {
  return (
    <section className="min-h-screen w-full bg-[#F6EEE9] flex items-center justify-center font-['Inter']">
      <div className="max-w-6xl w-full mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-sm text-green-700 mb-2 reveal">CRM Tool Workflow</h2>
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
            <p className="text-sm text-gray-500 reveal">No credit card required.</p>
          </div>

          {/* Right Images */}
          <div className="col-12 lg:col-6 xl:col-7 reveal">
            <img
              src={hero}
              alt="Illustration of a team collaborating"
            />
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="flex justify-center mt-12 flex-wrap gap-6 reveal">
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
