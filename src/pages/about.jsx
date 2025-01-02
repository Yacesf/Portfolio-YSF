import Circle from "../components/circle";

function About() {
  return (
    <section id="about" className="relative flex justify-around mt-40">
      <div className="h-[700px] w-[400px] bg-creme flex justify-center items-center">
        BIG PHOTO DE MOI
      </div>
      <div className="mt-20">
        <h2 className="font-medium text-xl text-vert leading-9 tracking-wide mb-5">
          À PROPOS DE MOI
        </h2>
        <span className="text-4xl font-poppins">
          Votre partenaire de confiance
          <br />
          <b>pour aller plus loin</b>
        </span>
        <div className="sm:w-[400px] mt-7 text-xl">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="mt-7">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
      <Circle
      size="h-16 w-16"
      bgColor="bg-vert"
      opacity="opacity-30"
      left="90%"
      /><Circle
      size="h-12 w-12"
      border="border-4 border-black"
      left="89%"
      top="4%"
      />
    </section>
  );
}

export default About;
