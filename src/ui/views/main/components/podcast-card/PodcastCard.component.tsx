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
import { IPodcastSummary } from "@/domain/entities/PodcastSummary";

const PodcastCardComponent = ({
  podcast,
}: {
  podcast: IPodcastSummary;
}): React.ReactElement => {
  return (
    <StyledLink to={`/podcast/${podcast.id}`}>
      <PodcastCardContainer data-testid="podcast-card">
        <PodcastImage src={podcast.imageUrl} alt={podcast.title} />
        <PodcastTitle>{podcast.title}</PodcastTitle>
        <PodcastAuthor>Autor: {podcast.artist}</PodcastAuthor>
      </PodcastCardContainer>
    </StyledLink>
  );
};

export default PodcastCardComponent;
