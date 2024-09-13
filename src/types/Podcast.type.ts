interface Image {
  url: string;
  height: number;
};

export interface Podcast {
  id: string;
  name: string;
  images: Image[];
  summary: string;
  price: {
    amount: number;
    currency: string;
  };
  contentType: string;
  rights: string;
  title: string;
  link: string;
  artist: string;
  category: {
    id: string;
    term: string;
    scheme: string;
    label: string;
  };
  releaseDate: Date;
};
