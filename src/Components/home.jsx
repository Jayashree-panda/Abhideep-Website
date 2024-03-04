import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center mt-10 font-mono">
      <img
        src="./abhideep.jpeg"
        alt=""
        className="rounded-[50%] h-[300px] w-[300px]"
      />
      <div className="grid grid-cols-2 mt-10 px-[20%] gap-10 text-lg text-[springgreen]">
        <div>
          <p>
            I am Abhideep Tripathy. I work as a Product Development Analyst at
            <b> American Express</b>. I have almost 3 years of working
            experience in this field. Before this I have worked with{" "}
            <b>EXL Service </b>
            as Buisness Analyst.
          </p>
          <br />
          <p>
            I completed my Bachelor's in Engineering from <b>BITS Pilani</b> in{" "}
            <b>Mechanical Engineering</b>. There, I was the President and Tech
            Lead of Student Welfare Division.
          </p>
          <br />
          <p>
            I completed my Bachelor's in Engineering from <b>BITS Pilani</b> in{" "}
            <b>Mechanical Engineering</b>. There, I was the President and Tech
            Lead of Student Welfare Division.
          </p>
        </div>
        <div>
          <p>
            Born on 15th October 1931 at Rameswaram in Tamil Nadu, Dr. Avul
            Pakir Jainulabdeen Abdul Kalam, specialized in Aeronautical
            Engineering from Madras Institute of Technology. Dr. Kalam made
            significant contribution as Project Director to develop India's
            first indigenous Satellite Launch Vehicle (SLV-III) which
            successfully injected the Rohini satellite in the near earth orbit
            in July 1980 and made India an exclusive member of Space Club.
          </p>
          <br />
          <p>
            Born on 15th October 1931 at Rameswaram in Tamil Nadu, Dr. Avul
            Pakir Jainulabdeen Abdul Kalam, specialized in Aeronautical
            Engineering from Madras Institute of Technology. Dr. Kalam made
            significant contribution as Project Director to develop India's
            first indigenous Satellite Launch Vehicle (SLV-III)
          </p>
        </div>
      </div>
    </div>
  );
}
