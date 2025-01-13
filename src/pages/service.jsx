import ServiceCard from "../components/serviceCard";
import SEOImg from "../assets/icons8-rechercher-dans-le-navigateur-80.png";
import IntegrationImg from "../assets/icons8-web-interface-80.png";

function Service() {
  return (
    <section
      id="service"
      className="bg-vert xs:mt-16 sm:mt-24 mt-32 xl:mt-40 xs:pb-10 xs:p-8 lg:p-14 lg:pb-16 pb-14 p-12 shadow-md"
    >
        <h2 className="text-center font-medium text-lg lg:text-xl text-white leading-9 tracking-wide">
          MES SERVICES
        </h2>
      <div className="flex mt-10 xs:flex-col gap-12 pb-5 items-center lg:justify-evenly justify-between">
        <ServiceCard
          icon=<img
            className="w-10 h-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
            src={SEOImg}
            alt="Icon SEO et Referencement"
          />
          title="SEO et réferencement"
          explainText="Optimisation des performances du site et mise en œuvre des bonnes pratiques pour un référencement naturel optimal."
        />
        <ServiceCard
          icon=<img
            className="w-10 h-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
            src={IntegrationImg}
            alt="Icon d'intégration web"
          />
          title="Intégration web de maquette"
          explainText="Conversion de vos maquettes en pages web responsive"
        />
      </div>
    </section>
  );
}

export default Service;
