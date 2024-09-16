// Services
import { getPodcastDetails } from "@/services/get-podcast-details/GetPodcastDetails.service";

// Types
import { PodcastDetails } from "@/types/PodcastDetails";

// Utils
import {
  saveOnLocalStorage,
  getFromLocalStorage,
} from "@/utils/cache/cache.utils";

const getPodcastDetailsResolver = async (
  podcastId: string
): Promise<PodcastDetails | null> => {
  try {
    const cacheKey = `podcastDetails_${podcastId}`;
    const podcastDetailsFromCache = getFromLocalStorage(
      cacheKey,
      new Date().getTime()
    );

    if (podcastDetailsFromCache) {
      return podcastDetailsFromCache;
    }

    const podcastDetails = await getPodcastDetails({ podcastId });
    if (podcastDetails) {
      saveOnLocalStorage(cacheKey, podcastDetails, new Date().getTime());
    }
    return podcastDetails;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { getPodcastDetailsResolver };
