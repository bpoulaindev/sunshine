import { Section1 } from "./sections/section_1";
import React, { useMemo } from "react";
import { Section2 } from "./sections/section_2";

export const LandingPage = () => {
  const countdownDate = new Date("2023-05-09T00:00:00.000Z").getTime();
  const now = new Date().getTime();
  const countdownFinished = useMemo(() => {
    return countdownDate - now <= 0;
  }, [countdownDate, now]);
  return (
    <div className="flex flex-col w-full h-full min-h-screen items-center justify-center bg-cream relative scroll-smooth overflow-hidden">
      {!countdownFinished ? (
        <>
          <Section1 />
          <Section2 />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center z-10 px-4 "></div>
      )}
    </div>
  );
};
