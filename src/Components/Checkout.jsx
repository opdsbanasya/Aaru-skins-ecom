import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const confirmationHandle = (shippingData) => {
    navigate("/confirmation", { state: { shippingData } });
  };

  const [shippingData, setShippingData] = useState({
    name: "",
    phoneNum: "",
    phoneModel: "",
    email: "",
  });

  const handleData = (e) => {
    setShippingData({ ...shippingData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[60%]  flex flex-col items-center gap-5">
      <h2 className="text-2xl font-semibold">Billing details</h2>
      <form
        action=""
        className="w-full min-h-[75vh] px-12 py-6 border-2 border-black shadow-br rounded-md space-y-3"
      >
        <input
          className="bg-zinc-300 w-full h-10 outline-none px-3 rounded-md"
          type="text"
          onChange={handleData}
          name="name"
          placeholder="Full name"
          required
        />
        <section className="flex bg-zinc-300 h-10 px-2 items-center rounded-md justify-center overflow-hidden">
          <img
            className="h-10 p-1 "
            src="https://images.emojiterra.com/twitter/v14.0/1024px/1f1ee-1f1f3.png"
            alt="India flag"
          />
          <h5 className="p-1">+91</h5>
          <input
            className="bg-zinc-300 w-full h-10 outline-none px-2 rounded-md"
            type="number"
            onChange={handleData}
            name="phoneNum"
            id=""
            placeholder="Mobile number"
            required
          />
        </section>

        <input
          className="bg-zinc-300 w-full h-10 outline-none px-3 rounded-md"
          type="text"
          onChange={handleData}
          name="phoneModel"
          id=""
          placeholder="Phone Model"
          required
        />
        <input
          className="bg-zinc-300 w-full h-10 outline-none px-3 rounded-md"
          type="email"
          onChange={handleData}
          name="email"
          id=""
          placeholder="Email"
          required
        />
        <input
          className="bg-zinc-300 w-full h-10 outline-none px-3 rounded-md"
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <input
          className="bg-zinc-300 w-full h-10 outline-none px-3 rounded-md"
          type="text"
          name="city"
          placeholder="City"
          required
        />
        <input
          className="bg-zinc-300 w-full h-10 outline-none px-3 rounded-md"
          type="number"
          name="pinCode"
          placeholder="Pincode"
          required
        />
        <textarea
          className="bg-zinc-300 w-full h-20 py-2 outline-none px-3 rounded-md resize-none"
          name="massage"
          id=""
          placeholder="Additional information..."
        ></textarea>
        <input
          onClick={() => confirmationHandle(shippingData)}
          className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Checkout;
