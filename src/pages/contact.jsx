import Triangle from "../components/triangle";
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="xs:mt-0 mt-32 lg:mt-40 xs:py-16 py-24 lg:py-32 bg-creme rounded-t-[120px] relative"
    >
      <div className="text-center pt-14">
        <h2 className="font-medium text-lg lg:text-xl text-vert leading-9 tracking-wide mb-5">
          CONTACT
        </h2>
        <span className="xs:text-xl text-4xl font-poppins">
          <b>Parlons de vos projets</b>
        </span>

        <form
          id="contactForm"
          method="POST"
          name="contact"
          data-netlify="true"
          className="xs:max-w-[300px] max-w-2xl mx-auto mt-20 bg-white p-8 rounded-lg shadow-lg"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-start flex text-sm font-medium text-gray-700 mb-2"
            >
              Nom :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vert focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-start flex text-sm font-medium text-gray-700 mb-2"
            >
              E-mail :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vert focus:border-transparent"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-start flex text-sm font-medium text-gray-700 mb-2"
            >
              Message :
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vert focus:border-transparent"
            ></textarea>
          </div>
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              className="bg-vert text-white p-4 rounded-full hover:opacity-95"
            >
              Envoyer
            </motion.button>
          </div>
        </form>
        <div className="xs:mt-12 mt-16 text-center">
          <p className="text-gray-700 xs:mb-8 mb-10">
            Vous préférez peut être par e-mail ? Cliquez ci-dessous :
          </p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="mailto:yacine.sf@outlook.fr?subject=Contact%20via%20site%20web&body=Bonjour,%20je%20souhaite%20discuter%20de%20mon%20projet!"
            className="px-6 py-3 bg-vert text-white rounded-lg shadow-lg hover:opacity-80 focus:ring-2 focus:ring-vert"
          >
            Envoyer un e-mail
          </motion.a>
        </div>
      </div>
      <Triangle
        borderLeft="border-l-[30px] lg:border-l-[40px] border-l-transparent"
        borderRight="border-r-[30px] lg:border-r-[40px] border-r-transparent"
        borderBottom="border-b-[45px] lg:border-b-[65px] border-b-[#cfd8d1]"
        top="top-[6%]"
        left="xs:left-[17%] left-[23%] lg:left-[21%]"
        zIndex="z-10"
      />
      <Triangle
        borderLeft="border-l-[40px] lg:border-l-[50px] border-l-transparent"
        borderRight="border-r-[40px] lg:border-r-[50px] border-r-transparent"
        borderBottom="border-b-[60px] lg:border-b-[80px] border-b-vert"
        top="top-[5%]"
        left="xs:left-[10%] left-[19%]"
      />
      <Triangle
        borderLeft="border-l-[30px] lg:border-l-[40px] border-l-transparent"
        borderRight="border-r-[30px] lg:border-r-[40px] border-r-transparent"
        borderBottom="border-b-[45px] lg:border-b-[65px] border-b-[#cfd8d1]"
        top="top-[6%]"
        left="xs:left-[75%] left-[77%] lg:left-[75%]"
        zIndex="z-10"
      />
      <Triangle
        borderLeft="border-l-[40px] lg:border-l-[50px] border-l-transparent"
        borderRight="border-r-[40px] lg:border-r-[50px] border-r-transparent"
        borderBottom="border-b-[60px] lg:border-b-[80px] border-b-vert"
        top="top-[5%]"
        left="xs:left-[68%] left-[73%]"
      />
    </section>
  );
}

export default Contact;
