import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import { HeaderPhone } from "./components/Header";

import Timeline from "./components/Timeline.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);
  useEffect(() => {
    const resizeRatio = () => {
      setRatio(window.innerWidth / window.innerHeight);
    };
    window.addEventListener("resize", resizeRatio);
    return () => {
      window.removeEventListener("resize", resizeRatio);
    };
  }, [ratio]);
  return ratio < 2 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (
    <em id="customMessage">Please Change the ratio to view !</em>
  );
}

export default App;
