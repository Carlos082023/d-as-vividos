import { useState } from "react";

export default function App() {
  const [fecha, setFecha] = useState("");
  const [diasVividos, setDiasVividos] = useState(null);
  const [error, setError] = useState(""); // Estado para manejar errores
  const [animacion, setAnimacion] = useState(false); // Estado para manejar la animación

  const calcularDias = () => {
    if (!fecha) return;
    
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    
    // Validar que la fecha no sea mayor a la actual
    if (nacimiento > hoy) {
      setError("La fecha ingresada no puede ser mayor a la actual.");
      setDiasVividos(null);
      return;
    }

    setError(""); // Limpiar el error si la fecha es válida

    const diferencia = Math.floor((hoy - nacimiento) / (1000 * 60 * 60 * 24));
    setDiasVividos(diferencia);
    
    setAnimacion(true);
    setTimeout(() => {
      setAnimacion(false);
    }, 2500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
      <h1 className="text-2xl font-bold mb-3 text-center">
        <i className="fas fa-birthday-cake"></i> Calculadora de Días Vividos
      </h1>

      <div className="flex flex-col items-center">
        <input 
          type="date" 
          value={fecha} 
          onChange={(e) => setFecha(e.target.value)} 
          className="border p-2 rounded mb-3"
        />

        <button 
          onClick={calcularDias} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        ><i class="fas fa-gift"></i>
          Calcular
        </button>
      </div>

      {error && (
        <p className="mt-3 text-red-500 font-semibold">{error}</p>
      )}

      {diasVividos !== null && !error && (
        <p className={`mt-3 text-lg font-semibold text-center ${animacion ? "destello" : ""}`}>
          ¡Has vivido {diasVividos.toLocaleString()} días!
        </p>
      )}
    </div>
  );
}
