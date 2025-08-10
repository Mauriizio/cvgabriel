export const metadata = {
  title: "Aviso legal",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">Aviso legal</h1>
      <p className="mt-4 text-gray-700">
        Información del titular y responsabilidades del sitio. El texto completo se publicará en breve.
      </p>
      <p className="mt-4 text-sm text-gray-500">Última actualización: pendiente</p>
    </main>
  );
}
