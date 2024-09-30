import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import { Spinner } from "./ui/components/async-layout/AsyncLayout.styles";
import LayoutComponent from "./ui/components/layout/Layout.component";

// Views
const MainView = React.lazy(() => import("./ui/views/main/Main.view"));
const PodcastView = React.lazy(() => import("./ui/views/podcast/Podcast.view"));
const EpisodeView = React.lazy(() => import("./ui/views/episode/Episode.view"));

const router = createBrowserRouter([
    {
      path: "/",
      element: <LayoutComponent />,
      children: [
        {
          path: "/",
          element: (
            <React.Suspense fallback={<Spinner style={{ alignSelf: "flex-end" }}/>}>
              <MainView />
            </React.Suspense>
          ),
        },
        {
          path: "/podcast/:podcastId",
          element: (
            <React.Suspense fallback={<Spinner style={{ alignSelf: "flex-end" }}/>}>
              <PodcastView />
            </React.Suspense>
          ),
        },
        {
          path: "/podcast/:podcastId/episode/:episodeId",
          element: (
            <React.Suspense fallback={<Spinner style={{ alignSelf: "flex-end" }}/>}>
              <EpisodeView />
            </React.Suspense>
          ),
        },
      ],
    },
  ]);

export default router;