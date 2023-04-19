import "./App.css";
import Landing from "./components/landing";
import Next from "./components/Next";
import Game from "./components/Game";
import Comments from "./components/Comments";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            {" "}
            Home
          </NavLink>
          <NavLink id="next" to={"/Next"}>
            What's Next
          </NavLink>
          <NavLink id="game" to={"/Game"}>
            The Game
          </NavLink>

          <NavLink id="comments" to={"/Comments"}>
            Talk
          </NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Next" element={<Next />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/Comments" element={<Comments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
