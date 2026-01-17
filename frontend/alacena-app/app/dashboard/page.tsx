export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="mt-12 bg-white rounded-lg p-8 shadow">
        <h2 className="text-2xl font-bold mb-4">Bienvenido a ALACENA</h2>
        <p className="text-gray-600 mb-4">
          Este es tu panel de control para gestionar el inventario, reservas y menú de tu cocina.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          <li>📦 <strong>Reservas:</strong> Registra el stock de cada item</li>
          <li>🥘 <strong>Items:</strong> Define ingredientes y recetas</li>
          <li>📍 <strong>Ubicaciones:</strong> Organiza tu freezer por espacios</li>
          <li>🍽️ <strong>Menú:</strong> Crea el menú público dinámico</li>
        </ul>
      </div>
    </div>
  )
}
