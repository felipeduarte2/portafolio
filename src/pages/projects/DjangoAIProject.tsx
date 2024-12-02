import React from "react";
import { motion } from "framer-motion";
import Carousel from "../../components/Carrusel";
import { Link } from "react-router-dom";

const DjangoAIProject: React.FC = () => {
    const images = [
        { 
            src: "../src/assets/django/Django_tecnologias_usadas.png", 
            caption: "Página principal con menú y descripción de tecnologías." 
        },
        { 
            src: "../src/assets/django/Django_filtros_Personalizados.png", 
            caption: "Sección 'Web' con filtros personalizados e imágenes." 
        },
        { 
            src: "../src/assets/django/Django_bases_de_datos.png",
            caption: "Base de datos con Django."
        },
        { 
            src: "../src/assets/django/Django_admin_de_db.png", 
            caption: "Administración de base de datos con Django." 
        },
        {
            src: "../src/assets/django/Django_tablas_de_db.png",
            caption: "Tablas de la base de datos con Django."
        }
    ];

    return (
        <motion.div
        className="container mx-auto px-4 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        {/* Título del proyecto */}
        <motion.h1
            className="text-4xl font-bold text-center text-blue-600 mb-6"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            Inteligencia Artificial con Django
        </motion.h1>

        {/* Descripción del proyecto */}
        <motion.p
            className="text-lg text-gray-700 mb-6 text-justify"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            Este proyecto fue desarrollado para acreditar las materias de "Programación Web" e "Inteligencia Artificial". 
            Es una aplicación web tipo blog creada con <strong>Django</strong>, que incluye un menú con cuatro secciones principales: 
            <ul className="list-disc ml-5 mt-2">
            <li><strong>Principal:</strong> Contiene información sobre las tecnologías utilizadas.</li>
            <li><strong>Web:</strong> Implementa filtros personalizados e imágenes dinámicas.</li>
            <li>
                <strong>Python:</strong> Presenta una tabla conectada a una base de datos y formularios 
                (GET y POST) para interactuar con datos.
            </li>
            <li>
                <strong>Inteligencia Artificial:</strong> Una sección destinada a integrar modelos de AI 
                (aún en desarrollo).
            </li>
            </ul>
            Este proyecto aprovecha las herramientas integradas de Django, como plantillas reutilizables, ORM, 
            autenticación y manejo de bases de datos.
        </motion.p>

        {/* Carrusel de imágenes */}
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
        >
            <div className="my-8">
                <Carousel items={images} interval={7000} />
            </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center my-8"
            >
            <a
                href="https://github.com/felipeduarte2/Proyecto_Django"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  text-blue-600 hover:text-blue-800"
            >
                Ver Código en GitHub
            </a>
        </motion.div>

        {/* Botón Volver */}
        <motion.div
            className="mt-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Link
            to="/projects"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-500 transition"
            >
            Volver a Proyectos
            </Link>
        </motion.div>
        </motion.div>
    );
};

export default DjangoAIProject;
