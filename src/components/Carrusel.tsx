import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CarouselProps {
    items: { src: string; caption: string }[];
    interval?: number; // Tiempo en milisegundos entre cambios automáticos
}

const Carousel: React.FC<CarouselProps> = ({ items, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Cambio automático de imágenes
    useEffect(() => {
        const timer = setInterval(() => {
        handleNext();
        }, interval);
        return () => clearInterval(timer); // Limpia el intervalo cuando el componente se desmonta
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentIndex, interval]);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
        {/* Imagen actual */}
        <div className="relative">
            <AnimatePresence>
            <motion.img
                key={currentIndex}
                src={items[currentIndex].src}
                alt={`Imagen ${currentIndex + 1}`}
                className="w-full h-auto object-cover"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6 }}
            />
            </AnimatePresence>
            {/* Capción */}
            <div className="absolute bottom-4 left-0 right-0 text-center bg-black bg-opacity-50 text-white p-2">
            <p>{items[currentIndex].caption}</p>
            </div>
        </div>

        {/* Botón anterior */}
        <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-600 focus:outline-none"
        >
            {"<"}
        </button>

        {/* Botón siguiente */}
        <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-600 focus:outline-none"
        >
            {">"}
        </button>

        {/* Indicadores */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {items.map((_, index) => (
            <button title="Indicador"
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-600" : "bg-gray-400"
                }`}
            />
            ))}
        </div>
        </div>
    );
};

export default Carousel;
