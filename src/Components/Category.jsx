import React from "react";

function Category({categoryDataItem}) {
  return (
    <>
      <div className="w-fulll h-full flex flex-col items-center justify-between cursor-pointer">
        <div className="w-24 h-24 border-2 border-zinc-300 rounded-full overflow-hidden">
            <img className="h-full" src={categoryDataItem.image} alt="" />
        </div>
        <h1>{categoryDataItem.catName}</h1>
      </div>
    </>
  );
}
export default Category;
