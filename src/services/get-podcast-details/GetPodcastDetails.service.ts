// Types
import { PodcastDetails } from "@/types/PodcastDetails";

// Mappers
import { mapApiResponseToPodcast } from "./GetPodcastDetails.mapper";

export const getPodcastDetails = async ({
  podcastId,
}: {
  podcastId: string;
}): Promise<PodcastDetails | null> => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode`)}`
    );
    const data = await response.json();
    const podcastDetails = await mapApiResponseToPodcast(JSON.parse(data.contents));
    return podcastDetails;
  } catch (error) {
    console.error("Error al obtener los podcasts:", error);
    return null;
  }
};
