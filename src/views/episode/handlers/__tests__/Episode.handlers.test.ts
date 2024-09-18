// Handlers
import EpisodeHandlers from "../Episode.handlers";

// Resolvers
import { getPodcastDetailsResolver } from "@/resolvers/get-podcast-details/getPodcastDetails.resolver";

jest.mock("@/resolvers/get-podcast-details/getPodcastDetails.resolver");

describe("Views - Episode - Handlers", () => {
    const props = {
        podcastId: "1",
        episodeId: "1",
        setAppLoading: jest.fn(),
        setEpisode: jest.fn(),
        setPodcast: jest.fn(),
    };
    const {
        handleGetEpisodeDetails
    } = EpisodeHandlers(props);


    it("should call getPodcastDetailsResolver", async () => {
        const podcastDetails = {
            id: '1',
            name: 'Podcast de prueba',
            description: 'Descripción del podcast de prueba',
            artistName: 'Autor de prueba',
            imageUrl: 'https://ejemplo.com/imagen.jpg',
            episodes: []
        };
        (getPodcastDetailsResolver as jest.MockedFunction<typeof getPodcastDetailsResolver>).mockResolvedValue(podcastDetails);

        await handleGetEpisodeDetails();

        expect(getPodcastDetailsResolver).toHaveBeenCalledWith(props.podcastId);
        expect(props.setAppLoading).toHaveBeenCalledWith(true);
        expect(props.setPodcast).toHaveBeenCalledWith(podcastDetails);
        expect(props.setEpisode).toHaveBeenCalledWith(undefined);
        expect(props.setAppLoading).toHaveBeenCalledWith(false);

    });

});
