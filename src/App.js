import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Mens from "./components/Mens";
import Womens from "./components/Womens";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Kids from "./components/Kids";
import Sale from "./components/Accessories";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cat/mens">
              <Mens />
            </Route>
            <Route path="/cat/womens">
              <Womens />
            </Route>
            <Route path="/cat/kids">
              <Kids />
            </Route>
            <Route path="/cat/accessories">
              <Sale />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
