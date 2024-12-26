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
      className="w-96 h-96 border-solid border-[1px] rounded-[15px] border-vert relative p-4"
    >
      <Circle
        size="h-16 w-16"
        bgColor={isHovered ? "bg-white" : "bg-vert"}
        opacity="opacity-10"
        left="38%"
        top="20%"
      />
      <div className="flex flex-col justify-center items-center">
        <div
           className={`mt-16 ${isHovered ? "invert brightness-0" : ""}`}
        >
          {icon}
        </div>
        <h3 className="font-poppins text-2xl mt-5 font-bold text-center">
          {title}
        </h3>
        <p className="text-center mt-5">{explainText}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
