import "@theme-toggles/react/css/Classic.css";
import { Classic } from "@theme-toggles/react";
import { useState } from "react";

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [isToggled, setToggle] = useState(false);

  return (
    <>
      <div
        className={`  rounded-t-xl border text-2xl   font-bold p-4 px-8 flex align-middle items-center justify-between ${
          isDarkMode
            ? "bg-gray-900 border-b-neutral-50  text-white"
            : "bg-teal-100  border-b-neutral-900 "
        }`}
      >
        <div>
          <span></span>Count.io
        </div>
        <div>
          {" "}
          <Classic
            onClick={toggleTheme}
            className=" align-middle"
            forceMotion
            duration={750}
            toggled={isToggled}
            toggle={setToggle}
          />
        </div>
      </div>{" "}
    </>
  );
}
