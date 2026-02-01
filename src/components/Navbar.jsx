import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const { total } = useContext(CartContext);
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex align-items-center gap-3">
        <span className="navbar-brand fw-bold mb-0">🍕 Pizzería Mamma Mia</span>

        <Link to="/" className="btn btn-outline-light">
          🍕 Home
        </Link>

        {token ? (
          <>
            <Link to="/profile" className="btn btn-outline-light">
              🔓 Profile
            </Link>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="btn btn-outline-light">
              🔐 Login
            </Link>
            <Link to="/register" className="btn btn-outline-light">
              🔐 Register
            </Link>
          </>
        )}
      </div>

      <Link
        to="/cart"
        className="btn fw-bold"
        style={{
          color: "#00e5ff",
          border: "1px solid #00e5ff",
          backgroundColor: "transparent",
          boxShadow: "0 0 4px rgba(0, 229, 255, 0.9)",
          padding: "6px 14px",
        }}
      >
        🛒 Total: ${total.toLocaleString()}
      </Link>
    </nav>
  );
};

export default Navbar;
