import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkNav = [
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#service" },
    { name: "Projets", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="relative">
      <ul className="hidden xs:hidden sm:flex sm:text-md lg:text-xl items-center sm:gap-8 lg:gap-16">
        {linkNav.map((link, index) => (
          <motion.li
            whileHover={{ scale: 1.1 }}
            key={index}
            className="relative group transition-colors duration-300"
          >
            <a href={link.href}>{link.name}</a>
            <span className="absolute bottom-0 left-0 w-0 h-1 bg-vert transition-all duration-300 group-hover:w-full"></span>
          </motion.li>
        ))}
      </ul>
      <button
        onClick={toggleMenu}
        className="sm:hidden flex flex-col gap-1.5 focus:outline-none"
      >
        <span className="w-6 h-0.5 bg-vert"></span>
        <span className="w-6 h-0.5 bg-vert"></span>
        <span className="w-6 h-0.5 bg-vert"></span>
      </button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-gradient-to-br from-vert to-creme flex flex-col items-center pt-20 z-50"
        >
          <button
            onClick={toggleMenu}
            className="absolute top-6 right-6 text-4xl font-bold text-vert focus:outline-none  transition-colors duration-300"
          >
            &times;
          </button>
          <ul className="flex flex-col items-center gap-8">
            {linkNav.map((link, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="relative group text-white transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                <a href={link.href} className="text-2xl font-semibold">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}

export default Navbar;
