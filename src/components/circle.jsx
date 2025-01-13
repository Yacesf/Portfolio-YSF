import { motion } from "framer-motion";

function Circle({ size, border, opacity, bgColor }) {
  const circleVariants = {
    animate: {
      y: [0, -10, 10, 0],
      x: [0, -5, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      variants={circleVariants}
      animate="animate"
      className={`rounded-full ${size} ${border} ${bgColor} ${opacity}`}
    ></motion.div>
  );
}

export default Circle;