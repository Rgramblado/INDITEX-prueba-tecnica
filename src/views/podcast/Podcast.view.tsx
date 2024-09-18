// Vendors
import React from "react";

// Components
import PodcastDetailsCardComponent from "../../components/podcast-details-card/PodcastDetailsCard.component";
import AsyncLayout from "@/components/async-layout/AsyncLayout.component";

// Hooks
import usePodcast from "./hooks/Podcast.hook";

// Styles
import {
  PodcastCard,
  PodcastContainer,
  PodcastDetailsContainer,
  PodcastEpisodesTable,
  PodcastEpisodesTableHeader,
  PodcastStyledLink,
} from "./Podcast.styles";

// Utils
import { formatDate, formatMsToHHMMSS } from "@/utils/date/date.utils";

const PodcastView = (): React.ReactElement => {
  const { podcast } = usePodcast();

  return (
    <AsyncLayout>
      <PodcastContainer data-testid="podcast-container">
        <PodcastDetailsCardComponent podcastDetails={podcast} />
      <PodcastDetailsContainer>
        <PodcastCard data-testid="podcast-card">
          <h1>Episodes: {podcast?.episodes.length}</h1>
        </PodcastCard>
        <PodcastCard data-testid="podcast-card">
          <PodcastEpisodesTable data-testid="podcast-episodes-table">
            <thead>
              <tr>
                <PodcastEpisodesTableHeader>Title</PodcastEpisodesTableHeader>
                <PodcastEpisodesTableHeader>Date</PodcastEpisodesTableHeader>
                <PodcastEpisodesTableHeader>
                  Duration
                </PodcastEpisodesTableHeader>
              </tr>
            </thead>
            <tbody>
              {podcast?.episodes.map((episode) => (
                <tr key={episode.id} data-testid="podcast-episode-row">
                  <td>
                    <PodcastStyledLink
                      to={`/podcast/${podcast.id}/episode/${episode.id}`}
                    >
                      {episode.title}
                    </PodcastStyledLink>
                  </td>
                  <td>{formatDate(episode.releaseDate)}</td>
                  <td>{formatMsToHHMMSS(episode.durationInMilliseconds)}</td>
                </tr>
              ))}
            </tbody>
          </PodcastEpisodesTable>
        </PodcastCard>
      </PodcastDetailsContainer>
      </PodcastContainer>
    </AsyncLayout>
  );
};

export default PodcastView;
