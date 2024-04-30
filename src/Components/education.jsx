import React from "react";
import { MdLocationOn } from "react-icons/md";
import { educationData } from "../constants";

export default function Education() {
  const renderElement = (education) => (
    <div className="p-4 font-mono rounded-2xl">
      <h2 className="text-lg font-bold text-[springgreen]">
        {education.instituteName}
      </h2>
      <div className="text-[springgreen] flex justify-between text-sm">
        <div className="flex items-center">
          <MdLocationOn size={16} color="springgreen" />
          <p className="ml-2">{education.location}</p>
        </div>
        <p className="mr-10">{education.duration}</p>
      </div>
      <br />
      <p className="text-[aqua]">{education?.content}</p>
    </div>
  );
  return (
    <div className="mt-8 px-[10%]">
      <h1 className="tracking-widest text-5xl font-bold text-center text-[springgreen] mb-12">
        EDUCATION
      </h1>
      <div className="flex justify-center">
        <div className="pr-2 border-r-2 border-solid border-[springgreen]">
          {renderElement(educationData[0])}
        </div>
        <div className="ml-4">{renderElement(educationData[1])}</div>
      </div>
    </div>
  );
}
