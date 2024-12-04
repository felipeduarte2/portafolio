import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Carousel from "../../components/Carrusel";


const LaravelApp: React.FC = () => {

    const items = [
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_login.png",
            caption: "Pantalla de inicio de sesión: autenticación de usuarios.",
        },
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_admin_users.png",
            caption: "Panel del Administrador: Administración de usuarios.",
        },
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_admin_new_user.png",
            caption: "Panel del Administrador: Creación de nuevos usuarios.",
        },
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_coordi_list.png",
            caption: "Panel del Coordinador: Listado de pases de salida.",
        },
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_cordi.png",
            caption: "Panel del Coordinador: Administración de permisos.",
        },
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_docente_dashboard.png",
            caption: "Panel del Docente: Panel principal.",
        },
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_docente_solicitud_d.png",
            caption: "Panel del Docente: Solicitud de documentos.",
        },
        {
            src: "https://felipeduarte.neocities.org/imagenes/laravel/imagen_docente_solicitud_p.png",
            caption: "Panel del Docente: Solicitud de pases de salida.",
        },
    ];


    return (
        <div className="bg-gray-100 min-h-screen text-gray-800 py-8 px-4">
        <div className="max-w-5xl mx-auto">
            {/* Título */}
            <motion.h1
            className="text-4xl font-bold mb-6 text-blue-600"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            Administración de Días Económicos y Pases de Salida
            </motion.h1>

            {/* Contexto */}
            <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            >
            Proyecto desarrollado como parte de mi servicio social en el{" "}
            <strong>Instituto Tecnológico Superior del Sur del Estado de Yucatán (ITSSY)</strong>, 
            en el departamento de Ingeniería en Sistemas Computacionales.
            </motion.p>

            {/* Descripción */}
            <motion.h2
            className="text-2xl font-semibold mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            >
            Descripción del proyecto
            </motion.h2>
            <motion.p
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            >
            Es una aplicación web diseñada para gestionar solicitudes de permisos de 
            docentes de manera eficiente. Fue desarrollada utilizando{" "}
            <strong>Laravel</strong> y <strong>TailwindCSS</strong>, aprovechando herramientas clave 
            del framework para la autenticación, manejo de roles, ORM y envío de notificaciones por correo electrónico.
            </motion.p>

            {/* Funcionalidades */}
            <motion.h2
            className="text-2xl font-semibold mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            >
            Funcionalidades principales
            </motion.h2>
            <motion.ul
            className="list-disc ml-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            >
            <li><strong>Roles personalizados:</strong> Cuatro tipos de usuarios: Docente, Coordinador, Subdirector y Administrador.</li>
            <li><strong>Gestión de solicitudes:</strong> Los docentes pueden solicitar permisos para faltar o salir antes.</li>
            <li><strong>Notificaciones automáticas:</strong> Los coordinadores y subdirectores reciben alertas por correo electrónico para revisar solicitudes.</li>
            <li><strong>Gestión administrativa:</strong> Los administradores tienen control total sobre la creación, edición y eliminación de usuarios.</li>
            </motion.ul>

            {/* Tecnologías */}
            <motion.h2
            className="text-2xl font-semibold mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            >
            Tecnologías utilizadas
            </motion.h2>
            <motion.ul
            className="list-disc ml-6 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            >
            <li><strong>Laravel:</strong> Autenticación con Breeze, Eloquent ORM, y sistema de notificaciones por correo.</li>
            <li><strong>TailwindCSS:</strong> Para un diseño moderno y responsivo.</li>
            <li><strong>Base de datos relacional:</strong> Utilizada para gestionar roles, usuarios y solicitudes.</li>
            </motion.ul>

            {/* Aprendizajes */}
            <motion.h2
            className="text-2xl font-semibold mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            >
            Aprendizajes destacados
            </motion.h2>
            <motion.p
            className="mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.8, duration: 0.8 }}
            >
            Este proyecto me permitió profundizar en el uso de herramientas avanzadas de Laravel, 
            entender mejor la gestión de roles y permisos en aplicaciones web, y aprender sobre 
            el diseño centrado en la experiencia del usuario con TailwindCSS.
            </motion.p>

            {/* Carrusel de imágenes */}
            <div className="flex justify-center">
            <motion.div
            className="my-8 max-w-96"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            >
                <Carousel items={items} interval={7000} />
            </motion.div></div>

            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-center my-8"
            >
            <a
                href="https://github.com/felipeduarte2/economic_days_administration"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block  text-blue-600 hover:text-blue-800"
            >
                Ver Código en GitHub
            </a>
        </motion.div>
            

            {/* Botón */}
            <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
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

export default LaravelApp;
