import { MargueriteIcon } from "../assets/marguerite_icon";
import { palette } from "../palette";
import React from "react";

export const Step3: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col relative w-full z-10 items-center justify-center min-h-screen max-h-screen bg-cream overflow-hidden ${className}`}
    >
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-indigo-200 rounded-full flex -rotate-45 absolute -left-[300px] sm:-left-[400px] -bottom-1/4 blur-3xl" />
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-indigo-200 rounded-full flex -rotate-45 absolute -right-[300px] sm:-right-[400px] -top-1/4 blur-3xl" />
      <div className="flex flex-col justify-center items-center z-10 px-4 ">
        <span className="text-lg mx-2 sm:text-3xl text-purple-500 font-medium">
          Well well well...
        </span>
        <span className="text-lg mx-2 mt-2 sm:text-3xl text-pink-600 font-medium text-center">
          You're way stronger than what I expected ! Now I have no choice but to
          reveal the location of your gift.
        </span>
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4 italic">
          "I'm hiding where cats never want to go !"
        </span>
      </div>
    </div>
  );
};
