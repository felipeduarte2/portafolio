import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="bg-slate-800 shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="container mx-auto flex justify-between items-center p-4">
            {/* Logotipo o nombre */}
            <Link to="/" className="text-2xl font-bold hover:text-gray-200">
            <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:text-gray-200">Felipe Duarte</span>
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
            className={`md:flex space-x-4 absolute md:static top-16 left-0 w-full md:w-auto  md:bg-transparent z-40 md:z-auto ${
                isMenuOpen ? "block" : "hidden"
            }`}
            >
            <li className="border-b md:border-none">
                <Link
                to="/"
                className="block py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
                >
                <span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:text-gray-200">
                Inicio
                </span>
                </Link>
            </li>
            <li className="border-b md:border-none">
                <Link
                to="/about"
                className="block py-2 px-4 hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
                ><span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:text-gray-200">
                Acerca de mí
                </span>
                </Link>
            </li>
            <li className="border-b md:border-none">
                <Link
                to="/projects"
                className="block py-2 px-4 hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
                ><span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:text-gray-200">
                Proyectos
                </span>
                </Link>
            </li>
            <li>
                <Link
                to="/contact"
                className="block py-2 px-4 hover:text-gray-200"
                onClick={() => setIsMenuOpen(false)}
                ><span className="relative bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold hover:text-gray-200">
                Contacto
                </span>
                </Link>
            </li>
            </ul>
        </nav>
        </header>
    );
};

export default Header;


