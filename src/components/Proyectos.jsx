import Card from "./Card";
function Proyectos() {
  return (
    <section className="flex flex-col bg-gray-200">
      <div>
        <h2 className="mb-4 mt-8 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Proyectos</h2>
        <p className="mb-8 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">Aqui encontraras algunos de nuestros proyectos realizados. Converti tu idea en un proyecto real!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
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
          content={
            "Software contable de escritorio desarrollado en Electron. Permite gestionar ventas, compras, stock, clientes y proveedores, con emisión de comprobantes como facturas, tickets, recibos, órdenes de pago, informes de stock, ventas, compras y resumen de cuenta."
          }
        />
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
          content={
            "Software de escritorio desarrollado para bares, salones recreativos y restaurantes con mesas de pool. Permite crear el plano del salón con la disposición de mesas, habilitar mesas en tiempo real, cargar comandas desde un listado de productos con precios, y generar tickets de cobro al cerrar cada mesa. Optimiza la atención al cliente, agiliza la gestión y mejora el control de ventas por mesa."
          }
        />
        <Card
          imgs={[
            "/player/1.PNG",
            "/player/2.PNG",
          ]}
          title={"🎮 PlayerReview – Comunidad Gamer y Análisis de Videojuegos"}
          content={"Plataforma web donde los gamers pueden leer, escribir y compartir reseñas de videojuegos. Ofrece análisis detallados, puntuaciones de la comunidad, recomendaciones personalizadas y un espacio social para debatir sobre lanzamientos, consolas y géneros favoritos. Ideal para descubrir nuevos títulos y conectar con otros apasionados del gaming."}
        />
      </div>
    </section>
  );
}

export default Proyectos;
