// Resolvers
import { getPodcastsResolver } from "@/resolvers/get-podcasts/getPodcasts.resolver";

// Types
import { Podcast } from "@/types/Podcast.type";
import { Dispatch, SetStateAction } from "react";

type MainHandlersProps = {
  setPodcasts: Dispatch<SetStateAction<Podcast[]>>;
  setAppLoading: (appLoading: boolean) => void;
  setSearch: (search: string) => void;
};

type MainHandlersType = {
  handleSearch: (search: string) => void;
  handleGetPodcasts: () => void;
};

const onSearch = ({
  search,
  setSearch,
}: {
  search: string;
} & Pick<MainHandlersProps, "setSearch">) => setSearch(search);

const onGetPodcasts = async ({
  setPodcasts,
  setAppLoading,
}: Pick<MainHandlersProps, "setPodcasts" | "setAppLoading">) => {
  setAppLoading(true);
  const podcasts = await getPodcastsResolver();
  setPodcasts(podcasts);
  setAppLoading(false);
};

const MainHandlers = ({
  setPodcasts,
  setAppLoading,
  setSearch,
}: MainHandlersProps): MainHandlersType => ({
  handleSearch: (search: string) => onSearch({ search, setSearch }),
  handleGetPodcasts: () => onGetPodcasts({ setPodcasts, setAppLoading }),
});

export default MainHandlers;
