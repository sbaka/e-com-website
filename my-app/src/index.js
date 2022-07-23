import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home_page";
import Login from "./pages/Login_page";
import Register from "./pages/Register_page";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

        </Routes>
    </BrowserRouter>

);
