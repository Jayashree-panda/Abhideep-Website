import React from "react";
import { projectsData } from "../constants";

export default function Projects() {
  return (
    <div className="mt-8 px-[20%]">
      <h1 className="tracking-widest text-5xl font-bold text-center text-[springgreen]">
        PROJECTS
      </h1>
      <div className="mt-12 flex flex-wrap gap-8">
        {projectsData.map((project) => (
          <div className="w-[500px] p-4 border font-mono border-[springgreen] rounded-2xl">
            <h2 className="text-lg font-bold text-[springgreen]">
              {project.heading}
            </h2>
            <br />
            <p className="text-[aqua]">
              {project.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
