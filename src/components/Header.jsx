const Header = () => {
  return (
    <header
      style={{
        backgroundImage: "url('/header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0,0,0,0.7)",
      }}
    >
      <h1>Pizzería Mamma Mia</h1>
      <p>¡La mejor pizza de la ciudad!</p>
    </header>
  );
};

export default Header;
