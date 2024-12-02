import { useParams } from "react-router-dom";

interface Project {
    id: string; // ID único del proyecto
    title: string;
    description: string;
    details: string; // Detalles adicionales
    image: string;
    }

    const projects: Project[] = [
    {
        id: "1",
        title: "Aplicación web para solicitudes de permisos",
        description:
        "Una app desarrollada en Laravel para que docentes soliciten permisos.",
        details:
        "Este proyecto utiliza Laravel como framework principal. Implementa autenticación, notificaciones en tiempo real usando Pusher, y una base de datos en MySQL.",
        image: "/path-to-project1-image.jpg",
    },
    {
        id: "2",
        title: "Conect@t - App de gestión de planes de internet",
        description:
        "Aplicación móvil creada para que usuarios gestionen sus planes de internet.",
        details:
        "La aplicación fue desarrollada en Flutter con conexión a una API REST. Incluye integración con notificaciones push y gestión de usuarios.",
        image: "/path-to-project2-image.jpg",
    },
    ];

    const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>(); // Obtenemos el parámetro ID desde la URL
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return <div className="text-center text-red-500">Proyecto no encontrado.</div>;
    }

    return (
        <section className="bg-gray-100 text-gray-800 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
            <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-600 mb-6">{project.description}</p>
            <p>{project.details}</p>
        </div>
        </section>
    );
};

export default ProjectDetail;
