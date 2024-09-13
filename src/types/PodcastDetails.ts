export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  releaseDate: Date;
  durationInMilliseconds: number;
  audioUrl: string;
  imageUrl: string;
  episodeNumber: string;
}

export interface PodcastDetails {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  episodes: PodcastEpisode[];
}


