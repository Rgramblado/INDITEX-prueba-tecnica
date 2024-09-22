// Vendors
import React, { useEffect } from "react";

// Components
import {
  EpisodeAudio,
  EpisodeContainer,
  EpisodeDescription,
  EpisodeDetailsCard,
  EpisodeTitle,
} from "./Episode.styles";
import PodcastDetailsCardComponent from "@/ui/components/podcast-details-card/PodcastDetailsCard.component";
import AsyncLayout from "@/ui/components/async-layout/AsyncLayout.component";

// Redux
import { useSelector } from "react-redux";
import { IPodcast, IEpisode } from "@/domain/entities/Podcast";
import { RootState } from "@/store/types";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "@/store/hooks";
import { fetchPodcast } from "@/store/slices/podcastSlice";

const EpisodeView = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { podcastId, episodeId } = useParams();
  const podcast: IPodcast | null = useSelector((state: RootState) =>
    podcastId ? state.podcast?.[podcastId]?.data ?? null : null
  );
  const episode: IEpisode | null =
    podcast?.episodes.find((episode) => episode.id === episodeId) ?? null;

  useEffect(() => {
    podcastId && episodeId && dispatch(fetchPodcast(podcastId));
  }, [dispatch, podcastId, episodeId]);

  return (
    <AsyncLayout loading={!podcast || !episode}>
      <EpisodeContainer data-testid="episode-container">
        <PodcastDetailsCardComponent podcastDetails={podcast} />
        <EpisodeDetailsCard data-testid="episode-details-card">
          <EpisodeTitle data-testid="episode-title">
            {episode?.title}
          </EpisodeTitle>
          <EpisodeDescription
            data-testid="episode-description"
            dangerouslySetInnerHTML={{ __html: episode?.description ?? "" }}
          />
          <EpisodeAudio data-testid="episode-audio" controls>
            <source src={episode?.audioUrl} />
            Your browser does not support the audio element.
          </EpisodeAudio>
        </EpisodeDetailsCard>
      </EpisodeContainer>
    </AsyncLayout>
  );
};

export default EpisodeView;
