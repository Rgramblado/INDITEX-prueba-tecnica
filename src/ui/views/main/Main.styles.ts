import SearchBarComponent from "./components/search-bar/SearchBar.component";
import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 880px;
`;

export const PodcastsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 20px;
`;

export const StyledSearchBar = styled(SearchBarComponent)`
    align-self: flex-end;
`;