import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 text-gray-800 mt-15">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 italic">Effective date: 2020-08-05</p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
          <p>
            Welcome to AmazingWeb.Design. Amazing Web Solutions (“us”, “we”, or “our”) operates www.amazingweb.design
            (hereinafter referred to as “Service”). This Privacy Policy governs your visit and explains how we collect,
            safeguard and disclose information that results from your use of our Service.
          </p>
          <p>
            By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">2. Definitions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data</strong>: Data about a living individual who can be identified from those data.</li>
            <li><strong>Usage Data</strong>: Data collected automatically from the use of the Service.</li>
            <li><strong>Cookies</strong>: Small data files stored on your device.</li>
            <li><strong>Data Controller</strong>: The entity that determines the purpose of processing personal data.</li>
            <li><strong>Data Processor</strong>: A third party who processes data on behalf of the controller.</li>
            <li><strong>Data Subject</strong>: A living individual whose personal data is processed.</li>
            <li><strong>User</strong>: The individual using our Service.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">3. Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">4. Types of Data Collected</h2>
          <p className="font-semibold mt-2">Personal Data may include:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address</li>
            <li>First and last name</li>
            <li>Phone number</li>
            <li>Address, ZIP/Postal code, City, State, Country</li>
            <li>Cookies and Usage Data</li>
          </ul>
          <p className="mt-4">We may also collect Usage Data, Location Data, and Tracking Cookies for analytics and functionality purposes.</p>
        </div>

        {/* Add more sections similarly */}
        
        <div>
          <h2 className="text-2xl font-semibold mb-2">5. Use of Data</h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow participation in interactive features</li>
            <li>To provide customer support</li>
            <li>To monitor usage and detect issues</li>
            <li>To send updates or marketing (optional)</li>
            {/* and so on */}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">10. GDPR Rights</h2>
          <p>If you are a resident of the EU/EEA, you have the right to access, correct, delete, or restrict your personal data.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">11. CalOPPA & 12. CCPA</h2>
          <p>California residents have rights under CalOPPA and CCPA including data access, deletion, and opt-out of personal data sales.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
          <p>If you have questions, contact us at: <a href="mailto:hello@amazingweb.design" className="text-blue-600 underline">hello@amazingweb.design</a></p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
