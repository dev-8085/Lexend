import React from 'react';

const RefundCancellation = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-25">
      <h1 className="text-4xl font-bold mb-8">Refund and Cancellation Policy</h1>
      
      <ul className="space-y-3 mb-8">
        <li className="flex">
          <span className="mr-2">•</span>
          <span>No refund will be provided post 5 days of the amount paid.</span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>No refund will be provided incase of delaye in project completion due to client.</span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>Cancellation of any service renewal should be done 10 days prior to the start of next billing cycle.</span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>If cancellations are made after the start of the billing cycle then no refund will be made</span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>If you signed up for our services, but did not make use of them then you are still entitled to pay us.</span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>Incase of any refund,amount of refund will be credited in the account from which the payment was made within 45 days of service cancellation.</span>
        </li>
        <li className="flex">
          <span className="mr-2">•</span>
          <span>Amazing Web Solutions will not be liable for refund or guarantee of top search ranking, increase of follower(s), post reach under any circumstances</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Cancellation of subscription(s) and refund in case of subscription termination and over-invoicing.</h2>
      
      <ul className="space-y-3 mb-6">
        <li className="flex">
          <span className="mr-2">•</span>
          <span>In case, the subscription payment is denied by the bank/ financial institution due to insufficient balance, change of card details or any other technical or non-technical issue(s), Amazing Web Solutions reserve right to charge ₹ 100 per day as penalty.</span>
        </li>
      </ul>

      <p className="text-sm italic">
        *Amazing Web Solutions reserves the right to change the above refund and cancellation policy at any given point without any prior notice.
      </p>
    </div>
  );
};

export default RefundCancellation;