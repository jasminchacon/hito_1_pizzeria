import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    // Normalizamos el id (porque el dataset no siempre usa "id")
    const pizzaId = pizza.id || pizza._id || pizza.idPizza;

    const found = cart.find((item) => item.id === pizzaId);

    if (found) {
      setCart(
        cart.map((item) =>
          item.id === pizzaId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...pizza,
          id: pizzaId, // aseguramos que siempre exista id
          quantity: 1,
        },
      ]);
    }
  };

  const removeFromCart = (pizzaId) => {
    const found = cart.find((item) => item.id === pizzaId);

    if (!found) return;

    if (found.quantity === 1) {
      setCart(cart.filter((item) => item.id !== pizzaId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === pizzaId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
