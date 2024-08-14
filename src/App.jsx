import "./App.css";
import { useState, useEffect } from "react";
import ProgressBar from "./components/ProgressBar.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  const [num, setNum] = useState(0);
  const [history, setHistory] = useState([0]);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", !isDarkMode ? "dark" : "light");
  };

  const handleAdd = () => {
    if (num < 150) {
      const newNum = num + 1;
      const newHistory = [...history.slice(0, historyIndex + 1), newNum];
      setNum(newNum);
      setHistory(newHistory);
      setHistoryIndex(historyIndex + 1);
    }
  };

  const handleSubtract = () => {
    if (num > 0) {
      const newNum = num - 1;
      const newHistory = [...history.slice(0, historyIndex + 1), newNum];
      setNum(newNum);
      setHistory(newHistory);
      setHistoryIndex(historyIndex + 1);
    }
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setNum(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setNum(history[historyIndex + 1]);
    }
  };
  const resetNum = () => {
    setHistory([0]);
    setNum(0);
    setHistoryIndex(0);
  };

  return (
    <>
      <main
        className={`${
          isDarkMode
            ? "poppins-regular bg-slate-900 text-slate-50"
            : "bg-teal-100 text-slate-900"
        } h-screen rounded-t-xl w-full    max-w-[1400px] mx-auto`}
      >
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

        <div className="z-10  mx-auto flex flex-col relative   space-y-8 w-2/3 my-20">
          <h1 className="bg-gradient-to-r text-left text-4xl font-bold from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[size:300%] animate-gradient-slow mx-auto">
            Counter App
          </h1>
          <div className="font-mono font-semibold text-xl"> Count: {num}</div>
          <div className="buttons grid lg:grid-cols-4 grid-cols-2    ">
            <button
              onClick={handleSubtract}
              className="bg-red-600 text-white px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 m-2"
            >
              Subtract
            </button>
            <button
              onClick={handleAdd}
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition duration-300 ease-in-out transform hover:scale-105 m-2"
            >
              Add
            </button>
            <button
              onClick={handleUndo}
              disabled={historyIndex === 0}
              className={`px-4 py-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 m-2 ${
                historyIndex === 0
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              Undo
            </button>
            <button
              onClick={handleRedo}
              disabled={historyIndex === history.length - 1}
              className={`px-4 py-2 rounded-xl transition duration-300 ease-in-out transform m-2 hover:scale-105 ${
                historyIndex === history.length - 1
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-yellow-600 text-white hover:bg-yellow-700"
              }`}
            >
              Redo
            </button>
          </div>
          <ProgressBar value={num} max={150} />
          <button
            onClick={resetNum}
            type="button"
            className="w-fit text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 transition-transform duration-300 ease-in-out transform hover:scale-101 m-2"
          >
            Reset
          </button>
        </div>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </>
  );
};

export default App;
