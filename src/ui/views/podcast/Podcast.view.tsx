// Vendors
import React, { useEffect } from "react";

// Redux
import { fetchPodcast } from "@/store/slices/podcastSlice";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/store/hooks";
import { IPodcast } from "@/domain/entities/Podcast";

// Components
import PodcastDetailsCardComponent from "../../components/podcast-details-card/PodcastDetailsCard.component";
import AsyncLayout from "@/ui/components/async-layout/AsyncLayout.component";


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
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PodcastView = (): React.ReactElement => {
  const { podcastId } = useParams();
  const dispatch = useAppDispatch();
  const podcast: IPodcast | null = useSelector(
    (state: RootState) => podcastId ? state.podcast?.[podcastId]?.data ?? null : null
  );

  useEffect(() => {
    podcastId && dispatch(fetchPodcast(podcastId));
  }, [dispatch, podcastId]);


  return (
    <AsyncLayout loading={!podcast}>
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
                  <td>{formatMsToHHMMSS(episode.duration)}</td>
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
