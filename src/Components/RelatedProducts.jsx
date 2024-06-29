import React from "react";
import { useNavigate } from "react-router-dom";

const RelatedProducts = () => {
  const latestProductData = [
    {
      name: "Golden Skull",
      price: 399,
      image:
        "https://www.layers.shop/cdn/shop/files/14_pro_shikara_1_d6bf76d0-23c7-4e1a-881f-29d31ae56de0.png?v=1717071389&width=1540",
    },
    {
      name: "Chaos",
      price: 359,
      image:
        "https://www.layers.shop/cdn/shop/files/Chaos_Skin_1cd9e72c-0658-4f98-8064-ac3e0b052ba3.png?v=1711951803&width=840",
    },
    {
      name: "Cybernatic Charge",
      price: 429,
      image:
        "https://www.layers.shop/cdn/shop/files/Cybernetic_Charge_WB.png?v=1714375353&width=1540",
    },
    {
      name: "Before Sunset",
      price: 499,
      image:
        "https://www.layers.shop/cdn/shop/files/Before_sunset.webp?v=1700557615&width=1540",
    },
    {
      name: "Judgement Day",
      price: 419,
      image:
        "https://www.layers.shop/cdn/shop/files/14_pro_grafiiti_copy.png?v=1713942370&width=640",
    },
    {
      name: "GameBoi",
      price: 799,
      image:
        "https://www.layers.shop/cdn/shop/files/14_pro_gameboi_wb_33f02124-21ac-4c9b-aeff-a9e4a49e9c78.png?v=1710911152&width=1540",
    },
    {
      name: "Concrete Rock",
      price: 479,
      image:
        "https://www.layers.shop/cdn/shop/files/14_pro_concrete.png?v=1711961547&width=1540",
    },
    {
      name: "Vector Velocity",
      price: 579,
      image:
        "https://www.layers.shop/cdn/shop/files/Vector_Velocity_WB.png?v=1714375347&width=1540",
    },
    {
      name: "Space Buddies",
      price: 599,
      image:
        "https://www.layers.shop/cdn/shop/files/14_pro_space_buddies.png?v=1711958431&width=1540",
    },
    {
      name: "Space Boy",
      price: 559,
      image:
        "https://www.layers.shop/cdn/shop/files/14_pro_space_boy.png?v=1711961709&width=1540",
    },
    {
      name: "Sick Beat",
      price: 659,
      image:
        "https://www.layers.shop/cdn/shop/files/iPhone_14_pro_Sick_Beat_wb.png?v=1709021861&width=1540",
    },
    {
      name: "Untethered",
      price: 539,
      image:
        "https://www.layers.shop/cdn/shop/files/14_pro_shikara_5.png?v=1710910773&width=1540",
    },
  ];

  const relatedProductData = [];
  
  while (relatedProductData.length < 4) {
    let randomIndex = Math.floor(Math.random() * latestProductData.length);
    if (!relatedProductData.includes(latestProductData[randomIndex])) {
      relatedProductData.push(latestProductData[randomIndex]);
      console.log(randomIndex);
    }
  }

  const navigate = useNavigate();

  const handleClick = (product) => {
    navigate(`/product/${product.name}`, { state: { product } });
    window.scrollTo(0,0)
  };

  return (
    <>
      <div className="w-full min-h-96 flex flex-col items-center p-5 pt-10 gap-5">
        <h1 className="text-2xl font-semibold">Related Skins</h1>
        <div
          className={`flex flex-wrap items-center justify-center gap-8 px-12`}
        >
          {relatedProductData.map((product, index) => (
            <div
              onClick={() => handleClick(product)}
              key={index}
              className="w-64 h-[55vh] cursor-pointer"
            >
              <div className="w-full h-[90%] rounded-xl">
                <img
                  className="h-full object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="flex items-center justify-between p-2">
                <h4 className="hover:underline">{product.name}</h4>
                <h5>₹{product.price}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;
