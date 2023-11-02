import React from "react";

const HeadlineCard = () => {
  const cardDetailList = [
    {
      name: "Sun's Out, BOGO's Out",
      subTitle: "Through 8/26",
      imgUrl:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "New Restaurants",
      subTitle: "Added Daily",
      imgUrl:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "We Deliver Desserts Too",
      subTitle: "Tasty Treats",
      imgUrl:
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];
  return (
    <div className=" max-w-[1640px] grid md:grid-cols-3 mx-auto p-4 py-12 gap-6 ">
      {
        /* card */
        cardDetailList.map((cardDetails) => card(cardDetails))
      }
    </div>
  );
};

export default HeadlineCard;

function card(cardDetails) {
  return (
    <div className=" relative rounded-xl">
      {/* overlay */}
      <div className=" absolute w-full h-full rounded-xl bg-black/50 text-white hover:bg-transparent duration-500">
        <p className=" font-bold text-2xl px-2 pt-4">{cardDetails.name}</p>
        <p className=" px-2">{cardDetails.subTitle}</p>
        <button className=" bg-white text-black border-white mx-2 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className=" rounded-xl max-h-[160px] md:max-h-[200px] object-cover w-full"
        src={cardDetails.imgUrl}
        alt="/"
      />
    </div>
  );
}
