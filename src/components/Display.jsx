import React, { useEffect, useRef } from "react";
import DisplayHome from "./DisplayHome";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Displayalbum from "./Displayalbum";
import { albumsData } from "../assets/assets";
const Display = () => {
  const displayref = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumID = isAlbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumID)].bgColor
  console.log(isAlbum);

  useEffect(()=>{
    if (isAlbum) {
      displayref.current.style.background = `linear-gradient(${bgcolor},#121212)`
    }
    else{
      displayref.current.style.background = `#121212`
    }
  })
  return (
    <div
      ref={displayref}
      className="w-[100%] relative m-2 px-6 pt-5 rounded-lg bg-[#121212] text-white overflow-auto lg:w-[80%] lg:ml-0"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<Displayalbum />} />
      </Routes>
    </div>
  );
};

export default Display;
