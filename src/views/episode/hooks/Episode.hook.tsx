// Vendors
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Contexts
import { useAppContext } from "@/contexts/app.context";

// Types
import { PodcastDetails, PodcastEpisode } from "@/types/PodcastDetails";

// Handlers
import EpisodeHandlers from "../handlers/Episode.handlers";

const useEpisode = () => {
  const { podcastId, episodeId } = useParams();

  const { setAppLoading } = useAppContext();

  const [episode, setEpisode] = useState<PodcastEpisode | null>(null);
  const [podcast, setPodcast] = useState<PodcastDetails | null>(null);

  const { handleGetEpisodeDetails } = EpisodeHandlers({
    setAppLoading,
    setEpisode,
    setPodcast,
    podcastId: podcastId as string,
    episodeId: episodeId as string,
  });

  useEffect(() => {
    handleGetEpisodeDetails();
  }, []);

  return { episode, podcast };
};

export default useEpisode;
