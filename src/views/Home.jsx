import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container-fluid my-5">
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <CardPizza
              name="Napolitana"
              price={5950}
              ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
              img="/pizzas/napolitana.jpg"
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              name="Española"
              price={6950}
              ingredients={[
                "mozzarella",
                "gorgonzola",
                "parmesano",
                "provolone",
              ]}
              img="/pizzas/espanola.jpg"
            />
          </div>

          <div className="col-md-4">
            <CardPizza
              name="Pepperoni"
              price={6950}
              ingredients={["mozzarella", "pepperoni", "orégano"]}
              img="/pizzas/peperoni.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
