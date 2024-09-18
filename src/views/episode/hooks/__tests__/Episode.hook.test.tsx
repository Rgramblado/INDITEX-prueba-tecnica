// Vendors
import { renderHook } from "@testing-library/react";

// Hooks
import useEpisode from "../Episode.hook";

// Handlers
import EpisodeHandlers from "../../handlers/Episode.handlers";

jest.mock("react-router-dom", () => ({
    useParams: jest.fn().mockReturnValue({
        podcastId: "1",
        episodeId: "1"
    })
}));

jest.mock("@/contexts/app.context", () => ({
    useAppContext: jest.fn().mockReturnValue({
        setAppLoading: jest.fn()
    })
}));

jest.mock("../../handlers/Episode.handlers");

describe("Views - Episode - Hooks", () => {
    it("should return the episode and podcast", () => {
        (EpisodeHandlers as jest.Mock).mockReturnValue({
            handleGetEpisodeDetails: jest.fn()
        });
        const { result } = renderHook(useEpisode);
        expect(result.current.episode).toBeDefined();
        expect(result.current.podcast).toBeDefined();
    });

    it("should call handleGetEpisodeDetails on mount", () => {
        const mockHandleGetEpisodeDetails = jest.fn();
        (EpisodeHandlers as jest.Mock).mockReturnValue({
            handleGetEpisodeDetails: mockHandleGetEpisodeDetails
        });

        renderHook(useEpisode);
        expect(mockHandleGetEpisodeDetails).toHaveBeenCalled();
    });
});