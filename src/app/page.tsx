export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-slate-900 to-gray-800 text-white">
      <h1 className="text-4xl font-bold mb-4">¡Hola! Soy Andrés Zambrano</h1>
      <p className="text-lg text-gray-300 mb-8">
        Desarrollador de software y estudiante de ingeniería.
      </p>

      <a
        href="/about"
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl transition-all"
      >
        Conóceme →
      </a>
    </main>
  );
}
