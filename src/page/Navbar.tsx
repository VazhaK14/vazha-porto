import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type SectionName = "about" | "experience" | "project" | "contact";

export function BarsIcon(props: { isActive: boolean }) {
  return (
    <div
      className={`tham ${
        props.isActive && "tham-active"
      } tham-e-spin tham-w-6 `}
    >
      <div className="tham-box">
        <div className="tham-inner" />
      </div>
    </div>
  );
}

interface ResponsiveMenuProps {
  open: boolean;
  scrollToSection: (section: SectionName) => void;
}

export function ResponsiveMenu({ open, scrollToSection }: ResponsiveMenuProps) {
  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 right-0  h-screen z-20"
          >
            <div className="md:text-xl font-roboto font-semibold sm:p-5 md:p-8 sm:text-md uppercase dark:bg-slate-800 dark:text-white bg-[#fdf6e4] text-black border-2 border-black shadow-bold rounded-md">
              <ul className="flex flex-col justify-center items-center gap-10">
                <li
                  className="hover:cursor-pointer"
                  onClick={() => scrollToSection("about")}
                >
                  About Me
                </li>
                <li
                  className="hover:cursor-pointer"
                  onClick={() => scrollToSection("experience")}
                >
                  Experience
                </li>
                <li
                  className="hover:cursor-pointer"
                  onClick={() => scrollToSection("project")}
                >
                  Project
                </li>
                <li
                  className="hover:cursor-pointer"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const sectionOffsets: Record<SectionName, number> = {
    about: 300, // Larger offset for about section
    experience: 50, // Medium offset for experience
    project: 180, // Slightly different for projects
    contact: 100, // Smaller offset for contact
  };

  const scrollToSection = (section: SectionName) => {
    const ref = window.scrollRefs?.[section];
    if (ref?.current) {
      const offsetTop = ref.current.offsetTop;
      window.scrollTo({
        top: offsetTop - sectionOffsets[section],
        behavior: "smooth",
      });
      setIsOpen(false); // Close the menu after scrolling
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      if (prevScrollPos < currentScrollPos && isOpen) {
        setIsOpen(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isOpen]);

  const navLinks: Array<{ text: string; section: SectionName }> = [
    { text: "About Me", section: "about" },
    { text: "Experience", section: "experience" },
    { text: "Project", section: "project" },
    { text: "Contact", section: "contact" },
  ];

  return (
    <div
      className={`fixed z-50 bg-[#d12c2c] text-white dark:text-black top-3 left-4 right-4 flex ${
        visible
          ? "translate-y-0 delay-300 duration-300"
          : "-translate-y-[1000px] duration-500 delay-500"
      } dark:bg-neublue  items-center justify-between border-2 px-4 py-4 border-black rounded-md shadow-bold motion-preset-slide-down-lg motion-duration-1500 motion-delay-500`}
      style={{
        transition: "background-color 300ms ease, transform 0.8s ease 0.2s",
      }}
    >
      <p
        onClick={() => scrollToSection("about")}
        className="font-extrabold font-roboto sm:text-xl md:text-2xl cursor-pointer"
      >
        Vazha Khayri.
      </p>
      <div className="flex text-[18px] font-roboto space-x-8 lg sm:hidden lg:block">
        {navLinks.map(({ text, section }) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="animation-underline font-semibold"
          >
            {text}
          </button>
        ))}
      </div>

      <div onClick={toggleNavbar} className="lg:hidden">
        <BarsIcon isActive={isOpen} />
        <ResponsiveMenu open={isOpen} scrollToSection={scrollToSection} />
      </div>
    </div>
  );
}

// Add this type declaration to a separate .d.ts file or at the top of your HomePage file
declare global {
  interface Window {
    scrollRefs: {
      about: React.RefObject<HTMLDivElement>;
      experience: React.RefObject<HTMLDivElement>;
      project: React.RefObject<HTMLDivElement>;
      contact: React.RefObject<HTMLDivElement>;
    };
  }
}
