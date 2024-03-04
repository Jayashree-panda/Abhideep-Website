import React from "react";

const navItems = ["Home", "Projects", "Experience", "Education", "Contact Me"];

const projectsData = [
  {
    heading: "Optimizing Multi-Variable System Using Genetic Algorithm",
    content: (
      <ul style={{ listStyleType: "circle" }} className="ml-4">
        <li>
          Developed Hybrid Cuckoo Search Algorithm (Genetic Algorithm).Developed
          Hybrid Cuckoo Search Algorithm (Genetic Algorithm)
        </li>
        <li>Developed Hybrid Cuckoo Search Algorithm (Genetic Algorithm)</li>
        <li>Developed Hybrid Cuckoo Search Algorithm (Genetic Algorithm)</li>
      </ul>
    ),
  },
  {
    heading: "Optimizing Multi-Variable System Using Genetic Algorithm",
    content: (
      <ul style={{ listStyleType: "circle" }} className="ml-4">
        <li>
          Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm).Developed
          Hybrid Cuckoo Search Algorithm(Genetic Algorithm)
        </li>
        <li>Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm)</li>
        <li>Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm)</li>
      </ul>
    ),
  },
  {
    heading: "Optimizing Multi-Variable System Using Genetic Algorithm",
    content: (
      <ul style={{ listStyleType: "circle" }} className="ml-4">
        <li>
          Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm).Developed
          Hybrid Cuckoo Search Algorithm(Genetic Algorithm)
        </li>
        <li>Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm)</li>
        <li>Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm)</li>
      </ul>
    ),
  },
  {
    heading: "Optimizing Multi-Variable System Using Genetic Algorithm",
    content: (
      <ul style={{ listStyleType: "circle" }} className="ml-4">
        <li>
          Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm).Developed
          Hybrid Cuckoo Search Algorithm(Genetic Algorithm)
        </li>
        <li>Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm)</li>
        <li>Developed Hybrid Cuckoo Search Algorithm(Genetic Algorithm)</li>
      </ul>
    ),
  },
];

const experienceData = [
  {
    heading: "AMERICAN EXPRESS",
    jobTitle: "Product Development Analyst",
    content: (
      <div>
        <p>
          Popularly called as AMEX, is an American bank holding company and
          multinational financial services corporation that specializes in card
          payments
        </p>
        <br />

        <p>As a Product Development Analyst, Full Time, I -</p>
        <ul style={{ listStyleType: "circle" }} className="ml-4">
          <li>
            Contributed in creation of global credit risk models for AMEX
            corporate card members by creating required datasets and risk
            management rules
          </li>
          <li>
            Leveraged Big-Data Technologies like PySpark, Hive and Shell
            scripting to automate & optimise the Data layers with Quality data
            control checks
          </li>
          <li>
            Explored the fraud risk space through cross-functional partnerships
          </li>
          <li>
            Received recognition from senior leadership: Implemented
            Multi-Bureau data variables leading to significant increase in power
            of credit risk model
          </li>
        </ul>
      </div>
    ),
    location: "Gurgaon Area, India",
    duration: "July 2021 - March 2022",
  },
  {
    heading: "EXL SERVICE",
    jobTitle: "Buisness Analyst",
    content: (
      <div>
        <p>
          A market leading Analytics and Operation Management MNC. "We make
          sense of data to drive the business ahead".
        </p>
        <br />

        <p>As a Business Analyst, Full-Time, I-</p>
        <ul style={{ listStyleType: "circle" }} className="ml-4">
          <li>
            Minimised Risks and Frauds of a Fortune 500 leading American Bank
            (Physical Robbey, Teller Fraud, Identity Risk Management)
          </li>
          <li>
            Designed ETL pipelines fetching data from Oracle, Pyspark, Emails,
            CSV and SharePoint to centralised Oracle Server
          </li>
          <li>
            Created dashboards using Tableau and Built ML Models- Isolation
            Forest and Random Forest to cater to business needs
          </li>
          <li>
            Streamlined the deliverables with automation scripts and git ops to
            provide a seamless experience.
          </li>
        </ul>
      </div>
    ),
    location: "Gurgaon Area, India",
    duration: "April 2022 - Present",
  },
  {
    heading: "RKP",
    jobTitle: "Buisness Analyst",
    content: (
      <div>
        <p>
          A market leading Analytics and Operation Management MNC. "We make
          sense of data to drive the business ahead".
        </p>
        <br />
        <p>As a Business Analyst, Full-Time, I-</p>
        <ul style={{ listStyleType: "circle" }} className="ml-4">
          <li>
            Minimised Risks and Frauds of a Fortune 500 leading American Bank
            (Physical Robbey, Teller Fraud, Identity Risk Management)
          </li>
          <li>
            Designed ETL pipelines fetching data from Oracle, Pyspark, Emails,
            CSV and SharePoint to centralised Oracle Server
          </li>
          <li>
            Created dashboards using Tableau and Built ML Models- Isolation
            Forest and Random Forest to cater to business needs
          </li>
          <li>
            Streamlined the deliverables with automation scripts and git ops to
            provide a seamless experience.
          </li>
        </ul>
      </div>
    ),
    location: "Gurgaon Area, India",
    duration: "April 2022 - Present",
  },
  {
    heading: "RKPP",
    jobTitle: "Buisness Analyst",
    content: (
      <div>
        <p>
          A market leading Analytics and Operation Management MNC. "We make
          sense of data to drive the business ahead".
        </p>
        <br />
        <p>As a Business Analyst, Full-Time, I-</p>
        <ul style={{ listStyleType: "circle" }} className="ml-4">
          <li>
            Minimised Risks and Frauds of a Fortune 500 leading American Bank
            (Physical Robbey, Teller Fraud, Identity Risk Management)
          </li>
          <li>
            Designed ETL pipelines fetching data from Oracle, Pyspark, Emails,
            CSV and SharePoint to centralised Oracle Server
          </li>
          <li>
            Created dashboards using Tableau and Built ML Models- Isolation
            Forest and Random Forest to cater to business needs
          </li>
          <li>
            Streamlined the deliverables with automation scripts and git ops to
            provide a seamless experience.
          </li>
        </ul>
      </div>
    ),
    location: "Gurgaon Area, India",
    duration: "April 2022 - Present",
  },
];

