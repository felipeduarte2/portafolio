import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/outline"; // Importamos íconos
import { Link } from "react-router-dom";

const About: React.FC = () => {
    return (
        <section className="bg-gray-100 text-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
            {/* Título con animación */}
            <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            Acerca de mí
            </motion.h2>

            {/* Contenido principal */}
            <div className="flex flex-col md:flex-row items-center">
            {/* Imagen con animación */}
            <motion.div
                className="md:w-1/3 mb-6 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <img
                src="src/assets/foto_cv.jpg" // Cambia por la ruta de tu imagen
                alt="Felipe de Jesús Duarte Castillo"
                className="rounded-lg shadow-lg w-full"
                />
            </motion.div>

            {/* Descripción */}
            <motion.div
                className="md:w-2/3 md:pl-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <p className="mb-4 text-lg">
                ¡Hola! Soy Felipe de Jesús Duarte Castillo, estudiante de
                Ingeniería en Sistemas Computacionales en el Instituto Tecnológico
                Superior del Sur del Estado de Yucatán. Me apasiona la tecnología
                y el desarrollo de software, con un enfoque en desarrollo web y
                lógica de programación.
                </p>
                <p className="mb-6">
                Destaco por mi capacidad de resolver problemas complejos,
                entender conceptos abstractos y trabajar en equipo para crear
                soluciones innovadoras. Mi objetivo es seguir aprendiendo y
                aplicar mis conocimientos para contribuir al éxito de un equipo
                profesional.
                </p>
                
                {/* Habilidades con íconos */}
                <h3 className="text-xl font-semibold mb-4">Habilidades principales:</h3>
                <ul className="space-y-2">
                {[
                    "Lógica de programación",
                    "Desarrollo de web(Laravel, Django, React, html, css, js)",
                    "Desarrollo de Apps moviles(Java, Kotlin, JetpackCompose)",
                    "Gestión de bases de datos relacionales",
                    "Gestión de versiones con Git y GitHub",
                ].map((skill, index) => (
                    <li key={index} className="flex items-center space-x-2">
                    <CheckCircleIcon className="h-6 w-6 text-blue-600" />
                    <span>{skill}</span>
                    </li>
                ))}
                </ul>

                {/* Idiomas */}
                <h3 className="text-xl font-semibold mb-4">Idiomas:</h3>
                <ul className="space-y-2">
                    {[
                        "Español :Nativo",
                        "Inglés: Intermedio B1",
                        ].map((language, index) => (
                            <li key={index} className="flex items-center space-x-2">
                                {/* <LanguageIcon className="h-6 w-6 text-blue-600" /> */}
                                <span>{language}</span>
                            </li>
                    ))}
                </ul>

            </motion.div>
            </div>

            <motion.div
                className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                >
                    <h3 className="text-xl font-semibold mb-4">Certificaciones:</h3>
                {/* Título de la certificación */}
                <h3 className="text-xl font-bold text-blue-600 mb-4 text-center">
                    Certificación Básica en Computación en la Nube
                </h3>

                {/* Descripción */}
                <p className="text-gray-700 text-center mb-4">
                    Obtuve esta certificación de Google, demostrando conocimientos fundamentales en la nube, incluyendo despliegue de recursos y conceptos clave.
                </p>

                {/* Botón para ver la certificación */}
                <a
                    href="https://www.credly.com/users/felipe-de-jesus-duarte-castillo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                >
                    Ver Certificación
                </a>
                </motion.div>

            {/* Botón para ver mis proyectos */}
            <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            <Link
                to="/projects"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
                Ver mis proyectos
            </Link>
            </motion.div>
        </div>
        </section>
    );
};

export default About;
