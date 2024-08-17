import React from "react";
import { useNavigate } from "react-router-dom";

const Alitem = ({ image, name, desc, id }) => {

    const navigate = useNavigate()
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className="min-w-[180px] w-[15vw] flex items-center justify-between flex-col my-5 p-2 px-3 rounded-xl cursor-pointer hover:scale-105 hover:bg-[#1f5050]">
      <img className="rounded-lg w-auto h-[10rem]" src={image} />
      <p className="font-semibold mt-2 mb-1 text-[18px] text-white">{name}</p>
      <p className="font-semibold mt-2 mb-1 text-[12px] text-white">{desc}</p>
    </div>
  );
};

export default Alitem;
