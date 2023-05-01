import { MargueriteIcon } from "../../assets/marguerite_icon";
import { palette } from "../../palette";
import { Countdown } from "../countdown/countdown";
import React from "react";

export const Section1: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col relative w-full z-10 items-center justify-center min-h-screen max-h-screen ${className}`}
    >
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-red-200 rounded-full flex -rotate-45 absolute -left-[300px] sm:-left-[400px] -bottom-1/4 blur-3xl" />
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-red-200 rounded-full flex -rotate-45 absolute -right-[300px] sm:-right-[400px] -top-1/4 blur-3xl" />
      <div className="flex flex-col justify-center items-center z-10 px-4 ">
        <span className="text-lg sm:text-3xl text-red-400 font-medium">
          Welcome to
        </span>
        <span className="text-6xl sm:text-8xl tracking-wide text-yellow-500 font-bold">
          Sunshine
        </span>
        <MargueriteIcon
          className="h-8 w-8 mt-2 animate-[spin_2s_linear_infinite]"
          fill={{
            petals: palette?.["indigo"][200],
          }}
        />
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4">
          This experience will be available at the end of this countdown
        </span>
        <Countdown className="mt-2" />
        <a
          href="#section2"
          className="animate-bounce mt-8 px-2 py-1 rounded-lg bg-indigo-100 text-indigo-500 font-medium flex items-center hover:bg-indigo-200"
        >
          What is Sunshine ?
        </a>
      </div>
    </div>
  );
};
