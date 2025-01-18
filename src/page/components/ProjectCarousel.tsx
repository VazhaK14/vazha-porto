import PortoWeb from "../../assets/web-porto.jpeg";
import ToDoListProject from "../../assets/to-do-list-project.jpeg";
import { SVGAttributes } from "react";
import ChatBOt from "../../assets/simple-chatbot.jpeg";

export function LinkIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
      />
    </svg>
  );
}

export function GithubLogo(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { motion, AnimatePresence } from "framer-motion";

interface ResponsiveMenuProps {
  open: boolean;
}

export function ResponsiveMenu({ open }: ResponsiveMenuProps) {
  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20  right-0   h-screen z-20"
          >
            <div className="text-xl font-semibold p-10 uppercase bg-white dark:bg-slate-800 text-black border-2 border-black shadow-bold rounded-md">
              <ul className="flex flex-col justify-center items-center gap-10">
                <li>About Us</li>
                <li>Experience</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ProjectCarousel() {
  const arrayContents = [
    {
      image: PortoWeb,
      title: "Portofolio Website",
      desc: "Built with Typescript, React, Vite, and Tailwind CSS. A platform to share my personal journey and progress I've made.",
      showRepo: true,
      webIcon: true,
      appIcon: false,
      repoLink: "https://github.com/VazhaK14/vazha-porto",
      liveLink: "https://vazha-porto.vercel.app/",
    },
    {
      image: ToDoListProject,
      title: "To-do List App",
      desc: "Simple To-do List App developed in progress of learning useState and React components.",
      showRepo: true,
      webIcon: true,
      appIcon: false,
      repoLink: "https://github.com/VazhaK14/to-do-list-app",
      liveLink: "https://vazhak14.github.io/to-do-list-app/",
    },
    {
      image: ChatBOt,
      title: "Simple Chatbot",
      desc: "Last project from lecture Basic Programming 1, creating a simple chatbot built in python with the features: create jokes, simple math, showing time, and music player.",
      showRepo: false,
      webIcon: false,
      appIcon: true,
      repoLink: "https://github.com/VazhaK14/simple-chatbot",
    },
  ];
  return (
    <div className="pt-8 px-8 flex justify-center">
      <div className="md:w-[1100px]  lg:w-full sm:w-[600px] px-44">
        <Carousel
          opts={{
            align: "start",
          }}
          className=" "
        >
          <CarouselContent>
            {arrayContents.map((content, index) => (
              <CarouselItem
                key={index}
                className="min-[768px]:basis-1/2 min-[1300px]:basis-1/3 "
              >
                <div className="p-3 ">
                  <Card className="bg-white md:h-[570px] transform transition-all duration-500 dark:border-white dark:shadow-bolder dark:bg-slate-900 dark:text-white border-2 md:min-h-[440px] sm:min-h-[320px] border-black shadow-bold rounded-md overflow-hidden">
                    <CardContent className="p-0">
                      <img
                        src={content.image}
                        className="w-full md:min-h-[240px] md:max-h-[240px] object-cover border-b-2 dark:border-white border-black "
                        alt="porto web"
                      />
                      <div className="p-4 text-start">
                        <h1 className="mb-2 dark:text-[#69D2E7] text-[#d12c2c] font-bold md:text-xl">
                          {content.title}
                        </h1>
                        <p className="sm:text-[12px] font-public md:text-[17px] h-[120px]">
                          {content.desc}
                        </p>
                        <div className="flex flex-col">
                          <div className="justify-center flex sm:py-0 md:py-4 ">
                            {content.webIcon && (
                              <div className="flex border-2 w-fit gap-3 shadow-bold border-black px-3 py-1 rounded-md ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  width="35px"
                                  height="35px"
                                  className="sm:w-[25px] md:w-[35px]"
                                >
                                  <path
                                    fill="#00acc1"
                                    d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"
                                  />
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  width="35"
                                  height="35"
                                  viewBox="0 0 48 48"
                                  className="sm:w-[25px] md:w-[35px]"
                                >
                                  <path
                                    fill="#E65100"
                                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                                  ></path>
                                  <path
                                    fill="#FF6D00"
                                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                                  ></path>
                                  <path
                                    fill="#FFF"
                                    d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
                                  ></path>
                                  <path
                                    fill="#EEE"
                                    d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
                                  ></path>
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  width="35"
                                  height="35"
                                  viewBox="0 0 48 48"
                                  className="sm:w-[25px] md:w-[35px]"
                                >
                                  <path
                                    fill="#0277BD"
                                    d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"
                                  ></path>
                                  <path
                                    fill="#039BE5"
                                    d="M24 8L24 39.9 35.2 36.7 37.7 8z"
                                  ></path>
                                  <path
                                    fill="#FFF"
                                    d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"
                                  ></path>
                                  <path
                                    fill="#EEE"
                                    d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"
                                  ></path>
                                </svg>

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  x="0px"
                                  y="0px"
                                  width="35"
                                  height="35"
                                  viewBox="0 0 48 48"
                                  className="sm:w-[25px] md:w-[35px]"
                                >
                                  <path
                                    fill="#80deea"
                                    d="M24,34C11.1,34,1,29.6,1,24c0-5.6,10.1-10,23-10c12.9,0,23,4.4,23,10C47,29.6,36.9,34,24,34z M24,16	c-12.6,0-21,4.1-21,8c0,3.9,8.4,8,21,8s21-4.1,21-8C45,20.1,36.6,16,24,16z"
                                  ></path>
                                  <path
                                    fill="#80deea"
                                    d="M15.1,44.6c-1,0-1.8-0.2-2.6-0.7C7.6,41.1,8.9,30.2,15.3,19l0,0c3-5.2,6.7-9.6,10.3-12.4c3.9-3,7.4-3.9,9.8-2.5	c2.5,1.4,3.4,4.9,2.8,9.8c-0.6,4.6-2.6,10-5.6,15.2c-3,5.2-6.7,9.6-10.3,12.4C19.7,43.5,17.2,44.6,15.1,44.6z M32.9,5.4	c-1.6,0-3.7,0.9-6,2.7c-3.4,2.7-6.9,6.9-9.8,11.9l0,0c-6.3,10.9-6.9,20.3-3.6,22.2c1.7,1,4.5,0.1,7.6-2.3c3.4-2.7,6.9-6.9,9.8-11.9	c2.9-5,4.8-10.1,5.4-14.4c0.5-4-0.1-6.8-1.8-7.8C34,5.6,33.5,5.4,32.9,5.4z"
                                  ></path>
                                  <path
                                    fill="#80deea"
                                    d="M33,44.6c-5,0-12.2-6.1-17.6-15.6C8.9,17.8,7.6,6.9,12.5,4.1l0,0C17.4,1.3,26.2,7.8,32.7,19	c3,5.2,5,10.6,5.6,15.2c0.7,4.9-0.3,8.3-2.8,9.8C34.7,44.4,33.9,44.6,33,44.6z M13.5,5.8c-3.3,1.9-2.7,11.3,3.6,22.2	c6.3,10.9,14.1,16.1,17.4,14.2c1.7-1,2.3-3.8,1.8-7.8c-0.6-4.3-2.5-9.4-5.4-14.4C24.6,9.1,16.8,3.9,13.5,5.8L13.5,5.8z"
                                  ></path>
                                  <circle
                                    cx="24"
                                    cy="24"
                                    r="4"
                                    fill="#80deea"
                                  ></circle>
                                </svg>
                              </div>
                            )}
                            {content.appIcon && (
                              <div className="flex border-2 w-fit h-fit gap-3 shadow-bold border-black px-3 py-1 rounded-md ">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 48 48"
                                  width="35"
                                  height="35"
                                  className="sm:w-[25px] md:w-[35px]"
                                >
                                  <path
                                    fill="#0277BD"
                                    d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"
                                  />
                                  <path
                                    fill="#FFC107"
                                    d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>

                          <div className="flex justify-center mt-5 sm:space-x-3 lg:space-x-7">
                            {content.showRepo && (
                              <a href={content.liveLink} target="_blank">
                                <button className="flex xl:font-semibold  transform transition-all duration-200  hover:shadow-button hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-bold active:-translate-x-0 active:-translate-y-0 flex-row items-center sm:px-2 sm:py-1  md:px-3 md:py-1 sm:text-[12px] md:text-[16px]  border-2  border-black shadow-bold dark:bg-neublue bg-[#d12c2c] text-white dark:text-black">
                                  {" "}
                                  <LinkIcon className="sm:hidden  md:block w-[16px] mr-2 " />{" "}
                                  Live Site
                                </button>
                              </a>
                            )}
                            <a href={content.repoLink} target="_blank">
                              <button className="flex xl:font-semibold  flex-row items-center sm:px-2  sm:py-1  transform transition-all duration-200  hover:shadow-button hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-bold active:-translate-x-0 active:-translate-y-0 md:px-3 md:py-1 sm:text-[12px] md:text-[16px] border-2 text-white  border-black shadow-bold bg-slate-700">
                                <GithubLogo className="mr-2 fill-white sm:hidden md:block" />{" "}
                                Repository
                              </button>
                            </a>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="xl:hidden" />
          <CarouselNext className="xl:hidden" />
        </Carousel>
      </div>
    </div>
  );
}
