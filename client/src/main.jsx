import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/system";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ConnexionParent from "./pages/page_parents/ConnexionParent";
import Test from "./components/test";
import InscriptionPro from "./pages/pages_pro-inscription/InscriptionPro";
import ConnexionPro from "./pages/page_pro_connexion/ConnexionPro";

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
