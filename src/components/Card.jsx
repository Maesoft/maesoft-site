import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Card({ imgs = [], title, content }) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % imgs.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + imgs.length) % imgs.length);

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-64">
        <AnimatePresence initial={false}>
          <Motion.img
            key={imgs[index]}
            src={imgs[index]}
            alt={`Slide ${index + 1}`}
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 hover:cursor-pointer bg-black/50 text-white p-2 rounded-full"
        >
          {"<"}
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 hover:cursor-pointer bg-black/50 text-white p-2 rounded-full"
        >
           {">"}
        </button>
      </div>

      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default Card;
