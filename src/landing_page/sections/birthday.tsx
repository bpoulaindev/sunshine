import { MargueriteIcon } from "../../assets/marguerite_icon";
import { palette } from "../../palette";
import { Countdown } from "../countdown/countdown";
import React from "react";

export const Birthday: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col relative w-full z-10 items-center justify-center min-h-screen max-h-screen ${className}`}
    >
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-red-200 rounded-full flex -rotate-45 absolute -left-[300px] sm:-left-[400px] -bottom-1/4 blur-3xl" />
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-red-200 rounded-full flex -rotate-45 absolute -right-[300px] sm:-right-[400px] -top-1/4 blur-3xl" />
      <div className="flex flex-col justify-center items-center z-10 px-4 ">
        <div className="flex items-center">
          <MargueriteIcon
            className="h-6 w-6 xl:h-8 xl:w-8 animate-[spin_2s_linear_infinite]"
            fill={{
              petals: palette?.["indigo"][200],
            }}
          />
          <span className="text-lg mx-2 sm:text-3xl text-yellow-500 font-medium">
            We wish you a happy
          </span>
          <MargueriteIcon
            className="h-6 w-6 xl:h-8 xl:w-8 animate-[spin_2s_linear_infinite]"
            fill={{
              petals: palette?.["indigo"][200],
            }}
          />
        </div>
        <span className="text-6xl sm:text-8xl tracking-wide text-red-400 font-bold mt-2 animate-pulse">
          Birthday
        </span>
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4">
          Here's a clue for the riddle :
        </span>
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4 italic">
          "The next piece of the puzzle is hidden in the shadows of the tavern."
        </span>
      </div>
    </div>
  );
};
