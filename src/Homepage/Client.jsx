import React, { useRef, useEffect, useState } from 'react';
import {
  ArrowRight, Zap, Box, Lock, Cloud, Database, Server,
  ChevronLeft, ChevronRight
} from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Client() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    setNavigationReady(true); // Trigger re-render after refs are set
  }, []);

  const testimonials = [
    {
      company: "Boltshift",
      logo: <Zap className="text-white bg-green-700 p-2 rounded-full" size={32} />,
      quote: "We're looking for people who share our vision! Most of our time used to be taken up by administrative work, whereas now we can focus on building out to help our employees.",
      author: "Mark Zellers",
      position: "CEO, Co-Founder",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      company: "Lightbox",
      logo: <Box className="text-white bg-green-800 p-2 rounded-md" size={32} />,
      quote: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
      author: "Natalia Larsson",
      position: "Director of Sales",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      company: "Interlock",
      logo: <Lock className="text-green-700 border-2 border-green-700 p-2 rounded-full" size={32} />,
      quote: "The latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation. This builder just outstanding!",
      author: "Sarah Edrissi",
      position: "Lead Marketing",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg"
    },
    {
      company: "NimbusWorks",
      logo: <Cloud className="text-white bg-blue-700 p-2 rounded-full" size={32} />,
      quote: "The flexibility and scalability of the tools allowed our remote teams to collaborate better and deliver faster results across time zones.",
      author: "Elijah Gomez",
      position: "VP of Engineering",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    },
    {
      company: "DataCrate",
      logo: <Database className="text-white bg-purple-700 p-2 rounded-full" size={32} />,
      quote: "With seamless integration and real-time analytics, we've completely transformed how we make data-driven decisions at scale.",
      author: "Priya Mehta",
      position: "Chief Data Officer",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      company: "ServerNest",
      logo: <Server className="text-white bg-gray-800 p-2 rounded-md" size={32} />,
      quote: "Managing infrastructure has never been this easy. ServerNest tools cut deployment times in half while improving our uptime metrics.",
      author: "Tomiko Sato",
      position: "Infrastructure Lead",
      avatar: "https://randomuser.me/api/portraits/women/55.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative">
      <h2 className="text-4xl font-bold text-center mb-12">Some Clients' Feedback</h2>

      <div className="swiper-container relative">
        {navigationReady && (
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            autoplay={{ 
              delay: 3000, // Changed from 5000 to 3000 (3 seconds)
              disableOnInteraction: false // Continue autoplay even after user interaction
            }}
            pagination={{ clickable: true }}
            loop={true} // Enable infinite loop
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="border border-gray-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 h-96 bg-white">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-center gap-3 mb-6">
                      {testimonial.logo}
                      <span className="font-semibold text-lg text-gray-800">{testimonial.company}</span>
                    </div>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full object-cover mr-4"
                      />
                      <div>
                        <p className="font-semibold text-sm text-black">{testimonial.author}</p>
                        <p className="text-gray-500 text-xs">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Custom Navigation Buttons */}
        <div
          ref={prevRef}
          className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 -ml-5"
        >
          <ChevronLeft size={24} />
        </div>
        <div
          ref={nextRef}
          className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-110 -mr-5"
        >
          <ChevronRight size={24} />
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <button className="flex items-center gap-2 text-green-700 font-semibold hover:underline text-lg transition-colors duration-300">
          See All Feedbacks
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}