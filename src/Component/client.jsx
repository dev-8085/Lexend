import React from 'react';
import { ArrowRight, Zap, Box, Lock } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      company: "Boltshift",
      logo: <Zap className="text-white bg-green-700 p-1 rounded-full" size={28} />,
      quote: "We're looking for people who share our vision! Most of our time used to be taken up by most of alternate administrative work whereas now we can focus on building out to help our employees.",
      author: "Mark Zellers",
      position: "CEO, Co-Founder",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      company: "Lightbox",
      logo: <Box className="text-white bg-green-800 p-1 rounded-md" size={28} />,
      quote: "This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables, and get approval from my boss all within 36 minutes.",
      author: "Natalia Larsson",
      position: "Director of Sales",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      company: "Interlock",
      logo: <Lock className="text-green-700 border border-green-700 p-1 rounded-full" size={28} />,
      quote: "We are based in Europe and the latest Data Protection Regulation forces us to look for service suppliers that comply with this regulation and as we look to create our website and this builder just outstanding!",
      author: "Sarah Edrissi",
      position: "Lead Marketing",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 reveal">
      <h2 className="text-4xl font-bold text-center mb-16">Some clients feedbacks</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition-shadow duration-300 h-full"
            style={{ minHeight: '400px' }}
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                {testimonial.logo}
                <span className="font-bold text-xl text-gray-800">{testimonial.company}</span>
              </div>
              <p className="text-gray-600 mb-8 text-[17px] leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>

            <div className="flex items-center mt-auto">
              <img
                src={testimonial.avatar}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-[16px] text-black leading-none">{testimonial.author}</p>
                <p className="text-gray-500 text-[15px]">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-16">
        <button className="flex items-center gap-2 text-green-700 font-semibold hover:underline text-lg">
          See all feedbacks
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}