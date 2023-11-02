import React from "react";
import { categories } from "../../data/data";

const category = () => {
  console.log(categories);
  return (
    <div className=" max-w-[1640px] px-4 py-12 m-auto">
      <h1 className=" text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      <div className=" grid grid-cols-2 lg:grid-cols-4 g-6 py-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className=" bg-gray-200 m-4 flex justify-between items-center p-4"
          >
            <h1 className="font-bold text-xl md:text-2xl">{item.name}</h1>
            <img src={item.image} alt={item.name} className=" w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default category;
