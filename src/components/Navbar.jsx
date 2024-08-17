import React from "react";
import { assets } from "./../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()


  return (
    <div className="flex flex-col items-start justify-between">
      <div className="flex items-center h-[3rem]  w-full top-0 justify-between">
        <div className="lg:flex items-center hidden justify-between w-[8%] ">
          <img
            className="w-8 ml-2 cursor-pointer hover:scale-105 rounded-full bg-[#080808] p-[0.5rem]"
            src={assets.arrow_left}
            onClick={()=>{navigate(-1)}}
          />
          <img
            className="w-8 ml-2 cursor-pointer hover:scale-105 rounded-full bg-[#080808] p-[0.5rem]"
            src={assets.arrow_right}
            onClick={()=>{navigate(1)}}
          />
        </div>
        <div className="bg-[#242424]  flex min-w-[40%] rounded-full p-[0.2rem] ">
          <img src={assets.search_icon} className="w-6 m-2" />
          <input
            className="w-full ml-2 outline-none border-none text-white bg-transparent m-[0.5rem] h-[80%]"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="lg:flex hidden items-center bg-[#080808] text-[13px] rounded-full  justify-between gap-2 w-fit">
            <img src="" />
            <h1 className="p-2 mr-2">Install App</h1>
          </div>
          <div className="flex items-center bg-[#080808] text-[13px] rounded-full  justify-between gap-2 w-fit">
            <img className="w-10 p-3 " src={assets.bell_icon} />
          </div>
          <div className="flex items-center bg-[#080808] text-[15px] rounded-full  justify-between gap-2 w-fit">
            <h1 className="p-3  w-7 h-7 text-center flex items-center justify-between text-black font-bold  m-2 bg-green-800 rounded-full text-[18px]">
              D
            </h1>
          </div>
        </div>
      </div>
      <div className=" w-full flex items-start justify-start mt-3">
        <h1 className="m-2 px-3 cursor-pointer hover:bg-white hover:text-black hover:scale-105 font-semibold text-[18px] rounded-full bg-[#080808]">
          All
        </h1>
        <h1 className="m-2 px-3 cursor-pointer hover:bg-white hover:text-black hover:scale-105 font-semibold text-[18px] rounded-full bg-[#080808]">
          Music
        </h1>
        <h1 className="m-2 px-3 cursor-pointer hover:bg-white hover:text-black hover:scale-105 font-semibold text-[18px] rounded-full bg-[#080808]">
          Podcasts
        </h1>
        
      </div>
    </div>
  );
};

export default Navbar;
