// Services 
import { getPodcastDetails } from '../GetPodcastDetails.service';

// Mocks
import { getPodcastDetailMock } from '@/__mocks__/GetPodcastDetails.mock';

// Mappers
import { mapApiResponseToPodcast } from '../GetPodcastDetails.mapper';

// Mock de fetch
global.fetch = jest.fn();

describe('Services - Get Podcast Details - GetPodcastDetails service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should get and map the podcast details correctly', async () => {
    // Configurar el mock de fetch para el caso positivo
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(getPodcastDetailMock)
    });

    const podcastId = '1535809341';
    const result = await getPodcastDetails({ podcastId });

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`)}`
    );
    expect(result).toEqual(await mapApiResponseToPodcast(JSON.parse(getPodcastDetailMock.contents)));
  });

  it('should handle errors and return null', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Error de red'));

    const podcastId = '1535809341';
    const result = await getPodcastDetails({ podcastId });

    expect(global.fetch).toHaveBeenCalledWith(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`)}`
    );
    expect(result).toBeNull();
  });
});
