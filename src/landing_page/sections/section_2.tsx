import React, { useState } from "react";
import { CakeIcon } from "../../assets/cake_icon";

const CakeButton: React.FC<{ className?: string }> = ({ className }) => {
  const [cakes, setCakes] = useState<JSX.Element[]>([]);

  const handleCakeClick = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const cake = (
      <CakeIcon
        key={cakes.length}
        className="h-16 w-8 mt-8 z-20 absolute animate-[spin_5s_linear_infinite]"
        style={{ left: x, top: y }}
        fill={{
          candles1: "indigo",
          candles2: "gray",
        }}
      />
    );
    setCakes([...cakes, cake]);
  };

  return (
    <div className={`flex items-center ${className}`}>
      <button
        className="flex items-center bg-indigo-100 z-30 text-indigo-500 rounded-lg font-bold py-1 px-2"
        onClick={handleCakeClick}
      >
        Generate Cake
        <CakeIcon className="w-3 h-3 ml-1" />
      </button>
      {cakes.length > 0 && (
        <button
          onClick={() => setCakes([])}
          className="flex ml-1 items-center bg-red-100 z-30 text-red-500 rounded-lg font-bold py-1 px-2"
        >
          Clear Cakes
        </button>
      )}
      {cakes}
    </div>
  );
};
export const Section2: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  const [showCake, setShowCake] = useState<boolean>(false);
  return (
    <div
      id="section2"
      className={`flex flex-col relative w-full z-10 items-center justify-center min-h-screen max-h-screen overflow-hidden ${className}`}
    >
      <div className="z-0 h-[350px] w-[500px] sm:h-[450px] sm:w-[750px] bg-red-200 rounded-full flex -rotate-45 absolute -right-[300px] sm:-right-[400px] -bottom-1/4 blur-3xl" />
      <div className="z-10 flex flex-col justify-center items-center w-full px-4 ">
        <span className="flex flex-col text-3xl sm:text-5xl text-center tracking-wide text-red-400 font-bold">
          What is{" "}
          <span className="text-5xl sm:text-8xl text-center font-bold text-yellow-500 mb-1">
            Sunshine
          </span>{" "}
          ?
        </span>
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4">
          Sunshine is a colorful experience that will make you{" "}
          <span className="text-pink-500 animate-pulse text-base sm:text-xl sm:tracking-wide">
            smile
          </span>{" "}
          and have a great{" "}
          <span className="text-pink-500 animate-pulse text-base sm:text-xl sm:tracking-wide">
            birthday
          </span>
          !
        </span>
        <span className="text-lg sm:text-2xl sm:max-w-[500px] text-center sm:tracking-wide text-dark-400 font-medium my-8">
          You'll be able to follow a mini game through Sunshine and go for a
          hunt to find your gift !
        </span>
        <span className="text-base sm:text-xl sm:max-w-[500px] text-center sm:tracking-wide text-dark-300 font-medium">
          But you have to be{" "}
          <span className="text-base sm:text-xl text-red-400">patient</span>, it
          will be available soon.
        </span>
        <span className="text-base sm:text-xl text-center sm:tracking-wide text-dark-300 font-medium mt-4">
          Anyway here's a{" "}
          <span className="text-base sm:text-xl text-indigo-500">cake</span> for
          you !
        </span>
        <CakeButton className="mt-4" />
      </div>
    </div>
  );
};
