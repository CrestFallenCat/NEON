// import "./App.css";
import Landing from "./components/landing";
import Next from "./components/Next";
import Game from "./components/Game";
import Comments from "./components/Comments";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/"> Home</Link>
          <Link to={"/Next"}>What's Next</Link>
          <Link to={"/Game"}>Play The Game</Link>
          <Link to={"/Comments"}>What You Thinking?</Link>
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
