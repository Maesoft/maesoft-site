import Card from "./Card";
function Proyectos() {
  return (
    <section className="flex flex-col bg-gray-200">
      <div>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Proyectos</h2>
        <p className="mb-8 font-light text-center text-gray-500 sm:text-xl dark:text-gray-400">Aqui encontraras algunos de nuestros proyectos realizados</p>
      </div>
      <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
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
          ]}
          title={"💼 Prisma – Software Contable de Escritorio"}
          content={
            "Software contable de escritorio desarrollado en Electron. Permite gestionar ventas, compras, stock, clientes y proveedores, con emisión de comprobantes como facturas, tickets, recibos, órdenes de pago, informes de stock, ventas, compras y resumen de cuenta."
          }
        />
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
          ]}
          title={"💼 Prisma – Software Contable de Escritorio"}
          content={
            "Software contable de escritorio desarrollado en Electron. Permite gestionar ventas, compras, stock, clientes y proveedores, con emisión de comprobantes como facturas, tickets, recibos, órdenes de pago, informes de stock, ventas, compras y resumen de cuenta."
          }
        />
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
          ]}
          title={"💼 Prisma – Software Contable de Escritorio"}
          content={
            "Software contable de escritorio desarrollado en Electron. Permite gestionar ventas, compras, stock, clientes y proveedores, con emisión de comprobantes como facturas, tickets, recibos, órdenes de pago, informes de stock, ventas, compras y resumen de cuenta."
          }
        />
      </div>
    </section>
  );
}

export default Proyectos;
