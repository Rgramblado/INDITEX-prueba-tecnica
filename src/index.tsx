/// <reference lib="dom" />
// Vendors
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Components
import App from "./App";

// Contexts
import { AppContextProvider } from "./contexts/app.context";

console.log("Modo:", process.env.NODE_ENV);
console.log("¿Es producción?", process.env.IS_PRODUCTION);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
