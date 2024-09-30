// Vendors
import React, { useEffect, useState } from "react";

// Components
import {
  MainContainer,
  PodcastsContainer,
  StyledSearchBar,
} from "./Main.styles";
import PodcastCardComponent from "./components/podcast-card/PodcastCard.component";
import AsyncLayout from "@/ui/components/async-layout/AsyncLayout.component";

// Hooks
import { useSelector } from "react-redux";

import { fetchPodcastSummary } from "@/store/slices/podcastSummarySlice";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/store/hooks";
import { IPodcastSummary } from "@/domain/entities/PodcastSummary";

const MainView = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const podcastSummary: IPodcastSummary[] | null = useSelector(
    (state: RootState) => state.podcastSummary?.data ?? null
  );

  useEffect(() => {
    dispatch(fetchPodcastSummary());
  }, [dispatch]);

  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [filteredPodcasts, setFilteredPodcasts] = useState<IPodcastSummary[] | null>(
    podcastSummary
  );

  useEffect(() => {
    if (searchPhrase.length > 2) {
      setFilteredPodcasts(
        podcastSummary?.filter((podcast: IPodcastSummary) =>
          podcast.title.toLowerCase().includes(searchPhrase.toLowerCase())
        )
      );
    } else {
      setFilteredPodcasts(podcastSummary);
    }
  }, [searchPhrase, podcastSummary]);

  return (
    <AsyncLayout loading={!filteredPodcasts}>
      <MainContainer>
        <StyledSearchBar
          searchResults={filteredPodcasts?.length ?? 0}
          handleSearch={(searchPhrase: string) => setSearchPhrase(searchPhrase)}
        />
        <PodcastsContainer>
          {filteredPodcasts?.map((podcast) => (
            <PodcastCardComponent key={podcast.id} podcast={podcast} />
          ))}
        </PodcastsContainer>
      </MainContainer>
    </AsyncLayout>
  );
};

export default MainView;
