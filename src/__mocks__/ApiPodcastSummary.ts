import { ApiPodcastSummary } from "@/infrastructure/types/ApiPodcastSummary";

export const apiPodcastSummaryMock: ApiPodcastSummary = {
  feed: {
    author: {
      name: { label: "iTunes Store" },
      uri: { label: "http://www.apple.com/itunes/" },
    },
    entry: [
      {
        "im:name": { label: "Filete" },
        "im:image": [
          {
            label: "ImageUrl",
            attributes: { height: "55" },
          },
          {
            label: "ImageUrl",
            attributes: { height: "20" },
          },
        ],
        summary: {
          label: "Summary",
        },
        "im:price": {
          label: "Get",
          attributes: { amount: "0" },
        },
        "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
        rights: { label: "© All rights reserved" },
        title: { label: "Filete" },
        link: {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href: "https://podcasts.apple.com/us/podcast/filete/id1",
          },
        },
        id: {
          label: "https://podcasts.apple.com/us/podcast/filete/id1",
          attributes: { "im:id": "1" },
        },
        "im:artist": {
          label: "Artist",
          attributes: {
            href: "https://podcasts.apple.com/us/artist/artist/id1",
          },
        },
        category: {
          attributes: {
            "im:id": "1310",
            term: "Music",
            scheme: "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            label: "Music",
          },
        },
        "im:releaseDate": {
          label: "2024-09-11T00:00:00-07:00",
          attributes: { label: "September 11, 2024" },
        },
      },
      {
        "im:name": { label: "Jamon" },
        "im:image": [
          {
            label: "ImageUrl",
            attributes: { height: "55" },
          },
        ],
        summary: {
          label: "Summary",
        },
        "im:price": {
          label: "Get",
          attributes: { amount: "0" },
        },
        "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
        rights: { label: "© All rights reserved" },
        title: { label: "Jamon" },
        link: {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href: "https://podcasts.apple.com/us/podcast/jamon/id2",
          },
        },
        id: {
          label: "https://podcasts.apple.com/us/podcast/jamon/id2",
          attributes: { "im:id": "2" },
        },
        "im:artist": {
          label: "Artist",
          attributes: {
            href: "https://podcasts.apple.com/us/artist/artist/id2",
          },
        },
        category: {
          attributes: {
            "im:id": "1310",
            term: "Music",
            scheme: "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            label: "Music",
          },
        },
        "im:releaseDate": {
          label: "2024-09-11T00:00:00-07:00",
          attributes: { label: "September 11, 2024" },
        },
      },
    ],
  },
};
