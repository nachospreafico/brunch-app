import { AiFillTag } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex flex-col p-4 text-gray-800">
        <li className="text-xl py-4 flex items-center">
          <TbTruckDelivery size={25} className="mr-2" /> Orders
        </li>
        <li className="text-xl py-4 flex items-center">
          <MdFavorite size={25} className="mr-2" /> Favorites
        </li>
        <li className="text-xl py-4 flex items-center">
          <FaWallet size={25} className="mr-2" /> Wallet
        </li>
        <li className="text-xl py-4 flex items-center">
          <MdHelp size={25} className="mr-2" /> Help
        </li>
        <li className="text-xl py-4 flex items-center">
          <AiFillTag size={25} className="mr-2" /> Promotions
        </li>
        <li className="text-xl py-4 flex items-center">
          <BsFillSaveFill size={25} className="mr-2" /> Best Ones
        </li>
        <li className="text-xl py-4 flex items-center">
          <FaUserFriends size={25} className="mr-2" /> Invite Friends
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
