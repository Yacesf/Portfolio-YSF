import Circle from "./circle";
import { motion } from "framer-motion";

function ServiceCard({ icon, title, explainText }) {

  return (
    <motion.div
      className="flex xs:w-auto w-60 lg:w-80 relative"
    >
    <motion.div className="absolute xs:top-[5%] top-[10%] xs:left-[39%] left-[35%]">
      <Circle
        size="xs:h-14 xs:w-14 h-10 w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16"
        bgColor="bg-white"
        opacity="opacity-10"
      />
      </motion.div>
      <div className="text-white flex flex-col justify-center items-center">
        <div
           className="mt-8 lg:mt-10 invert brightness-0"
        >
          {icon}
        </div>
        <h3 className="font-poppins text-base lg:text-lg xl:text-2xl mt-3 lg:mt-5 font-bold text-center">
          {title}
        </h3>
        <p className="text-center text-sm xl:text-base mt-3 lg:mt-5">{explainText}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
