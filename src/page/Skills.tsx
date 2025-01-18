import React, { useState } from "react";
import JSIcon from "../assets/icons8-javascript.svg";
import TSIcon from "../assets/icons8-typescript.svg";
import PYIcon from "../assets/icons8-python.svg";
import NextIcon from "../assets/icons8-nextjs.svg";
import ViteIcon from "../assets/icons8-vite.svg";
import TailwindIcon from "../assets/icons8-tailwind-css.svg";
import ReactIcon from "../assets/react.svg";
import shadCnIcon from "../assets/shadcn-ui-seeklogo.svg";
import motionIcon from "../assets/framer-motion.svg";

const Skills: React.FC = () => {
  const categories = {
    Languages: [
      { name: "Python", image: PYIcon },
      { name: "JavaScript", image: JSIcon },
      { name: "TypeScript", image: TSIcon },
    ],
    Frameworks: [
      { name: "Vite", image: ViteIcon },
      { name: "Next.js", image: NextIcon },
      { name: "TailwindCSS", image: TailwindIcon },
    ],
    Libraries: [
      { name: "ShadCn UI", image: shadCnIcon },
      { name: "React", image: ReactIcon },
      { name: "Framer motion", image: motionIcon },
    ],
  };

  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof categories>("Languages");

  return (
    <div className="flex justify-center ">
      <div className="inline-block items-center space-y-6 p-6">
        {/* Category Buttons */}
        <div className="flex space-x-4">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category as keyof typeof categories)
              }
              className={`px-24 py-2  border-2 font-semibold border-black  transform transition-all duration-500 dark:border-white dark:shadow-bolder shadow-bold rounded-md text-sm ${
                selectedCategory === category
                  ? "dark:bg-neublue bg-[#d12c2c] text-white dark:text-black"
                  : "bg-white dark:bg-slate-900 dark:text-white  text-black dark:hover:bg-slate-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex transform transition-all duration-500 justify-center">
          <div className="flex flex-col border-2 border-black max-w-[800px] transform transition-all duration-500 dark:border-white dark:shadow-bolder bg-white rounded-lg shadow-bold">
            <div className="flex flex-row items-center justify-between text-white dark:text-black bg-[#d12c2c] dark:bg-neublue p-3 rounded-t-md font-bold font-sans text-lg">
              <p className="mr-8">Skills</p>
              <div className="flex flex-row space-x-3">
                <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              </div>
            </div>
            <div className="bg-white dark:border-white dark:bg-slate-900 sm:text-sm md:text-lg rounded-b-md p-5 border-t-2  border-black">
              <div className="flex flex-wrap justify-center gap-6">
                {categories[selectedCategory].map((item, index) => (
                  <div
                    key={index}
                    className="flex dark:text-white dark:border-white dark:shadow-bolder dark:hover:text-black min-w-[230px] transform transition-all font-semibold duration-500 hover:scale-105 hover:bg-[#d12c2c] hover:text-white dark:hover:bg-neublue  min-h-[130px] justify-center flex-col items-center border-2 border-black shadow-bold px-4 py-2 rounded-md text-sm text-gray-700"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 mb-2"
                    />
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
