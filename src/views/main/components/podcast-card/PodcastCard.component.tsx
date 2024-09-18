// Vendors
import React from "react";

// Styles
import {
  PodcastCardContainer,
  PodcastTitle,
  PodcastAuthor,
  PodcastImage,
  StyledLink,
} from "./PodcastCard.styles";

// Types
import { Podcast } from "@/types/Podcast.type";

const PodcastCardComponent = ({
  podcast,
}: {
  podcast: Podcast;
}): React.ReactElement => {
  const imageUrl = podcast.images.sort((a, b) => b.height - a.height)?.[0]?.url;
  return (
    <StyledLink to={`/podcast/${podcast.id}`}>
      <PodcastCardContainer data-testid="podcast-card">
        <PodcastImage src={imageUrl} alt={podcast.name} />
        <PodcastTitle>{podcast.name}</PodcastTitle>
        <PodcastAuthor>Autor: {podcast.artist}</PodcastAuthor>
      </PodcastCardContainer>
    </StyledLink>
  );
};

export default PodcastCardComponent;
