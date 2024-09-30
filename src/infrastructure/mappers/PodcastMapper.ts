import { ApiPodcast } from "../types/ApiPodcast";
import { IPodcast } from "@/domain/entities/Podcast";
import { IPodcastSummary } from "@/domain/entities/PodcastSummary";

const podcastMapper = (apiPodcast: ApiPodcast, summaryInfo: IPodcastSummary): IPodcast => {
    return {
        id: summaryInfo.id,
        title: summaryInfo.title,
        artist: summaryInfo.artist,
        summary: summaryInfo.summary,
        imageUrl: summaryInfo.imageUrl,
        episodes: apiPodcast.results.slice(1).map((result) => ({
            id: result.trackId.toString(),
            title: result.trackName,
            description: result.description,
            duration: result.trackTimeMillis,
            audioUrl: result.episodeUrl,
            imageUrl: result.artworkUrl600,
            releaseDate: result.releaseDate,
        })),
    };
};

export default podcastMapper;