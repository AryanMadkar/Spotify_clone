import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[25%] relative h-full p-2 flex-col gap-2 text-white  hidden lg:flex">
      {" "}
      <div className="bg-[#121212] h-[15%] rounded-lg flex flex-col justify-around">
        <div className="flex  items-center gap-3 pl-8 cursor-pointer">
          <Link className="flex items-center gap-3  cursor-pointer " href="/">
            <img className="w-6" src={assets.home_icon} />
            <p className="font-bold">Home</p>
          </Link>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} />
          <p className="font-bold">search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[80%] rounded-lg">
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={assets.stack_icon} className="w-8" />
            <p className="font-semibold">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img src={assets.arrow_icon} className="w-5" />
            <img src={assets.plus_icon} className="w-5" />
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create our first playlist</h1>
          <p className="font-light">it's easy we will help you</p>
          <button className="w-[200px] h-[40px] mt-2 -ml-2 bg-[#007bff] text-white font-semibold rounded-full hover:bg-black transition-colors hover:scale-105">
            Create Now
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Lets find some Podcast</h1>
          <p className="font-light">We will kepp you updated </p>
          <button className="w-[200px] h-[40px] mt-2 -ml-2 bg-[#007bff] text-white font-semibold rounded-full hover:bg-black transition-colors hover:scale-105">
            Browse Podcast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