const educationData = [
  {
    instituteName: "BITS Pilani",
    location: "Hyderabad, India",
    duration: "2017 - 2021",
    content: (
      <div>
        <p>
          At BITs, I served as the president and Tech Lead of Student Welfare
          Division where I:-
        </p>
        <br />
        <ul style={{ listStyleType: "circle" }} className="ml-4">
          <li>
            Was acting president of the campus Impacting 5000+ lives by being
            the bridge between administration and students
          </li>
          <li>
            Solved complex issues spanning across hostel allotments, mental
            health, Fest management, and Early Pandemic Crisis
          </li>
          <li>
            Lead a team of 12 to coordinate with more than 100+ students, 10+
            administrative divisions, 15+ officials, and numerous companies
          </li>
          <li>
            Imbibed leadership qualities, time management skills, corporate
            etiquette and shareholder management
          </li>
          <li>
            Developed technology-driven solutions to solve real-life problems of
            students as well as administration on campus
          </li>
          <li>
            Designed Mess registration system that could handle 6000+ requests
            in 10 seconds using PHP and MySQL
          </li>
        </ul>
        <br />
        <p>
          I was also the founder of skating team, president of Regional
          Association of Odisha and Elected Representative of student Mess
          Council
        </p>
      </div>
    ),
  },
  {
    instituteName: "Kendriya Vidyalaya",
    location: "Bhubaneswar, India",
    duration: "2017 - 2021",
    content: (
      <div>
        <p>
          At BITs, I served as the president and Tech Lead of Student Welfare
          Division where I:-
        </p>
        <br />
        <ul style={{ listStyleType: "circle" }} className="ml-4">
          <li>
            Was acting president of the campus Impacting 5000+ lives by being
            the bridge between administration and students
          </li>
          <li>
            Solved complex issues spanning across hostel allotments, mental
            health, Fest management, and Early Pandemic Crisis
          </li>
          <li>
            Lead a team of 12 to coordinate with more than 100+ students, 10+
            administrative divisions, 15+ officials, and numerous companies
          </li>
          <li>
            Imbibed leadership qualities, time management skills, corporate
            etiquette and shareholder management
          </li>
          <li>
            Developed technology-driven solutions to solve real-life problems of
            students as well as administration on campus
          </li>
          <li>
            Designed Mess registration system that could handle 6000+ requests
            in 10 seconds using PHP and MySQL
          </li>
        </ul>
        <br />
        <p>
          I was also the founder of skating team, president of Regional
          Association of Odisha and Elected Representative of student Mess
          Council
        </p>
      </div>
    ),
  },
];
export { navItems, projectsData, experienceData, educationData };
