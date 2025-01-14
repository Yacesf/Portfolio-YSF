import Circle from "../components/circle";
import Avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="relative sm:mt-24 xs:mt-16 mt-32 xs:p-4 p-8 lg:mt-40"
    >
      <div className="flex justify-around xs:flex-col-reverse items-center">
        <div className=" p-5 xs:h-[150px] h-[500px] w-[250px] lg:w-[400px] flex justify-center items-center">
          <img src={Avatar} alt="mon avatar"></img>
        </div>
        <div className="xs:flex xs:flex-col items-center p-5 xs:w-auto lg:w-[700px] w-[500px]">
          <h2 className="font-medium text-lg lg:text-xl text-vert leading-9 tracking-wide mb-5">
            À PROPOS DE MOI
          </h2>
          <span className="xs:text-center xs:text-xl lg:text-4xl text-2xl font-poppins">
            Votre partenaire de confiance
            <br />
            <b>pour aller plus loin</b>
          </span>
          <div className=" xs:w-[300px] xs:text-center mt-7 xs:text-sm lg:text-xl">
            <p>
              Passionné par le monde du web depuis plusieurs années, j'ai décidé
              de transformer cette passion en métier. Pour concrétiser ce
              projet, j'ai continué à apprendre, que ce soit au travers de mes
              études ou en autodidacte.
            </p>
            <p className="mt-7 mb-10">
              Aujourd'hui, j'ai les compétences nécessaires pour donner vie à
              vos projets. Que ce soit pour du débogage, de l'optimisation, du
              référencement, ou encore pour intégrer et déployer des
              applications, je peux m'en occuper avec en plus la possibilité
              d'un suivi mensuel. Je me suis spécialisé en React et Tailwind
              afin de dynamiser et animer vos projets de manière optimale.
            </p>
          </div>
        </div>
      </div>
      <motion.div
        className="absolute top-0 xs:left-[85%] left-[90%]"
      >
      <Circle
        size="h-10 w-10 lg:h-16 lg:w-16"
        bgColor="bg-vert"
        opacity="opacity-30"
      />
      </motion.div>
      <motion.div className="absolute xs:left-[84%] left-[89%] top-[3%]">
      <Circle
        size="h-7 w-7 lg:h-12 lg:w-12"
        border="border-2 lg:border-4 border-black"
      />
      </motion.div>
    </section>
  );
}

export default About;
