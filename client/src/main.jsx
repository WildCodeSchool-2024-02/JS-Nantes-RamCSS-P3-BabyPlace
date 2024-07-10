import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/page_parents/ConnexionParent";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";
import ConnexionPro from "./pages/page_pro/ConnexionPro";
import AccesInvite from "./pages/page_parents/AccesInvite";
import Faq from "./pages/page_parents/Faq";
import Mentions from "./pages/page_parents/Mentions";
import DashboardPro from "./pages/page_pro/DashboardPro";
import LayoutPro from "./pages/page_pro/LayoutPro";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "connexion",
    element: <ConnexionParent />,
  },
  {
    path: "acces-invite",
    element: <AccesInvite />,
  },
  {
    path: "faq",
    element: <Faq />,
  },
  {
    path: "mentions-legales",
    element: <Mentions />,
  },
  {
    path: "/pro",
    element: <LayoutPro />,
    children: [
      {
        path: "/pro/inscription",
        element: <InscriptionPro />,
      },
      {
        path: "/pro/connexion",
        element: <ConnexionPro />,
      },
      {
        path: "/pro/dashboard",
        element: <DashboardPro />,
      },
      {
        path: "/pro/modification-du-profil",
        element: <InscriptionPro />,
      },
      // {
      //   path: "reservations",
      //   element: <ReservationsPro />,
      // },
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
