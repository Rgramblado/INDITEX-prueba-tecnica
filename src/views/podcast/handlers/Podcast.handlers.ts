// Resolvers
import { getPodcastDetailsResolver } from "@/resolvers/get-podcast-details/getPodcastDetails.resolver";

// Types
import { PodcastDetails } from "@/types/PodcastDetails";

type PodcastHandlersProps = {
  podcastId: string;
  setAppLoading: (loading: boolean) => void;
  setPodcast: (podcast: PodcastDetails | null) => void;
};

type PodcastHandlersType = {
  handleGetPodcastDetails: () => Promise<void>;
};

const getPodcastDetails = async ({
  podcastId,
  setAppLoading,
  setPodcast,
}: {
  podcastId: string;
  setAppLoading: (loading: boolean) => void;
  setPodcast: (podcast: PodcastDetails | null) => void;
}) => {
  setAppLoading(true);
  const podcast = await getPodcastDetailsResolver(podcastId);
  setPodcast(podcast as PodcastDetails);
  setAppLoading(false);
};

const PodcastHandlers = ({ setAppLoading, setPodcast, podcastId }: PodcastHandlersProps): PodcastHandlersType => ({
  handleGetPodcastDetails: async () => getPodcastDetails({ setAppLoading, setPodcast, podcastId }),
});

export default PodcastHandlers;

