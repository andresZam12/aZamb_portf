import NavigationButtons from "../components/NavigationButtons";

export default function AboutPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-gray-900 to-slate-800 text-white px-6">
      {/* Sección principal */}
      <section className="max-w-3xl text-center space-y-6">
        <h2 className="text-4xl font-bold text-blue-400">Sobre mí</h2>

        <p className="text-lg text-gray-300 leading-relaxed">
          Soy <span className="font-semibold text-white">Andrés Zambrano</span>,
          un desarrollador de software apasionado por la creación de interfaces
          limpias, intuitivas y funcionales. Actualmente estudio Ingeniería de
          Software y disfruto construyendo proyectos que combinan diseño y
          tecnología.
        </p>

        <p className="text-gray-400">
          Me especializo en tecnologías como{" "}
          <span className="font-medium text-blue-300">Java, Spring Boot,</span>{" "}
          y frameworks modernos de frontend como{" "}
          <span className="font-medium text-blue-300">Next.js y React.</span>
        </p>
      </section>

      {/* Botones de navegación */}
      <NavigationButtons prev="/" next="/projects" />
    </main>
  );
}
