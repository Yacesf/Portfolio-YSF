import { motion } from "framer-motion";
import { sectionVariants } from "../utils/motionVariants"; // Importation des variantes de section
import ProjectCard from "../components/projectCard";
import { projectData } from "../components/projectData";
import { useState } from "react";
import Modal from "../components/modal.jsx";

function Project() {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (modalId) => {
    setOpenModalId(modalId);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <motion.section
      id="project"
      className="xs:mt-16 sm:mt-24 mt-32 xl:mt-40"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-medium text-lg lg:text-xl text-vert leading-9 tracking-wide mb-5">
          PROJECT
        </h2>
        <span className="xs:text-xl text-2xl lg:text-4xl font-poppins">
          <b>Certain de mes projets</b>
        </span>
      </div>

      <div className="flex xs:flex-col justify-evenly gap-8 mt-10 sm:mt-20 px-7">
        {projectData.map((projet) => (
          <motion.div
            key={projet.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ProjectCard
              title={projet.title}
              span={projet.span}
              src={projet.src}
              alt={projet.alt}
              modalId={projet.modalId}
              openModal={() => openModal(projet.modalId)}
            />
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={openModalId !== null}
        onClose={closeModal}
        {...projectData.find((projet) => projet.modalId === openModalId)}
      />
    </motion.section>
  );
}

export default Project;
