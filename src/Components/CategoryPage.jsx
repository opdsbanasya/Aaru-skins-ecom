import React from 'react';
import Categories from "./Categories";
import LatestProduct from "./LatestProduct";
import { useNavigate } from 'react-router-dom';

 

const CategoryPage = () => {

    const filterdata = [
        {
          id: 1,
          catName: "Midas Touch",
          skins: [
            {
              name: "Dangerous Idea",
              price: 599,
              image: "https://www.layers.shop/cdn/shop/files/14_pro_shikara_c10909c7-80ee-4b1b-9fb3-6f2e69e727da.png?v=1717071214&width=1540",
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
              name: "Deco Radiance",
              price: 599,
              image: "https://www.layers.shop/cdn/shop/files/15_Pro_Deco_Radiance_WB.png?v=1715752259&width=1540",
            },
          ],
        },
        {
          id: 2,
          catName: "Dark",
          skins: [
            {
              name: "Black Leather",
              price: 499,
              image: "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Leather.png?v=1706086150&width=1080",
            },
            {
              name: "Black Smoke",
              price: 599,
              image: "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Smoke.png?v=1706086159&width=1080",
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
                name: "Dance Weekend",
                price: 899,
                image: "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-dance-weekend--back.jpg?v=1692612488&width=1080",
              },
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
              
            ],
        },
        {
            catName: "Sky is not the Limit",
            skins: [
              {
                name: "Quantum Weave",
                price: 699,
                image: "https://www.layers.shop/cdn/shop/products/nothing-phone-2-mind-freak.jpg?v=1692783805&width=1080",
              },
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
    
    const navigate = useNavigate();

    const handleClick = (item) => {
      return (
        navigate(`/products/${item.catName}`, { state: { item } })
    )
    };

    return (
        <div className='w-full min-h-screen'>
            <Categories />
            <section className='w-full h-full flex flex-col items-center justify-center gap-5'>
              <h1 className="text-2xl font-semibold">Categories</h1>
              <section className='w-full px-20 flex items-center justify-between flex-wrap'>
                {filterdata.map((item,index)=>(
                  <section onClick={() => handleClick(item)} className='w-48 bg-zinc-300 rounded flex flex-col border-2 border-black shadow-br items-center justify-center cursor-pointer'>
                    <section className='h-40 w-full overflow-hidden px-10'>
                      <img className='h-32 object-center scale-[4]' src={item.skins[0].image} alt="" />
                    </section>
                    <section className='w-full px-2'>
                      <h2 className='text-center text-lg font-semibold'>{item.catName}</h2>
                      <p className='text-justify text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, harum.</p>
                    </section>
                  </section>
                ))}
                
              </section>
            </section>
            <LatestProduct />
        </div>
    );
}

export default CategoryPage;
