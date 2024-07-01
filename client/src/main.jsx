import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/parents/ConnexionParent";
import Test from "./components/test";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";
import ConnexionPro from "./pages/page_pro_connexion/ConnexionPro";
import ReservationRequest from "./pages/page_reservation_parent/ReservationParent";
import ChildSelection from "./pages/page_reservation2_parent/ReservationParent2";
import ReservationConfirmation from "./pages/page_reservation_confirmation/ReservationConfirmation";

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
    path: "/test",
    element: <Test />,
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
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
