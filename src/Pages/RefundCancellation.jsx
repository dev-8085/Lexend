import React from 'react';

const RefundCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-[#111827] font-sans mt-15">
      <h1 className="text-3xl font-semibold text-center mb-6">Refund and Cancellation Policy</h1>
      <ul className="space-y-4 text-lg">
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> No refund will be provided post 8 days of the amount paid.
        </li>
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> No refund will be provided in case of delay in project completion due to client.
        </li>
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> Cancellation of any service renewal should be done to days prior to the start of next billing cycle.
        </li>
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> If cancellations are made after the start of the billing cycle then no refund will be made
        </li>
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> If you signed up for our services, but did not make use of them then you are still entitled to pay us.
        </li>
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> Incase of any refund amount of refund will be credited in the account from which the payment was made within 45 days of service cancellation.
        </li>
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> Amazing Web Solutions will not be liable for refund or guarantee of top search ranking. Increase of follower(s), post reach under any circumstances
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Cancellation of subscription(s) and refund in case of subscription termination and over-invoicing.</h2>
      <ul className="space-y-4 text-lg">
        <li className="leading-relaxed">
          <span className="font-semibold">•</span> In case, the subscription payment is denied by the bank/ financial institution due to insufficient balance, change of card details or any other technical or non-technical issue(s). Amazing Web Solutions reserve right to charge € 100 per day as penalty.
        </li>
      </ul>

      <p className="mt-6 text-lg italic">
        *Amazing Web Solutions reserves the right to change the above refund and cancellation policy at any given point without any prior notice.
      </p>
    </div>
  );
};

export default RefundCancellation;