import { useState } from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import github from "../assets/github.png";
import tiktok from "../assets/tik-tok.png";

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [estado, setEstado] = useState("inicial"); // "inicial" | "enviado" | "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://formspree.io/f/manorbgn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          email: formData.email,
          mensaje: formData.mensaje,
        }),
      });

      if (res.ok) {
        setEstado("enviado");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setEstado("error");
      }
    } catch (error) {
      setEstado(error.message);
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-500 via-black to-gray-800 text-white p-6">
      <h1 className="text-4xl font-bold mb-6">Contacto</h1>
      <p className="text-lg mb-4">
        Si tienes alguna consulta o necesitas más información, no dudes en
        contactarnos.
      </p>
      {estado === "enviado" ? (
        <p className="text-green-400 text-lg">
          ✅ ¡Tu mensaje ha sido enviado!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          <input
            name="nombre"
            type="text"
            placeholder="Nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Correo Electrónico"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="mensaje"
            placeholder="Mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-800 hover:bg-blue-700 text-white hover:cursor-pointer font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          >
            Enviar
          </button>
          {estado === "error" && (
            <p className="text-red-400">
              ❌ Hubo un error al enviar. Intentá de nuevo.
            </p>
          )}
        </form>
      )}

      <div className="mt-8 text-center">
        <p className="text-lg">También puedes contactarnos a través de:</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.instagram.com/maesoft.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src={instagram}
              className="h-10 transition-transform duration-300 hover:scale-110"
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.facebook.com/share/1CFs4aYZ7S/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src={facebook}
              className="h-10 transition-transform duration-300 hover:scale-110"
              alt="Facebook"
            />
          </a>
          <a
            href="https://wa.me/5492244445033"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src={whatsapp}
              className="h-10 transition-transform duration-300 hover:scale-110"
              alt="Whatsapp"
            />
          </a>
          <a
            href="https://www.tiktok.com/@maesoft.info"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src={tiktok}
              className="h-10 transition-transform duration-300 hover:scale-110"
              alt="Tik-Tok"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/matias-eguia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src={linkedin}
              className="h-10 transition-transform duration-300 hover:scale-110"
              alt="Linkedin"
            />
          </a>
          <a
            href="https://www.github.com/Maesoft"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src={github}
              className="h-10 transition-transform duration-300 hover:scale-110"
              alt="GitHub"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
