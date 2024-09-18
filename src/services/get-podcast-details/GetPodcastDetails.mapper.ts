import { getPodcastsResolver } from "@/resolvers/get-podcasts/getPodcasts.resolver";
import { PodcastDetails, PodcastEpisode } from "@/types/PodcastDetails";

export const mapApiResponseToPodcast = async (
  apiResponse: any
): Promise<PodcastDetails> => {
  const podcastInfo = apiResponse.results.filter(
    (item: any) => item.kind === "podcast"
  )[0];
  const episodes = apiResponse.results.filter(
    (item: any) => item.wrapperType === "podcastEpisode"
  );
  const description = (await getPodcastsResolver()).find(
    (item: any) => item.id === podcastInfo.collectionId.toString()
  )?.summary;

  return {
    id: podcastInfo.collectionId.toString(),
    name: podcastInfo.collectionName,
    description: description || "",
    imageUrl: podcastInfo.artworkUrl600,
    artistName: podcastInfo.artistName,
    episodes: episodes.map(mapApiEpisodeToPodcastEpisode),
  };
};

const mapApiEpisodeToPodcastEpisode = (apiEpisode: any): PodcastEpisode => {
  return {
    id: apiEpisode.trackId.toString(),
    title: apiEpisode.trackName,
    description: apiEpisode.description,
    shortDescription: apiEpisode.shortDescription,
    releaseDate: new Date(apiEpisode.releaseDate).toISOString(),
    durationInMilliseconds: apiEpisode.trackTimeMillis,
    audioUrl: apiEpisode.episodeUrl,
    imageUrl: apiEpisode.artworkUrl600,
    episodeNumber: apiEpisode.trackName,
  };
};
