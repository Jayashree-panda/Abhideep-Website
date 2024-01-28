import React from "react";

export default function ContactMe() {
  return (
    <div>
      <h1 className="tracking-widest text-5xl font-bold text-center text-[springgreen] mt-8">
        CONTACT ME
      </h1>
      <div className="grid grid-cols-2 h-[70vh] justify-center items-center mt-14 relative">
        <div className="border-r-2 border-solid border-[springgreen] pr-8 py-16 flex justify-center">
          <img src="./handsomeAbhi.jpg" height={10} width={500} />
        </div>
        <div>
          <h1 className="text-5xl font-bold text-center text-[aqua] absolute top-14">
            Let's chat! Tell me what you have in mind!
          </h1>
        </div>
      </div>
    </div>
  );
}
