import Dishes from "./components/dishesComponents/Dishes";
import AllCategories from "./components/filter/AllCategories";
import Cart from "./components/cart/Cart";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="block">
        <AllCategories />
        <Cart />
      </div>
      <div className="block">
        <Dishes />
      </div>
    </div>
  );
}

export default App;
