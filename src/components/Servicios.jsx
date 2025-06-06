import { motion as Motion } from "framer-motion";

function Servicios() {
  return (
    <>
      <section className="bg-gray-100">
        <Motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="p-8">
            <h1 className="text-4xl font-bold text-center">
              Conocé nuestros servicios
            </h1>
          </div>
        </Motion.div>

        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Desarrollo Web</h2>
            <p className="text-gray-700">
              Creamos sitios web modernos y responsivos adaptados a tus
              necesidades.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">E-commerce</h2>
            <p className="text-gray-700">
              Desarrollamos tiendas online seguras y fáciles de usar para
              potenciar tus ventas.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Sistemas de Gestión</h2>
            <p className="text-gray-700">
              Implementamos sistemas personalizados para optimizar la
              administración de tu negocio.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Aplicaciones Móviles</h2>
            <p className="text-gray-700">
              Desarrollamos aplicaciones móviles nativas e híbridas para iOS y
              Android.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Consultoría IT</h2>
            <p className="text-gray-700">
              Ofrecemos asesoramiento experto para mejorar tu infraestructura
              tecnológica.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">Soporte Técnico</h2>
            <p className="text-gray-700">
              Brindamos soporte técnico especializado para resolver cualquier
              inconveniente.
            </p>
          </div>

          {/* NUEVOS SERVICIOS */}

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">
              Reparación Electrónica
            </h2>
            <p className="text-gray-700">
              Reparamos notebooks, PC, consolas, televisores, routers y otros
              dispositivos tecnológicos.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">
              Seguridad y Vigilancia
            </h2>
            <p className="text-gray-700">
              Instalamos y configuramos cámaras de seguridad, alarmas y
              monitoreo remoto para hogares y empresas.
            </p>
          </div>

          <div className="p-6 rounded-lg shadow-lg transition-shadow transition-transform duration-300 hover:shadow-xl hover:scale-105 hover:cursor-pointer">
            <h2 className="text-2xl font-semibold mb-4">
              Automatización Inteligente
            </h2>
            <p className="text-gray-700">
              Implementamos soluciones de domótica y automatización para
              controlar luces, cerraduras, sensores y más desde tu celular.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Servicios;
