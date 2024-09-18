// Handlers
import { Podcast } from "@/types/Podcast.type";
import MainHandlers from "../Main.handlers";

// Resolvers
import { getPodcastsResolver } from "@/resolvers/get-podcasts/getPodcasts.resolver";

jest.mock("@/resolvers/get-podcasts/getPodcasts.resolver");

describe("Views - Main - Handlers", () => {
    const props = {
        setPodcasts: jest.fn(),
        setAppLoading: jest.fn(),
        setSearch: jest.fn(),
    };
    const {
        handleSearch,
        handleGetPodcasts
    } = MainHandlers(props);

    it("should call setSearch when handleSearch is called", () => {
        const searchTerm = "test";
        handleSearch(searchTerm);
        expect(props.setSearch).toHaveBeenCalledWith(searchTerm);
    });

    it("should call getPodcastsResolver and update state when handleGetPodcasts is called", async () => {
        const mockPodcasts: Podcast[] = [
            {
                id: '1', name: 'Podcast 1',
                images: [],
                summary: "",
                price: {
                    amount: 0,
                    currency: ""
                },
                contentType: "",
                rights: "",
                title: "",
                link: "",
                artist: "",
                category: {
                    id: "",
                    term: "",
                    scheme: "",
                    label: ""
                },
                releaseDate: new Date("2024-01-01")
            },
            {
                id: '2', name: 'Podcast 2',
                images: [],
                summary: "",
                price: {
                    amount: 0,
                    currency: ""
                },
                contentType: "",
                rights: "",
                title: "",
                link: "",
                artist: "",
                category: {
                    id: "",
                    term: "",
                    scheme: "",
                    label: ""
                },
                releaseDate: new Date("2024-01-01")
            }
        ];
        (getPodcastsResolver as jest.MockedFunction<typeof getPodcastsResolver>).mockResolvedValue(mockPodcasts);

        await handleGetPodcasts();

        expect(getPodcastsResolver).toHaveBeenCalled();
        expect(props.setAppLoading).toHaveBeenCalledWith(true);
        expect(props.setPodcasts).toHaveBeenCalledWith(mockPodcasts);
        expect(props.setAppLoading).toHaveBeenCalledWith(false);
    });
});
