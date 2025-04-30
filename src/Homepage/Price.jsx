import { Star } from "lucide-react";
import stipe     from '../assets/stipe.svg'
import bitbucket from '../assets/bitbucket.svg'
import zapier    from '../assets/zapier.svg'

export default function PricingHero() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Background dotted circles */}
      <div className="absolute inset-0 pointer-events-none">
        {[140, 110, 80].map((size, i) => (
          <svg
            key={i}
            className="absolute"
            style={{
              width: `${size}%`,
              height: `${size}%`,
              top: `${(100 - size) / 2}%`,
              left: `${(100 - size) / 2}%`,
            }}
          >
            <circle
              cx="50%"
              cy="50%"
              r="49.5%"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </svg>
        ))}
      </div>

      {/* Tool icons - Use accurate positioning and real logos */}
      <img src="" alt="Asana" className="absolute top-[18%] left-[13%] w-12 h-12 rounded-full bg-red-100 p-2" />
      <img src={stipe} alt="Stripe" className="absolute top-[5%] left-[48%] w-14 h-14 rounded-full bg-purple-100 p-2" />
      <img src={bitbucket} alt="Bitbucket" className="absolute bottom-[30%] left-[14%] w-14 h-14 rounded-full bg-blue-100 p-2" />
      <img src={zapier} alt="Zapier" className="absolute top-[20%] right-[15%] w-14 h-14 rounded-full bg-orange-100 p-2" />
      <div className="absolute bottom-[20%] right-[12%] w-16 h-16 rounded-full bg-yellow-400" />
      <img src="/icons/google-drive.svg" alt="Google Drive" className="absolute right-[33%] top-[48%] w-10 h-10" />

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <div className="inline-block px-4 py-2 bg-white rounded-full mb-4 shadow">
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
