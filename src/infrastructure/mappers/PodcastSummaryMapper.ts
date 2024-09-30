import { ApiPodcastSummary } from "../types/ApiPodcastSummary";
import { IPodcastSummary } from "@/domain/entities/PodcastSummary";

const podcastSummaryMapper = (apiPodcastSummary: ApiPodcastSummary): IPodcastSummary[] => {
    const data = apiPodcastSummary.feed.entry;
    return data.map((entry) => ({
        id: entry.id.attributes["im:id"],
        title: entry["im:name"].label,
        imageUrl: entry["im:image"]?.sort((a, b) => parseInt(a.attributes.height) - parseInt(b.attributes.height)).pop()?.label ?? "",
        summary: entry.summary.label,
        artist: entry["im:artist"].label,
    }));
};

export default podcastSummaryMapper;

