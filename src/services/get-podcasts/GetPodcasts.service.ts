// Types
import { Podcast } from "@/types/Podcast.type";

// Mappers
import { mapJsonToPodcast } from "./GetPodcasts.mapper";

export const getPodcasts = async (): Promise<Podcast[]> => {
  try {
    const response = await fetch(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    const data = await response.json();
    return data.feed.entry.map(mapJsonToPodcast);
  } catch (error) {
    console.error("Error al obtener los podcasts:", error);
    return [];
  }
};
