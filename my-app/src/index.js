import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home_page";
import Login from "./pages/Login_page";
import Register from "./pages/Register_page";
import Header from "./components/header";
import Card from "./components/card";
import Main from "./components/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Card" element={<Card />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Main" element={<Main />} />
    </Routes>
  </BrowserRouter>
);
