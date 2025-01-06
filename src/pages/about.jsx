import Circle from "../components/circle";

function About() {
  return (
    <section
      id="about"
      className="relative xs:mt-16 mt-32 xs:p-4 p-8 lg:mt-40"
    >
      <div className="flex justify-around xs:flex-col-reverse items-center">
        <div className=" p-5 xs:h-[150px] h-[500px] w-[250px] lg:w-[400px] bg-creme flex justify-center items-center">
          BIG PHOTO DE MOI
        </div>
        <div className="xs:flex xs:flex-col items-center p-5 w-[500px]">
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className="mt-7 mb-10">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
      <Circle
        size="h-10 w-10 lg:h-16 lg:w-16"
        bgColor="bg-vert"
        opacity="opacity-30"
        left="left-[90%]"
        top="top-0"
      />
      <Circle
        size="h-7 w-7 lg:h-12 lg:w-12"
        border="border-2 lg:border-4 border-black"
        left="left-[89%]"
        top="top-[3%]"
      />
    </section>
  );
}

export default About;
