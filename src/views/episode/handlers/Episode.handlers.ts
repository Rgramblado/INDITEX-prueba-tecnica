// Resolvers
import { getPodcastDetailsResolver } from "@/resolvers/get-podcast-details/getPodcastDetails.resolver";

// Types
import { PodcastDetails, PodcastEpisode } from "@/types/PodcastDetails";

type EpisodeHandlersProps = {
  podcastId: string;
  episodeId: string;
  setAppLoading: (loading: boolean) => void;
  setEpisode: (podcast: PodcastEpisode | null) => void;
  setPodcast: (podcast: PodcastDetails | null) => void;
};

type EpisodeHandlersType = {
  handleGetEpisodeDetails: () => Promise<void>;
};

const getEpisodeDetails = async ({
  podcastId,
  episodeId,
  setAppLoading,
  setEpisode,
  setPodcast,
}: EpisodeHandlersProps) => {
  setAppLoading(true);
  const podcast = await getPodcastDetailsResolver(podcastId);
  setPodcast(podcast as PodcastDetails);
  const episode = podcast?.episodes.find((episode) => episode.id === episodeId);
  setEpisode(episode as PodcastEpisode);
  setAppLoading(false);
};

const EpisodeHandlers = ({
  setAppLoading,
  setEpisode,
  setPodcast,
  podcastId,
  episodeId,
}: EpisodeHandlersProps): EpisodeHandlersType => ({
  handleGetEpisodeDetails: async () =>
    getEpisodeDetails({ setAppLoading, setEpisode, setPodcast, podcastId, episodeId }),
});

export default EpisodeHandlers;
