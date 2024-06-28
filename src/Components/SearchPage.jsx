import React, { useEffect, useState } from "react";
import LatestProduct from "./LatestProduct";
import { useLocation, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const location = useLocation();
  const { res, filterdata } = location.state || {};
  const [searchProductData, setSearchProductData] = useState([]);
  const [searchCategoryData, setSearchCategoryData] = useState([]);

  useEffect(() => {
    if (res && filterdata) {
      const categoryResults = [];
      filterdata.forEach((category) => {
        if (category.catName.toLowerCase().includes(res.toLowerCase())) {
          categoryResults.push(category);
        }
      });
      setSearchCategoryData(categoryResults);
    }
  }, [res, filterdata]);

  useEffect(() => {
    if (res && filterdata) {
      const productResults = [];
      filterdata.forEach((category) => {
        category.skins.forEach((skin) => {
          if (skin.name.toLowerCase().includes(res.toLowerCase())) {
            productResults.push(skin);
          }
        });
      });
      setSearchProductData(productResults);
    }
  }, [res, filterdata]);


  const navigate = useNavigate();
  const productClickHandle = (product) =>{
    console.log(product);
  }
  const categoryClickHandle = (category) =>{
    console.log(category);
  }

  return (
    <div className="w-full min-h-screen relative">
      <section className={`w-full h-full relative ${res.length !== 0 ? "block" : "hidden"}`}>
        {searchCategoryData.length !== 0 && searchProductData.length !== 0 ? (
          <section className="w-[22.5%] min-h-10 bg-zinc-300 absolute top-1 left-[55%] rounded-md flex flex-col ">
            <section
              className={`w-full ${
                searchCategoryData.length !== 0 ? "block" : "hidden"
              }`}
              
            >
              {searchCategoryData.map((category, index) => (
                <section
                  key={index}
                  className="w-full flex justify-between items-center px-5 cursor-pointer"
                  onClick={()=>categoryClickHandle(category)}
                >
                  <h1 className="w-full h-10 py-2 text-md">
                    {category.catName}{" "}
                    <sup className="py-0.5 px-1 text-white bg-blue-500 text-[8px] rounded-md">
                      Category
                    </sup>
                  </h1>
                  <i className="ri-arrow-right-up-line text-xl"></i>
                </section>
              ))}
            </section>
            <section
              className={`w-full ${
                searchProductData.length !== 0 ? "block" : "hidden"
              }`}
            >
              {searchProductData.map((product, index) => (
                <section
                  key={index}
                  className="w-full flex justify-between items-center px-5 cursor-pointer"
                  onClick={()=>productClickHandle(product)}
                >
                  <h1 className="w-full h-10 py-2 text-md">{product.name}</h1>
                  <i className="ri-arrow-right-up-line text-xl"></i>
                  <hr />
                </section>
              ))}
            </section>
          </section>
        ) : (
          <section className="w-[22.5%] min-h-10 bg-zinc-300 absolute top-1 left-[55%] rounded-md flex flex-col gap-2 ">
            <h1 className="h-10 py-2 px-3 text-md">No result</h1>
          </section>
        )}

      </section>
        <LatestProduct />
    </div>
  );
};

export default SearchPage;
