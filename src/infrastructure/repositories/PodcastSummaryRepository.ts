import { IPodcastSummary } from "@/domain/entities/PodcastSummary";
import { ApiPodcastSummary } from "../types/ApiPodcastSummary";
import podcastSummaryMapper from "../mappers/PodcastSummaryMapper";

const getPodcastsSummary = async (): Promise<IPodcastSummary[]> => {
  try {
    const response = await fetch(
      "https://api.allorigins.win/get?url=https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    );
    const data: ApiPodcastSummary = JSON.parse((await response.json()).contents);
    return podcastSummaryMapper(data);
  } catch (error) {
    console.error("Error al obtener los podcasts:", error);
    return [];
  }
};

const PodcastSummaryRepository = {
  getPodcastsSummary,
};

export default PodcastSummaryRepository;
