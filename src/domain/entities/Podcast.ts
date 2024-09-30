export interface IPodcast {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  artist: string;
  episodes: IEpisode[];
}

export interface IEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  duration: number;
  releaseDate: string;
}
