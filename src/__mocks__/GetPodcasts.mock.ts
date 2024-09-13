export const getPodcastsMock = {
  feed: {
    author: {
      name: { label: "iTunes Store" },
      uri: { label: "http://www.apple.com/itunes/" },
    },
    entry: [
      {
        "im:name": { label: "The Joe Budden Podcast" },
        "im:image": [
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png",
            attributes: { height: "55" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png",
            attributes: { height: "60" },
          },
          {
            label:
              "https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png",
            attributes: { height: "170" },
          },
        ],
        summary: {
          label:
            "Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.",
        },
        "im:price": {
          label: "Get",
          attributes: { amount: "0", currency: "USD" },
        },
        "im:contentType": { attributes: { term: "Podcast", label: "Podcast" } },
        rights: { label: "© All rights reserved" },
        title: { label: "The Joe Budden Podcast - The Joe Budden Network" },
        link: {
          attributes: {
            rel: "alternate",
            type: "text/html",
            href: "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
          },
        },
        id: {
          label:
            "https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2",
          attributes: { "im:id": "1535809341" },
        },
        "im:artist": {
          label: "The Joe Budden Network",
          attributes: {
            href: "https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019?uo=2",
          },
        },
        category: {
          attributes: {
            "im:id": "1310",
            term: "Music",
            scheme:
              "https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2",
            label: "Music",
          },
        },
        "im:releaseDate": {
          label: "2024-09-11T00:00:00-07:00",
          attributes: { label: "September 11, 2024" },
        },
      },
    ],
    updated: { label: "2024-09-12T14:02:26-07:00" },
    rights: { label: "Copyright 2008 Apple Inc." },
    title: { label: "iTunes Store: Top Podcasts in Music" },
    icon: { label: "http://itunes.apple.com/favicon.ico" },
    link: [
      {
        attributes: {
          rel: "alternate",
          type: "text/html",
          href: "https://podcasts.apple.com/WebObjects/MZStore.woa/wa/viewTop?cc=us&id=179537&popId=3",
        },
      },
      {
        attributes: {
          rel: "self",
          href: "https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
        },
      },
    ],
    id: {
      label:
        "https://mzstoreservices-int-st.itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
    },
  },
};
