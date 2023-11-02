import React, { useState } from "react";
import { data } from "../../data/data";

const Food = () => {
  const [foods, setFoods] = useState(data);

  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className=" max-w-[1640px] m-auto px-4 py-12">
      <h1 className=" text-orange-600 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* filter row */}
      <div className=" flex flex-col lg:flex-row justify-between">
        {/* filter type */}
        <div>
          <p className=" font-bold text-gray-700 ">Filter Type</p>
          <div className=" justify-between flex flex-wrap">
            {customButton("All", () => setFoods(data))}
            {customButton("Burger", () => filterType("burger"))}
            {customButton("Pizza", () => filterType("pizza"))}
            {customButton("Salads", () => filterType("salads"))}
            {customButton("Chickens", () => filterType("chickens"))}
          </div>
        </div>

        {/* filter Price */}
        <div>
          <p className=" font-bold text-gray-700 ">Filter Type</p>
          <div className=" flex justify-between max-w-[390px] w-full">
            {customButton("$", () => filterPrice("$"))}
            {customButton("$$", () => filterPrice("$$"))}
            {customButton("$$$", () => filterPrice("$$$"))}
            {customButton("$$$$", () => filterPrice("$$$$"))}
          </div>
        </div>
      </div>

      {/* Display Food */}
      <div className="grid grid-cols-2 lg:grid-cols-4 pt-4 gap-6   ">
        {foods.length !== 0 ? (
          foods.map((items) => (
            <div key={items.id} className="rounded-lg shadow-lg hover:scale-105 duration-500 hover:bg-white bg-black/10">
              <img
                src={items.image}
                alt={items.name}
                className=" object-cover h-[200px] w-full rounded-t-lg"
              />
              <div className=" flex justify-between px-2 py-4">
                <p className=" font-bold">{items.name}</p>
                <p>
                  <span className=" bg-orange-600 text-white p-1 rounded-full">
                    {items.price}
                  </span>
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className=" text-bold text-center w-[200px]">
            No items in this category
          </p>
        )}
      </div>
    </div>
  );
};

function customButton(name, filterFunc) {
  return (
    <button
      onClick={filterFunc}
      className=" m-1 border-orange-600 text-orange-600  hover:bg-orange-600 hover:text-white"
    >
      {name}
    </button>
  );
}

export default Food;
