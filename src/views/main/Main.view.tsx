// Vendors
import React from "react";

// Components
import { MainContainer, PodcastsContainer, StyledSearchBar } from "./Main.styles";
import PodcastCardComponent from "./components/podcast-card/PodcastCard.component";
import AsyncLayout from "@/components/async-layout/AsyncLayout.component";

// Hooks
import useMain from "./hook/Main.hook";

const MainView = (): React.ReactElement => {
    const { handleSearch, podcasts, search } = useMain();

    const searchedPodcasts = podcasts.filter((podcast) => podcast.title.toLowerCase().includes(search.toLowerCase()));
    return (
        <AsyncLayout>
        <MainContainer>
            <StyledSearchBar 
                searchResults={searchedPodcasts.length}
                handleSearch={handleSearch}
            />
            <PodcastsContainer>
                {searchedPodcasts.map((podcast) => (
                    <PodcastCardComponent key={podcast.id} podcast={podcast} />
                ))}
            </PodcastsContainer>
        </MainContainer>
        </AsyncLayout>
    );
}

export default MainView;
