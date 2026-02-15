import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Cart = () => {
  const { cart, addToCart, removeFromCart, total } = useContext(CartContext);
  const { token } = useContext(UserContext);

  const [mensaje, setMensaje] = useState("");

  const handleCheckout = async () => {
    if (!token) {
      setMensaje("Debes iniciar sesión para comprar");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (res.ok) {
        setMensaje("Compra realizada con éxito 🎉");
      } else {
        setMensaje("Error al procesar la compra");
      }
    } catch (error) {
      console.error(error);
      setMensaje("Error de conexión con el servidor");
    }
  };

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

      <button
        className="btn btn-dark mt-2"
        disabled={cart.length === 0}
        onClick={handleCheckout}
      >
        Pagar
      </button>

      {mensaje && (
        <p className="mt-3 fw-bold text-success">{mensaje}</p>
      )}
    </div>
  );
};

export default Cart;
