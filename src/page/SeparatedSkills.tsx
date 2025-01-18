import JSIcon from "../assets/icons8-javascript.svg";
import TSIcon from "../assets/icons8-typescript.svg";
import PYIcon from "../assets/icons8-python.svg";
import NextIcon from "../assets/icons8-nextjs.svg";
import ViteIcon from "../assets/icons8-vite.svg";
import TailwindIcon from "../assets/icons8-tailwind-css.svg";
import ReactIcon from "../assets/react.svg";
import shadCnIcon from "../assets/shadcn-ui-seeklogo.svg";
import motionIcon from "../assets/framer-motion.svg";

export default function SeparatedSkills() {
  return (
    <div className="py-6  min-[1280px]:hidden text-center space-y-14 flex flex-col items-center">
      <h1 className="border-2 shadow-bold dark:bg-slate-800 dark:text-white font-public dark:border-white dark:shadow-bolder border-black w-max  align-text-bottom font-bold text-5xl py-5 px-3 bg-[#fdf6e4] rounded-md ">
        Skills
      </h1>
      <div className="flex font-public font-semibold md:flex-row sm:flex-col sm:space-y-6 md:space-x-4 md:space-y-0">
        <div className="flex  dark:bg-slate-900  dark:border-white dark:shadow-bolder flex-col border-2 hover:scale-105 transform transition-all duration-200 border-black w-full bg-white  rounded-lg shadow-bold">
          <div className="flex flex-row items-center justify-between bg-[#d12c2c] dark:bg-neublue p-3  rounded-t-md rounded-y-md font-bold font-sans text-lg">
            <p className="mr-8">Languages</p>
            <div className="flex  flex-row space-x-3">
              <div className="w-4 h-4 bg-yellow-400 rounded-full "></div>{" "}
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>{" "}
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <div className="bg-white dark:border-white  transform transition-all duration-500  dark:bg-slate-900 dark:text-white sm:text-sm md:text-lg  rounded-y-md rounded-b-md p-3 border-t-2 border-black">
            <div className="dark:bg-slate-900">
              <ul className="flex dark:bg-slate-900 flex-col space-y-5">
                <li className="flex flex-row items-center">
                  {" "}
                  <img src={JSIcon} className="mr-8" alt="JSIcon" /> JavaScript
                </li>
                <li className="flex flex-row items-center">
                  {" "}
                  <img src={TSIcon} className="mr-8" alt="TSIcon" /> TypeScript
                </li>
                <li className="flex flex-row items-center">
                  {" "}
                  <img src={PYIcon} className="mr-8" alt="PYIcon" /> Python
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex dark:bg-slate-900 dark:border-white dark:shadow-bolder flex-col border-2 hover:scale-105 transform transition-all duration-200 border-black max-w-[800px] bg-white rounded-lg shadow-bold">
          <div className="flex  flex-row items-center justify-between bg-[#d12c2c] dark:bg-neublue p-3  rounded-t-md rounded-y-md font-bold font-sans text-lg">
            <p className="mr-8">Frameworks</p>
            <div className="flex flex-row space-x-3">
              <div className="w-4 h-4 bg-yellow-400 rounded-full "></div>{" "}
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>{" "}
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <div className="bg-white dark:border-white dark:bg-slate-900 dark:text-white sm:text-sm md:text-lg  rounded-y-md rounded-b-md p-3 border-t-2 border-black">
            <ul className="flex flex-col space-y-5">
              <li className="flex flex-row items-center">
                {" "}
                <img src={NextIcon} className="mr-8" alt="Next Icon" /> NextJS
              </li>
              <li className="flex flex-row items-center">
                {" "}
                <img
                  src={TailwindIcon}
                  className="mr-8"
                  alt="Tailwind Icon"
                />{" "}
                TailwindCSS
              </li>
              <li className="flex flex-row items-center">
                {" "}
                <img src={ViteIcon} className="mr-8" alt="Vite Icon" /> Vite
              </li>
            </ul>
          </div>
        </div>
        <div className="flex dark:bg-slate-900 flex-col dark:border-white dark:shadow-bolder border-2 hover:scale-105 transform transition-all duration-200 border-black max-w-[800px] bg-white rounded-lg shadow-bold">
          <div className="flex flex-row items-center justify-between bg-[#d12c2c] dark:bg-neublue p-3  rounded-t-md rounded-y-md font-bold font-sans text-lg">
            <p className="mr-8">Libraries</p>
            <div className="flex flex-row space-x-3">
              <div className="w-4 h-4 bg-yellow-400 rounded-full "></div>{" "}
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>{" "}
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 dark:text-white dark:border-white sm:text-sm md:text-lg  rounded-y-md rounded-b-md p-3 border-t-2 border-black">
            <ul className="flex flex-col space-y-5">
              <li className="flex flex-row items-center">
                {" "}
                <img
                  src={ReactIcon}
                  className="mr-8 w-[48px]"
                  alt="JSIcon"
                />{" "}
                React
              </li>

              <li className="flex flex-row items-center">
                {" "}
                <img
                  src={shadCnIcon}
                  className="mr-8 w-[48px]"
                  alt="JSIcon"
                />{" "}
                Shadcn UI
              </li>
              <li className="flex flex-row items-center">
                {" "}
                <img
                  src={motionIcon}
                  className="mr-8 w-[48px]"
                  alt="JSIcon"
                />{" "}
                Framer Motion
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
