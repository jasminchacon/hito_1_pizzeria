import { useEffect, useState } from "react";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const getPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
      } catch (error) {
        console.error("Error al cargar pizzas:", error);
      }
    };

    getPizzas();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🍕 Pizzería Mamma Mía</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="border rounded p-3">
            <img
              src={pizza.img}
              alt={pizza.name}
              className="w-full h-40 object-cover"
            />

            <h3 className="text-lg font-semibold mt-2">{pizza.name}</h3>

            <p className="font-bold">${pizza.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
