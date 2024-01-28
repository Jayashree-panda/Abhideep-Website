import React from "react";
import { MdLocationOn } from "react-icons/md";
import { experienceData } from "../constants";

export default function Experience() {
  const half = Math.ceil(experienceData.length / 2);
  const leftSide = Array.from({ length: half }, (_, index) => index);
  const rightSide = Array.from(
    { length: experienceData.length - half },
    (_, index) => half + index
  );

  const renderElement = (exp) => (
    <div className="p-4 font-mono rounded-2xl">
      <h2 className="text-lg font-bold text-[springgreen]">
        {experienceData[exp].heading}
      </h2>
      <div className="text-[springgreen] flex justify-between text-sm">
        <div className="flex items-center">
          <MdLocationOn size={16} color="springgreen" />
          <p className="ml-2">{experienceData[exp].location}</p>
        </div>
        <p className="mr-10">{experienceData[exp].duration}</p>
      </div>
      <br />
      <p className="text-[aqua]">{experienceData[exp]?.content}</p>
    </div>
  );
  return (
    <div className="mt-8 px-[10%]">
      <div>
        <h1 className="tracking-widest text-5xl font-bold text-center text-[springgreen]">
          EXPERIENCE
        </h1>
        <div className="flex">
          <div className="mt-12 mr-2 flex-col gap-8 border-r-2 border-solid border-[springgreen]">
            {leftSide.map((exp) => renderElement(exp))}
          </div>
          <div className="mt-12 flex-col gap-8 ml-4">
            {rightSide.map((exp) => renderElement(exp))}
          </div>
        </div>
      </div>
    </div>
  );
}
