import { motion as Motion } from "framer-motion";
import Card from "./Card";

function Proyectos() {
  return (
    <section className="flex flex-col bg-gray-200">
      <Motion.div
        initial={{ y: -60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <h2 className="mb-4 mt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Proyectos
        </h2>
        <p className="mb-8 font-light text-center text-gray-500 sm:text-xl ">
          Aqui encontraras algunos de nuestros proyectos realizados. Converti tu
          idea en un proyecto real!
        </p>
      </Motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
        <Motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            imgs={[
              "/prisma/1.PNG",
              "/prisma/2.PNG",
              "/prisma/3.PNG",
              "/prisma/4.PNG",
              "/prisma/5.PNG",
              "/prisma/6.PNG",
              "/prisma/7.PNG",
              "/prisma/8.PNG",
              "/prisma/9.PNG",
              "/prisma/10.PNG",
              "/prisma/11.PNG",
              "/prisma/12.PNG",
              "/prisma/13.PNG",
              "/prisma/14.PNG",
            ]}
            title={"💼 Prisma – Software Contable de Escritorio"}
            content={`Permite registrar ventas y compras, controlar el stock de productos, gestionar clientes y proveedores, 
            y emitir comprobantes como facturas, tickets, recibos y órdenes de pago. Además, genera informes detallados de movimientos, 
            resumen de cuenta, y te brinda un control completo sobre la operatoria diaria de tu comercio.
            Ideal para pequeños y medianos negocios que buscan profesionalizar su administración sin complicaciones.
            Cuenta con una interfaz clara y amigable para facilitar su uso en el día a día.
            Ayuda a mejorar la organización, reducir errores y ahorrar tiempo en las tareas contables.
            `}
          />
        </Motion.div>
        <Motion.div
          initial={{ y: -60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            imgs={[
              "/tsunami/1.PNG",
              "/tsunami/2.PNG",
              "/tsunami/3.PNG",
              "/tsunami/4.PNG",
              "/tsunami/5.PNG",
              "/tsunami/6.PNG",
            ]}
            title={"🌊 Tsunami Pool – Gestión de Restaurant con Mesas de Pool "}
            content={`Software de escritorio desarrollado para bares, salones recreativos y restaurantes con mesas de pool.
                      Permite crear el plano del salón con la disposición de mesas, habilitar mesas en tiempo real, cargar comandas
                       desde un listado de productos con precios y generar tickets de cobro al cerrar cada mesa.
                      Optimiza la atención al cliente, agiliza la gestión y mejora el control de ventas por mesa.
                      Ofrece una visión clara del estado de cada mesa en todo momento, facilitando el trabajo del personal.
                    `}
          />
        </Motion.div>
        <Motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card
            imgs={[
              "/player/1.PNG",
              "/player/2.PNG",
              "/player/3.PNG",
              "/player/4.PNG",
              "/player/5.PNG",
              "/player/6.PNG",
              "/player/7.PNG",
              "/player/8.PNG",
            ]}
            title={"🎮 PlayerReview – Plataforma de Reseñas de Videojuegos"}
            content={
              "PlayerReview es una plataforma donde los usuarios pueden registrarse, dejar reseñas y descubrir nuevos videojuegos a través de una comunidad activa de gamers. El proyecto está dividido en tres partes: el frontend, que ofrece una experiencia clara e intuitiva; el backend, que gestiona la lógica y las funciones del sistema; y una base de datos en la nube, donde se almacena toda la información de forma segura. Ideal para quienes buscan crear una plataforma moderna y participativa."
            }
          />
        </Motion.div>
      </div>
    </section>
  );
}

export default Proyectos;
