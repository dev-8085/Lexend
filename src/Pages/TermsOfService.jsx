import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-[#111827] font-sans mt-15">
      <h1 className="text-4xl font-extrabold mb-10">Terms Of Service</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">1. Terms</h2>
        <p className="text-base leading-relaxed">
          By accessing the website at<a href="https://altdesignz.com/" className="text-blue-600 hover:underline ml-1">
          https://altdesignz.com/
          </a> you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">2. Use License</h2>
        <p className="text-base leading-relaxed mb-3">
          Permission is granted to temporarily download one copy of the materials (information or software) on AmazingWeb.Design's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
        </p>
        <ul className="list-disc pl-6 text-base space-y-1">
          <li>modify or copy the materials;</li>
          <li>use our developed website/app as service;</li>
          <li>all ready-to-use websites and apps are the property of AmazingWeb.Design. The content, data, or transfer of any technology is solely at the discretion of the agency.</li>
          <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
          <li>attempt to decompile or reverse engineer any software contained on AmazingWeb.Design's website;</li>
          <li>remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.</li>
        </ul>
        <p className="text-base leading-relaxed mt-3">
          This license shall automatically terminate if you violate any of these restrictions and may be terminated by AmazingWeb.Design at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">3. Disclaimer</h2>
        <p className="text-base leading-relaxed mb-3">
          The materials on AmazingWeb.Design's website are provided on an 'as is' basis. AmazingWeb.Design makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>
        <p className="text-base leading-relaxed">
          Further, AmazingWeb.Design does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
