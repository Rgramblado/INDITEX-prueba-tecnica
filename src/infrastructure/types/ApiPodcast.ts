export interface ApiPodcast {
    resultCount: number;
    results: ApiPodcastDetails[];
}

export interface ApiPodcastDetails {
    wrapperType: string;
    kind: string;
    collectionId: number;
    trackId: number;
    artistName: string;
    collectionName: string;
    trackName: string;
    collectionCensoredName: string;
    trackCensoredName: string;
    collectionViewUrl: string;
    feedUrl: string;
    trackViewUrl: string;
    artworkUrl30: string;
    artworkUrl60: string;
    artworkUrl100: string;
    artworkUrl600: string;
    releaseDate: string;
    collectionExplicitness: string;
    trackExplicitness: string;
    trackCount: number;
    country: string;
    primaryGenreName: string;
    contentAdvisoryRating: string;
    artworkUrl160: string;
    genreIds: string[];
    genres: string[];
    episodeUrl: string;
    description: string;
    shortDescription: string;
    artistIds: number[];
    episodeGuid: string;
    episodeFileExtension: string;
    episodeContentType: string;
    trackTimeMillis: number;
    closedCaptioning: string;
    previewUrl: string;
}