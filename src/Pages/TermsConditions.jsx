import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-[#111827] font-sans mt-15">
      <h1 className="text-4xl font-extrabold mb-10">Terms and Conditions</h1>

      {/* Refund Policy */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Refund Policy</h2>
        <p className="text-base leading-relaxed">
          No refund will be provided post 5 days of the amount paid.
        </p>
      </section>

      {/* Definition of Transaction Fees */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Definition of "No Transaction Fees"</h2>
        <p className="text-base leading-relaxed">
          AmazingWeb.Design does not charge you any fees relating to the processing of transactions under your account ("Transaction Fees"). However, your selected payment processor, such as PayPal or Stripe, may still charge you Transaction Fees for each payment you receive. You will be solely responsible for any such Transaction Fees.
        </p>
      </section>

      {/* Privacy */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Privacy</h2>
        <p className="text-base leading-relaxed mb-3">
          The AmazingWeb.Design Privacy Policy sets out our obligations with respect to the safeguarding, collection and use of Subscribers' personal information. The AmazingWeb.Design Privacy Policy is subject to modification from time to time, and such changes are effective upon posting of the modified policy to this URL: 
          <a href="http://www.AmazingWeb.Design/terms-and-conditions/" className="text-blue-600 hover:underline ml-1">
            http://www.AmazingWeb.Design/terms-and-conditions/
          </a>
        </p>
        <p className="text-base leading-relaxed">
          Email newsletters will only be sent directly by AmazingWeb.Design. Subscriber information will not be disclosed or sold to any third parties. You may also be contacted by AmazingWeb.Design's designated customer review software provider for customer experience and service feedback.
        </p>
      </section>

      {/* Reservation of Rights */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Reservation of Rights</h2>
        <ul className="list-disc pl-6 space-y-2 text-base">
          <li>Censor any website hosted on its servers that is deemed inappropriate.</li>
          <li>Review any account for excessive space or bandwidth utilization and to suspend service to those accounts that have exceeded allowed levels.</li>
          <li>Terminate any account for non-payment of fees, for providing fraudulent account information or fraudulent payment information.</li>
          <li>Terminate any account if the contents of its website results in, or are the subject of, legal action or threatened legal action against AmazingWeb.Design or any of its affiliates or partners.</li>
          <li>Terminate any account for unsolicited, commercial e-mailing (i.e., Spam), illegal access to other computers or networks (i.e., hacking), or distribution of Internet viruses.</li>
          <li>Suspend the Service at any time for any duration when necessary, without penalty or liability to ourselves.</li>
          <li>You agree that it may be necessary for us to temporarily suspend the Service for technical reasons or to maintain network equipment or facilities.</li>
        </ul>
      </section>

      {/* Indemnification */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Indemnification</h2>
        <p className="text-base leading-relaxed">
          You agree to indemnify and hold AmazingWeb.Design, its affiliates, sponsors, partners, directors, officers and employees harmless from and against, and to reimburse AmazingWeb.Design with respect to, any and all losses, damages, liabilities, claims, judgments, settlements, fines, costs and expenses (including legal fees) arising out of or relating to your breach of this Agreement or use of the Services by you or any third party.
        </p>
      </section>

      {/* Force Majeure */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Force Majeure</h2>
        <p className="text-base leading-relaxed">
          AmazingWeb.Design will not be liable for any delay, interruption or failure in the provisioning of services if caused by acts of God, war, fire, flood, earthquake, power failure, labor disputes, or other events beyond our control that may prevent or delay service provisioning.
        </p>
      </section>

      {/* Age of Majority */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Age of Majority</h2>
        <p className="text-base leading-relaxed">
          AmazingWeb.Design does not accept agreements and payments from persons under the legal age of 18 years. By submitting your account application, you confirm that you are over 18 years of age or your parent or legal guardian has agreed to accept this Agreement on your behalf.
        </p>
      </section>

      {/* Entire Agreement */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Entire Agreement</h2>
        <p className="text-base leading-relaxed">
          This Agreement, as may be updated from time to time and posted at 
          <a href="http://www.AmazingWeb.Design/terms-and-conditions/" className="text-blue-600 hover:underline ml-1">
            http://www.AmazingWeb.Design/terms-and-conditions/
          </a>, 
          represents the complete agreement and understanding between us with respect to the Service and supersedes any other written or oral agreement.
        </p>
      </section>

      {/* Renewal Charges */}
      <section className="mb-10">
        <h2 className="text-2xl font-extrabold mb-2">Renewal Charges</h2>
        <p className="text-base leading-relaxed">
          Renewal charges will be 80% of the defined product amount.
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
