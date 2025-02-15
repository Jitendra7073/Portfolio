import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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

import AdminLogin from "./components/admin/AdminLogin.jsx";
import AdminMessages from "./components/admin/AdminMessages.jsx";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleSetToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
    }
  };

  // Auto logout if token expires
  useEffect(() => {
    if (!token) return;

    const tokenPayload = JSON.parse(atob(token.split(".")[1])); // Decode JWT
    const expiryTime = tokenPayload.exp * 1000; // Convert to milliseconds

    const timeout = setTimeout(() => {
      handleSetToken(""); // Clear token when expired
      alert("Session expired, please login again");
    }, expiryTime - Date.now());

    return () => clearTimeout(timeout);
  }, [token]);

  // Disable right-click
  // useEffect(() => {
  //   const disableRightClick = (event) => event.preventDefault();
  //   document.addEventListener("contextmenu", disableRightClick);
  //   return () => {
  //     document.removeEventListener("contextmenu", disableRightClick);
  //   };
  // }, []);

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
        <Route
          path="/admin/login"
          element={<AdminLogin setToken={handleSetToken} />}
        />
        <Route
          path="/admin/messages"
          element={<AdminMessages token={token} setToken={handleSetToken} />}
        />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
