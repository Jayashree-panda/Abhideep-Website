import React from "react";
import { projectDataSummary } from "../constants";
import styles from "../index.scss";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center pt-8 items-center mt-[4%] text-center">
        <img
          src="./abhideep.jpeg"
          alt=""
          className="rounded-[50%] h-[150px] w-[150px]"
        />
        <p className="text-lg mt-[1%]  text-[aqua] w-[50%]">
          I am Abhideep. I analyze data to take accurate buisness decision. I am
          Abhideep. I analyze data to take accurate buisness decision. I am
          Abhideep. I analyze data to take accurate buisness decision.
        </p>
      </div>
      <div>
        <h1 className="tracking-widest text-3xl font-bold text-center mt-[4%] text-[springgreen]">
          PORTFOLIO
        </h1>
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center mt-4 gap-[1%]">
            {projectDataSummary.map((project) => (
              <div className={`border-2 border-[aqua] w-[15%] p-3 rounded-3xl`}>
                <img src={project.source} alt="" />
                <p
                  className={`text-base font-bold mt-1 text-[${styles.secondary}]`}
                >
                  {project.heading}
                </p>
              </div>
            ))}
          </div>
          <button className="mt-6 border-2 border-[grey] p-2 text-[grey] font-bold rounded-lg">
            See All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
