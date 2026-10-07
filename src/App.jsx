import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SignUp from "./pages/signup";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <h1>Assignment</h1>
        </header>
        <aside className="sidebar">
          
          <Link to="/"><button>Home</button></Link>

          <Link to="/about"><button>About</button></Link>

          <Link to="/contact"><button>Contact</button></Link>

          <Link to="/signup"><button>Sign Up</button></Link>
        </aside>

        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;