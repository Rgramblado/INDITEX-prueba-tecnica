// Vendors
import React from "react";

// Styles
import {
    PodcastDetailsCardArtist,
  PodcastDetailsCardContainer,
  PodcastDetailsCardDescription,
  PodcastDetailsCardDescriptionContainer,
  PodcastDetailsCardDescriptionTitle,
  PodcastDetailsCardImage,
  PodcastDetailsCardTitle,
  PodcastDetailsCardTitleContainer,
  StyledLink,
} from "./PodcastDetailsCard.styles";

// Types
import { IPodcast } from "@/domain/entities/Podcast";

const PodcastDetailsCardComponent = ({
  podcastDetails,
}: {
  podcastDetails: IPodcast | null;
}): React.ReactElement => {

  if (!podcastDetails) return <></>;

  return (
    <PodcastDetailsCardContainer data-testid="podcast-details-card">
      <StyledLink to={`/podcast/${podcastDetails.id}`}>
        <PodcastDetailsCardImage
          src={podcastDetails.imageUrl}
          alt={podcastDetails.title}
        />
      </StyledLink>
      <PodcastDetailsCardTitleContainer>
        <StyledLink to={`/podcast/${podcastDetails.id}`}>
          <PodcastDetailsCardTitle>{podcastDetails.title}</PodcastDetailsCardTitle>
        </StyledLink>
        <StyledLink to={`/podcast/${podcastDetails.id}`}>
          <PodcastDetailsCardArtist>
            by: {podcastDetails.artist}
          </PodcastDetailsCardArtist>
        </StyledLink>
      </PodcastDetailsCardTitleContainer>
      <PodcastDetailsCardDescriptionContainer>
        <PodcastDetailsCardDescriptionTitle>
          Description:
        </PodcastDetailsCardDescriptionTitle>
        <PodcastDetailsCardDescription>
          {podcastDetails.summary}
        </PodcastDetailsCardDescription>
      </PodcastDetailsCardDescriptionContainer>
    </PodcastDetailsCardContainer>
  );
};

export default PodcastDetailsCardComponent;
