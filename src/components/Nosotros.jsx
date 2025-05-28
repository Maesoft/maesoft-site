import { Player } from "@lottiefiles/react-lottie-player";
import nosotros from "../assets/nosotros.json";
import { motion as Motion } from "framer-motion";
function Nosotros() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
        <Motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8"
        >
        <Player
          autoplay
          loop
          src={nosotros}
          className="h-50 md:h-70 mx-auto"
        />
        </Motion.div>
        <Motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mb-8"
        >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Nosotros
        </h2>
        </Motion.div>

        <Motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-8"
        >
        <p className="mb-8 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">
          Maesoft se fundó con el propósito de brindar soluciones tecnológicas
          integrales a emprendedores, comercios y pymes locales. El proyecto
          comenzó como un pequeño emprendimiento enfocado en reparaciones
          electrónicas y soporte técnico para computadoras, ofreciendo atención
          personalizada y soluciones prácticas a las necesidades tecnológicas
          del día a día. Con el tiempo, y gracias al contacto directo con
          distintos clientes, identificamos una demanda creciente por sistemas
          de gestión simples, eficientes y adaptados a cada rubro. Fue así como
          Maesoft dio un giro hacia el desarrollo de software, aplicando
          conocimientos adquiridos en formación profesional y años de
          experiencia autodidacta en programación. Hoy, Maesoft se dedica al
          diseño y desarrollo de soluciones digitales a medida, como sistemas de
          facturación, gestión de stock, control de mesas para restaurantes y
          herramientas administrativas adaptadas a distintos modelos de negocio.
          Nuestro enfoque sigue siendo el mismo desde el inicio: cercanía,
          compromiso y tecnología pensada para resolver problemas reales.
        </p>
        </Motion.div>
        </div>
    </section>
  )
}

export default Nosotros;
