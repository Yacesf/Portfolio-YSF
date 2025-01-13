import { motion } from "framer-motion";

function ProjectCard({ title, span, src, alt, openModal }) {
  return (
    <motion.div
      onClick={openModal}
      whileHover={{ scale: 1.1 }}
      className="xs:h-56 xs:w-full w-80 h-60 xl:h-80 xl:w-96 rounded-[20px] text-creme py-4 flex items-center justify-center hover:cursor-pointer relative overflow-hidden"
    >
      <div className="h-full w-full">
        <img
          className="object-cover h-full w-full rounded-lg brightness-50"
          src={src}
          alt={`Aperçu du site ${alt}`}
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
        <h3 className="text-sm lg:text-lg font-bold leading-4 uppercase drop-shadow-lg">
          {title}
        </h3>
        <span className="text-xs lg:text-sm drop-shadow-lg">{span}</span>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
