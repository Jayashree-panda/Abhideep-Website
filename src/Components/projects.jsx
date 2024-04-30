import React from "react";
import { projectsData } from "../constants";
import styles from "../index.scss";

export default function Projects() {
  return (
    <div className="mt-8 px-[20%]">
      <h1 className="tracking-widest text-5xl font-bold text-center text-[springgreen]">
        PROJECTS
      </h1>
      <div className="mt-12 flex flex-wrap gap-[1%]">
        {projectsData.map((project) => (
          <div className="w-[25%] p-4 border font-mono border-[springgreen] rounded-2xl">
            <img src={project.source} alt="" />
            <h2 className="text-lg font-bold text-[springgreen] mt-2">
              {project.heading}
            </h2>
            {project.tags.map((tag) => (
              <span className={`border border-[${styles.primary}] `}>
                {tag}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
