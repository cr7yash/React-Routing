import { Route, Switch } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./Components/Mainheader";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
