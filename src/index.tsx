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

// Components
import LayoutComponent from "./components/layout/Layout.component";

// Styles
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      {
        path: "/",
        element: <MainView />,
      },
      {
        path: "/podcast/:podcastId",
        element: <PodcastView />,
      },
      {
        path: "/podcast/:podcastId/episode/:episodeId",
        element: <EpisodeView />,
      },
    ],
  },
]);

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
