import { useState } from "react";
import styles from "./index.scss";
import Home from "./Components/home";
import Education from "./Components/education";
import Experience from "./Components/experience";
import AboutMe from "./Components/aboutme";
import ContactMe from "./Components/contactme";
import Projects from "./Components/projects";
import { navItems } from "./constants";

function App() {
  const [activeState, setActiveState] = useState("home");

  const menuComponent = {
    home: <Home />,
    "about me": <AboutMe />,
    projects: <Projects />,
    experience: <Experience />,
    education: <Education />,
    "contact me": <ContactMe />,
  };
  return (
    <div className="bg-gray-800 min-h-screen text-white p-8 w-screen">
      <ul className="flex items-center justify-center gap-8">
        {navItems.map((item, index) => (
          <li
            // className="text-base cursor-pointer"
            className={`text-base cursor-pointer pb-1 ${
              activeState === item?.toLowerCase()
                ? `text-[${styles.primary}] border-b-2 border-[${styles.secondary}] font-bold`
                : `text-white`
            }`}
            key={index}
            onClick={() => {
              setActiveState(item?.toLowerCase());
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {menuComponent[activeState]}
    </div>
  );
}

export default App;
