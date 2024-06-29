import React, { useState } from "react";
import RelatedProducts from "./RelatedProducts";
import { useLocation, useNavigate } from "react-router-dom";

const ProductViewPage = () => {
  const [val, setVal] = useState(0);
  const location = useLocation();
  const { product, skins, catName } = location.state || {};

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleClick = (product, catName, val) => {
    if (val > 0) {
      navigate("/cart", { state: { product, catName, val } });
      window.scrollTo(0, 0);
    } else {
      alert("Please select a quantity greater than 0.");
    }
  };

  return (
    <>
      {!product ? (
        <div>Product not found</div>
      ) : (
        <section className="">
          <div className="w-[80%] mt-10 flex items-center mx-auto justify-center relative">
            <button
              className="cursor-pointer transition-all bg-gray-700 text-white absolute -top-5 -left-16 px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none "
              onClick={handleBack}
            >
              Back
            </button>
            <section className="h-[70vh] bg-zinc-300 rounded-xl shadow-br overflow-hidden">
              <img
                className="h-full object-cover"
                src={product.image}
                alt={product.name}
              />
            </section>
            <section className="w-1/2 h-96 px-10 ">
              <section className="space-y-1">
                <h2 className="text-xl font-semibold ">{product.name}</h2>
                <h5 className="px-2 py-1 bg-blue-500 w-fit text-xs text-white rounded-md">
                  {catName ? catName : "Category"}
                </h5>
                <h4 className="font-semibold ">₹{product.price}</h4>
              </section>
              <section className="w-[85%] text-justify pt-5">
                <p className="text-sm">Removal with ZERO Glue Residue</p>
                <p className="text-sm">
                  ULTRA THIN, you wouldn’t feel a thing.
                </p>
                <p className="text-sm">3M, nothing but the best for you.</p>
                <p className="text-sm">WOW 3D Textures</p>
                <p className="text-xs">
                  It is only for show, You can order according to your phone.
                </p>
              </section>
              <section className="flex mt-2">
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-s-fill"></i>
                <i className="ri-star-half-s-line"></i>
              </section>
              <section className="grid pt-10">
                <h6 className="text-sm col-span-2">Quantity</h6>
                <section className="flex items-center justify-start gap-2 bg-zinc-300 w-fit px-2 py-1 rounded-lg">
                  <button
                    onClick={() =>
                      setVal((prev) => (val !== 0 ? prev - 1 : val))
                    }
                    className=" w-6 h-6 hover:bg-zinc-100 rounded-full"
                  >
                    -
                  </button>
                  <h4>{val}</h4>
                  <button
                    onClick={() =>
                      setVal((prev) => (val !== 10 ? prev + 1 : val))
                    }
                    className=" w-6 h-6 hover:bg-zinc-100 rounded-full"
                  >
                    +
                  </button>
                </section>
                <button
                  onClick={() => handleClick(product, catName, val)}
                  className="px-3 py-1 w-fit bg-blue-600 text-white rounded-md active:shadow-xl"
                >
                  Add to cart
                </button>
              </section>
            </section>
            
          </div>
        </section>
      )}
       <hr className="mt-5" />
       <RelatedProducts />
    </>
  );
};

export default ProductViewPage;
