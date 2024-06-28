import React from "react";
import Category from "./Category";
function Categories() {

    const categoryData = [
        {name:"Samsung", id:1, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0003_Samsung-logo.jpg?v=1673873290&width=1080"},
        {name:"Google", id:2, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0013_google-logo-9824.jpg?v=1673873483&width=1080"},
        {name:"Apple", id:3, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0002_Symbol-of-the-iPhone-logo.jpg?v=1673873290&width=1080"},
        {name:"Vivo", id:4, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0001_Vivo-Logo_cd254c4e-9c28-4522-b2f1-311e46b01ed1.jpg?v=1677084031&width=1080"},
        {name:"Asus", id:5, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0014_Asus-Logo-1995-present.jpg?v=1673873483&width=1080"},
        {name:"Oppo", id:6, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0006_Oppo-logo.jpg?v=1673873290&width=1080"},
        {name:"Techno", id:7, image:"https://www.layers.shop/cdn/shop/files/Untitled_design_7.png?v=1712143042&width=1080"},
        {name:"Realme", id:8, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0004_realme-logo-png-3.jpg?v=1673873290&width=1080"},
        {name:"OnePlus", id:6, image:"https://www.layers.shop/cdn/shop/files/Untitled-1_0007_OnePlus-Logo.jpg?v=1673873290&width=1080"},
      ]
    
    
      
  return (
    <>
      <div className="flex flex-col items-center gap-5 mt-10">
        <h1 className="text-2xl font-semibold">Available Skins Brands</h1>
        <div className="flex w-full h-40">
            {categoryData.map((item, index) => (
            <div
                key={index}
                className="w-full h-40 p-4 flex items-center gap-10 justify-center "
            >
                <Category categoryDataItem={item} />
            </div>
            ))}
        </div>
        
      </div>
    </>
  );
}
export default Categories;
