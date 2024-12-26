import Ligne from "../assets/Vector.png";
import { motion } from "framer-motion";
import Circle from "../components/circle";

function Home() {
  return (
    <div className="mt-40 text-center relative">
      <div className="pt-16 font-poppins">
        <p className="text-4xl font-light mb-1">Bienvenue! Je suis</p>
        <div className="flex flex-col items-center">
          <h2 className="text-7xl font-semibold">Yacine Safsafi</h2>
          <img className="mb-4" src={Ligne} alt="Trait"></img>
          <span className="text-xl mb-9">Developpeur front-end</span>
          <a href="#">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-vert text-white p-4 rounded-full hover:opacity-95"
            >
              Contactez Moi <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
          </a>
        </div>
      </div>
      <Circle
        size="w-14 h-14"
        bgColor="bg-vert"
        opacity="opacity-20"
        top="0"
        left="25%"
      />
      <Circle
        size="w-5 h-5"
        border="border-4 border-vert"
        opacity="opacity-20"
        top="75px"
        left="70%"
      />
      <Circle
        size="w-5 h-5"
        border="border-4 border-vert"
        opacity="opacity-20"
        left="20%"
      />
      <Circle size="w-10 h-10" border="border-8 border-vert" left="75%" />
    </div>
  );
}

export default Home;
