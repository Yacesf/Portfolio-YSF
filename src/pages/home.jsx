import Ligne from "../assets/Vector.png";
import { motion } from "framer-motion";
import Circle from "../components/circle";

function Home() {
  return (
    <div className="mt-20 lg:mt-40 text-center relative">
      <div className="pt-10 lg:pt-16 font-poppins">
        <p className="text-xl sm:text-2xl lg:text-4xl font-light mb-1">
          Bienvenue! Je suis
        </p>
        
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-semibold">
            Yacine Safsafi
          </h2>
          <img
            className="mb-4 w-40 sm:w-52 lg:w-auto"
            src={Ligne}
            alt="Trait"
          />
          <span className="text-base sm:text-lg lg:text-xl mb-4 lg:mb-6">
            Développeur front-end
          </span>
          <a href="#contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-vert text-white text-sm p-3 lg:text-lg lg:p-4 rounded-full hover:opacity-95"
            >
              Contactez Moi <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
          </a>
        </div>
      </div>
      <Circle
        size="w-9 h-9 sm:w-14 sm:h-14"
        bgColor="bg-vert"
        opacity="opacity-20"
        top="top-0"
        left="left-[15%] lg:left-[25%]"
      />
      <Circle
        size="w-5 h-5"
        border="border-4 border-vert"
        opacity="opacity-20"
        top="top-[60px] lg:top-[75px]"
        left="left-[85%] lg:left-[70%]"
      />
      <Circle
        size="w-5 h-5"
        border="border-4 border-vert"
        opacity="opacity-20"
        left="left-[10%] lg:left-[20%]"
      />
      <Circle
        size="w-7 h-7 sm:w-10 sm:h-10"
        border="border-4 sm:border-8 border-vert"
        left="left-[80%] lg:left-[75%]"
      />
    </div>
  );
}

export default Home;
