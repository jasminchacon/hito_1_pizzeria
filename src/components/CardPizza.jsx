const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card h-100 text-center shadow">
      <img
        src={img}
        alt={name}
        className="card-img-top"
        style={{
          height: "220px",
          width: "100%",
          objectFit: "cover",
        }}
      />

      <div className="card-body">
        <h5 className="card-title fw-bold">{name}</h5>

        <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>

        <p className="fw-bold">Precio: ${price.toLocaleString()}</p>

        <div className="d-flex justify-content-center gap-2">
          <button
            className="btn"
            style={{
              border: "1px solid black",
              backgroundColor: "transparent",
              color: "black",
            }}
          >
            Ver más
          </button>

          <button
            className="btn"
            style={{
              backgroundColor: "black",
              color: "white",
            }}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
