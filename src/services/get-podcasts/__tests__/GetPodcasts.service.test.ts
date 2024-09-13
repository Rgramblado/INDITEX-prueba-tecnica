// Services
import { getPodcasts } from '../GetPodcasts.service';

// Mocks
import { getPodcastsMock } from '@/__mocks__/GetPodcasts.mock';

// Mappers
import { mapJsonToPodcast } from '../GetPodcasts.mapper';

// Mocks
global.fetch = jest.fn();

describe('Services - Get Podcasts - GetPodcasts service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get and map the podcasts correctly', async () => {
    // Configure fetch mock for positive case
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(getPodcastsMock)
    });

    const result = await getPodcasts();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    expect(result).toEqual(getPodcastsMock.feed.entry.map(mapJsonToPodcast));
  });

  it('should handle errors and return an empty array', async () => {
    // Configure fetch mock for negative case
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

    const result = await getPodcasts();

    expect(global.fetch).toHaveBeenCalledWith(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    expect(result).toEqual([]);
  });
});
