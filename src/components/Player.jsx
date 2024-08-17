import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext1 } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekbar1,
    previous,
    next,
    seekbg,
    play,
    Time,
    pause,
    isPlaying,
  } = useContext(PlayerContext1);
  return (
    <div className="h-[14%] w-full bg-black absolute bottom-0 z-50 flex text-white justify-between items-center px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img src={track.image} className="w-12 cursor-pointer" />
        <div>
          <p className="hover:underline cursor-pointer text-lg font-semibold">
            {track.name}
          </p>
          <p className=" font-semibold text-sm hover:underline cursor-pointer">
            {track.desc.slice(0, 12)}
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4 ">
          <img
            src={assets.shuffle_icon}
            className="w-4 cursor-pointer hover:scale-105"
          />
          <img
            onClick={
              previous
            }
            src={assets.prev_icon}
            className="w-4 cursor-pointer hover:scale-105"
          />
          {isPlaying ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              className="w-4 cursor-pointer hover:scale-105"
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              className="w-4 cursor-pointer hover:scale-105"
            />
          )}

          <img
            onClick={
              next
            }
            src={assets.next_icon}
            className="w-4 cursor-pointer hover:scale-105"
          />
          <img
            src={assets.loop_icon}
            className="w-4 cursor-pointer hover:scale-105"
          />
        </div>
        <div className="flex items-center gap-5 ">
          <p>
            {Time.currentTime.minute}:{Time.currentTime.second}
          </p>
          <div
            ref={seekbg}
            className="w-[60vw]  max-w-[500px] bg-[#4D4D4D] rounded-full cursor-pointer"
          >
            <hr
              ref={seekbar1}
              className="h-1 border-none w-0 bg-white hover:bg-green-600 rounded-full"
            />
          </div>
          <p>
            {Time.totalTime.minute}:{Time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex  items-center gap-3 opacity-75">
        <img
          src={assets.play_icon}
          className="w-4 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.mic_icon}
          className="w-4 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.queue_icon}
          className="w-4 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.speaker_icon}
          className="w-4 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.volume_icon}
          className="w-4 cursor-pointer hover:scale-105"
        />
        <div className="w-20 bg-slate-50 h-1 rounded-full"></div>
        <img
          src={assets.mini_player_icon}
          className="w-4 cursor-pointer hover:scale-105"
        />
        <img
          src={assets.zoom_icon}
          className="w-4 cursor-pointer hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Player;
