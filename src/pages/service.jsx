import ServiceCard from "../components/serviceCard";
import Triangle from "../components/triangle";
import SEOImg from "../assets/icons8-rechercher-dans-le-navigateur-80.png";
import IntegrationImg from "../assets/icons8-web-interface-80.png";
import MaintnanceImg from "../assets/maintnance.png";

function Service() {
  return (
    <section
      id="service"
      className="px-6 lg:px-12 xs:mt-16 mt-32 lg:mt-40 xs:py-16 py-24 lg:py-32 bg-creme rounded-[70px] lg:rounded-[120px] relative"
    >
      <div className="text-center pt-14">
        <h2 className="font-medium text-lg lg:text-xl text-vert leading-9 tracking-wide mb-5">
          SERVICES
        </h2>
        <span className="xs:text-xl lg:text-4xl text-2xl font-poppins">
          <b>Les services offert</b>
        </span>
        <p className="lg:text-xl mb-12 lg:mb-20 mt-5">
          Ces services sont Lorem....
        </p>
      </div>
      <Triangle
        borderLeft="border-l-[30px] lg:border-l-[40px] border-l-transparent"
        borderRight="border-r-[30px] lg:border-r-[40px] border-r-transparent"
        borderBottom="border-b-[45px] lg:border-b-[65px] border-b-[#cfd8d1]"
        top="xs:top-[3%] top-[6%] lg:top-[11%]"
        left="xs:left-[22%] left-[18%] lg:left-[22%]"
        zIndex="z-10"
      />
      <Triangle
        borderLeft="border-l-[40px] lg:border-l-[50px] border-l-transparent"
        borderRight="border-r-[40px] lg:border-r-[50px] border-r-transparent"
        borderBottom="border-b-[60px] lg:border-b-[80px] border-b-vert"
        top="xs:top-[2%] top-[5%] lg:top-[10%]"
        left="left-[15%] lg:left-[20%]"
      />
      <div className="flex xs:flex-col items-center gap-16 lg:justify-evenly justify-between">
        <ServiceCard
          icon=<img
            className="w-10 h-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
            src={SEOImg}
            alt="Icon SEO et Referencement"
          />
          title="SEO et réferencement"
          explainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry,  lorem Ipsum has been."
        />
        <ServiceCard
          icon=<img
            className="w-10 h-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
            src={IntegrationImg}
            alt="Icon d'intégration web"
          />
          title="Intégration web de maquette"
          explainText="Lorem Ipsum is simply dummy text of the printing and typesetting industry,  lorem Ipsum has been."
        />
        <ServiceCard
          icon=<img
            className="w-10 h-10 lg:h-12 lg:w-12 xl:h-14 xl:w-14"
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
