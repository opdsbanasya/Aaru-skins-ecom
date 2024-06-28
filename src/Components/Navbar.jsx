import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {

  const filterdata = [
    {
      catName: "Midas Touch",
      skins: [
        {
          name: "Deco Radiance",
          price: 599,
          image: "https://www.layers.shop/cdn/shop/files/15_Pro_Deco_Radiance_WB.png?v=1715752259&width=1540",
        },
        {
          name: "Golden Maze",
          price: 799,
          image: "https://www.layers.shop/cdn/shop/files/14_pro_golden_maze_wb.png?v=1716551498&width=1540",
        },
        {
          name: "King",
          price: 499,
          image: "https://www.layers.shop/cdn/shop/files/14_pro_king_wb.png?v=1716551501&width=1540",
        },
        {
          name: "Dangerous Idea",
          price: 599,
          image: "https://www.layers.shop/cdn/shop/files/14_pro_shikara_c10909c7-80ee-4b1b-9fb3-6f2e69e727da.png?v=1717071214&width=1540",
        },
      ],
    },
    {
      catName: "Dark",
      skins: [
        {
          name: "Black Smoke",
          price: 599,
          image: "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Smoke.png?v=1706086159&width=1080",
        },
        {
          name: "Black Leather",
          price: 499,
          image: "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Leather.png?v=1706086150&width=1080",
        },
        {
          name: "Black Fluid",
          price: 699,
          image: "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Fluid.png?v=1706086088&width=1080",
        },
        {
          name: "Black Crack",
          price: 899,
          image: "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Crack.png?v=1706086104&width=1080",
        },
        {
          name: "Ultra Titanium",
          price: 599,
          image: "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Titanium.png?v=1706086067&width=1080",
        },
      ],
    },
    {
        catName: "Cyberforce",
        skins: [
          {
            name: "Machina Hud",
            price: 499,
            image: "https://www.layers.shop/cdn/shop/products/Google_Pixel_8_Pro_Machina_Hud.png?v=1701156317&width=1080",
          },
          {
            name: "Cyberhud",
            price: 699,
            image: "https://www.layers.shop/cdn/shop/products/Google_Pixel_8_Pro_Cyberhud.png?v=1701156320&width=1080",
          },
          {
            name: "Quantum Weave",
            price: 799,
            image: "https://www.layers.shop/cdn/shop/files/Google_Pixel_8_Pro_Quantum_Weave_29a77e85-1bd7-4c9a-841e-d1e73c0f63d5.png?v=1712228935&width=1080",
          },
        ],
    },
    {
        catName: "Retro Funk",
        skins: [
          {
            name: "Gameboi",
            price: 799,
            image: "https://www.layers.shop/cdn/shop/products/Vivo_X80_Pro_Gameboi.png?v=1709277701&width=1080",
          },
          {
            name: "Sick Beat",
            price: 749,
            image: "https://www.layers.shop/cdn/shop/products/Vivo_X80_Pro_Sick_Beat.png?v=1709019200&width=1080",
          },
          {
            name: "90's Kid",
            price: 699,
            image: "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-90_s-kid--back_dd518516-5700-4d7f-9327-339022d0c2f1.jpg?v=1693292809&width=1080",
          },
          {
            name: "Metamor",
            price: 699,
            image: "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-metamor--back.jpg?v=1692612508&width=1080",
          },
          {
            name: "Dj Panda",
            price: 549,
            image: "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-dj-panda--back.jpg?v=1677048975&width=1080",
          },
          {
            name: "Grafitti",
            price: 749,
            image: "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-grafitti--back.jpg?v=1677048977&width=1080",
          },
          {
            name: "Dance Weekend",
            price: 899,
            image: "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-dance-weekend--back.jpg?v=1692612488&width=1080",
          },
        ],
    },
    {
        catName: "Sky is not the Limit",
        skins: [
          {
            name: "Space Blueprint",
            price: 799,
            image: "https://www.layers.shop/cdn/shop/files/nothing-phone-2-space-blueprint--back.jpg?v=1689079318&width=1080",
          },
          {
            name: "Spaceboy",
            price: 599,
            image: "https://www.layers.shop/cdn/shop/files/nothing-phone-2-spaceboy--back.jpg?v=1689079427&width=1080",
          },
          {
            name: "Quantum Weave",
            price: 699,
            image: "https://www.layers.shop/cdn/shop/products/nothing-phone-2-mind-freak.jpg?v=1692783805&width=1080",
          },
          {
            name: "Empowher",
            price: 699,
            image: "https://www.layers.shop/cdn/shop/files/nothing-phone-2-empowher--back.jpg?v=1689070553&width=1080",
          },
          {
            name: "Escaping Earth",
            price: 549,
            image: "https://www.layers.shop/cdn/shop/files/nothing-phone-2-escaping-earth--back.jpg?v=1689070655&width=1080",
          },
        ],
    },
  ];

  const navigate = useNavigate()
  const navigateSearch = (e)=>{
    let res = e.target.value;
    navigate('/search',{state:{res, filterdata}})
  }
  

  return (
    <nav className="w-full h-[10vh] bg-[#3a625f] flex items-center justify-between px-10">
      <div className="w-2/5 flex items-center justify-between">
        <h1 className="uppercase font-semibold text-2xl cursor-pointer text-white">
          aaru skins
        </h1>
        <NavLink 
        className={(e)=> {
          return [
            e.isActive === false ? "text-sm font-medium text-white " : "",
            e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",

          ].join(" ");
        }} 
        to="/">
          Home
        </NavLink>
        <NavLink
          className={(e)=> {
            return [
              e.isActive === false ? "text-sm font-medium text-white " : "",
              e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",
  
            ].join(" ");
          }} 
          
          to="/products"
        >
          Products
        </NavLink>
        <NavLink
          className={(e)=> {
            return [
              e.isActive === false ? "text-sm font-medium text-white " : "",
              e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",
  
            ].join(" ");
          }} 
          to="/categorypage"
          
        >
          Category
        </NavLink>
        <NavLink
          className={(e)=> {
            return [
              e.isActive === false ? "text-sm font-medium text-white " : "",
              e.isActive ? "text-md font-medium text-white underline" :  "text-md font-medium text-white no-underline",
  
            ].join(" ");
          }} 
          to="/about"
        >
          About us
        </NavLink>
      </div>
      <div className="w-1/3 flex items-center relative max-w-[300px]">
        <svg 
          className="absolute left-4 fill-[#9e9ea7] w-4 h-4"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input
          placeholder="Search"
          type="search"
          onInput={navigateSearch}
          className="w-full h-10 pl-10 pr-4 border-2 border-transparent rounded-lg outline-none bg-[#f3f3f4] text-[#0d0c22] transition ease-in duration-300 placeholder-[#9e9ea7] focus:border-[rgba(152,230,254,0.4)] focus:bg-white focus:shadow-[0_0_0_4px_rgba(247,216,228,0.1)]"
        />
      </div>
      <div className="flex items-center justify-between gap-5">
        <NavLink
          to="/cart"
          className="flex items-start justify-center text-white no-underline"
          title="Cart"
        >
          <img
            className="h-6"
            src="https://img.icons8.com/?size=100&id=rPCAH753HAqD&format=png&color=000000"
            alt=""
          />
          {/* <sup className="bg-[#dc1425] px-2 py-2 rounded-[7px] ml-1">0</sup> */}
        </NavLink>
        <NavLink
          to="/contact"
          className="text-white no-underline"
          title="Contact us"
        >
          <img
            className="h-6"
            src="https://img.icons8.com/?size=100&id=W2i9VMhMFvHm&format=png&color=000000"
            alt=""
          />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
