// Resolvers
import { getPodcastsResolver } from "../getPodcasts.resolver";

// Services
import { getPodcasts } from "@/services/get-podcasts/GetPodcasts.service";

// Utils
import {
  saveOnLocalStorage,
  getFromLocalStorage,
} from "@/utils/cache/cache.utils";

// Mocks
import { getPodcastsMock } from "@/__mocks__/GetPodcasts.mock";

// Mock de las dependencias
jest.mock("@/services/get-podcasts/GetPodcasts.service");
jest.mock("@/utils/cache/cache.utils");

describe("Resolvers - Get Podcasts - getPodcasts resolver", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return cached podcasts if available", async () => {
    const cachedPodcasts = [...getPodcastsMock.feed.entry];
    (getFromLocalStorage as jest.Mock).mockReturnValue(cachedPodcasts);

    const result = await getPodcastsResolver();

    expect(getFromLocalStorage).toHaveBeenCalledWith(
      "podcasts",
      expect.any(Number)
    );
    expect(getPodcasts).not.toHaveBeenCalled();
    expect(result).toEqual(cachedPodcasts);
  });

  it("should fetch and cache podcasts if not in cache", async () => {
    const fetchedPodcasts = [...getPodcastsMock.feed.entry];
    (getFromLocalStorage as jest.Mock).mockReturnValue(null);
    (getPodcasts as jest.Mock).mockResolvedValue(fetchedPodcasts);

    const result = await getPodcastsResolver();

    expect(getFromLocalStorage).toHaveBeenCalledWith(
      "podcasts",
      expect.any(Number)
    );
    expect(getPodcasts).toHaveBeenCalled();
    expect(saveOnLocalStorage).toHaveBeenCalledWith(
      "podcasts",
      fetchedPodcasts,
      expect.any(Number)
    );
    expect(result).toEqual(fetchedPodcasts);
  });

  it("should handle errors and return an empty array", async () => {
    (getFromLocalStorage as jest.Mock).mockReturnValue(null);
    (getPodcasts as jest.Mock).mockRejectedValue(new Error("Error de red"));

    const result = await getPodcastsResolver();

    expect(getFromLocalStorage).toHaveBeenCalledWith(
      "podcasts",
      expect.any(Number)
    );
    expect(getPodcasts).toHaveBeenCalled();
    expect(result).toEqual([]);
  });
});
