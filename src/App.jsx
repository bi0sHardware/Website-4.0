import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Members from "./pages/Members";
import Research from "./pages/Research";
import About from "./pages/About";
import Branding from "./pages/Branding";
import NotFound from "./pages/NotFound";
import Gallery from "./pages/Gallery";
import Join from "./pages/Join";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/members/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </>
  );
}

export default App;
