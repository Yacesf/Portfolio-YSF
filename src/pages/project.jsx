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
    <section id="project">
      <div className="flex flex-col justify-center items-center mt-40">
        <h2 className="font-medium text-xl text-vert leading-9 tracking-wide mb-5">
          PROJECT
        </h2>
        <span className="text-4xl font-poppins">
          <b>Certain de mes projets</b>
        </span>
      </div>
      <div className="flex justify-evenly mt-20 mb-40 px-10">
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
