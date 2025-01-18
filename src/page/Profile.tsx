import { TypeAnimation } from "react-type-animation";
import { SVGAttributes } from "react";

export function EnvelopeIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[20px]"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function PaperClipIcon(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-[20px]"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13"
      />
    </svg>
  );
}

export function GithubLogo(props: SVGAttributes<SVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      {...props}
      className="fill-white"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export function LinkedinLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export default function Profile() {
  const VazhaProficiencies = () => {
    return (
      <TypeAnimation
        sequence={[
          1500,
          "A Web Developer",
          1000,
          "A Tech Enthusiast",
          1000,
          "An Information System Student",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    );
  };

  const scrollToContact = () => {
    const contactRef = window.scrollRefs?.contact;
    if (contactRef?.current) {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-center  items-center space-y-3">
      <p className="md:text-3xl sm:text-2xl font-bold dark:text-[#69D2E7] text-[#d12c2c] font-public">
        Hello World!{" "}
      </p>
      <p className="font-bold dark:text-white sm:text-[40px] md:text-7xl mt-[-100px] motion-preset-slide-right-md motion-duration-1500">
        I'm{" "}
        <span className="dark:text-[#69D2E7] text-[#d12c2c] font-public">
          Vazha Khayri
        </span>
      </p>
      <div className="font-roboto sm:text-[12px] md:text-[17px] dark:text-white">
        {VazhaProficiencies()}
      </div>
      <div className="relative z-10 mt-[500px] max-h-fill flex sm:flex-col md:flex-row items-center  justify-center space-x-2 motion-preset-slide-left-md motion-duration-1500 motion-delay-1000">
        <div className="flex flex-row gap-2 sm:mb-4 md:mb-0">
          <button
            onClick={scrollToContact}
            className="relative border-2 dark:bg-neublue font-semibold bg-[#d12c2c] text-white dark:text-black hover:shadow-button hover:-translate-x-0.5 hover:-translate-y-0.5 sm:text-[12px] font-public md:text-lg border-black shadow-bold  p-2 flex flex-row items-center transform transition-all duration-200 active:shadow-bold active:-translate-x-0 active:-translate-y-0"
          >
            <EnvelopeIcon /> &nbsp; Contact me
          </button>
          <a
            href="https://drive.google.com/file/d/1zqfsYfi-Wv2F4gv0kPvksQNfBO8ZHv32/view?usp=sharing"
            target="_blank"
          >
            <button className="relative border-2 sm:text-[12px] font-semibold font-public md:text-lg text-white dark:text-black border-black p-2 dark:bg-neublue bg-[#d12c2c] shadow-bold flex flex-row items-center transform transition-all duration-200 hover:shadow-button hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-bold active:-translate-x-0 active:-translate-y-0">
              <PaperClipIcon /> &nbsp; My Resume
            </button>
          </a>
        </div>

        <div className="flex flex-row gap-2 h-[48px]">
          <a
            href="https://github.com/VazhaK14"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer border-2 fill-white shadow-bold sm:text-[12px] md:text-lg border-black p-2 bg-slate-700 flex flex-row items-center transform transition-all duration-200 hover:shadow-button hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-bold active:-translate-x-0 active:-translate-y-0"
          >
            <GithubLogo className="pointer-events-none" />
          </a>
          <a
            href="https://www.linkedin.com/in/vazha-khayri-a93206311/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer border-2 fill-white shadow-bold sm:text-[12px] md:text-lg border-black p-2 bg-[#0e76a8] flex flex-row items-center transform transition-all duration-200 hover:shadow-button hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-bold active:-translate-x-0 active:-translate-y-0"
          >
            <LinkedinLogo />
          </a>
          <a
            href="https://www.instagram.com/vazhaa._?igsh=MXIzNHFveXoyYnU4Ng%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="relative cursor-pointer border-2 fill-white shadow-bold sm:text-[12px] md:text-lg border-black p-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex flex-row items-center transform transition-all duration-200 hover:shadow-button hover:-translate-x-0.5 hover:-translate-y-0.5 active:shadow-bold active:-translate-x-0 active:-translate-y-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
