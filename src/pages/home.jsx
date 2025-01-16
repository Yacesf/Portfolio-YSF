import Ligne from "../assets/Vector.webp";
import { motion } from "framer-motion";
import Circle from "../components/circle";
import { contentVariants } from "../utils/motionVariants";

function Home() {
  return (
    <motion.div
      className="mt-20 lg:mt-40 text-center relative"
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15 }}
    >
      <div className="pt-10 lg:pt-16 font-poppins">
        <motion.p
          className="text-xl sm:text-2xl lg:text-4xl font-light mb-1"
          variants={contentVariants}
        >
          Bienvenue! Je suis
        </motion.p>

        <div className="flex flex-col items-center">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold"
            variants={contentVariants}
          >
            Yacine Safsafi
          </motion.h2>
          <motion.img
            className="mb-4 w-40 sm:w-52 lg:w-auto"
            src={Ligne}
            alt="Trait"
            variants={contentVariants}
          />
          <motion.span
            className="text-base sm:text-lg lg:text-xl mb-6"
            variants={contentVariants}
          >
            Développeur front-end
          </motion.span>
          <motion.a href="#contact" variants={contentVariants}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-vert text-white text-sm p-3 lg:text-lg lg:p-4 rounded-full hover:opacity-95"
            >
              Contactez Moi <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
          </motion.a>
        </div>
      </div>

      <motion.div
        className="absolute top-0 left-[15%]"
        variants={contentVariants}
      >
        <Circle
          size="w-9 h-9 sm:w-14 sm:h-14"
          bgColor="bg-vert"
          opacity="opacity-20"
        />
      </motion.div>

      <motion.div
        className="absolute top-[60px] lg:top-[75px] left-[85%] lg:left-[70%]"
        variants={contentVariants}
      >
        <Circle
          size="w-5 h-5"
          border="border-4 border-vert"
          opacity="opacity-20"
        />
      </motion.div>

      <motion.div
        className="absolute left-[10%] lg:left-[20%]"
        variants={contentVariants}
      >
        <Circle
          size="w-5 h-5"
          border="border-4 border-vert"
          opacity="opacity-20"
        />
      </motion.div>

      <motion.div
        className="absolute left-[80%] lg:left-[75%]"
        variants={contentVariants}
      >
        <Circle
          size="w-7 h-7 sm:w-10 sm:h-10"
          border="border-4 sm:border-8 border-vert"
        />
      </motion.div>
    </motion.div>
  );
}

export default Home;
