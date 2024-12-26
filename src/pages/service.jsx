import ServiceCard from "../components/serviceCard";
import Triangle from "../components/triangle";
import SEOImg from "../assets/icons8-rechercher-dans-le-navigateur-80.png";
import IntegrationImg from "../assets/icons8-web-interface-80.png";
import MaintnanceImg from "../assets/maintnance.png";

function Service() {
  return (
    <section
      id="service"
      className="mt-40 py-32 bg-creme rounded-[120px] relative"
    >
      <div className="text-center pt-14">
        <h2 className="font-medium text-xl text-vert leading-9 tracking-wide mb-5">
          SERVICES
        </h2>
        <span className="text-4xl font-poppins">
          <b>Les services offert</b>
        </span>
        <p className="text-xl mb-20 mt-5">Ces services sont Lorem....</p>
      </div>
      <Triangle
        borderLeft="border-l-[40px] border-l-transparent"
        borderRight="border-r-[40px] border-r-transparent"
        borderBottom="border-b-[65px] border-b-[#cfd8d1]"
        top="11%"
        left="22%"
        zIndex="z-10"
      />
      <Triangle
        borderLeft="border-l-[50px] border-l-transparent"
        borderRight="border-r-[50px] border-r-transparent"
        borderBottom="border-b-[80px] border-b-vert"
        top="10%"
        left="20%"
      />
      <div className="flex items-center justify-evenly">
        <ServiceCard
          icon=<img
            className="h-14 w-14"
            src={SEOImg}
            alt="Icon SEO et Referencement"
          />
          title="Seo et réferencement"
          explainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry,  lorem Ipsum has been."
        />
        <ServiceCard
          icon=<img
            className="h-14 w-14"
            src={IntegrationImg}
            alt="Icon d'intégration web"
          />
          title="Intégration web de maquette"
          explainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry,  lorem Ipsum has been."
        />
        <ServiceCard
          icon=<img
            className="h-14 w-14"
            src={MaintnanceImg}
            alt="Icon de maintnance et optimisation"
          ></img>
          title="Maintnance et optimisation" 
          explainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry,  lorem Ipsum has been."
        />
      </div>
    </section>
  );
}

export default Service;
