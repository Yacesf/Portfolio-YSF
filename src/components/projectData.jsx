import omfImg from "../assets/projet-image/OMF-img.png";
import NCImg from "../assets/projet-image/nc-img.png";
import PYSFImg from "../assets/projet-image/PYSF-img.png";
import OMFImgModal from "../assets/projet-image/omf-modal1.png";
import NCImgModal1 from "../assets/projet-image/nc-modal.png";

export const projectData = [
  {
    id: "ohmyfood",
    modalId: "ohmyfoodModal",
    src: omfImg,
    modalSrc: OMFImgModal,
    alt: "Ohmyfood",
    title: "Intégration d'une maquette",
    span: "d'un site de restauration en mobile first",
    aboutText:
      "Ce projet consistait à intégrer une maquette mobile-first pour un site de restauration moderne et interactif.",
    skills: [],
    github: "https://github.com/Yacesf/Projet-4-OMF",
    link: "https://yacesf.github.io/Projet-4-OMF/",
  },
  {
    id: "nina_carducci",
    modalId: "ncModal",
    src: NCImg,
    modalSrc: NCImgModal1,
    alt: "de Nina Carducci",
    title: "Optimisation et SEO",
    span: "pour le portfolio d'une artiste",
    aboutText:
      "Optimisation de la vitesse de chargement et amélioration du SEO pour le portfolio de l'artiste Nina Carducci.",
    skills: [],
    github: "https://github.com/Yacesf/P9-Optimisation",
    link: "https://yacesf.github.io/P9-Optimisation/",
  },
  {
    id: "pysf",
    modalId: "pysfModal",
    src: PYSFImg,
    alt: "de mon portfolio",
    title: "Création et déploiement",
    span: "de mon portfolio",
    aboutText:
      "Développement et déploiement d'un portfolio interactif pour présenter mes compétences et projets.",
    skills: [],
    github: "",
    link: "",
  },
];
