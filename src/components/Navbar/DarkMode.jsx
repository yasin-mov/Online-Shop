import React from "react";
import LightButton from "../../website/Light.svg";
import DarkButton from "../../website/Dark.svg";
import { useState } from "react";
import { useEffect } from "react";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  console.log(element);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
    //   element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt="Switch"
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-500`}
      />
      <img
        src={DarkButton}
        alt="Switch"
        className={`w-12 cursor-pointer`}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
    </div>
  );
};

export default DarkMode;
