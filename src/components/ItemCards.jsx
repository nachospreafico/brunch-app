import React from "react";

const ItemCards = ({ title, image }) => {
  return (
    <div className="rounded-xl relative cursor-pointer">
      <div className="absolute w-full z-1 h-full bg-[#292929]/50 rounded-xl text-white hover:bg-transparent duration-300">
        <p className="font-bold text-2xl px-4 pt-4">{title}</p>
        <button className="border-white bg-white text-[#292929] absolute mx-4 bottom-4 font-semibold">
          Order Now
        </button>
      </div>
      <img
        src={image}
        alt="brunch image"
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
      ></img>
    </div>
  );
};

export default ItemCards;
