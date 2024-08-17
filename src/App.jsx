import { useContext, useRef, useState } from "react";

import "./App.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import {PlayerContext1 } from "./context/PlayerContext";

function App() {
  const [count, setCount] = useState(0);

  const {audioRef,track} = useContext(PlayerContext1)
  
  return (
    <div className="h-screen  bg-black">
      <div className="h-[90%] w-full flex ">
        <Sidebar/>
        <Display/>
      </div>
        <Player/>
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
}

export default App;
