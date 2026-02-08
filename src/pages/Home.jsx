import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import CardPizza from "../components/CardPizza";

export default function Home() {
  const { addToCart } = useContext(CartContext);

  const [pizzas] = useState([
    {
      id: "p001",
      name: "Pizza Margarita",
      img: "https://images.unsplash.com/1601924638867-3ec6b3c1cba7",
      price: 8990,
    },
    {
      id: "p002",
      name: "Pizza Pepperoni",
      img: "https://images.unsplash.com/1601924638930-e9cbd0e59b19",
      price: 9990,
    },
    {
      id: "p003",
      name: "Pizza Cuatro Quesos",
      img: "https://images.unsplash.com/1601924639101-0b1d7c1b1e5d",
      price: 10990,
    },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">🍕 Pizzería Mamma Mía</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            id={pizza.id}
            name={pizza.name}
            price={pizza.price}
            img={pizza.img}
            ingredients={[]}   
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}
