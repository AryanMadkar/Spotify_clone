import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";

const Displayalbum = () => {
  const { id } = useParams();
  const albumdata = albumsData[id];
  console.log(albumdata);

  return (
    <div>
      <Navbar />
      <div className="mt-10  p-4 rounded-2xl justify-start flex gap-8 flex-col md:flex-row md:items-end">
        <img className="w-48 rounded-xl" src={albumdata.image} />
        <div className="flex flex-col items-start">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-[7xl]">
            {albumdata.name}
          </h2>
          <h4>{albumdata.desc}</h4>
          <p className="mt-1">
            <img src={assets.spotify_logo} className="inline-block w-5" />
            <b className="mx-4">Spotify</b>
            <b className="mr-4">• 1,323,154 linkes</b>
            <b className="mr-4">• 50 Songs</b>2 h3 30 min
          </p>
        </div>
      </div>
      <div className="mt-3 rounded-t-2xl  pl-2 text-[white]  grid grid-cols-3 sm:grid-cols-4 ">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img src={assets.clock_icon} className="m-auto w-4" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          className="grid grid-cols-3 sm:grid-cols-4 items-center text-[white] gap-2 p-2 hover:bg-white  hover:rounded-2xl hover:text-black cursor-pointer hover:scale-105 "
          key={index}
        >
          <p>
            <b className="mr-4 text-gray-800 ">{index + 1}</b>
            <img src={item.image} className="inline-block w-10 mr-5" />
            {item.name}
          </p>
          <p className="text-[15px]">{albumdata.name}</p>
          <p className="tex-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">{item.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default Displayalbum;
