import wa from "../assets/whatsapp_fixed.png";
import { motion as Motion } from "framer-motion";

function BotonWhatsapp({ numero }) {
  return (
    <Motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ opacity: 1, scale: 1.1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed bottom-4 right-4 z-50 py-2 px-4"
    >
      <a
        href={`https://wa.me/${numero}?text=Hola, me gustaría saber más sobre sus servicios.`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={wa} className="h-10 md:h-20" alt="Enviar Whatsapp" />
      </a>
    </Motion.div>
  );
}

export default BotonWhatsapp;
