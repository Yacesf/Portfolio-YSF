import omfImg from "../assets/projet-image/OMF-img.webp";
import NCImg from "../assets/projet-image/nc-img.webp";
import PYSFImg from "../assets/projet-image/PYSF-img.webp";
import OMFImgModal from "../assets/projet-image/omf-modal1.webp";
import NCImgModal1 from "../assets/projet-image/nc-modal.webp";
import ReactLogo from "../assets/logo/logo-react.webp";
import HTMLLogo from "../assets/logo/html-5.webp";
import TailwindCSSLogo from "../assets/logo/tailwind.webp";
import SASSLogo from "../assets/logo/logo-sass.webp";
import ViteLogo from "../assets/logo/vitejs2-removebg-preview.webp";

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
      "Ce projet avait pour objectif d'animer et d'intégrer une maquette conçue selon l'approche mobile-first, visant à créer un site moderne et interactif pour un service de restauration. Le développement a été réalisé en utilisant HTML pour la structure et SASS.",
    skills: [HTMLLogo, SASSLogo],
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
      "Optimisation de la vitesse de chargement et amélioration du SEO grâce à un audit réalisé avec Lighthouse et WAVE, ainsi qu'à une vérification de la conformité aux normes W3C pour le portfolio de l'artiste Nina Carducci.",
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
      "Développement initié avec Vite et React, stylisé avec TailwindCSS et Framer Motion, et déployé sur Netlify dans un premier temps pour des tests. Ce portfolio interactif a été conçu pour présenter mes compétences et mes projets.",
    skills: [ReactLogo, TailwindCSSLogo, ViteLogo],
    github: "https://github.com/Yacesf/Portfolio-YSF",
    link: "",
  },
];
