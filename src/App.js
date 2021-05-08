import { Route } from "react-router-dom";

import Welcome from "./Pages/Welcome";
import Products from "./Pages/Products";
import MainHeader from "./Components/Mainheader";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
