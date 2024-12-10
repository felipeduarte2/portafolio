import { motion } from "framer-motion";
import { FaEnvelope, FaWhatsapp,  } from "react-icons/fa";

const Contact: React.FC = () => {
    return (
        <div className="relative bg-slate-800 min-h-screen flex items-center justify-center py-12 px-6 overflow-hidden">
        {/* Decoraciones */}
        <div className="absolute inset-0 overflow-hidden">
            <motion.div
            className="absolute top-10 left-10 w-32 h-32 bg-white opacity-20 rounded-full blur-lg"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
            }}
            />
            <motion.div
            className="absolute bottom-10 right-20 w-40 h-40 bg-white opacity-30 rounded-full blur-2xl"
            animate={{ scale: [1, 1.5, 1] }}
            transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "mirror",
            }}
            />
        </div>

        {/* Contenido */}
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white shadow-lg rounded-lg max-w-4xl w-full p-8 relative z-10"
        >
            {/* Título */}
            <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl font-extrabold text-center text-gray-800 mb-6"
            >
            Contáctame
            </motion.h1>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-center text-gray-600 mb-8 text-lg"
            >
            ¿Tienes alguna idea o propuesta? Usa los
            medios de contacto a continuación.
            </motion.p>

            {/* Formulario */}

            {/* Información adicional */}
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-center mt-8 space-y-4"
            >
            <p className="text-gray-600">
                <FaEnvelope className="inline-block mr-2 text-blue-600" />
                Escríbeme a:
                <a
                href="mailto:fduartecastillo2@gmail.com"
                className="text-blue-600 hover:underline ml-1"
                >
                fduartecastillo2@gmail.com
                </a>
            </p>
            <p className="text-gray-600">
                <FaWhatsapp className="inline-block mr-2 text-blue-600" />
                Whatsapp: 
                <a
                href="https://api.whatsapp.com/send?phone=+529971517051"
                className="text-blue-600 hover:underline ml-1"
                >
                +52 997 151 7051
                </a>
                </p>
            </motion.div>
        </motion.div>
        </div>
    );
};



export default Contact;
