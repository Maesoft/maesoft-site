import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import github from "../assets/github.png";
import tiktok from "../assets/tik-tok.png";

function Footer() {
    return ( <footer className="bg-gray-900 text-gray-300 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <h2 className="text-2xl font-bold text-white">Maesoft</h2>
          <p className="mt-2 text-sm">
            Desarrollo de software a medida para comercios. Soluciones eficientes, simples y accesibles.
          </p>
        </div>

        {/* Enlaces útiles */}
        <div>
          <h3 className="text-white font-semibold mb-2">Enlaces útiles</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white">Inicio</a></li>
            <li><a href="/#servicios" className="hover:text-white">Servicios</a></li>
            <li><a href="/#portfolio" className="hover:text-white">Proyectos</a></li>
            <li><a href="/#contacto" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h3 className="text-white font-semibold mb-2">Seguinos</h3>
          <div className="flex justify-center space-x-4">
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
      </div>

      {/* Footer bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Maesoft. Todos los derechos reservados.
      </div>
    </footer> );
}

export default Footer;

