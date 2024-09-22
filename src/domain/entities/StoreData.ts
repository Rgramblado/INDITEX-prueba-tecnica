import { IPodcast } from "./Podcast";
import { IPodcastSummary } from "./PodcastSummary";

export interface IStoreDataBase<T> {
    data: T;
    timestamp: number;
}

export interface IStoreData {
    podcastSummary: IStoreDataBase<IPodcastSummary[]>;
    podcast: Record<string, IStoreDataBase<IPodcast>>;
}