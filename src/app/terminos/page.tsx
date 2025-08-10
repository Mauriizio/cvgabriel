export const metadata = {
  title: "Términos y condiciones",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Términos y condiciones</h1>
      <p className="mt-4 text-gray-700">
        Condiciones de uso del sitio y de los servicios ofrecidos. El contenido definitivo será incorporado
        cuando esté aprobado por el responsable del sitio.
      </p>
      <p className="mt-4 text-sm text-gray-500">Última actualización: pendiente</p>
    </main>
  );
}
