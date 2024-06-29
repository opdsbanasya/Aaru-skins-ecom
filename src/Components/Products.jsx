import React, { useState } from "react";
import LatestProduct from "./LatestProduct";
import { Link, Outlet, useLocation } from "react-router-dom";

const Products = () => {
  const [price, setPrice] = useState(0);
  const [filteredData, setFilteredData] = useState([]);

  const handlePriceChange = (event) => {
    const selectedPrice = event.target.value;
    setPrice(selectedPrice);

    // Filter the data based on the selected price
    const filtered = filterdataa.reduce((acc, category) => {
      const matchingSkins = category.skins.filter(
        (skin) => skin.price <= selectedPrice
      );
      if (matchingSkins.length > 0) {
        acc.push({ ...category, skins: matchingSkins });
      }
      return acc;
    }, []);

    setFilteredData(filtered);
  };

  const filterdataa = [
    {
      catName: "Midas Touch",
      skins: [
        {
          name: "Deco Radiance",
          price: 599,
          image:
            "https://www.layers.shop/cdn/shop/files/15_Pro_Deco_Radiance_WB.png?v=1715752259&width=1540",
        },
        {
          name: "Golden Maze",
          price: 799,
          image:
            "https://www.layers.shop/cdn/shop/files/14_pro_golden_maze_wb.png?v=1716551498&width=1540",
        },
        {
          name: "King",
          price: 499,
          image:
            "https://www.layers.shop/cdn/shop/files/14_pro_king_wb.png?v=1716551501&width=1540",
        },
        {
          name: "Dangerous Idea",
          price: 599,
          image:
            "https://www.layers.shop/cdn/shop/files/14_pro_shikara_c10909c7-80ee-4b1b-9fb3-6f2e69e727da.png?v=1717071214&width=1540",
        },
      ],
    },
    {
      catName: "Dark",
      skins: [
        {
          name: "Black Smoke",
          price: 599,
          image:
            "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Smoke.png?v=1706086159&width=1080",
        },
        {
          name: "Black Leather",
          price: 499,
          image:
            "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Leather.png?v=1706086150&width=1080",
        },
        {
          name: "Black Fluid",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Fluid.png?v=1706086088&width=1080",
        },
        {
          name: "Black Crack",
          price: 899,
          image:
            "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Black_Crack.png?v=1706086104&width=1080",
        },
        {
          name: "Ultra Titanium",
          price: 599,
          image:
            "https://www.layers.shop/cdn/shop/products/Galaxy_S24_Ultra_Titanium.png?v=1706086067&width=1080",
        },
      ],
    },
    {
      catName: "Cyberforce",
      skins: [
        {
          name: "Machina Hud",
          price: 499,
          image:
            "https://www.layers.shop/cdn/shop/products/Google_Pixel_8_Pro_Machina_Hud.png?v=1701156317&width=1080",
        },
        {
          name: "Cyberhud",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/products/Google_Pixel_8_Pro_Cyberhud.png?v=1701156320&width=1080",
        },
        {
          name: "Quantum Weave",
          price: 799,
          image:
            "https://www.layers.shop/cdn/shop/files/Google_Pixel_8_Pro_Quantum_Weave_29a77e85-1bd7-4c9a-841e-d1e73c0f63d5.png?v=1712228935&width=1080",
        },
      ],
    },
    {
      catName: "Retro Funk",
      skins: [
        {
          name: "Gameboi",
          price: 799,
          image:
            "https://www.layers.shop/cdn/shop/products/Vivo_X80_Pro_Gameboi.png?v=1709277701&width=1080",
        },
        {
          name: "Sick Beat",
          price: 749,
          image:
            "https://www.layers.shop/cdn/shop/products/Vivo_X80_Pro_Sick_Beat.png?v=1709019200&width=1080",
        },
        {
          name: "90's Kid",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-90_s-kid--back_dd518516-5700-4d7f-9327-339022d0c2f1.jpg?v=1693292809&width=1080",
        },
        {
          name: "Metamor",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-metamor--back.jpg?v=1692612508&width=1080",
        },
        {
          name: "Dj Panda",
          price: 549,
          image:
            "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-dj-panda--back.jpg?v=1677048975&width=1080",
        },
        {
          name: "Grafitti",
          price: 749,
          image:
            "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-grafitti--back.jpg?v=1677048977&width=1080",
        },
        {
          name: "Dance Weekend",
          price: 899,
          image:
            "https://www.layers.shop/cdn/shop/products/vivo-x80-pro-dance-weekend--back.jpg?v=1692612488&width=1080",
        },
      ],
    },
    {
      catName: "Wanderlust",
      skins: [
        {
          name: "Before Sunset",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/products/asus-rog-phone-5-before-sunset--back.jpg?v=1692709565&width=1080",
        },
        {
          name: "Purr Me Perfect",
          price: 549,
          image:
            "https://www.layers.shop/cdn/shop/products/asus-rog-phone-5-purr-me-perfect--back.jpg?v=1692612295&width=1080",
        },
        {
          name: "CIUDAD",
          price: 499,
          image:
            "https://www.layers.shop/cdn/shop/products/asus-rog-5-ciudad--back.jpg?v=1675834151&width=1080",
        },
      ],
    },
    {
      catName: "Into the Woods",
      skins: [
        {
          name: "Folklore",
          price: 899,
          image:
            "https://www.layers.shop/cdn/shop/files/Tecno_Pova_6_Pro_Folklore_1314e21b-c79e-46fb-91ac-94316863715b.png?v=1711621510&width=1080",
        },
        {
          name: "Fluttering Dreams",
          price: 799,
          image:
            "https://www.layers.shop/cdn/shop/files/Tecno_Pova_6_Pro_Fluttering_Dreams_c051a539-cf99-4b4b-bc60-340793d6c26a.png?v=1711621610&width=1080",
        },
        {
          name: "Sunflower",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/files/Tecno_Pova_6_Pro_Sunflower_7a57ae4a-35f9-4135-ae88-b0546c42bf3d.png?v=1711621556&width=1080",
        },
        {
          name: "Forest's Whisper",
          price: 599,
          image:
            "https://www.layers.shop/cdn/shop/files/Tecno_Pova_6_Pro_Forest_s_Whisper_8382659d-76cb-47ab-83a7-7bc579a3a00c.png?v=1711621491&width=1080",
        },
      ],
    },
    {
      catName: "Sky is not the Limit",
      skins: [
        {
          name: "Space Blueprint",
          price: 799,
          image:
            "https://www.layers.shop/cdn/shop/files/nothing-phone-2-space-blueprint--back.jpg?v=1689079318&width=1080",
        },
        {
          name: "Spaceboy",
          price: 599,
          image:
            "https://www.layers.shop/cdn/shop/files/nothing-phone-2-spaceboy--back.jpg?v=1689079427&width=1080",
        },
        {
          name: "Quantum Weave",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/products/nothing-phone-2-mind-freak.jpg?v=1692783805&width=1080",
        },
        {
          name: "Empowher",
          price: 699,
          image:
            "https://www.layers.shop/cdn/shop/files/nothing-phone-2-empowher--back.jpg?v=1689070553&width=1080",
        },
        {
          name: "Escaping Earth",
          price: 549,
          image:
            "https://www.layers.shop/cdn/shop/files/nothing-phone-2-escaping-earth--back.jpg?v=1689070655&width=1080",
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-screen flex items-start justify-between p-10">
      <aside className="w-[20%] h-full space-y-8">
        <h2 className="w-full text-xl pb-1 font-semibold text-center border-b-2 border-b-zinc-800">
          Filters
        </h2>
        <div className="w-full space-y-2">
          <h2 className="text-xl font-semibold">Category</h2>
          <section className="w-full flex flex-col gap-1">
            {filterdataa.map((item) => (
              <Link
                to={`/products/${item.catName}`}
                state={{ item }}
                className="px-4 py-2 text-sm bg-zinc-100 rounded-md cursor-pointer"
                key={item.id}
              >
                {item.catName}
              </Link>
            ))}
          </section>
        </div>
        <div className="text-xl">
          <h2>Price</h2>
          <input
            type="range"
            step={50}
            className="w-full mt-2 in-range:border-green-500"
            onChange={handlePriceChange}
            min={300}
            max={1000}
          />
        </div>
        <div className="text-sm text-gray-600">
          Selected Price:{" "}
          <span className="font-medium text-gray-900">₹{price}</span>
        </div>
      </aside>
      <main className="w-full h-full px-10">
        {filteredData.length > 0 ? (
          filteredData.map((category) => (
            <div key={category.catName} className="w-full">
              <h2 className="text-2xl font-semibold mb-4">
                {category.catName}
              </h2>
              <div className=" flex justify-start items-center flex-wrap  gap-8">
                {category.skins.map((skin) => (
                  <div key={skin.name} className="w-[22%]">
                    <div className="w-full">
                      <img
                        className="w-full"
                        src={skin.image}
                        alt={skin.name}
                      />
                    </div>
                    <div className="flex items-center justify-between p-2">
                      <h4 className="hover:underline">{skin.name}</h4>
                      <h5>₹{skin.price}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <section className="">
            <p className="text-lg w-full text-center mb-5">No products found within the selected price range.</p>
            <hr />
            <p className="text-lg w-full text-center mt-5">You can check our latest skins.</p>
            <LatestProduct />
          </section>
        )}
      </main>
      <Outlet />
    </div>
  );
};

export default Products;
