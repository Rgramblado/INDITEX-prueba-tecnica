import PodcastSummaryRepository from "../PodcastSummaryRepository";

// Mocks
import { apiPodcastSummaryMock } from "@/__mocks__/ApiPodcastSummary";
import podcastSummaryMapper from "@/infrastructure/mappers/PodcastSummaryMapper";

describe("Infrastructure - Repositories - PodcastSummaryRepository", () => {
  const { getPodcastsSummary } = PodcastSummaryRepository;

  it("should return a list of podcast summaries", async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({contents: JSON.stringify(apiPodcastSummaryMock)}),
    } as unknown as Response);

    const podcastSummaries = await getPodcastsSummary();
    const expectedPodcastSummaries = podcastSummaryMapper(apiPodcastSummaryMock);

    expect(podcastSummaries).toEqual(expectedPodcastSummaries);
  });

  it("should return an empty array when there's an error", async () => {
    global.fetch = jest.fn().mockRejectedValue(new Error("Network error"));

    const podcastSummaries = await getPodcastsSummary();

    expect(podcastSummaries).toEqual([]);
  });
});
