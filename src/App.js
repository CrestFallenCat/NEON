import "./App.css";
import Landing from "./components/landing";
import Next from "./components/Next";
import Game from "./components/Game";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <Link to="/" style={{ textDecoration: "none" }}>
            {" "}
            Home
          </Link>
          <Link id="next" to={"/Next"}>
            What's Next
          </Link>
          <Link id="game" to={"/Game"}>
            The Game
          </Link>

          <Link id="comments" to={"/Comments"}>
            Talk
          </Link>
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
