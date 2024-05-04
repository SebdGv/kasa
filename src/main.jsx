import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./pages/about";
import NotFound from "./pages/error";
import Home from "./pages/index";
import Logement from "./pages/logement";
import "./styles/main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/logement",
        element: <Logement />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

console.log(router);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
