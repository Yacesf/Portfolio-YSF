import ReactLogo from "../assets/Logo-de-competence/Logo-React.png";
import TailwindCSSLogo from "../assets/Logo-de-competence/tailwind.svg"
import SASSLogo from "../assets/Logo-de-competence/Logo-Sass.png"
import ReduxLogo from "../assets/Logo-de-competence/Logo-redux.png"
import NextJsLogo from "../assets/Logo-de-competence/nextjs-removebg-preview.png"
import ViteLogo from "../assets/Logo-de-competence/vitejs2-removebg-preview.png"


function Skill() {
  const skillLogo = [
    { name: "React", src: ReactLogo },
    { name: "TailwindCSS", src: TailwindCSSLogo },
    { name: "SASS", src: SASSLogo },
    { name: "Redux", src: ReduxLogo },
    { name: "Next.js", src: NextJsLogo },
    { name: "Vite", src: ViteLogo },
  ];

  return (
    <div className="mt-32 lg:mt-40 h-24 lg:h-36 overflow-hidden rounded-b-[80px] flex bg-vert justify-center">
    <div className=" flex items-center gap-10 animate-marquee w-max-none">
      {skillLogo.map((skill) => (
        <img
          className="h-14 lg:h-20 invert brightness-0 "
          alt={`Logo de ${skill.name}`}
          src={skill.src}
          key={skill.name}
        />
      ))}
      {skillLogo.map((skill) => (
          <img
            className="h-14 lg:h-20 invert brightness-0"
            alt={`Logo de ${skill.name}`}
            src={skill.src}
            key={`${skill.name}-duplicate`}
          />
        ))}
        {skillLogo.map((skill) => (
          <img
            className="h-14 lg:h-20 invert brightness-0"
            alt={`Logo de ${skill.name}`}
            src={skill.src}
            key={`${skill.name}-duplicate-2`}
          />
        ))}
        {skillLogo.map((skill) => (
          <img
            className="h-14 lg:h-20 invert brightness-0"
            alt={`Logo de ${skill.name}`}
            src={skill.src}
            key={`${skill.name}-duplicate-3`}
          />
        ))}
      </div>
    </div>
  );
}

export default Skill;