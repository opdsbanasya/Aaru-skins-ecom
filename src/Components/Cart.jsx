import React, { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { product, catName, val } = location.state || {};

  const initialCartData = [];
  // If product data is received, add it to the cartData array
  if (product && val > 0) {
    initialCartData.push({
      id: product.id,
      name: product.name,
      quantity: val,
      price: product.price,
      image: product.image,
    });
  }
  const [cartData, setCartData] = useState(initialCartData);
  const [summaryTotalPrice, setSummaryTotalPrice] = useState(0);

  useEffect(() => {
    // Calculate the total price
    const total = cartData.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);

    // Update the price state
    setSummaryTotalPrice(total);
  }, [cartData]);

  const handleQuantityChange = (index, change) => {
    const newCartData = [...cartData];
    if (
      newCartData[index].quantity + change >= 0 &&
      newCartData[index].quantity + change <= 10
    ) {
      newCartData[index].quantity += change;
      setCartData(newCartData);
    }
  };

  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/cart/checkout");
  };
  const handleEmptyCart = () => {
    navigate("/products");
    window.scrollTo(0, 0);
  };
  return cartData.length === 0 ? (
    <section className="w-full h-[50vh] flex flex-col items-center gap-7">
      <h1 className="w-full  text-center mt-10 text-3xl font-semibold">
        No Item to Checkout
      </h1>
      <img
        className="h-[30%]"
        src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-28/90/empty_cart-512.png"
        alt=""
      />
      <button
        onClick={handleEmptyCart}
        className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
      >
        Go to Products
      </button>
    </section>
  ) : (
    <div className="min-h-screen w-full flex ">
      <section className="w-1/3 bg-zinc-200 px-10 py-5 space-y-5">
        <h2 className="text-xl font-semibold border-b-2 border-b-black">
          Order summary
        </h2>
        <section className="w-full flex flex-col justify-center gap-2 items-center border-b-2 border-b-black">
          {cartData.map((item, index) => (
            <section
              key={index}
              className="w-full flex justify-between items-center border-b-[1px] border-b-zinc-300"
            >
              <h3 className="text-md">{item.name}</h3>
              <h6 className="text-md">{item.quantity}</h6>
              <h6 className="text-md">₹{item.price}</h6>
            </section>
          ))}
        </section>

        <section className="w-full flex justify-between items-center border-b-2 border-b-black">
          <h4 className="text-md">Total amount</h4>
          <h6 className="text-md">₹{summaryTotalPrice}</h6>
        </section>

        <button
          onClick={handleCheckout}
          className="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none"
        >
          Checkout
        </button>
      </section>
      <section className="w-2/3 flex flex-col items-center gap-5">
        <h2 className="text-2xl underline font-medium">Cart</h2>
        {cartData.map((item, index) => (
          <section
            key={index}
            className="w-[60%] flex items-start justify-between py-8 px-10 shadow-br rounded-md border-2 border-black"
          >
            <section className="h-32">
              <img
                className="h-full"
                src={item.image || "https://via.placeholder.com/150"}
                alt={item.name}
              />
            </section>
            <section className="space-y-2 w-[30%]">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <h3 className="opacity-70">{catName}</h3>
              <h5 className="text-sm">Free Size</h5>
              <h5 className="text-sm">₹{item.price}</h5>
            </section>
            <section className="ml-28 flex flex-col items-center justify-between h-[85%]">
              <section className="flex items-center justify-start gap-2 bg-zinc-300 w-fit px-2 py-1 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(index, -1)}
                  className="w-6 h-6 hover:bg-zinc-100 rounded-full"
                >
                  -
                </button>
                <h4>{item.quantity}</h4>
                <button
                  onClick={() => handleQuantityChange(index, 1)}
                  className="w-6 h-6 hover:bg-zinc-100 rounded-full"
                >
                  +
                </button>
              </section>
              <h5>₹{item.price * item.quantity}</h5>
            </section>
          </section>
        ))}
        <hr />
        <Outlet />
      </section>
    </div>
  );
};

export default Cart;
