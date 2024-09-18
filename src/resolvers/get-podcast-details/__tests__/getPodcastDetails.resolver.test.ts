// Resolvers
import { getPodcastDetailsResolver } from '../getPodcastDetails.resolver';

// Services
import { getPodcastDetails } from '@/services/get-podcast-details/GetPodcastDetails.service';

// Utils
import { saveOnLocalStorage, getFromLocalStorage } from '@/utils/cache/cache.utils';

// Mocks
import { getPodcastDetailMock } from '@/__mocks__/GetPodcastDetails.mock';

// Mock de las dependencias
jest.mock('@/services/get-podcast-details/GetPodcastDetails.service');
jest.mock('@/utils/cache/cache.utils');

describe('Resolvers - Get Podcast Details - getPodcastDetails resolver', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return cached data if available', async () => {
    const podcastId = '1535809341';
    const cachedData = { ...JSON.parse(getPodcastDetailMock.contents).results[0], episodes: [] };
    (getFromLocalStorage as jest.Mock).mockReturnValue(cachedData);

    const result = await getPodcastDetailsResolver(podcastId);

    expect(getFromLocalStorage).toHaveBeenCalledWith(`podcastDetails_${podcastId}`, expect.any(Number));
    expect(getPodcastDetails).not.toHaveBeenCalled();
    expect(result).toEqual(cachedData);
  });

  it('should fetch and cache data if not in cache', async () => {
    const podcastId = '1535809341';
    const serviceData = { ...JSON.parse(getPodcastDetailMock.contents).results[0], episodes: [] };
    (getFromLocalStorage as jest.Mock).mockReturnValue(null);
    (getPodcastDetails as jest.Mock).mockResolvedValue(serviceData);

    const result = await getPodcastDetailsResolver(podcastId);

    expect(getFromLocalStorage).toHaveBeenCalledWith(`podcastDetails_${podcastId}`, expect.any(Number));
    expect(getPodcastDetails).toHaveBeenCalledWith({ podcastId });
    expect(saveOnLocalStorage).toHaveBeenCalledWith(`podcastDetails_${podcastId}`, serviceData, expect.any(Number));
    expect(result).toEqual(serviceData);
  });

  it('should handle errors and return null', async () => {
    const podcastId = '1535809341';
    (getFromLocalStorage as jest.Mock).mockReturnValue(null);
    (getPodcastDetails as jest.Mock).mockRejectedValue(new Error('Error de red'));

    const result = await getPodcastDetailsResolver(podcastId);

    expect(getFromLocalStorage).toHaveBeenCalledWith(`podcastDetails_${podcastId}`, expect.any(Number));
    expect(getPodcastDetails).toHaveBeenCalledWith({ podcastId });
    expect(result).toBeNull();
  });
});
