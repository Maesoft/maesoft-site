function Contacto() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-500 via-black to-gray-800 text-white p-6">
            <h1 className="text-4xl font-bold mb-6">Contacto</h1>
            <p className="text-lg mb-4">
                Si tienes alguna consulta o necesitas más información, no dudes en contactarnos.
            </p>
            <form className="w-full max-w-md space-y-4">
                <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                    placeholder="Mensaje"
                    className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                    Enviar
                </button>
            </form>
            <div className="mt-8 text-center">
                <p className="text-lg">También puedes contactarnos a través de:</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <a href="mailto:info.maesoft@gmail.com" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">

                    </a>
                    <a href="https://www.linkedin.com/in/maesoft" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                        LinkedIn
                    </a>
                    <a href="" className="text-blue-400 hover:text-blue-500 transition-colors duration-300">
                        WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contacto;