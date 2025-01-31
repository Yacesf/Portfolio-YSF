import { motion } from "framer-motion";
import { headerVariants } from "../utils/motionVariants";
import Navbar from "../components/navbar";

function Header() {
  return (
    <motion.header
      className="my-10 mx-5 md:mx-10 lg:mx-28 flex items-center justify-between"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2
        className="tracking-wide font-bold text-3xl sm:text-4xl text-vert"
        variants={headerVariants.title}
        initial="hidden"
        animate="visible"
      >
        Y.SF
      </motion.h2>
      <Navbar />
    </motion.header>
  );
}

export default Header;
