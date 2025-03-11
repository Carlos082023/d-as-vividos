import { useState } from "react";

export default function App() {
  const [fecha, setFecha] = useState("");
  const [diasVividos, setDiasVividos] = useState(null);
  const [animacion, setAnimacion] = useState(false); // Estado para manejar la animación

  const calcularDias = () => {
    if (!fecha) return;
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    const diferencia = Math.floor((hoy - nacimiento) / (1000 * 60 * 60 * 24));
    setDiasVividos(diferencia);
    setAnimacion(true); // Activar la animación cuando el resultado esté disponible
    setTimeout(() => {
      setAnimacion(false); // Desactivar la animación después de 1.5 segundos (duración de la animación)
    }, 1500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-3 text-center"><i class="fas fa-birthday-cake"></i>Calculadora de Días Vividos</h1>
      <div className="flex flex-col items-center">
        <input 
          type="date" 
          value={fecha} 
          onChange={(e) => setFecha(e.target.value)} 
          className="border p-2 rounded mb-3"
        />
        <button 
          onClick={calcularDias} 
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Calcular
        </button>
      </div>
      {diasVividos !== null && (
        <p className={`mt-3 text-lg font-semibold text-center ${animacion ? "destello" : ""}`}>
          ¡Has vivido {diasVividos.toLocaleString()} días!
        </p>
      )}
    </div>
  );
}
