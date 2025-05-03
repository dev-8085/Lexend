import { useState } from 'react';
import { Phone, User, Mail, ArrowRight, CheckCircle, Clock } from 'lucide-react';
import logo from '../assets/logo.png';
import wallpaper from '../assets/wallpaper.jpg';

export default function EnhancedContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    service: 'e-commerce'
  });

  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10); // Allow only digits, max 10
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormState('success');

      // Reset after 4 seconds
      setTimeout(() => {
        setFormState('idle');
        setFormData({ name: '', mobile: '', email: '', service: 'e-commerce' });
      }, 4000);
    }, 1500);
  };

  const serviceOptions = [
    { value: 'e-commerce', label: 'E-commerce Website' },
    { value: 'app', label: 'Mobile App Development' },
    { value: 'crm', label: 'CRM Integration' },
    { value: 'other', label: 'Other Services' }
  ];

  if (formState === 'success') {
    return (
      <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 flex">
        <div className="hidden md:block w-1/2 relative">
          <img 
            src={wallpaper} 
            alt="Consultation" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-2">Let's Build Something Amazing</h3>
              <p className="text-emerald-200">Our expert will contact you within 24 hours</p>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle size={40} className="text-emerald-500" />
              </div>
            </div>
          </div>
          
          <div className="px-6 py-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Thank You!</h3>
            <p className="text-gray-600 mb-6">Your request has been received successfully.</p>
            <p className="text-sm text-gray-500">Our team will contact you shortly to discuss your requirements.</p>
            
            <div className="mt-8 flex items-center justify-center text-emerald-600 font-medium">
              <Clock size={18} className="mr-2" />
              <span>Returning to form in a few seconds...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
      {/* Left Side - Wallpaper with overlay */}
      <div className="hidden md:block w-full md:w-1/2 relative">
        <img 
          src={wallpaper} 
          alt="Consultation" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-8 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Transform Your Digital Presence</h2>
            <p className="text-emerald-200">
              Join 500+ businesses who've accelerated their growth with our solutions
            </p>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center text-white">
              <CheckCircle className="text-emerald-400 mr-2" size={18} />
              <span>No obligation quote</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="text-emerald-400 mr-2" size={18} />
              <span>Free 30-minute consultation</span>
            </div>
            <div className="flex items-center text-white">
              <CheckCircle className="text-emerald-400 mr-2" size={18} />
              <span>Custom solutions for your business</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Get Your Free Consultation</h2>
          <p className="text-gray-600">
            Tell us your requirements and our experts will connect with you shortly
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <label htmlFor="name" className="block text-gray-700 font-medium text-sm mb-1.5">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                placeholder="Your full name"
                required
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="mobile" className="block text-gray-700 font-medium text-sm mb-1.5">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Phone size={18} className="text-gray-400" />
              </div>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                placeholder="10-digit mobile number"
                required
                maxLength={10}
                inputMode="numeric"
                pattern="\\d*"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="email" className="block text-gray-700 font-medium text-sm mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail size={18} className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                placeholder="Your email address (optional)"
              />
            </div>
          </div>

          <div className="relative">
            <label htmlFor="service" className="block text-gray-700 font-medium text-sm mb-1.5">
              Service Required <span className="text-red-500">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white transition-all"
              required
            >
              {serviceOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 top-6 flex items-center pr-3 pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          <button
            type="submit"
            disabled={formState === 'submitting'}
            className={`w-full flex items-center justify-center bg-gradient-to-r from-emerald-600 to-teal-700 text-white font-medium py-3.5 px-4 rounded-lg transition-all duration-300 hover:from-emerald-700 hover:to-teal-800 shadow-md hover:shadow-lg ${formState === 'submitting' ? 'opacity-80 cursor-not-allowed' : ''}`}
          >
            {formState === 'submitting' ? (
              <>
               <img src={logo} alt="Logo" className="h-10 mb-6" />
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                PROCESSING...
              </>
            ) : (
              <>
                GET FREE CONSULTATION <ArrowRight size={18} className="ml-2" />
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">
            By submitting this form, you agree to our <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a> and <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}