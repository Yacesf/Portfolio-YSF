import ProjectCard from "../components/projectCard";
import { projectData } from "../components/projectData";
import { useState } from "react";
import Modal from "../components/modal.jsx";

function Project() {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (modalId) => {
    console.log(`Modal ouverte pour l'ID: ${modalId}`);
    setOpenModalId(modalId);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <section id="project" className="xs:mt-16 mt-32 xl:mt-40">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-medium text-lg lg:text-xl text-vert leading-9 tracking-wide mb-5">
          PROJECT
        </h2>
        <span className="xs:text-xl text-4xl font-poppins">
          <b>Certain de mes projets</b>
        </span>
      </div>
      <div className="flex xs:flex-col xs:gap-5 justify-evenly gap-8 mt-10 sm:mt-20 mb-40 px-7">
        {projectData.map((projet) => (
          <ProjectCard
            key={projet.id}
            title={projet.title}
            span={projet.span}
            src={projet.src}
            alt={projet.alt}
            modalId={projet.modalId}
            openModal={() => openModal(projet.modalId)}
          />
        ))}
      </div>
      <Modal
        isOpen={openModalId !== null}
        onClose={closeModal}
        {...projectData.find((projet) => projet.modalId === openModalId)}
      />
    </section>
  );
}

export default Project;
