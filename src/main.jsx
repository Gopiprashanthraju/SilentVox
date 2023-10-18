import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Player from "./pages/Player.jsx";
import Home from "./pages/Home.jsx";
import Auth from "./pages/Auth.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/v/:videoId",
    element: <Player />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
]);
import "./main.css";
// theme switcher
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
)
  import("./dark.scss");
else import("./light.scss");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
