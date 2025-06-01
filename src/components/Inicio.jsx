import "./Inicio.css";
import { TypeAnimation } from "react-type-animation";
import { motion as Motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import techAnimation from "../assets/esfera.json";

function Inicio() {
  return (
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-500 via-black to-gray-800 overflow-hidden">
      <Motion.div
        initial={{ x: 60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-center px-4 max-w-2xl"
      >
        <Player
          autoplay
          loop
          src={techAnimation}
          className="h-50 md:h-70 mx-auto"
        />
        <h1 className="text-5xl font-bold text-white -mt-2 tracking-tight">
          Bienvenido a Maesoft
        </h1>
        <TypeAnimation
          sequence={[
            "Landing Pages", 2000,
            "E-commerces", 2000,
            "Sitios Web", 2000,
            "Sistemas de Gestión", 2000,
            "Software a medida", 2000,
            "Soluciones tecnologicas", 2000,
            "Sistemas Contables", 2000,
          ]}
          wrapper="div"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", color: "gray" }}
        />
        <p className="text-lg mb-3">
          <span className="bg-gradient-to-r from-gray-400 to-gray-50 bg-clip-text text-transparent font-semibold">
            Aquí encontrarás soluciones tecnológicas a medida para tu negocio.
            Desde modernas aplicaciones web hasta sistemas de gestión
            personalizados. Ya sea que tengas un comercio, una empresa en
            expansión o un nuevo emprendimiento, te ayudamos a digitalizar y
            optimizar tus procesos con un enfoque 100% personalizado.
          </span>
        </p>
        <a href="#services">
        <Motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3 mb-8 rounded-xl font-semibold shadow-md hover:shadow-xl hover:cursor-pointer transition-all duration-300"
        >
          Ver Más
        </Motion.button>
        </a>
      </Motion.div>
    </section>
  );
}

export default Inicio;
