import { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import NavBar from "./NavBar";

const Header = () => {
  const [nav, setNav] = useState(false);

  const [delivery, setDelivery] = useState(true);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 relative">
      <div className="flex items-center gap-4 mr-2">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="hidden sm:block sm:text-2xl lg:text-3xl px-2">
          Best <span className="font-bold">Brunch!</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] gap-1">
          <p
            onClick={() => setDelivery(true)}
            className={`${
              delivery ? "bg-black text-white rounded-full" : ""
            } p-2 duration-300 cursor-pointer`}
          >
            Delivery
          </p>
          <p
            onClick={() => setDelivery(false)}
            className={`${
              delivery ? "" : "bg-black text-white rounded-full"
            } p-2 duration-300 cursor-pointer`}
          >
            Pickup
          </p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          placeholder="Search yummies"
          className="bg-transparent p-2 focus:outline-none w-full"
        />
      </div>

      <button className="bg-[#292929] text-white hidden md:flex items-center py-2 rounded-full border-2 border-transparent hover:border-black hover:bg-white hover:text-[#292929]">
        <BsFillCartFill size={25} />
      </button>

      {nav ? (
        <div className="bg-[#292929]/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : null}

      <div
        className={`fixed top-0  w-[300px] h-screen bg-white z-10 duration-300 left-0 ${
          nav ? "left-0" : "left-[-100%]"
        }`}
      >
        <AiOutlineClose
          size={30}
          className="cursor-pointer right-4 top-4 absolute"
          onClick={() => setNav(!nav)}
        />
        <h2 className="text-2xl p-4">
          Best <span className="font-bold">Brunch!</span>
        </h2>
        <NavBar nav={nav} setNav={setNav} />
      </div>
    </div>
  );
};

export default Header;
