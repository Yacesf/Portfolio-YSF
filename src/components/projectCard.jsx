import {motion} from "framer-motion";

function ProjectCard({ title, span, src, alt, openModal }) {
  return (
    <motion.div onClick={openModal} whileHover={{scale: 1.1}} className="bg-vert h-80 w-96 rounded-[20px] text-creme py-4 flex flex-col items-center hover:cursor-pointer">
      <div className="text-center">
        <h3 className="text-lg font-bold leading-3 uppercase">{title}</h3>
        <span className="text-sm">{span}</span>
      </div>
      
      <div className="h-full w-full flex items-center justify-center overflow-hidden mt-2 px-2">
        <img
          className="object-cover h-full w-full rounded-lg"
          src={src}
          alt={`Aperçu du site ${alt}`}
        />
      </div>
    </motion.div>
  );
}

export default ProjectCard;
