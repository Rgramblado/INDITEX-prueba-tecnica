// Handlers
import PodcastHandlers from "../Podcast.handlers";

describe('Views - Podcast - Handlers', () => {
  it('should handleGetPodcastDetails', async () => {
    const mockSetAppLoading = jest.fn();
    const mockSetPodcast = jest.fn();
    const podcastId = '1535809341';

    const { handleGetPodcastDetails } = PodcastHandlers({ podcastId, setAppLoading: mockSetAppLoading, setPodcast: mockSetPodcast });

    await handleGetPodcastDetails();

    expect(mockSetAppLoading).toHaveBeenCalledWith(true);
    expect(mockSetPodcast).toHaveBeenCalledWith(expect.any(Object));
    expect(mockSetAppLoading).toHaveBeenCalledWith(false);
  });
});