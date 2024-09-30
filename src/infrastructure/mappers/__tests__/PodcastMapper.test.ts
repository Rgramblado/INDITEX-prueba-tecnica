// Mappers
import podcastMapper from "../PodcastMapper";

// Utils
import { apiPodcastMock } from "@/__mocks__/ApiPodcast";
import { podcastStateMock } from "@/__mocks__/PodcastState";
import { podcastSummaryStateMock } from "@/__mocks__/PodcastSummaryState";

describe("PodcastMapper", () => {
  it("should map the podcast correctly", () => {
    const expectedResult = {
        ...podcastStateMock["1"].data
    };

    const result = podcastMapper(
      apiPodcastMock,
      podcastSummaryStateMock.data[0]
    );
    expect(result).toEqual(expectedResult);
  });
});
