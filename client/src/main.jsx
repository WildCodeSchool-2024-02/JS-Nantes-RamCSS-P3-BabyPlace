import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/parents/ConnexionParent";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";
import ConnexionPro from "./pages/page_pro_connexion/ConnexionPro";
import AccesInvite from "./pages/page_parents/AccesInvite";

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
    // element: <InscriptionPro />, A remplacer par la page de connxion pro quand elle sera réalisée
    path: "pro",
    children: [
      {
        path: "inscription",
        element: <InscriptionPro />,
      },
      {
        path: "connexion",
        element: <ConnexionPro />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <NextUIProvider locale="fr-FR">
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
