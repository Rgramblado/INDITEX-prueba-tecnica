import React from "react";
import { render, screen } from "@testing-library/react";
import PodcastDetailsCardComponent from "../PodcastDetailsCard.component";
import { MemoryRouter } from 'react-router-dom';
import { IPodcast } from "@/domain/entities/Podcast";


const mockPodcastDetails: IPodcast = {
  id: "1",
  title: "Test Podcast",
  artist: "Test Artist",
  summary: "This is a test description",
  imageUrl: "https://test-image.jpg",
  episodes: [],
};

describe("Components - PodcastDetailsCard Component", () => {
  it("should render podcast details when provided", () => {
    render(
      <MemoryRouter>
        <PodcastDetailsCardComponent podcastDetails={mockPodcastDetails} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockPodcastDetails.title)).toBeInTheDocument();
    expect(screen.getByText(`by: ${mockPodcastDetails.artist}`)).toBeInTheDocument();
    expect(screen.getByText(mockPodcastDetails.summary)).toBeInTheDocument();
    expect(screen.getByAltText(mockPodcastDetails.title)).toHaveAttribute('src', mockPodcastDetails.imageUrl);
  });

  it("should render nothing when podcastDetails is null", () => {
    const { container } = render(<PodcastDetailsCardComponent podcastDetails={null} />);
    expect(container.firstChild).toBeNull();
  });
});
