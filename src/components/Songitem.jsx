import React, { useContext } from "react";
import { PlayerContext1 } from "../context/PlayerContext";

const Songitem = ({ name, image, desc, id, }) => {
  const {playwithid} = useContext(PlayerContext1)
  return (
    <div onClick={()=>{
      playwithid(id)
    }} className="min-w-[180px] w-[15vw] flex items-center justify-between flex-col my-5 p-2 px-3 rounded-xl cursor-pointer hover:scale-105 hover:bg-[#1f5050]">
      <img src={image} className="rounded-lg w-auto h-[10rem]" />
      <p className="font-semibold mt-2 mb-1 text-[18px] text-white">{name}</p>
      <p className="font-semibold mt-2 mb-1 text-[12px] text-white">{desc}</p>
    </div>
  );
};

export default Songitem;
