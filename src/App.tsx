import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import LaravelApp from "./pages/projects/LaravelApp";
import ConectatApp from "./pages/projects/ConectatApp";
import Portfolio from "./pages/projects/Portfolio";
import DjangoAIProject from "./pages/projects/DjangoAIProject";

function App(): JSX.Element {
  return (
    <Router>
      {/* Encabezado fijo */}
      <Header />

      {/* Contenido de las rutas */}
      <main className="pt-16"> {/* Agrega padding-top para evitar que el Header tape el contenido */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portafolio" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/laravel-app" element={<LaravelApp />} />
          <Route path="/projects/conectat-app" element={<ConectatApp />} />
          <Route path="/projects/portafolio" element={<Portfolio />} />
          <Route path="/projects/django-ai-project" element={<DjangoAIProject />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;


