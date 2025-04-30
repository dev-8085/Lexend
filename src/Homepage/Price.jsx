import { Star } from "lucide-react";
import stipe    from '../assets/stipe.svg'
import bitbucket from '../assets/bitbucket.svg'
import zapier    from '../assets/zapier.svg'
import asana    from '../assets/asana.svg'
import Drive    from '../assets/drive.svg'
import mailchimp from '../assets/mailchimp.svg'

export default function PricingHero() {
  return (
   <div className="relative w-full min-h-[32rem] flex items-center justify-center bg-white overflow-hidden ">

  <div className="absolute inset-0 pointer-events-none hidden lg:block">
  {[140, 110, 80].map((size, i) => (
    <svg
      key={i}
      className="absolute"
      style={{
        width: `${size}%`,
        height: '130%',
        top: 0,
        left: `${(100 - size) / 2}%`,
      }}
    >
      <circle
        cx="50%"
        cy="40%"
        r="36%" 
        fill="none"
        stroke="#E0E0E0"
        strokeWidth="1"
        strokeDasharray="4 3"
      />
    </svg>
  ))}
</div>

  
  
  <img src={asana} alt="Asana" className="hidden lg:block absolute top-[34%] left-[12%] w-11 h-11 rounded-full bg-red-100 p-2" />
<img src={stipe} alt="Stripe" className="hidden lg:block absolute top-[15%] left-[28%] w-14 h-14 rounded-full bg-purple-100 p-2" />
<img src={bitbucket} alt="Bitbucket" className="hidden lg:block absolute bottom-[25%] left-[19%] w-14 h-14 rounded-full bg-blue-100 p-2" />
<img src={zapier} alt="Zapier" className="hidden lg:block absolute top-[20%] right-[20%] w-14 h-14 rounded-full bg-orange-100 p-2" />
<img src={Drive} alt="Drive" className="hidden lg:block absolute top-[70%] left-[70%] w-14 h-14 rounded-full bg-purple-100 p-2" />
<img src={mailchimp} alt="Mailchimp" className="hidden lg:block absolute top-[50%] left-[85%] w-14 h-14 rounded-full bg-purple-100 p-2" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="inline-block px-4 py-2 bg-white rounded-full mb-5 shadow mt-4">
          <span className="text-gray-800 font-medium">Get started today!</span>
        </div>

        <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight">
          Seamless integrations
          <br />
          with your <span className="text-teal-700">existing tools</span>
        </h1>

        <p className="text-xl text-gray-800 mb-8">
          See how we help your team solve today’s biggest challenges.
        </p>

        <button className="bg-green-400 hover:bg-green-500 text-gray-800 font-medium py-3 px-8 rounded-md shadow transition mb-12">
          Start your free trial
        </button>

        {/* Trustpilot */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="text-gray-800 font-medium">Excellent</span>
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="bg-teal-600 p-0.5">
                <Star size={16} fill="white" color="white" />
              </div>
            ))}
          </div>
          <span className="text-gray-800">4,000+ reviews on</span>
          <span className="flex items-center">
            <Star size={16} fill="black" color="black" />
            <span className="font-bold ml-1">Trustpilot</span>
          </span>
        </div>
      </div>
    </div>
  );
}
