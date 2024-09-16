// Services
import { getPodcasts } from "@/services/get-podcasts/GetPodcasts.service";

// Types
import { Podcast } from "@/types/Podcast.type";

// Utils
import {
  saveOnLocalStorage,
  getFromLocalStorage,
} from "@/utils/cache/cache.utils";

const getPodcastsResolver = async (): Promise<Podcast[]> => {
  try {
    const podcastsFromCache = getFromLocalStorage(
      "podcasts",
      new Date().getTime()
    );

    if (podcastsFromCache) {
      return podcastsFromCache;
    }

    const podcasts = await getPodcasts();
    saveOnLocalStorage("podcasts", podcasts, new Date().getTime());
    return podcasts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export { getPodcastsResolver };
