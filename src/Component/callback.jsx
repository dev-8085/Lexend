import { useState } from 'react';

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Request sent! We will contact you within 1-2 business days.');
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="mb-6 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Request A <span className="text-red-500">Call Back?</span>
        </h2>
        <p className="text-gray-600 mb-2">
          Please fill out the form and press the submit button.
        </p>
        <p className="text-gray-600">
          We will get back to you with 1-2 business days.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg mb-2">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded placeholder-gray-400"
            placeholder="NAME"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="mobile" className="block text-gray-700 text-lg mb-2">
            Mobile No.<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded placeholder-gray-400"
            placeholder="MOBILE NO."
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-lg mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded placeholder-gray-400"
            placeholder="EMAIL"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-4 rounded transition duration-300"
        >
          SEND REQUEST!
        </button>
      </form>
    </div>
  );
}