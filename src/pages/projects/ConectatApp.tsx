import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from "../../components/Carrusel";

const ConectatApp: React.FC = () => {
    const items = [
        {
        src: "https://felipeduarte.neocities.org/imagenes/conectat/Imagen_conectat_inicio_sesion.jpg",
        caption: "Pantalla de inicio de sesión: autenticación de usuarios.",
        },
        {
        src: "https://felipeduarte.neocities.org/imagenes/conectat/Imagen_conectat_identificacion_cliente.jpg",
        caption: "Identificación del cliente: captura de datos personales.",
        },
        {
        src: "https://felipeduarte.neocities.org/imagenes/conectat/Imagen_conectat_validacion_cliente.jpg",
        caption: "Validación del cliente: verificación de datos y autenticación.",
        },
        {
        src: "https://felipeduarte.neocities.org/imagenes/conectat/Imagen_conetat1.jpg",
        caption: "Pantalla principal: gestión de planes de internet.",
        },
        {
        src: "https://felipeduarte.neocities.org/imagenes/conectat/Imagen_conetat2.jpg",
        caption: "Pantalla principal: gestión de planes de internet.",
        },
    ];

    return (
        <div className="bg-gray-100 min-h-screen text-gray-800 py-8 px-4">
        <div className="max-w-5xl mx-auto">
            {/* Descripción del proyecto */}
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <h1 className="text-3xl font-bold text-center mb-4">
                Conect@t - Aplicación Móvil
            </h1>
            <p className="text-lg text-center mb-6">
                Aplicación móvil desarrollada en Android Studio con Java, Kotlin y
                Jetpack Compose. Realizada en equipo para la materia de
                "Aplicaciones Móviles" en el ITSSY.
            </p>
            <p className="text-md text-center mb-4">
                Conect@t es una app para que los usuarios gestionen sus planes de
                internet, revisen historial de pagos y soliciten soporte técnico.
                Consume una API REST desarrollada por un equipo colaborador, usando
                Retrofit para la integración.
            </p>
            </motion.div>

            {/* Carrusel de imágenes */}
            <div className="flex justify-center">
            <motion.div
            className="my-8 max-w-60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            >
            <Carousel items={items} interval={7000} />
            </motion.div></div>

            {/* Herramientas utilizadas */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white shadow-lg rounded-lg p-6 my-8"
            >
            <h2 className="text-2xl font-semibold mb-4">Herramientas y Tecnologías</h2>
            <ul className="list-disc list-inside">
                <li>Lenguajes: Java, Kotlin</li>
                <li>Diseño de interfaces: Jetpack Compose</li>
                <li>Consumo de API REST: Retrofit</li>
                <li>Almacenamiento y gestión: API alojada en servidor</li>
                <li>Integración con WhatsApp para contacto directo</li>
            </ul>
            </motion.div>

            {/* Botón de regreso */}
            <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            >
            <Link
                to="/projects"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
                Volver a Proyectos
            </Link>
            </motion.div>
        </div>
        </div>
    );
};

export default ConectatApp;
