import Profile from "./page/Profile";
import Card from "./page/components/Card";
import Experiences from "./page/Experiences";
import MyProject from "./page/MyProject";
import { useRef, useEffect } from "react";
import SeparatedSkills from "./page/SeparatedSkills";
import Skills from "./page/Skills";
import Contact from "./page/Contacts";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "./index.css";

import Navbar from "./page/Navbar";
import { useState } from "react";

export default function HomePage() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    window.scrollRefs = {
      about: aboutRef,
      experience: experienceRef,
      project: projectRef,
      contact: contactRef,
    };
  }, []);

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");

    return savedMode ? JSON.parse(savedMode) : false;
  });

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  const isMediumScreen = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div className="flex flex-col   justify-center ">
      <div className={`${darkMode && "dark"} relative`}>
        <div className="inset-0 md:pt-[250px] sm:pt-[150px] bg-[#fdf6e4]  dark:bg-slate-800 dark:bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] dark:[background-size:40px_40px] -z-10 overflow-hidden bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:40px_40px]">
          <div className="flex justify-center">
            <Navbar />
          </div>

          <div>
            <div
              ref={aboutRef}
              className=" sm:absolute left-0 right-0 md:relative"
            >
              <Profile />
            </div>
            <div className="pt-8 px-5 flex justify-center motion-preset-slide-down-md motion-duration-1000 motion-delay-1500">
              <div className="sm:mt-[290px] md:mt-0 ">
                <Card
                  title="About me"
                  content="Hello, my name is Vazha Khayri. I am first-year student at University of Indonesia majoring Information System. I have deep interest in technology especially programming, web development, software engineering, cybersecurity and game development. I have enthusiasm for exploring the field of technology and commited to contribute in creating an innovation through my interest in computer science."
                />
              </div>
            </div>
          </div>

          <div
            ref={experienceRef}
            className="p-8 sm:mt-[50px] md:mt-[400px] items-center flex flex-col"
          >
            {isMediumScreen ? (
              <div className="flex flex-col items-center justify-center">
                <motion.div
                  initial={{ translateX: 500, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ margin: "-70px", once: false }}
                >
                  <h1 className="border-2 transform transition-all duration-500 font-public dark:bg-slate-800 dark:text-white dark:border-white dark:shadow-bolder shadow-bold border-black w-max align-text-bottom font-bold text-5xl py-5 px-3 bg-[#fdf6e4] rounded-md mb-8">
                    Experiences
                  </h1>
                </motion.div>
                <motion.div
                  initial={{ translateX: -1000, opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ margin: "-200px", once: false }}
                >
                  <div className="flex justify-center">
                    <Experiences />
                  </div>
                </motion.div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center">
                <h1 className="border-2 transform transition-all duration-500 font-public dark:bg-slate-800 dark:text-white dark:border-white dark:shadow-bolder shadow-bold border-black w-max align-text-bottom font-bold text-5xl py-5 px-3 bg-[#fdf6e4] rounded-md mb-8">
                  Experiences
                </h1>
                <div className="flex justify-center">
                  <Experiences />
                </div>
              </div>
            )}
          </div>

          <div ref={projectRef} className="mt-[50px]">
            <MyProject />
          </div>

          <SeparatedSkills />
          {isMediumScreen ? (
            <div className="overflow-hidden">
              <motion.div
                initial={{ translateY: 200, opacity: 0 }}
                whileInView={{ translateY: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false }}
              >
                <div className="sm:hidden min-[1000px]:block">
                  <Skills />
                </div>
              </motion.div>
            </div>
          ) : (
            <div></div>
          )}
          <div ref={contactRef} className="flex flex-col items-center pt-10">
            <h1 className="border-2 font-public  transform transition-all duration-500 dark:bg-slate-800 dark:border-white dark:shadow-bolder dark:text-white shadow-bold border-black w-max align-text-bottom font-bold text-5xl py-5 px-3 bg-[#fdf6e4] rounded-md mb-8">
              Contact Me
            </h1>
            <Contact />
          </div>
        </div>
        <button
          onClick={toggleDarkMode}
          className=" sm:bottom-5  sm:right-5 md:bottom-10 md:right-10 rounded-md md:w-14 md:h-14 sm:w-10 sm:h-10 dark:border-black transform transition-all duration-300 border-2 shadow-bolder dark:shadow-bold  border-white bg-slate-800 fixed flex justify-center p-0 items-center dark:bg-white"
        >
          <div className="relative sm:w-[30px] md:w-[40px] overflow-hidden">
            {/* Moon Icon */}
            <svg
              className={`flex  transform transition-all duration-500 ${
                darkMode ? "translate-x-0 opacity-100" : "-translate-x-[200%]"
              }`}
              fill="none"
              strokeWidth={1.5}
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>

            {/* Sun Icon */}
            <svg
              className={`absolute top-0 left-0 transform transition-all duration-500 ${
                darkMode ? "translate-x-[200%]" : "translate-x-0 opacity-100"
              }`}
              fill="none"
              strokeWidth="1.5"
              stroke="#ffffff"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
