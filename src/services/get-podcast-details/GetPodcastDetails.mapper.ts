import { PodcastDetails, PodcastEpisode } from "@/types/PodcastDetails";

export const mapApiResponseToPodcast = (apiResponse: any): PodcastDetails => {
  const podcastInfo = apiResponse.results.filter((item: any) => item.kind === "podcast")[0];
  const episodes = apiResponse.results.filter((item: any) => item.wrapperType === "podcastEpisode");

  return {
    id: podcastInfo.collectionId.toString(),
    name: podcastInfo.collectionName,
    description: podcastInfo.description || "",
    imageUrl: podcastInfo.artworkUrl600,
    episodes: episodes.map(mapApiEpisodeToPodcastEpisode),
  };
}

const mapApiEpisodeToPodcastEpisode = (apiEpisode: any): PodcastEpisode => {
  return {
    id: apiEpisode.trackId.toString(),
    title: apiEpisode.trackName,
    description: apiEpisode.description,
    shortDescription: apiEpisode.shortDescription,
    releaseDate: new Date(apiEpisode.releaseDate),
    durationInMilliseconds: apiEpisode.trackTimeMillis,
    audioUrl: apiEpisode.episodeUrl,
    imageUrl: apiEpisode.artworkUrl600,
    episodeNumber: apiEpisode.trackName,
  };
}
