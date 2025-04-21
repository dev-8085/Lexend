import React from "react";

const Gain = () => {
  return (
    <div className="bg-[#F6EEE9] px-4 py-12 sm:px-6 lg:px-8 reveal">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">
          Gain valuable insights
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Card Template */}
          {[
            {
              tag: "Strategy",
              title: "Top 5 reasons to invest in marketing",
              image:
                "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
              author: "David",
              authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
              date: "Apr 3, 2024",
            },
            {
              tag: "Marketing",
              title: "How can marketing help your business?",
              image:
                "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
              author: "Allen",
              authorImage: "https://randomuser.me/api/portraits/men/44.jpg",
              date: "Apr 3, 2024",
            },
            {
              tag: "Business",
              title: "The ultimate guide to marketing success",
              image:
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400",
              author: "Kevin",
              authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
              date: "Apr 1, 2024",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col"
            >
              <div className="relative">
                <div className="bg-[#13715B] text-white px-3 py-1 absolute top-4 left-4 z-10 text-xs sm:text-sm rounded">
                  {card.tag}
                </div>
                <div className="h-48 sm:h-56 overflow-hidden border border-gray-200 mx-4 mt-4 rounded-md">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
                <h2 className="text-lg sm:text-xl font-semibold text-center mb-6">
                  {card.title}
                </h2>
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 overflow-hidden">
                    <img
                      src={card.authorImage}
                      alt={card.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="font-medium mr-2">{card.author}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500 ml-2">{card.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="text-green-700 font-medium inline-flex items-center hover:underline"
          >
            View more articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Gain;
