import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Home = React.lazy(() => import("./pages/Home"));
const About = React.lazy(() => import("./pages/About"));
const Project = React.lazy(() => import("./pages/Project"));
const Service = React.lazy(() => import("./pages/Service"));
import Loading from "./components/Loading";
import BackToTopButton from "./components/BackToTopButton";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation in milliseconds
      easing: "ease-in-out", // Easing function for animations
      once: true, // Whether animation should happen only once
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }, []);
  return (
    <>
      <div>
        <Router>
          <Header />
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/react-porfolio/" Component={Home} />
              <Route path="/react-porfolio/about" Component={About} />
              <Route path="/react-porfolio/project" Component={Project} />
              <Route path="/react-porfolio/service" Component={Service} />
            </Routes>
            <BackToTopButton />
            <Footer />
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
