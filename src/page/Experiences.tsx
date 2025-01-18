import OHIcon from "../assets/oh-logo-text-white.webp";

export default function Experiences() {
  return (
    <div className="flex flex-col border-2  transform transition-all duration-500 dark:border-white border-black w-full bg-white rounded-lg shadow-bolder">
      <div className="flex flex-row items-center justify-between bg-[#d12c2c] text-white dark:text-black dark:bg-neublue p-3  rounded-t-md rounded-y-md font-bold font-sans text-lg">
        <p className="mr-8  ">Timeline</p>
        <div className="flex flex-row space-x-3">
          <div className="w-4 h-4 bg-yellow-400 rounded-full "></div>{" "}
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>{" "}
          <div className="w-4 h-4 bg-red-500 rounded-full"></div>
        </div>
      </div>
      <div className="dark:bg-slate-900 bg-white rounded-y-md rounded-b-md p-3 border-t-2 border-black">
        <div className="sm:p-1 md:p-8">
          <div className="flex flex-col grid-cols-9 sm:p-1 md:p-2 mx-auto md:grid ">
            <div className="flex md:contents flex-row-reverse">
              <div className="relative p-3 my-6  transform transition-all dark:shadow-bolder duration-200 hover:scale-105 dark:bg-slate-900 dark:border-white bg-white rounded-md border-2 border-black shadow-bold col-start-1 col-end-5 mr-auto md:mr-0 md:ml-auto">
                <div className="flex flex-row justify-between">
                  <div>
                    <h3 className="sm:text-sm md:text-xl text-[#d12c2c] dark:text-[#69D2E7] font-semibold text-">
                      Open House Fasilkom UI
                    </h3>
                    <p className="mb-2 font-semibold sm:text-sm dark:text-white md:text-lg">
                      Human Resource Staff
                      <br /> Jul 2024 - Dec 2024
                    </p>
                  </div>
                  <div>
                    <img src={OHIcon} className="w-20" alt="" />
                  </div>
                </div>

                <ul className="list-disc dark:text-white font-public  ml-4 mr-3 md:text-lg sm:text-[12px]">
                  <li>Managed IT Development division</li>
                  <li>Actively Attending meeting sessions</li>
                  <li>Success organizing welcoming staff OH 2024 program</li>
                  <li>Master of Ceremony (MC) at a plenary meeting</li>
                  <li>
                    Handling project IT Development in developing OH website
                  </li>
                  <li>Actively contributed in IT Development sprints</li>
                </ul>
              </div>
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full dark:bg-white bg-black rounded-t-full"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 bg-white dark:bg-slate-900 border-4 dark:border-white border-black rounded-full top-1/2"></div>
              </div>
            </div>

            <div className="flex md:contents">
              <div className="relative col-start-5 col-end-6 mr-7 md:mx-auto">
                <div className="flex items-center justify-center w-6 h-full">
                  <div className="w-1 h-full dark:bg-white bg-black rounded-b-full"></div>
                </div>
                <div className="absolute w-6 h-6 -mt-3 dark:bg-slate-900 dark:border-white bg-white border-4 border-black rounded-full top-1/2"></div>
              </div>
              <div className="relative p-4 my-6 transform transition-all dark:bg-slate-900 dark:border-white dark:shadow-bolder duration-200 hover:scale-105 text-gray-800 bg-white rounded-md border-2 border-black shadow-bold col-start-6 col-end-10 mr-auto">
                <h3 className="font-semibold sm:text-sm md:text-xl text-[#d12c2c] dark:text-[#69D2E7]">
                  Journalistic Club
                </h3>
                <p className="mb-2 font-semibold sm:text-sm md:text-lg dark:text-white ">
                  Organization Leader <br /> 2022 - 2023{" "}
                </p>
                <ul className="list-disc dark:text-white font-public  ml-4 mr-3 md:text-lg sm:text-[12px]">
                  <li>Developing Journalistic club social media</li>
                  <li>
                    Actively sharing and promoting school activities to public
                    mading and social media
                  </li>
                  <li>
                    Serving platform for MAN 6 students to express their
                    aspirations
                  </li>
                  <li>
                    Serving platform to showcase students' art and creativity
                    through the club
                  </li>{" "}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
