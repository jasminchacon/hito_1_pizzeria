const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <div className="d-flex align-items-center gap-3">
        <span className="navbar-brand fw-bold mb-0">🍕 Pizzería Mamma Mia</span>

        <button className="btn btn-outline-light">🍕 Home</button>

        {token ? (
          <>
            <button className="btn btn-outline-light">🔓 Profile</button>
            <button className="btn btn-outline-light">🔒 Logout</button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">🔐 Login</button>
            <button className="btn btn-outline-light">🔐 Register</button>
          </>
        )}
      </div>

      <button
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
      </button>
    </nav>
  );
};

export default Navbar;
