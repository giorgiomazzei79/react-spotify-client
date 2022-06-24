import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./components/pages/home/Home";
import Details from "./components/pages/details/Details";
import Header from "./components/UI/organisms/header/Header";
import logo from "./assets/logo.svg";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header
      logo={logo}
      primaryText="TMDB client"
    />
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
