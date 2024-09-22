import styled from "styled-components";

export const EpisodeContainer = styled.div`
    max-width: 1200px;
    margin: 20px;
    display: grid;
    grid-template-columns: 300px auto;
    gap: 20px;
`;

export const EpisodeDetailsCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 10px;
    margin-bottom: auto;
`;

export const EpisodeTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin: 0;
`;

export const EpisodeDescription = styled.p`
    font-size: 16px;
    margin: 0;
`;

export const EpisodeAudio = styled.audio`
    width: 100%;
    margin-top: 20px;
`;


