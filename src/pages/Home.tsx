import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-screen bg-slate-800 text-white"
        >
        
        {/* Decoraciones */}
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white opacity-20 rounded-full blur-lg"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
            }}
            />
            <motion.div
            className="absolute bottom-10 right-20 w-40 h-40 bg-white opacity-30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
            }}
            />
        </div>

        {/* Foto con animación */}
        <motion.img
            src="https://felipeduarte.neocities.org/imagenes/foto_cv.JPG" // Cambia esto por la ruta de tu foto
            alt="Felipe de Jesús Duarte Castillo"
            className="w-32 h-32 rounded-full shadow-lg mb-6"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 60 }}
        />

        {/* Objetivo con animación */}
        <motion.h1
            className="text-4xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            ¡Hola! Soy Felipe de Jesús Duarte Castillo
        </motion.h1>
        <motion.p
            className="text-lg text-center max-w-2xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
        >
            Mi objetivo es aplicar mis conocimientos en desarrollo de software y web
            para contribuir al éxito de un equipo innovador durante mi residencia
            profesional.
        </motion.p>

        {/* Botón con animación */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
        > 
        <Link to="/about"
        className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
        <span
            className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
        ></span>

        <span
            className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-3 text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90"
        >
            <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="mr-2 h-5 w-5 text-pink-500 transition-transform duration-300 group-hover:-translate-x-1"
            >
            <path
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
            ></path>
            </svg>

            <span
            className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold"
            >
            Acerca de mí
            </span>

            <svg
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="ml-2 h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1"
            >
            <path
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
                stroke-width="2"
                stroke-linejoin="round"
                stroke-linecap="round"
            ></path>
            </svg>
        </span>
        </Link>
        </motion.div>
        </motion.main>
    );
};

export default Home;
