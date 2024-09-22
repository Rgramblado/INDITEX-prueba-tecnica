import { ApiPodcast } from "../types/ApiPodcast";
import podcastMapper from "../mappers/PodcastMapper";
import { IPodcast } from "@/domain/entities/Podcast";
import { IPodcastRepository } from "@/domain/repositories/IPodcastRepository";
import { IPodcastSummary } from "@/domain/entities/PodcastSummary";

const getPodcast = async (id: string, podcastSummary: IPodcastSummary[]): Promise<IPodcast | null> => {
  try {
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode`
    );
    const data: ApiPodcast = await response.json();
    const summaryInfo = podcastSummary.find(summary => summary.id === id);
    
    if (!summaryInfo) {
      throw new Error("Podcast summary not found");
    }

    return podcastMapper(data, summaryInfo)
  } catch (error) {
    console.error("Error al obtener los podcasts:", error);
    return null;
  }
};

const PodcastRepository: IPodcastRepository = {
  getPodcast,
};

export default PodcastRepository;
