import React from 'react';

export default function PaymentAccept() {
  return (
    <div className="flex flex-col items-center mt-8">
      <span className="text-gray-600 mb-2">We accept</span>
      <div className="flex space-x-4">
        <img src="/images/visa.png" alt="Visa" className="size-24 w-auto" />
        <img src="/images/mastercard.png" alt="MasterCard" className="size-24 w-auto" />
        <img src="/images/paypal.png" alt="PayPal" className="size-24 w-auto" />
        <img src="/images/upi.png" alt="UPI" className="size-24 w-auto" />
      </div>
    </div>
  );
} 