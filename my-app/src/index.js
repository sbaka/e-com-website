import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.css"


import Home from "./pages/Home_page";
import Login from "./pages/Login_page";
import Register from "./pages/Register_page";
import Cart from "./pages/Cart_page";
import Product from "./pages/Product_page";
import Loader from "./components/Loader"
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/ProductInfo" element={<Product />} />
      <Route path="/loader" element={<Loader />} />
    </Routes>
  </BrowserRouter>
);
