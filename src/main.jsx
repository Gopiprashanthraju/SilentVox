import React, { useState, createContext, useEffect } from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import axios from "axios";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import Player from "./pages/Player.jsx";
import Home from "./pages/Home.jsx";
import Welcome from "./pages/Welcome.jsx";
import Auth from "./pages/Auth.jsx";
import ErrorPage from "./pages/Error.jsx";
import Myprofile from "./components/Profile.jsx";
import VideoContainer from "./components/Video.jsx";
import Comments from "./components/Comments.jsx";
import Frame from "./components/Frame.jsx";
import { VideoDeck } from "./components/VideoDeck.jsx";
import Upload from "./pages/Upload.jsx"; // Add this line
TimeAgo.addDefaultLocale(en);

export const store = createContext();

const App = () => {
  const [token, setToken] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Check if there's a token in localStorage
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      // If token exists, set it in the state

      setToken(storedToken);

      // Fetch user profile using the stored token
      axios
        .get("http://localhost:5000/Profile", {
          headers: {
            "x-token": storedToken,
          },
        })
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, []); // Empty dependency array to run the effect only once on component mount

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/upload",
      element: <Upload />,
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
      path: "frame",
      element: (
        <div>
          <Frame />
          <VideoDeck />
        </div>
      ),
    },
    {
      path: "Video",
      element: (
        <div>
          <VideoContainer />
          <Comments />
        </div>
      ),
    },
    {
      path: "Comments",
      element: <Comments />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);

  return (
    <React.StrictMode>
      <store.Provider value={[token, setToken, data]}>
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
