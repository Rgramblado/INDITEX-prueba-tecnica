// Mapper
import { podcastSummaryStateMock } from "@/__mocks__/PodcastSummaryState";
import { apiPodcastSummaryMock } from "@/__mocks__/ApiPodcastSummary";
import podcastSummaryMapper from "../PodcastSummaryMapper";

describe("PodcastSummaryMapper", () => {
  it("should map the podcast summary correctly", () => {
    const expectedResult = [
        ...podcastSummaryStateMock.data
    ];
    const result = podcastSummaryMapper(apiPodcastSummaryMock);
    expect(result).toEqual(expectedResult);
  });
});
