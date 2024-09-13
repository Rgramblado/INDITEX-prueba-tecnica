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
      `https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&limit=20`
    );
    const data = await response.json();
    return mapApiResponseToPodcast(data);
  } catch (error) {
    console.error("Error al obtener los podcasts:", error);
    return null;
  }
};
