import { IPodcastSummary } from "../entities/PodcastSummary";

export interface IPodcastSummaryRepository {
  getPodcastSummary(id: string): Promise<IPodcastSummary[]>;
}