import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaReact, FaLaravel, FaDatabase, FaCloud } from "react-icons/fa"; // Ejemplo de iconos
import { SiTailwindcss, SiTypescript, SiKotlin, SiJetpackcompose, SiMysql, SiDjango, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { DiJava } from "react-icons/di";

const Projects: React.FC = () => {
    const projects = [
        {
            id: "1",
            title: "Aplicación web para solicitudes de permisos",
            description:
                "Una app desarrollada en Laravel para que docentes soliciten permisos.",
            image: "/src/assets/laravel/imagen_login.png",
            link: "/projects/laravel-app", // Nueva ruta
            technologies: [<FaLaravel />,<SiTailwindcss />, <SiMysql/>, <FaCloud />],
        },
        {
            id: "2",
            title: "Conect@t - App de gestión de planes de internet",
            description:
                "Aplicación móvil creada para que usuarios gestionen sus planes de internet.",
            image: "/src/assets/conectat/Imagen_conectat_inicio_sesion.jpg",
            link: "/projects/conectat-app", // Nueva ruta
            technologies: [
                <DiJava/>, <SiKotlin/>,<SiJetpackcompose/>,<FaDatabase />, <FaCloud />],
        },
        {
            id: "3",
            title: "Portafolio personal",
            description:
                "Un portafolio web interactivo creado con React, TypeScript y TailwindCSS para destacar mis proyectos y habilidades.",
            image: "/src/assets/imagen_portafolio.png",
            link: "/projects/portafolio", // Nueva ruta
            technologies: [<FaReact />, <SiTypescript />, <SiTailwindcss />],
        },
        {
            id: "4",
            title: "Django AI Project",
            description:
                "Un proyecto de inteligencia artificial desarrollado en Django.",
            image: "/src/assets/django/Django_tecnologias_usadas.png",
            link: "/projects/django-ai-project", // Nueva ruta
            technologies: [<SiDjango/>, <SiMysql/>, <SiHtml5/>, <SiCss3/>,<SiJavascript/>],
        },
    ];

    return (
        <section className="bg-gray-100 text-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
            <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            >
            Mis Proyectos Académicos y Personales
            </motion.h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
                <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                    <div className="flex justify-center space-x-2 mb-4 text-blue-600">
                    {project.technologies.map((icon, i) => (
                        <span key={i} className="text-2xl">{icon}</span>
                    ))}
                    </div>
                    <Link
                    to={project.link}
                    className="flex justify-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    >
                    Ver más
                    </Link>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
};

export default Projects;
