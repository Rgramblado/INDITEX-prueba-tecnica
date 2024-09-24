// Repository

import { apiPodcastMock } from "@/__mocks__/ApiPodcast";
import PodcastRepository from "../PodcastRepository";

// Mocks
import { podcastSummaryStateMock } from "@/__mocks__/PodcastSummaryState";
import podcastMapper from "@/infrastructure/mappers/PodcastMapper";

describe("Infrastructure - Repositories - PodcastRepository", () => {
  const { getPodcast } = PodcastRepository;

  it("should return a podcast", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({contents: JSON.stringify(apiPodcastMock)}),
    } as unknown as Response);
    const podcast = await getPodcast("1", podcastSummaryStateMock.data);
    const expectedPodcast = podcastMapper(apiPodcastMock, podcastSummaryStateMock.data[0]);
    expect(podcast).toEqual(expectedPodcast);
  });

  it("should return null when there's an error", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    const podcast = await getPodcast("1", podcastSummaryStateMock.data);

    expect(podcast).toEqual(null);
  });
});
