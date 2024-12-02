import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
            {/* Logotipo o nombre */}
            <Link to="/" className="text-2xl font-bold hover:text-gray-200">
            Felipe Duarte
            </Link>

            {/* Botón del menú hamburguesa */}
            <button title="Menu"
                className="md:hidden text-white focus:outline-none"
                onClick={toggleMenu}
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
            </button>

            {/* Enlaces de navegación */}
            <ul
            className={`md:flex space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent z-40 md:z-auto ${
                isMenuOpen ? "block" : "hidden"
            }`}
            >
            <li className="border-b md:border-none">
                <Link
                to="/"
                className="block py-2 px-4 hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
                >
                Inicio
                </Link>
            </li>
            <li className="border-b md:border-none">
                <Link
                to="/about"
                className="block py-2 px-4 hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
                >
                Acerca de mí
                </Link>
            </li>
            <li className="border-b md:border-none">
                <Link
                to="/projects"
                className="block py-2 px-4 hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
                >
                Proyectos
                </Link>
            </li>
            <li>
                <Link
                to="/contact"
                className="block py-2 px-4 hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
                >
                Contacto
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;


