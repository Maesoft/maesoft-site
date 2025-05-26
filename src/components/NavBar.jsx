import logo from "../assets/logo.png"; // Ajusta la ruta si hace falta

function NavBar() {
  return (
    <nav className="bg-gray-900 shadow-lg p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo y texto */}
        <div className="text-white font-[jaro] font-light text-4xl flex flex-col items-center cursor-pointer select-none">
          <img
            src={logo}
            alt="Logo"
            className="h-20 mb-0 transition-transform duration-300 hover:scale-110"
          />
          <span className="-mt-2 tracking-wide">maesoft</span>
        </div>

        {/* Menú de navegación */}
        <ul className="flex space-x-10 font-semibold text-xl">
          {[
            { href: "#home", label: "Inicio" },
            { href: "#about", label: "Servicios" },
            { href: "#services", label: "Contacto" },
            { href: "#contact", label: "Nosotros" },
            { href: "#blog", label: "Proyectos" },
          ].map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-white hover:text-gray-400 transition-colors duration-300"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
