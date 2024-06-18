import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/parents/ConnexionParent";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/connexion",
    element: <ConnexionParent />,
  },
  {
    path: "pro",
    element: <InscriptionPro />,
    children: [
      {
        path: "inscription",
        element: <InscriptionPro />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
