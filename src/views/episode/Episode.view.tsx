// Vendors
import React from "react";

// Components
import {
  EpisodeAudio,
  EpisodeContainer,
  EpisodeDescription,
  EpisodeDetailsCard,
  EpisodeTitle,
} from "./Episode.styles";
import PodcastDetailsCardComponent from "@/components/podcast-details-card/PodcastDetailsCard.component";
import AsyncLayout from "@/components/async-layout/AsyncLayout.component";

// Hooks
import useEpisode from "./hooks/Episode.hook";

const EpisodeView = (): React.ReactElement => {
  const { podcast, episode } = useEpisode();
  return (
    <AsyncLayout>
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
