import React from "react";

const Gain = () => {
  return (
    <div className="bg-[#F6EEE9] p-10 reveal">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">Gain valuable insights</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="bg-[#13715B] text-white px-3 py-1 absolute top-4 left-4 z-10 text-sm rounded">
                Strategy
              </div>
              <div className="h-56 overflow-hidden border border-gray-200 mx-4 mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400" 
                  alt="Workers in industrial setting" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-center mb-8">Top 5 reasons to invest in marketing</h2>
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="David" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium mr-2">David</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500 ml-2">Apr 3, 2024</span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="bg-[#13715B] text-white px-3 py-1 absolute top-4 left-4 z-10 text-sm rounded">
                Marketing
              </div>
              <div className="h-56 overflow-hidden border border-gray-200 mx-4 mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400" 
                  alt="Worker with clipboard" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-center mb-8">How can marketing help your business?</h2>
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/44.jpg" 
                    alt="Allen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium mr-2">Allen</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500 ml-2">Apr 3, 2024</span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative overflow-hidden">
              <div className="bg-[#13715B] text-white px-3 py-1 absolute top-4 left-4 z-10 text-sm rounded">
                Business
              </div>
              <div className="h-56 overflow-hidden border border-gray-200 mx-4 mt-4">
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400" 
                  alt="Business meeting" 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-center mb-8">The ultimate guide to marketing success</h2>
              <div className="flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                  <img 
                    src="https://randomuser.me/api/portraits/men/22.jpg" 
                    alt="Kevin" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium mr-2">Kevin</span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-500 ml-2">Apr 1, 2024</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <a href="#" className="text-green-700 font-medium inline-flex items-center">
            View more articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gain;