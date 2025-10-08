import ProjectCard from "../components/ProjectCard";
import NavigationButtons from "../components/NavigationButtons";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Sistema de pedidos para restaurante",
      description:
        "Aplicación en Java con Spring Boot que gestiona pedidos, usuarios y pagos.",
      image: "/images/project1.png",
      github: "https://github.com/andreszambrano/pedidos-restaurante",
    },
    {
      id: 2,
      title: "Sistema bibliográfico universitario",
      description:
        "Proyecto en Java con gestión de préstamos, revistas y trabajos de grado.",
      image: "/images/project2.png",
      github: "https://github.com/andreszambrano/sistema-biblioteca",
    },
    {
      id: 3,
      title: "Plataforma educativa universitaria",
      description:
        "Aplicación con Next.js y Spring Boot para la gestión de matrículas y paquetes educativos.",
      image: "/images/project3.png",
      github: "https://github.com/andreszambrano/plataforma-educativa",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-gray-800 text-white px-6 py-12">
      <h2 className="text-4xl font-bold mb-10 text-blue-400">Mis Proyectos</h2>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            github={project.github}
          />
        ))}
      </section>

      <NavigationButtons prev="/about" next="/" />
    </main>
  );
}
