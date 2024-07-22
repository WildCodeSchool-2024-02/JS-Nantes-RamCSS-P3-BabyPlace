import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/page_parents/ConnexionParent";
import ReservationStatus from "./pages/page_parents/ReservationStatus";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";
import ConnexionPro from "./pages/page_pro/ConnexionPro";
import ReservationRequest from "./pages/page_reservation_parent/ReservationParent";
import ChildSelection from "./pages/page_reservation2_parent/ReservationParent2";
import ReservationConfirmation from "./pages/page_reservation_confirmation/ReservationConfirmation";
import AccesInvite from "./pages/page_parents/AccesInvite";
import HomeSearch from "./pages/page_parents/HomeSearch";
import DossierParent from "./pages/page_parents/DossierParent";
import Faq from "./pages/page_parents/Faq";
import Mentions from "./pages/page_parents/Mentions";
import DashboardPro from "./pages/page_pro/DashboardPro";
import LayoutPro from "./pages/page_pro/LayoutPro";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoutePro from "./contexts/ProtectedRoutePro";

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
    path: "/recherche",
    element: <HomeSearch />,
  },
  {
    path: "/dossier-parent",
    element: <DossierParent />,
  },
  {
    path: "/reservation-status",
    element: <ReservationStatus />,
  },
  {
    path: "reservation",
    element: <ReservationRequest />,
  },
  {
    path: "reservationdeux",
    element: <ChildSelection />,
  },
  {
    path: "reservationconfirmation",
    element: <ReservationConfirmation />,
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
        path: "/pro/connexion",
        element: <ConnexionPro />,
      },
      {
        path: "/pro/inscription",
        element: (
          <ProtectedRoutePro>
            <InscriptionPro />
          </ProtectedRoutePro>
        ),
      },
      {
        path: "/pro/dashboard",
        element: (
          <ProtectedRoutePro>
            <DashboardPro />
          </ProtectedRoutePro>
        ),
      },
      {
        path: "/pro/modification-du-profil",
        element: (
          <ProtectedRoutePro>
            <InscriptionPro />
          </ProtectedRoutePro>
        ),
      },
      // {
      //   path: "reservations",
      //   element:
      //     <ProtectedRoutePro>
      //       <ReservationsPro />
      //     </ProtectedRoutePro>,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthProvider isSignedIn={false}>
      <NextUIProvider locale="fr-FR">
        <RouterProvider router={router} />
      </NextUIProvider>
    </AuthProvider>
  </React.StrictMode>
);
