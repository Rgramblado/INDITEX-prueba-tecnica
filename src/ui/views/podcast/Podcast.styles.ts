import { Link } from "react-router-dom";
import styled from "styled-components";

export const PodcastContainer = styled.div`
    max-width: 1200px;
    margin: 20px;
    display: grid;
    grid-template-columns: 300px auto;
    gap: 20px;
`;

export const PodcastDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const PodcastCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    padding: 10px;
`;



export const PodcastEpisodesTable = styled.table`
    width: 100%;
    border-collapse: collapse;

    & tr{
        border-bottom: 1px solid #e0e0e0;
        &:nth-child(even) {
            background-color: #f2f2f2;
        }
    }

    & tr:hover {
        background-color: #ddd;
    }

    & td {
        padding: 10px 20px;
    }
`;

export const PodcastEpisodesTableHeader = styled.th`
    text-align: left;
    padding: 10px;
`;

export const PodcastStyledLink = styled(Link)`
    text-decoration: none;
    color: #4A90E2;
    font-weight: bold;
`;
