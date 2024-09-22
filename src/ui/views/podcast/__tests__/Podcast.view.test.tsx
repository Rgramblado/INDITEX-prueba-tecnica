// Vendors
import React from "react";
import { render, screen } from "@testing-library/react";

// Views
import PodcastView from "../Podcast.view";
import { MemoryRouter } from "react-router-dom";

// Mocks
jest.mock("@/contexts/app.context", () => ({
  useAppContext: () => ({
    appLoading: false,
  }),
}));

jest.mock("../hooks/Podcast.hook", () => ({
  __esModule: true,
  default: () => ({
    podcast: {
      id: "1",
      name: "Podcast 1",
      description: "Description 1",
      imageUrl: "https://example.com/image.jpg",
      artistName: "Artist 1",
      episodes: [
        {
          id: "1",
          title: "Episode 1",
          description: "Description 1",
          audioUrl: "https://example.com/audio.mp3",
          releaseDate: "2021-01-01",
          durationInMilliseconds: 10 * 60 * 1000,
          shortDescription: "",
          imageUrl: "",
          episodeNumber: "",
        },
        {
          id: "2",
          title: "Episode 2",
          description: "Description 2",
          audioUrl: "https://example.com/audio2.mp3",
          releaseDate: "2021-01-02",
          durationInMilliseconds: 20 * 60 * 1000,
          shortDescription: "",
          imageUrl: "",
          episodeNumber: "",
        },
      ],
    },
  }),
}));

describe("Views - Podcast", () => {
  it("should render", () => {
    render(
      <MemoryRouter>
        <PodcastView />
      </MemoryRouter>
    );
    expect(screen.getByTestId("podcast-container")).toBeInTheDocument();
    expect(screen.getAllByTestId("podcast-card")).toHaveLength(2);
    expect(screen.getByTestId("podcast-episodes-table")).toBeInTheDocument();
    expect(screen.getAllByTestId("podcast-episode-row")).toHaveLength(2);
  });
});
