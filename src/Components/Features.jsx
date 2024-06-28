import React from "react";

function Features() {
  return (
    <div className=" w-full h-[50vh] flex items-center justify-center mt-6 py-10 gap-10">
      <div className="shadow-upper-shadow w-1/4 h-full py-2 px-5 flex flex-col items-center justify-between gap-2 border-2 border-black rounded-lg">
        <img
          className="h-1/2"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSTVpWEU5lDn8qaMSrlFstQkvcW7st6ntHURsWnI2xv-KyHZM8M"
          alt=""
        />
        <h2 className="text-md font-semibold ">Fast & Free Delivery</h2>
        <h4 className="text-justify text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          laboriosam distinctio quae.
        </h4>
      </div>
      <div className="shadow-upper-shadow w-1/4 h-full py-2 px-5 flex flex-col items-center justify-between gap-2 border-2 border-black rounded-lg">
        <img
          className="h-1/2"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTTDmxW5QZPHSNABZ9h8Re__2MPk5lSuxordaSwNpu3X1Y0zwZg"
          alt=""
        />
        <h2 className="text-md font-semibold ">Cancellation policy</h2>
        <h4 className="text-justify text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          laboriosam distinctio quae.
        </h4>
      </div>
      <div className="shadow-upper-shadow  w-1/4 h-full py-2 px-5 flex flex-col items-center justify-between gap-2 border-2 border-black rounded-lg">
        <img
          className="h-1/2"
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <h2 className="text-md font-semibold ">24x7 Support</h2>
        <h4 className="text-justify text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
          laboriosam distinctio quae.
        </h4>
      </div>
    </div>
  );
}

export default Features;
