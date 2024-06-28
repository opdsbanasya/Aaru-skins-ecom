import React from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const ProductFilter = () => {
  const location = useLocation();
  const { item } = location.state || {};

  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleClick = (product, skins, catName) => {
    navigate(`/product/${product.name}`, { state: { product, skins, catName } });
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <div className="w-full min-h-96 flex flex-col items-center p-5 pt-10 gap-5">
        <div className="w-full flex items-center gap-20">
            <button
            class="cursor-pointer transition-all bg-gray-700 text-white px-6 py-2 rounded-lg border-green-400 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-xl hover:shadow-green-300 shadow-green-300 active:shadow-none "
            onClick={handleBack}
            >
            Back
            </button>
            <h1 className="text-2xl font-semibold" >{item.catName}</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 px-12">
          
          {item && item.skins ? (
            item.skins.map((skin, index) => (
              <div onClick={() => handleClick(skin, item.skins , item.catName)} key={index} className="w-64 h-[55vh] cursor-pointer rounded-2xl overflow-hidden">
                <div className="w-full h-[90%] rounded-xl">
                  <img className="h-full object-cover object-center" src={skin.image} alt={skin.name} />
                </div>
                <div className="flex items-center justify-between p-2">
                  <h4 className="hover:underline">{skin.name}</h4>
                  <h5>₹{skin.price}</h5>
                </div>
              </div>
            ))
          ) : (
            <p>No skins available for this category.</p>
          )}
        </div>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default ProductFilter;
