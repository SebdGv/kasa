import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "~react-pages";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/main.scss";

const router = createBrowserRouter(routes);

console.log(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
