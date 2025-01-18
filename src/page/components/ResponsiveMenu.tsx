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
            className="absolute top-20  right-0 h-screen z-20"
          >
            <div className="text-xl font-semibold p-10 uppercase bg-white  text-black border-2 border-black shadow-bold rounded-md">
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
