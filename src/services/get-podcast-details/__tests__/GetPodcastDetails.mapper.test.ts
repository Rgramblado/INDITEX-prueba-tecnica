// Mapper
import { getPodcastDetailMock } from "@/__mocks__/GetPodcastDetails.mock";
import { mapApiResponseToPodcast } from "../GetPodcastDetails.mapper";
import { PodcastDetails } from "@/types/PodcastDetails";

describe("Services - GetPodcastDetails - GetPodcastDetails mapper", () => {
  it("should map the api response to a podcast", () => {
    const apiResponse = getPodcastDetailMock;
    const podcast: PodcastDetails = mapApiResponseToPodcast(apiResponse);

    const expectedPodcast: PodcastDetails = {
      id: "1535809341",
      name: "The Joe Budden Podcast",
      description: "",
      imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/600x600bb.jpg",
      episodes: [
        {
          id: "1000669118134",
          title: 'Episode 758 | "Three Level Scorer" (feat. Doechii)',
          description: "The Bionic Six is back! With Kendrick Lamar's Super Bowl halftime show announcement over the weekend, the internet reacted to Lil Wayne not being selected to perform with New Orleans hosting the event (17:25). The JBP debates what songs Wayne would perform before discussing potential reasons as to why the NFL went in a different direction. Off the success and praise of 'Alligator Bites Never Heal', Doechii pulls up to the studio to discuss the creation of her mixtape, working under the TDE umbrella, and where she sees herself over the next five years (1:18:25). Also, Joe asks the room whether mom trucks still exist (2:05:05), Nicki Minaj defends Lil Wayne on X (2:20:26), Joe shares a couple stories from his trip to Indianapolis (2:31:38), bodycam footage has been released of Dolphins WR Tyreek Hill's arrest prior to Sunday's game (2:47:26), and much more! Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP! Join our Patreon here:www.patreon.com/joebudden Sleeper Picks: Joe | AUGUST 08 - “Bruises” Ice | LL COOL J - “30 Decembers” Parks | Ransom & V Don - “Mid Life Crisis” Ish | Justin Garner - “RED HOT” Melyssa | serpentwithfeet & Orion Sun - “Ellipsis”",
          shortDescription: "The Bionic Six is back! With Kendrick Lamar's Super Bowl halftime show announcement over the weekend, the internet reacted to Lil Wayne not being selected to perform with New Orleans hosting the event (17:25). The JBP debates what songs Wayne would...",
          releaseDate: new Date("2024-09-11T07:00:00Z"),
          durationInMilliseconds: 14132000,
          audioUrl: "https://verifi.podscribe.com/rss/p/traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_758.mp3?dest-id=2422538",
          imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Podcasts221/v4/c7/ac/cb/c7accb5e-dd6d-f90f-2d93-b6f34819cd85/mza_126767939652052982.jpg/600x600bb.jpg",
          episodeNumber: 'Episode 758 | "Three Level Scorer" (feat. Doechii)',
        }
      ],
    };

    expect(podcast).toStrictEqual(expectedPodcast);
  });
});
