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
import { PodcastDetails } from "@/types/PodcastDetails";

const PodcastDetailsCardComponent = ({
  podcastDetails,
}: {
  podcastDetails: PodcastDetails | null;
}): React.ReactElement => {

  if (!podcastDetails) return <></>;

  return (
    <PodcastDetailsCardContainer data-testid="podcast-details-card">
      <StyledLink to={`/podcast/${podcastDetails.id}`}>
        <PodcastDetailsCardImage
          src={podcastDetails.imageUrl}
          alt={podcastDetails.name}
        />
      </StyledLink>
      <PodcastDetailsCardTitleContainer>
        <StyledLink to={`/podcast/${podcastDetails.id}`}>
          <PodcastDetailsCardTitle>{podcastDetails.name}</PodcastDetailsCardTitle>
        </StyledLink>
        <StyledLink to={`/podcast/${podcastDetails.id}`}>
          <PodcastDetailsCardArtist>
            by: {podcastDetails.artistName}
          </PodcastDetailsCardArtist>
        </StyledLink>
      </PodcastDetailsCardTitleContainer>
      <PodcastDetailsCardDescriptionContainer>
        <PodcastDetailsCardDescriptionTitle>
          Description:
        </PodcastDetailsCardDescriptionTitle>
        <PodcastDetailsCardDescription>
          {podcastDetails.description}
        </PodcastDetailsCardDescription>
      </PodcastDetailsCardDescriptionContainer>
    </PodcastDetailsCardContainer>
  );
};

export default PodcastDetailsCardComponent;
