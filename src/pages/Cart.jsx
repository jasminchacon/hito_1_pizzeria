import { useState } from "react";
import { pizzaCart } from "../pizzas";

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const increase = (id) => {
    setCart(
      cart.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
      )
    );
  };

  const decrease = (id) => {
    setCart(
      cart
        .map((pizza) =>
          pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
        )
        .filter((pizza) => pizza.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="container my-5">
      <h2>🛒 Carrito</h2>

      {cart.map((pizza) => (
        <div
          key={pizza.id}
          className="d-flex align-items-center justify-content-between mb-3"
        >
          <img src={pizza.img} alt={pizza.name} width="70" />
          <p className="m-0">{pizza.name}</p>
          <p className="m-0">${pizza.price}</p>

          <div>
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => decrease(pizza.id)}
            >
              -
            </button>

            <span className="mx-2">{pizza.count}</span>

            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => increase(pizza.id)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h4>Total: ${total}</h4>

      <button className="btn btn-dark mt-2">Pagar</button>
    </div>
  );
};

export default Cart;
