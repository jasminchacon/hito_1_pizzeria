import { useState } from "react";
import CardPizza from "../components/CardPizza";

export default function Home() {
  const [pizzas] = useState([
    {
      id: "p001",
      name: "Pizza Margarita",
      img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=600",
      price: 8990,
    },
    {
      id: "p002",
      name: "Pizza Pepperoni",
      img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600",
      price: 9990,
      },
      
    {
      id: "p003",
      name: "Pizza Cuatro Quesos",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600",
      price: 10990,
    },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        🍕 Pizzería Mamma Mía
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            ingredients={[]}
          />
        ))}
      </div>
    </div>
  );
}

