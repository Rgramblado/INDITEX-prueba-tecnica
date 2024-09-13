// Mappers
import { mapJsonToPodcast } from '../GetPodcasts.mapper';

// Mocks
import { getPodcastsMock } from '@/__mocks__/GetPodcasts.mock';

// Types
import { Podcast } from '@/types/Podcast.type';

describe('Services - Get Podcasts - GetPodcasts mapper', () => {
  it('should map API response to Podcast correctly', () => {
    const apiPodcast = getPodcastsMock.feed.entry[0];
    const expectedPodcast: Podcast = {
      id: '1535809341',
      name: 'The Joe Budden Podcast',
      images: [
        {
          url: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
          height: 55
        },
        {
          url: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
          height: 60
        },
        {
          url: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
          height: 170
        }
      ],
      summary: 'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
      price: {
        amount: 0,
        currency: 'USD'
      },
      contentType: 'Podcast',
      rights: '© All rights reserved',
      title: 'The Joe Budden Podcast - The Joe Budden Network',
      link: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
      artist: 'The Joe Budden Network',
      category: {
        id: '1310',
        term: 'Music',
        scheme: 'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
        label: 'Music'
      },
      releaseDate: new Date('2024-09-11T00:00:00-07:00')
    };

    const result = mapJsonToPodcast(apiPodcast);

    expect(result).toEqual(expectedPodcast);
  });
});
