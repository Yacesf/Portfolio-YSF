import { motion } from "framer-motion";

function Navbar() {
  const linkNav = [
    { name: "À Propos", href: "#about" },
    { name: "Services", href: "#service" },
    { name: "Projets", href: "#project" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav>
      <ul className="flex text-xl items-center gap-16">
        {linkNav.map((link, index) => (
          <motion.li whileHover={{ scale: 1.1 }} key={index}>
            <a href={link.href}>{link.name}</a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;