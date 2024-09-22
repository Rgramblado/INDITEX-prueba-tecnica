import { Link } from "react-router-dom";
import styled from "styled-components";

export const PodcastDetailsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
    gap: 10px;
    flex-grow: 1;
    margin-bottom: auto;
    & > * {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        &:not(:first-child) {
            border-top: 1px solid #e0e0e0;
        }
    }
`;

export const PodcastDetailsCardImage = styled.img`
    width: 70%;
    align-self: center;
    margin-bottom: 0;
`;

export const PodcastDetailsCardTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;

export const PodcastDetailsCardTitle = styled.h2`
    font-size: 20px;
    margin: 0;
`;

export const PodcastDetailsCardArtist = styled.h3`
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    margin: 0;
`;

export const PodcastDetailsCardDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;

export const PodcastDetailsCardDescriptionTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    margin: 0;
`;

export const PodcastDetailsCardDescription = styled.p`
    font-size: 16px;
    font-style: italic;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;


