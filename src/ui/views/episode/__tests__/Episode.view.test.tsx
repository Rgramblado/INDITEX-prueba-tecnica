// Vendors
import React from "react";
import { render, screen } from "@/utils/testing";

// Views
import EpisodeView from "../Episode.view";
import { MemoryRouter } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: jest.fn(() => ({
        podcastId: "1",
        episodeId: "1",
    })),
}));


describe("Views - Episode", () => {
    it("should render the episode view", () => {
        render(
            <MemoryRouter>
                <EpisodeView />
            </MemoryRouter>
        );
        expect(screen.getByTestId("podcast-details-card")).toBeInTheDocument();
        expect(screen.getByTestId("episode-details-card")).toBeInTheDocument();
        expect(screen.getByTestId("episode-title")).toBeInTheDocument();
        expect(screen.getByTestId("episode-description")).toBeInTheDocument();
        expect(screen.getByTestId("episode-audio")).toBeInTheDocument();
    });

});