import React, { useState, createContext } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Player from "./pages/Player.jsx";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";
import Auth from "./pages/Auth.jsx";
import ErrorPage from "./pages/Error.jsx";
import Myprofile from "./components/Profile.jsx";

TimeAgo.addDefaultLocale(en);
export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);

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
      path: "Profile",
      element: <Myprofile />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <store.Provider value={[token, setToken]}>
        <RouterProvider router={router} />
      </store.Provider>
    </React.StrictMode>
  );
};

import "./main.css";

// Theme switcher logic
if (
  window?.matchMedia &&
  window?.matchMedia("(prefers-color-scheme: dark)").matches
)
  import("./dark.scss");
else import("./light.scss");

ReactDOM.render(<App />, document.getElementById("root"));
