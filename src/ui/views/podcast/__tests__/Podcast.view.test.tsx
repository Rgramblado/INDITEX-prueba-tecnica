// Vendors
import React from "react";
import { render, screen } from "@/utils/testing";

// Views
import PodcastView from "../Podcast.view";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn(() => ({
    podcastId: "1",
  })),
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
    expect(screen.getAllByTestId("podcast-episode-row")).toHaveLength(1);
  });
});
