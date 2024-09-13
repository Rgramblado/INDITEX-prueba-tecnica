import type { Podcast } from "@/types/Podcast.type";

export const mapJsonToPodcast = (podcastJson: Record<string, any>): Podcast => {
  return {
    id: podcastJson.id.attributes["im:id"],
    name: podcastJson["im:name"].label,
    images: podcastJson["im:image"].map((img: Record<string, any>) => ({
      url: img.label,
      height: parseInt(img.attributes.height),
    })),
    summary: podcastJson.summary.label,
    price: {
      amount: parseFloat(podcastJson["im:price"].attributes.amount),
      currency: podcastJson["im:price"].attributes.currency,
    },
    contentType: podcastJson["im:contentType"].attributes.label,
    rights: podcastJson.rights.label,
    title: podcastJson.title.label,
    link: podcastJson.link.attributes.href,
    artist: podcastJson["im:artist"].label,
    category: {
      id: podcastJson.category.attributes["im:id"],
      term: podcastJson.category.attributes.term,
      scheme: podcastJson.category.attributes.scheme,
      label: podcastJson.category.attributes.label,
    },
    releaseDate: new Date(podcastJson["im:releaseDate"].label),
  };
};
