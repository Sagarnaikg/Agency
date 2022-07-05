import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// scss
import "./styles/App.scss";

// gsap
import gsap from "gsap";

// react components
import Header from "./components/header";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Approch from "./pages/approch";
import CaseStudies from "./pages/case_studies";
import Services from "./pages/services";
import Navigation from "./components/navigation";

const routes = [
  { path: "/animated-landing-page-React/", name: "home", Component: Home },
  { path: "/animated-landing-page-React/about", name: "about", Component: About },
  { path: "/animated-landing-page-React/approch", name: "approch", Component: Approch },
  { path: "/animated-landing-page-React/caseStudues", name: "caseStudues", Component: CaseStudies },
  { path: "/animated-landing-page-React/services", name: "services", Component: Services },
];

function App() {
  useEffect(() => {
    gsap.to("body", 0, { css: { visibility: "visible" } });

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <div>
      <Header />
      <div className="App">
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
      <Navigation />
    </div>
  );
}

export default App;
