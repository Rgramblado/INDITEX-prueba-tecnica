// Vendors
import React from "react";
import { render, screen } from "@testing-library/react";

// Views
import EpisodeView from "../Episode.view";

const mockEpisode = {
    id: "1",
    title: "Episode 1",
    description: "Description 1",
    audioUrl: "https://example.com/audio.mp3",
    date: "2021-01-01",
    duration: "10:00",
};

const mockPodcast = {
    id: "1",
    title: "Podcast 1",
    description: "Description 1",
    imageUrl: "https://example.com/image.jpg",
    audioUrl: "https://example.com/audio.mp3",
    date: "2021-01-01",
    duration: "10:00",
};

jest.mock("@/components/podcast-details-card/PodcastDetailsCard.component", () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="podcast-details-card">Podcast Details Card</div>)
}));

jest.mock("../hooks/Episode.hook", () => ({
    __esModule: true,
    default: jest.fn(() => ({
        podcast: mockPodcast,
        episode: mockEpisode,
    }))
}));

describe("Views - Episode", () => {
    it("should render the episode view", () => {
        render(<EpisodeView />);
        expect(screen.getByTestId("podcast-details-card")).toBeInTheDocument();
        expect(screen.getByTestId("episode-details-card")).toBeInTheDocument();
        expect(screen.getByTestId("episode-title")).toBeInTheDocument();
        expect(screen.getByTestId("episode-description")).toBeInTheDocument();
        expect(screen.getByTestId("episode-audio")).toBeInTheDocument();
    });

});