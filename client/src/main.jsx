import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/parents/ConnexionParent";
import AccesInvite from "./pages/page_parents/AccesInvite";
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
    path: "acces-invite",
    element: <AccesInvite />,
  },
  {
    path: "/pro",
    // element: <InscriptionPro />, A remplacer par la page de connxion pro quand elle sera réalisée
    children: [
      {
        path: "/pro/inscription",
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
