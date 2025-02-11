import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
// CSS
import "./App.css";
// Components
import Header from "./components/Common_components/Header";

// Pages
import Home from "./pages/Home";
import ProgrammerThroughts from "./pages/Thoughts.jsx";
import Contact from "./pages/Contact.jsx";
import NoPage from "./pages/Error.jsx";
import ScrollToTop from "./components/Common_components/scrollToTop.jsx";

function App() {
//   useEffect(() => {
//     const disableRightClick = (event) => event.preventDefault();
//     document.addEventListener("contextmenu", disableRightClick);

//     return () => {
//       document.removeEventListener("contextmenu", disableRightClick);
//     };
//   }, []);

  return (
    <BrowserRouter>
      <div className="Default_navbar">
        <Header />
      </div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Programmer_throughts" element={<ProgrammerThroughts />} />
        <Route path="/connect" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <ScrollToTop/>
    </BrowserRouter>
  );
}

export default App;
