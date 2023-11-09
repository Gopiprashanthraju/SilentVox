import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import Player from "./pages/Player.jsx";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";
import Auth from "./pages/Auth.jsx";
import ErrorPage from "./pages/Error.jsx";
TimeAgo.addDefaultLocale(en)
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/v/:videoId",
    element: <Player />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
import "./main.css";
// theme switcher
if (
  window?.matchMedia &&
  window?.matchMedia("(prefers-color-scheme: dark)").matches
)
  import("./dark.scss");
else import("./light.scss");
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
