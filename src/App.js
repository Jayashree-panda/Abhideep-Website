import { useState } from "react";
import ContactMe from "./Components/contactme";
import Education from "./Components/education";
import Experience from "./Components/experience";
import Home from "./Components/home";
import MyVision from "./Components/myvision";
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
    "my vision": <MyVision />,
  };
  return (
    <div className="bg-gray-800 min-h-screen text-white p-8">
      <ul className="flex items-center justify-center gap-8">
        {navItems.map((item, index) => (
          <li
            className="text-base cursor-pointer"
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
