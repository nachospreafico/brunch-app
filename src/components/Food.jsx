import { useEffect, useState } from "react";
import { foodData, categories } from "./../data/Data";

const Food = () => {
  const [foods, setFoods] = useState(foodData);

  function filterByCategory(category) {
    setFoods(foodData.filter((elem) => elem.category === category));
  }

  function filterByPrice(price) {
    setFoods(foodData.filter((elem) => elem.price === price));
  }

  return (
    <section className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-[tomato] text-4xl text-center font-bold mb-8">
        Top Rated Items
      </h1>

      <div className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-bold text-gray-700">Filter by category:</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setFoods(foodData)}
              className="border-1 text-[tomato] border-[tomato] hover:bg-[tomato] hover:text-white duration-200"
            >
              All
            </button>
            {categories.map((elem) => {
              return (
                <button
                  key={elem.id}
                  className="border-1 text-[tomato] border-[tomato] hover:bg-[tomato] hover:text-white duration-200"
                  onClick={() => filterByCategory(elem.name.toLowerCase())}
                >
                  {elem.name}
                </button>
              );
            })}
          </div>
        </div>
        <div className="">
          <p className="font-bold text-gray-700">Filter by price:</p>
          <div className="flex  flex-wrap gap-2 w-full max-w-[375px]">
            <button
              onClick={() => filterByPrice("$")}
              className="border-1 text-[tomato] border-[tomato] hover:bg-[tomato] hover:text-white duration-200"
            >
              $
            </button>
            <button
              onClick={() => filterByPrice("$$")}
              className="border-1 text-[tomato] border-[tomato] hover:bg-[tomato] hover:text-white duration-200"
            >
              $$
            </button>
            <button
              onClick={() => filterByPrice("$$$")}
              className="border-1 text-[tomato] border-[tomato] hover:bg-[tomato] hover:text-white duration-200"
            >
              $$$
            </button>
          </div>
        </div>
      </div>
      <div
        id="food-display"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8"
      >
        {foods.map((elem) => {
          return (
            <div
              key={elem.id}
              className="border shadow-lg rounded-lg lg:hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src={elem.image}
                alt={elem.title}
              ></img>
              <div className="flex justify-between p-4">
                <p className="font-bold">{elem.title}</p>
                <p className="">
                  <span className="bg-[tomato] text-white px-2 py-1 rounded-full">
                    {elem.price}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Food;
