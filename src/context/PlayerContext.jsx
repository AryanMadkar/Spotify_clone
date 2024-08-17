import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext1 = createContext();

const PlayerContext = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar1 = useRef();

  const [track, settrack] = useState(songsData[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [Time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = ()=>{
    audioRef.current.play()
    setIsPlaying(true)
  }

  const pause = ()=>{
    audioRef.current.pause()
    setIsPlaying(false)
  }

  const playwithid = async (id)=>{
    await settrack(songsData[id])
    await audioRef.current.play()
    setIsPlaying(true)
  }

  const previous = async () =>{
    if(track.id >0){
      await settrack(songsData[track.id - 1])
      await audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const next = async () =>{
    if(track.id <songsData.length-1){
      await settrack(songsData[track.id + 1])
      await audioRef.current.play()
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    setTimeout(()=>{
      audioRef.current.ontimeupdate = ()=>{
        seekbar1.current.style.width = (Math.floor(audioRef.current.currentTime/audioRef.current.duration*100))+"%"
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime%60),
            minute: Math.floor(audioRef.current.currentTime/60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration %60),
            minute: Math.floor(audioRef.current.duration /60),
          },
        })
      }
    },1000)
  
  }, [audioRef])
  

  const contextvalue = {
    audioRef,
    seekbg,
    playwithid,
    seekbar1,
    track,
    settrack,
    isPlaying,
    setIsPlaying,
    Time,
    setTime,
    previous,
    next,
    play,
    pause
  };
  return (
    <PlayerContext1.Provider value={contextvalue}>
      {props.children}
    </PlayerContext1.Provider>
  );
};

export default PlayerContext;
