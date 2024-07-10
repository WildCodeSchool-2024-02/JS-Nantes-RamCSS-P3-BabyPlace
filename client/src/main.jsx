import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/page_parents/ConnexionParent";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";
import ConnexionPro from "./pages/page_pro/ConnexionPro";
import ReservationRequest from "./pages/page_reservation_parent/ReservationParent";
import ChildSelection from "./pages/page_reservation2_parent/ReservationParent2";
import ReservationConfirmation from "./pages/page_reservation_confirmation/ReservationConfirmation";
import AccesInvite from "./pages/page_parents/AccesInvite";
import Faq from "./pages/page_parents/Faq";
import Mentions from "./pages/page_parents/Mentions";
import DashboardPro from "./pages/page_pro/DashboardPro";

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
    path: "/acces-invite",
    element: <AccesInvite />,
  },
  {
    path: "/reservation",
    element: <ReservationRequest />,
  },
  {
    path: "/reservationdeux",
    element: <ChildSelection />,
  },
  {
    path: "/reservationconfirmation",
    element: <ReservationConfirmation />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/mentions-legales",
    element: <Mentions />,
  },
  {
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
      {
        path: "dashboard",
        element: <DashboardPro />,
      },
      {
        path: "modification-du-profil",
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
