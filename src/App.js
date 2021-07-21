import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <header class="App__header">
        <nav class="App__navigation">
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">Contact</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </main>
      <footer>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">Contact</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </footer>
    </div>
  );
}

export default App;
