import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home: React.FC = () => {
    return (
        <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
        >
        {/* Foto con animación */}
        <motion.img
            src="../assets/foto_cv.JPG"
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
            <Link
            to="/about"
            className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            >
            Acerca de mí
            </Link>
        </motion.div>
        </motion.main>
    );
};

export default Home;
