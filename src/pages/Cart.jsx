import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);

  return (
    <div className="container my-5">
      <h2>🛒 Carrito</h2>

      {cart.length === 0 && <p>Tu carrito está vacío 🍕</p>}

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
              onClick={() => removeFromCart(pizza.id)}
            >
              -
            </button>

            <span className="mx-2">{pizza.quantity}</span>

            <button
              className="btn btn-outline-success btn-sm"
              onClick={() => addToCart(pizza)}
            >
              +
            </button>
          </div>
        </div>
      ))}

      <hr />

      <h4>Total: ${total.toLocaleString()}</h4>

      <button className="btn btn-dark mt-2" disabled={cart.length === 0}>
        Pagar
      </button>
    </div>
  );
};

export default Cart;
