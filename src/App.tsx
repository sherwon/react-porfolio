import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Service from "./pages/Service";

import "./App.css";
function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/project" Component={Project} />
            <Route path="/service" Component={Service} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
