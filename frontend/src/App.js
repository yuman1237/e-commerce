import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";
import Navbar from "./Components/NavBar";
import Backdrop from "./Components/Backdrop";
import SideDrawer from "./Components/SideDrawer";
import { useState } from "react";
function App() {
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
      {/* NavBar */}
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />

          <Route exact path="/cart" component={CartScreen} />
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
