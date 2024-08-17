import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import Alitem from "./Alitem";
import Songitem from "./Songitem";
const DisplayHome = () => {
  return (
    <div className="">
      <Navbar />
      <div className="font-bold text-2xl my-5 min-h-[100vh] w-full ">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto flex-wrap items-center justify-around ">
          {albumsData.map((item, index) => (
            <Alitem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
        <h1 className="my-5 font-bold text-2xl">Featured Songs</h1>

        <div className="flex overflow-auto flex-wrap items-center justify-around ">
          {songsData.map((item, index) => (
            <Songitem
              key={index}
              name={item.name}
              image={item.image}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayHome;
