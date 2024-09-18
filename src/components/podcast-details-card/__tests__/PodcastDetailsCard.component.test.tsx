import React from "react";
import { render, screen } from "@testing-library/react";
import PodcastDetailsCardComponent from "../PodcastDetailsCard.component";
import { MemoryRouter } from 'react-router-dom';


const mockPodcastDetails = {
  id: "1",
  name: "Test Podcast",
  artistName: "Test Artist",
  description: "This is a test description",
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

    expect(screen.getByText(mockPodcastDetails.name)).toBeInTheDocument();
    expect(screen.getByText(`by: ${mockPodcastDetails.artistName}`)).toBeInTheDocument();
    expect(screen.getByText(mockPodcastDetails.description)).toBeInTheDocument();
    expect(screen.getByAltText(mockPodcastDetails.name)).toHaveAttribute('src', mockPodcastDetails.imageUrl);
  });

  it("should render nothing when podcastDetails is null", () => {
    const { container } = render(<PodcastDetailsCardComponent podcastDetails={null} />);
    expect(container.firstChild).toBeNull();
  });
});
