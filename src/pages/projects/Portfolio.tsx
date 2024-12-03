import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// import Carousel from "../../components/Carrusel";

const Portfolio: React.FC = () => {
    // const items = [
    //     {
    //     src: "/images/portfolio-home.png",
    //     caption: "Página de inicio: Bienvenida y objetivo.",
    //     },
    //     {
    //     src: "/images/portfolio-about.png",
    //     caption: "Sección Acerca de mí: habilidades y experiencia.",
    //     },
    //     {
    //     src: "/images/portfolio-projects.png",
    //     caption: "Sección Proyectos: listado de trabajos destacados.",
    //     },
    //     {
    //     src: "/images/portfolio-contact.png",
    //     caption: "Formulario de contacto: redirige correos directamente.",
    //     },
    // ];

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
                Portafolio Personal
            </h1>
            <p className="text-lg text-center mb-6">
                Este portafolio fue creado para destacar mis habilidades,
                experiencia y proyectos realizados en el ámbito de desarrollo de
                software y web.
            </p>
            <p className="text-md text-center mb-4">
                Desarrollado con tecnologías modernas como React, TypeScript y
                TailwindCSS, este sitio refleja mi pasión por el diseño y la
                funcionalidad.
            </p>
            <p className="text-md text-center mb-6">
                Elegí <strong>React</strong> porque es una biblioteca versátil para crear interfaces
                de usuario dinámicas y rápidas. Opté por <strong>TypeScript</strong> porque permite
                un desarrollo más robusto al introducir tipos estáticos, ayudándome
                a detectar errores en tiempo de desarrollo y mantener un código más
                limpio y escalable.
            </p>
            </motion.div>

            {/* Carrusel de imágenes */}
            {/* <motion.div
            className="my-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            >
            <Carousel items={items} interval={7000} />
            </motion.div> */}

            {/* Características principales */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="bg-white shadow-lg rounded-lg p-6 my-8"
            >
            <h2 className="text-2xl font-semibold mb-4">Características Principales</h2>
            <ul className="list-disc list-inside">
                <li>
                <strong>Diseño Responsivo:</strong> Optimizado para dispositivos móviles y
                pantallas grandes.
                </li>
                <li>
                <strong>Animaciones:</strong> Interactividad y transiciones fluidas con Framer
                Motion.
                </li>
                <li>
                <strong>Modularidad:</strong> Código organizado en componentes reutilizables.
                </li>
                <li>
                <strong>Estilos:</strong> Implementación con TailwindCSS para un diseño rápido y
                eficiente.
                </li>
            </ul>
            </motion.div>

            {/* Enlace al código fuente */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center my-8"
            >
            <a
                href="https://github.com/felipeduarte2/portafolio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  text-blue-600 hover:text-blue-800"
            >
                Ver Código en GitHub
            </a>
            </motion.div>

            {/* Botón de regreso */}
            <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            >
            <Link
                to="/projects"
                className="inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700"
            >
                Volver a Proyectos
            </Link>
            </motion.div>
        </div>
        </div>
    );
};

export default Portfolio;
