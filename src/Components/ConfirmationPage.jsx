import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ConfirmationPage = () => {
  const navigate = useNavigate();
  const handleBackToHome = () => {
    navigate("/");
    window.scrollTo(0,0)
  };
  
  const location = useLocation();
  const { shippingData } = location.state || {};

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start gap-10 mt-10 ">
      <h2 className="text-2xl font-medium underline">Order Confirmation</h2>
      <section className="flex flex-col items-center justify-center">
        <img
          className="h-20 mb-3"
          src="https://media.tenor.com/images/4af7c6db69b3372274a57644605b24ec/tenor.gif"
          alt=""
        />
        <h4 className="text-xl font-semibold mb-2">
          Thank you for your purchase!
        </h4>
        <p className="text-sm">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{shippingData.email}</span>
        </p>
        <p className="text-sm mt-1">
          Order No. : <span className="font-semibold ">152268452</span>
        </p>
        <p className="text-sm mt-1">
          Order Status :{" "}
          <span className="font-semibold px-1 py-0.5 bg-red-500 rounded-md text-white">
            Pending
          </span>
        </p>
      </section>
      <button
        onClick={handleBackToHome}
        className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
      >
        Back to home
      </button>
    </div>
  );
};

export default ConfirmationPage;
