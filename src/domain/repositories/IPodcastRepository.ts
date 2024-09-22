import { IPodcast } from "../entities/Podcast";
import { IPodcastSummary } from "../entities/PodcastSummary";

export interface IPodcastRepository {
  getPodcast(id: string, podcastSummary: IPodcastSummary[]): Promise<IPodcast | null>;
}
