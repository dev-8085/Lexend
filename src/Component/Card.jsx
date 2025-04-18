import React from "react";
import Feature01 from "../assets/feature01.svg";
import Feature02 from "../assets/feature02.svg";
import Feature03 from "../assets/feature03.svg";

// ✅ Reusable FeatureCard component
const FeatureCard = ({ bgColor, imgWrapperBg, imgSrc, title, description, link }) => {
  return (
    <div className={`rounded-3xl p-8 flex flex-col items-start text-left`} style={{ backgroundColor: bgColor }}>
      <div className={`rounded-xl p-6 w-full flex-1`} style={{ backgroundColor: imgWrapperBg }}>
        <img src={imgSrc} alt={title} className="w-full h-auto" />
      </div>
      <h3 className="text-[20px] sm:text-[22px] font-semibold text-[#1C1C1C] mt-6">
        {title}
      </h3>
      <p className="text-[#4D4D4D] text-[16px] mt-4 leading-relaxed">
        {description}
      </p>
      {link && (
        <a
          href={link.href}
          className="text-green-700 font-medium text-[16px] mt-4 inline-block hover:underline"
        >
          {link.text}
        </a>
      )}
    </div>
  );
};

const Slide = () => {
  return (
    <main className="bg-white text-gray-700 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      {/* Top Heading Section */}
      <section className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4">
        <h2 className="text-[32px] sm:text-[48px] font-extrabold leading-tight sm:leading-[60px] text-black tracking-tight reveal">
          Smart features for your business
        </h2>
        <p className="text-[18px] sm:text-[22px] leading-[28px] sm:leading-[32px] text-gray-500 reveal">
          We focus on helping you to make useful content more accessible with an
          ultimate goal for a good sharing profit as a content creator.
        </p>
      </section>

      {/* Features Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 px-4 sm:px-0">
        <FeatureCard
          bgColor="#F3ECE6"
          imgWrapperBg="#FAF1C9"
          imgSrc={Feature01}
          title="Share tools quickly and confidently in minutes"
          description="This powerful tool eliminates the need to leave Salesforce to get things done as I can create a custom proposal with dynamic pricing tables. You can also customize your own dynamic versions."
        />

        <FeatureCard
          bgColor="#F3ECE6"
          imgWrapperBg="#F9E6E0"
          imgSrc={Feature02}
          title="Connect every part of your entire business"
          description="Keep data consistent, with native CRM integrations that streamline your entire Tool workflow."
          link={{ href: "#", text: "See all integrations →" }}
        />

        <FeatureCard
          bgColor="#F3ECE6"
          imgWrapperBg="#D6E3E3"
          imgSrc={Feature03}
          title="Maintain compliance and control your apps"
          description="Improve security and trust with built-in legally binding e-Signatures. Create pre-approved templates, content blocks and lock all legal information to prevent costly mistakes."
        />
      </section>
    </main>
  );
};

export default Slide;
