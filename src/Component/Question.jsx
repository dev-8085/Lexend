import { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function Question() {
  const [openItem, setOpenItem] = useState(null);

  const faqItems = [
    {
      question: "Do I need to know about how to code?",
      answer: "Yes, you need to have a fair amount of knowledge in dealing with HTML/CSS as well as JavaScript in order to be able to use Lexend.",
    },
    {
      question: "Can I use it for commercial projects?",
      answer: "Yes, you can use Lexend for commercial projects. There are no restrictions on commercial usage.",
    },
    {
      question: "Can I use it for multiple projects?",
      answer: "Absolutely! You can use Lexend across as many projects as you need without additional licensing.",
    },
    {
      question: "Can I use this to create and sell a product?",
      answer: "Yes, you can create and sell products that use Lexend. There are no royalty fees associated with products you create.",
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with your purchase for any reason.",
    },
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <div className="max-w-[800px] w-full mx-auto px-1 pb-24 reveal">
      <h1 className="text-[32px] sm:text-[36px] font-bold text-center mb-10 leading-tight tracking-tight text-[#0f0f0f]">
        Frequently asked questions:
      </h1>

      <div className="bg-[#f7f0eb] rounded-2xl p-6 sm:p-8">
        {faqItems.map((item, index) => (
          <div key={index}>
            <div
              onClick={() => toggleItem(index)}
              className="flex justify-between items-center cursor-pointer py-6"
            >
              <h2 className="text-[18px] sm:text-[20px] font-semibold text-[#0f0f0f]">
                {item.question}
              </h2>
              <button className="text-[#0f0f0f]">
                {openItem === index ? <X size={20} /> : <Plus size={20} />}
              </button>
            </div>

            {openItem === index && (
              <div className="pb-6 text-[16px] text-[#4f4f4f] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
