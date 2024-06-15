import React from "react";
import { Navigation } from "./components/navigation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Home from "./components/Home";
import Contact from "./components/contact";
import "./App.css";
import Login from "./components/login";

const App = () => {
  

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
