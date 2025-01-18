import ProjectCarousel from "./components/ProjectCarousel";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function MyProject() {
  const isMediumScreen = useMediaQuery({ query: "(min-width: 1280px)" });

  return (
    <div className="py-6 text-center flex flex-col items-center overflow-hidden">
      {isMediumScreen ? (
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ translateY: -100, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-70px", once: false }}
          >
            <h1 className="border-2 font-public transform-all transition duration-300 shadow-bold dark:border-white dark:shadow-bolder dark:bg-slate-800 dark:text-white border-black w-max align-text-bottom font-bold text-5xl py-5 px-3 bg-[#fdf6e4] rounded-md ">
              My Projects <span className="sm:hidden md:inline">& Skills</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ translateY: 500, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ margin: "-70px", once: false }}
          >
            <ProjectCarousel />
          </motion.div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="border-2 font-public transform-all transition duration-300 shadow-bold dark:border-white dark:shadow-bolder dark:bg-slate-800 dark:text-white border-black w-max align-text-bottom font-bold text-5xl py-5 px-3 bg-[#fdf6e4] rounded-md ">
            My Projects <span className="sm:hidden md:inline">& Skills</span>
          </h1>
          <ProjectCarousel />
        </div>
      )}
    </div>
  );
}
