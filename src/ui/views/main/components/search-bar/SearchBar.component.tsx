// Vendors
import React from "react";

// Components
import { SearchBarContainer, SearchInput } from "./SearchBar.styles";

// Styles
import { SearchPill } from "./SearchBar.styles";

const SearchBarComponent = ({
    searchResults,
    handleSearch,
    className 
}: {
    searchResults: number,
    handleSearch: (search: string) => void,
    className?: string
}): React.ReactElement => {

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSearch(event.target.value);
    };

    return (
        <SearchBarContainer className={className} data-testid="search-bar">
            <SearchPill>{searchResults}</SearchPill>
            <SearchInput 
                type="text" 
                placeholder="Buscar..." 
                onChange={onInputChange}
            />
        </SearchBarContainer>
    );
}

export default SearchBarComponent;