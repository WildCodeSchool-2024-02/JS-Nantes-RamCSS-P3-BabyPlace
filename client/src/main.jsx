import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/page_parents/ConnexionParent";
import ReservationStatus from "./pages/page_parents/ReservationStatus";
import OptionMenuParent from "./pages/page_parents/OptionMenuParent";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";
import ConnexionPro from "./pages/page_pro/ConnexionPro";
import AccesInvite from "./pages/page_parents/AccesInvite";
import HomeSearch from "./pages/page_parents/HomeSearch";
import DossierParent from "./pages/page_parents/DossierParent";
import Faq from "./pages/page_parents/Faq";
import Mentions from "./pages/page_parents/Mentions";
import DashboardPro from "./pages/page_pro/DashboardPro";
import LayoutPro from "./pages/page_pro/LayoutPro";
import ReservationConfirmation from "./pages/page_parents/ReservationConfirmation";
import ReservationRequest from "./pages/page_parents/ReservationParent";
import ChildSelection from "./pages/page_parents/ReservationParent2";

import { AuthProvider } from "./contexts/AuthContext";
import { NurseryLoggedContextProvider } from "./contexts/NurseryDataContext";
import ProtectedRoutePro from "./contexts/ProtectedRoutePro";
import ProtectedRouteParent from "./contexts/ProtectedRouteParent";

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
    path: "/recherche",
    element: <HomeSearch />,
    loader: () => fetch("http://localhost:3310/api/nurseries"),
  },
  {
    path: "/dossier-parent",
    element: (
      <ProtectedRouteParent>
        <DossierParent />
      </ProtectedRouteParent>
    ),
  },
  {
    path: "/menu",
    element: <OptionMenuParent />,
  },
  {
    path: "/reservation-status",
    element: (
      <ProtectedRouteParent>
        <ReservationStatus />,
      </ProtectedRouteParent>
    ),

    loader: () => fetch(`${import.meta.env.VITE_API_URL}/api/reservations`),
  },
  {
    path: "/reservation",
    element: (
      <ProtectedRouteParent>
        <ReservationRequest />
      </ProtectedRouteParent>
    ),
  },
  {
    path: "/reservationdeux",
    element: (
      <ProtectedRouteParent>
        <ChildSelection />,
      </ProtectedRouteParent>
    ),
  },
  {
    path: "/reservationconfirmation",
    element: (
      <ProtectedRouteParent>
        <ReservationConfirmation />
      </ProtectedRouteParent>
    ),
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
    <AuthProvider>
      <NurseryLoggedContextProvider>
        <NextUIProvider locale="fr-FR">
          <RouterProvider router={router} />
        </NextUIProvider>
      </NurseryLoggedContextProvider>
    </AuthProvider>
  </React.StrictMode>
);
