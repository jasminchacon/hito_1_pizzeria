import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./views/Login";
import Cart from "./components/Cart";
import Home from "./views/Home";
//import Pizza from "./views/Pizza";

function App() {
  return (
    <>
      <Navbar />

      <Home />
      {/* <Login /> */}
      {/* <Cart /> */}
      {/* <Pizza /> */}

      <Footer />
    </>
  );
}

export default App;
