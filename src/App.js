import { useState } from "react";
import Education from "./Components/education";
import Experience from "./Components/experience";
import Home from "./Components/home";
import ContactMe from "./Components/contactme";
import Projects from "./Components/projects";
import { navItems, aboutMe } from "./constants";

function App() {
  const [activeState, setActiveState] = useState("home");

  const menuComponent = {
    home: <Home />,
    projects: <Projects />,
    experience: <Experience />,
    education: <Education />,
    "contact me": <ContactMe />,
  };
  return (
    <div className="bg-gray-800 min-h-screen text-white p-8">
      <ul className="flex items-center justify-center gap-8">
        {navItems.map((item, index) => (
          <li
            // className="text-base cursor-pointer"
            className={`text-base cursor-pointer pb-1 ${
              activeState === item?.toLowerCase()
                ? `text-[aqua] border-b-2 border-[springgreen] font-bold`
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
