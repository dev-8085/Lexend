import { Check } from 'lucide-react';

const Card3 = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16 font-sans">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">Simple, scalable pricing.</h1>
        <p className="text-xl text-gray-600">No extra charges. No hidden fees.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Essentials Card */}
        <div className="bg-[#F6EEE9] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Essentials</h2>
          <p className="text-gray-600 mb-6">For creating impressive tools that generate results.</p>
          
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-gray-900">$19 USD</h3>
            <p className="text-gray-600">Seat per month, 2 seats max</p>
          </div>
          
          <button className="w-full bg-[#13715B] hover:bg-[#0E614D] text-white py-3 rounded-lg mb-2 font-medium transition-colors">
            Start a free trial
          </button>
          <p className="text-gray-500 text-center text-sm mb-8">No credit card required</p>
          
          <h4 className="font-bold mb-4 text-gray-900">Key features:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Real-time tracking and notifications</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Real-time analytics</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Drag and drop templates</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Project Management</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">24/7 email and chat support</span>
            </li>
          </ul>
        </div>

        {/* Popular Business Card */}
        <div className="bg-[#F6EEE9] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow relative">
          <div className="absolute top-0 right-0 bg-[] text-white text-xs font-medium py-1 px-3 rounded-bl-lg rounded-tr-lg">
            Popular
          </div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Business</h2>
          <p className="text-gray-600 mb-6">For seamless integrations and sending tools in bulk.</p>
          
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-gray-900">$49 USD</h3>
            <p className="text-gray-600">Seat cost per month</p>
          </div>
          
          <button className="w-full bg-[#13715B] hover:bg-[#0E614D] text-white py-3 rounded-lg mb-2 font-medium transition-colors">
            Start a free trial
          </button>
          <p className="text-gray-500 text-center text-sm mb-8">No credit card required</p>
          
          <h4 className="font-bold mb-4 text-gray-900">Everything in Essentials, plus:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">CRM and Zapier integrations</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Content reporting</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Unlimited team workspaces</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Approval workflows</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Salesforce integration*</span>
            </li>
          </ul>
        </div>

        {/* Enterprise Card */}
        <div className="bg-[#F6EEE9] border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-bold mb-2 text-gray-900">Enterprise</h2>
          <p className="text-gray-600 mb-6">For large companies with complex Tool workflows.</p>
          
          <div className="mb-6">
            <h3 className="text-4xl font-bold text-gray-900">Let's talk</h3>
            <p className="text-gray-600">Per-seat or per-tool pricing</p>
          </div>
          
          <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg mb-2 font-medium transition-colors">
            Contact sales
          </button>
          <p className="text-gray-500 text-center text-sm mb-8">Respond within 24 hrs max</p>
          
          <h4 className="font-bold mb-4 text-gray-900">Everything in Business, plus:</h4>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Unlimited files uploads</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Real-time tracking and notifications</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">User performance</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">SSO support and custom user roles</span>
            </li>
            <li className="flex items-start">
              <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={18} />
              <span className="text-gray-600">Bulk send & Forms*</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center mt-12 text-gray-500 text-sm">
        Prices exclude any applicable taxes.
      </div>
    </div>
  );
};

export default Card3;