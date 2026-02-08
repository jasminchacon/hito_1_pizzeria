import { Link } from "react-router-dom";

const CardPizza = ({ id, name, price, ingredients = [], img }) => {
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

        {ingredients.length > 0 && (
          <p className="card-text">
            Ingredientes: {ingredients.join(", ")}
          </p>
        )}

        <p className="fw-bold">
          Precio: ${price.toLocaleString()}
        </p>

        <div className="d-flex justify-content-center gap-2">
          <Link to={`/pizza/${id}`} className="btn btn-outline-dark">
            Ver más
          </Link>

          <button className="btn btn-dark">
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardPizza;
