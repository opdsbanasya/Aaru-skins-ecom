import React, { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const Slider = () => {
  const [count, setCount] = useState(0);
  const images = [
    "https://www.layers.shop/cdn/shop/files/BANNER_JUDGEMENT_DAY_DESKTOP_final_copy.png?v=1713767147&width=1540",
    "https://www.layers.shop/cdn/shop/files/collection_banners_1_1.jpg?v=1693591120&width=1540",
    "https://www.layers.shop/cdn/shop/files/NEW_ARRIVALS_pc.png?v=1712641794&width=1540",
  ];
  
  const totalSlides = images.length;
  

  const goNext = () => {
    setCount((count + 1) % totalSlides);
  };

  const goPrev = () => {
    setCount((count - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="w-full h-screen relative">
      <div className="w-full h-full mt-8 mx-auto relative overflow-hidden">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt=""
            className="w-full h-full absolute transition-transform duration-1000 ease object-cover"
            style={{ left: `${index * 100}%`, transform: `translateX(-${count * 100}%)` }}
          />
        ))}
      </div>
      <div className="w-full text-center mt-2 absolute top-1/2 transform -translate-y-1/2 flex justify-between">
        <button onClick={goPrev} className="p-2 border-none bg-[#37B7C3] rounded-lg">
          <i className="ri-arrow-left-s-line text-2xl text-white"></i>
        </button>
        <button onClick={goNext} className="p-2 border-none bg-[#37B7C3] rounded-lg">
          <i className="ri-arrow-right-s-line text-2xl text-white"></i>
        </button>
      </div>
    </section>
  );
};

export default Slider;
