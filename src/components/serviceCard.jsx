import Circle from "./circle";
import { motion } from "framer-motion";
import { useState } from "react";

function ServiceCard({ icon, title, explainText }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ backgroundColor: "#617f67", color: "#ffffff" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="xl:w-96 xl:h-96 lg:w-72 lg:h-72 xs:w-64 h-56 border-solid border-[1px] rounded-[15px] border-vert relative p-2 lg:p-4"
    >
      <Circle
        size="h-10 w-10 lg:h-12 lg:w-12 xl:h-16 xl:w-16"
        bgColor={isHovered ? "bg-white" : "bg-vert"}
        opacity="opacity-10"
        left="left-[35%] lg:left-[38%]"
        top="xs:top-[9%] lg:top-[15%] xl:top-[17%]"
      />
      <div className="flex flex-col justify-center items-center">
        <div
           className={`xs:mt-5 lg:mt-8 xl:mt-16 ${isHovered ? "invert brightness-0" : ""}`}
        >
          {icon}
        </div>
        <h3 className="font-poppins lg:text-lg xl:text-2xl mt-3 lg:mt-5 font-bold text-center">
          {title}
        </h3>
        <p className="text-center text-sm xl:text-base mt-3 lg:mt-5">{explainText}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
