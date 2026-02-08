import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pizza = () => {
  const { id } = useParams(); 
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getPizza = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/pizzas/${id}`
        );
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error al cargar la pizza:", error);
      }
    };

    getPizza();
  }, [id]); 

  if (!pizza) return <p className="p-4">Cargando pizza... 🍕</p>;

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img
        src={pizza.img}
        alt={pizza.name}
        className="w-full h-80 object-cover rounded"
      />

      <h2 className="text-3xl font-bold mt-4">{pizza.name}</h2>

      <p className="mt-2 text-gray-600">{pizza.desc}</p>

      <h4 className="font-semibold mt-4">Ingredientes:</h4>
      <ul className="list-disc list-inside">
        {pizza.ingredients.map((ing, index) => (
          <li key={index}>{ing}</li>
        ))}
      </ul>

      <p className="text-xl font-bold mt-4">${pizza.price}</p>

      <button className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
