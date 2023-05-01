import { Section1 } from "./sections/section_1";
import React from "react";
import { Section2 } from "./sections/section_2";

export const LandingPage = () => {
  return (
    <div className="flex flex-col w-full h-full min-h-screen items-center justify-center bg-cream relative scroll-smooth overflow-hidden">
      <Section1 />
      <Section2 />
    </div>
  );
};
