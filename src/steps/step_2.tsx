import { MargueriteIcon } from "../assets/marguerite_icon";
import { palette } from "../palette";
import React from "react";

export const Step2: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-col relative w-full z-10 items-center justify-center min-h-screen max-h-screen bg-cream overflow-hidden ${className}`}
    >
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-indigo-200 rounded-full flex -rotate-45 absolute -left-[300px] sm:-left-[400px] -bottom-1/4 blur-3xl" />
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-indigo-200 rounded-full flex -rotate-45 absolute -right-[300px] sm:-right-[400px] -top-1/4 blur-3xl" />
      <div className="flex flex-col justify-center items-center z-10 px-4 ">
        <div className="flex items-center">
          <MargueriteIcon
            className="h-6 w-6 xl:h-8 xl:w-8 animate-[spin_2s_linear_infinite]"
            fill={{
              petals: palette?.["purple"][200],
            }}
          />
          <span className="text-lg mx-2 sm:text-3xl text-indigo-500 font-medium">
            Impressive !
          </span>
          <MargueriteIcon
            className="h-6 w-6 xl:h-8 xl:w-8 animate-[spin_2s_linear_infinite]"
            fill={{
              petals: palette?.["purple"][200],
            }}
          />
        </div>
        <span className="text-lg mx-2 mt-2 sm:text-3xl text-yellow-600 font-medium">
          You made it to the second step.
        </span>
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4">
          Here's your next clue :
        </span>
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4 italic">
          "Lost in the cold, I wait for the return of the sun..."
        </span>
      </div>
    </div>
  );
};
