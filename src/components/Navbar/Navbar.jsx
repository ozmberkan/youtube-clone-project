import React from "react";
import Logo from "~/assets/Logo.svg";
import { IoMenuOutline } from "react-icons/io5";
import { CiSearch, CiBellOn } from "react-icons/ci";
import { BiSolidMicrophone } from "react-icons/bi";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import CameraSvg from "~/assets/Camera.svg";

const Navbar = () => {
  return (
    <div className="w-full h-14 flex justify-between items-center px-4 font-roboto">
      {/* Left Side */}
      <div className="flex items-center justify-start">
        <span className="p-2 hover:bg-zinc-200 rounded-full cursor-pointer">
          <IoMenuOutline size={27} />
        </span>
        <div className="relative pl-4 cursor-pointer">
          <img src={Logo} className="w-24" />
          <span className="text-[10px] absolute -right-3.5 -top-2 text-zinc-500">
            TR
          </span>
        </div>
      </div>
      {/* Center Side */}
      <div className="flex justify-center items-center gap-x-4">
        <div className="ml-8 flex cursor-pointer">
          <input
            type="text"
            placeholder="Ara"
            className="w-[535px] py-[7px] rounded-l-full border border-zinc-300 px-5 placeholder:text-zinc-500"
          />
          <div className="rounded-r-full w-[60px] border border-l-0 hover:bg-zinc-100  flex items-center justify-center bg-zinc-50  border-zinc-300">
            <CiSearch size={24} className="text-zinc-900" />
          </div>
        </div>
        <div className="w-[40px] h-[40px] bg-zinc-100 flex justify-center items-center rounded-full cursor-pointer">
          <BiSolidMicrophone size={20} />
        </div>
      </div>
      {/* Right Side */}

      <div className="flex justify-center items-center gap-x-3">
        <div className="hover:bg-zinc-200  p-2 rounded-full cursor-pointer">
          <img src={CameraSvg} alt="" />
        </div>
        <div>
          <div className="flex relative hover:bg-zinc-200  p-2 rounded-full cursor-pointer">
            <CiBellOn size={28} />
            <span className="bg-[#cc0000] absolute ring-1 ring-white top-2 -right-1 flex justify-center items-center w-6 text-white h-4 text-xs rounded-full">
              9+
            </span>
          </div>
        </div>
        <div className="p-2 cursor-pointer">
          <img
            src="https://yt3.ggpht.com/iVDSrGhGNJFCOVS2yjAIrVUaAX110D8KsZaLXPRxiIHSkpKKz0sksSbQR-pLTJuh5nQrjQZ8LvA=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
