import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import BrowserInfoPage from "./pages/BrowserInfoPage";
import ChuckNorrisPage from "./pages/ChuckNorrisPage";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <BrowserInfoPage /> },
      { path: "browser", element: <BrowserInfoPage /> },
      { path: "chuck", element: <ChuckNorrisPage /> },
      { path: "sobre", element: <AboutPage /> },
    ],
  },
]);

export default router;