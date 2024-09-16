/// <reference lib="dom" />
// Vendors
import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Contexts
import { AppContextProvider } from "./contexts/app.context";

// Views
import MainView from "./views/main/Main.view";
import PodcastView from "./views/podcast/Podcast.view";
import EpisodeView from "./views/episode/Episode.view";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainView />,
    },
    {
        path: "/podcast/:id",
        element: <PodcastView />,
    },
    {
        path: "/podcast/:id/episode/:episodeId",
        element: <EpisodeView />,
    },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
