import { configureStore } from "@reduxjs/toolkit";
import podcastReducer, {
  fetchPodcast,
  setPodcast,
  selectPodcast,
} from "../podcastSlice";

import * as podcastSummarySlice from "../podcastSummarySlice";
import PodcastRepository from "@/infrastructure/repositories/PodcastRepository";
import { podcastSummaryStateMock } from "@/__mocks__/PodcastSummaryState";
import { podcastStateMock } from "@/__mocks__/PodcastState";
import { RootState } from "@/store/types";

// Mocks
jest.mock("../podcastSummarySlice");
jest.mock("@/infrastructure/repositories/PodcastRepository");

describe("Store - Slices - podcastSlice", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
    jest.setSystemTime(new Date(1714857600000));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("fetchPodcast", () => {
    it("should fetch podcast if not in store", async () => {
      const store = configureStore<RootState>({
        reducer: {
          podcast: podcastReducer,
          podcastSummary: () => podcastSummaryStateMock,
        } as any,
      });

      const mockPodcast = podcastStateMock["1"].data;
      (PodcastRepository.getPodcast as jest.Mock).mockResolvedValue(
        mockPodcast
      );

      await store.dispatch(fetchPodcast("1"));

      const state = store.getState().podcast;
      expect(state["1"].data).toEqual(mockPodcast);
    });

    it("should not fetch podcast if already in store and not expired", async () => {
      const store = configureStore<RootState>({
        reducer: {
          podcast: podcastReducer,
          podcastSummary: () => podcastSummaryStateMock,
        } as any,
      });

      store.dispatch(
        setPodcast({
          id: "1",
          data: { ...podcastStateMock["1"], timestamp: Date.now() },
        })
      );

      await store.dispatch(fetchPodcast("1"));

      expect(PodcastRepository.getPodcast).not.toHaveBeenCalled();
    });

    it("should dispatch fetchPodcastSummary if not available", async () => {
      const mockPodcast = podcastStateMock["1"].data;
      (PodcastRepository.getPodcast as jest.Mock).mockResolvedValue(
        mockPodcast
      );

      const mockFetchPodcastSummary = jest
        .fn()
        .mockReturnValue({ type: "fetchPodcastSummary" });
      jest
        .spyOn(podcastSummarySlice, "fetchPodcastSummary")
        .mockImplementation(mockFetchPodcastSummary);

      const storeWithoutSummary = configureStore<RootState>({
        reducer: {
          podcast: podcastReducer,
          podcastSummary: (
            state = { data: undefined, timestamp: 0 },
            action: any
          ) => {
            if (action.type === "fetchPodcastSummary") {
              return {
                ...state,
                data: [
                  {
                    id: "1",
                    title: "Test Podcast",
                    summary: "",
                    imageUrl: "",
                    artist: "",
                  },
                ],
              };
            }
            return state;
          },
        } as any,
      });

      await storeWithoutSummary.dispatch(fetchPodcast("1") as any);

      expect(mockFetchPodcastSummary).toHaveBeenCalled();

      // Verificar el estado final del store
      const podcastState = storeWithoutSummary.getState().podcast;
      const podcastSummaryState = storeWithoutSummary.getState().podcastSummary;

      expect(podcastState["1"].data).toEqual(mockPodcast);
      expect(podcastSummaryState.data).toEqual([
        {
          id: "1",
          title: "Test Podcast",
          summary: "",
          imageUrl: "",
          artist: "",
        },
      ]);
    });

    it("should dispatch fetchPodcastSummary if podcastSummary is empty", async () => {
      const mockPodcast = podcastStateMock["1"].data;
      (PodcastRepository.getPodcast as jest.Mock).mockResolvedValue(
        mockPodcast
      );

      const mockFetchPodcastSummary = jest
        .fn()
        .mockReturnValue({ type: "fetchPodcastSummary" });
      jest
        .spyOn(podcastSummarySlice, "fetchPodcastSummary")
        .mockImplementation(mockFetchPodcastSummary);

      const storeWithoutSummary = configureStore<RootState>({
        reducer: {
          podcast: podcastReducer,
          podcastSummary: (state = { data: [], timestamp: 0 }, action: any) => {
            if (action.type === "fetchPodcastSummary") {
              return {
                ...state,
                data: [
                  {
                    id: "1",
                    title: "Test Podcast",
                    summary: "",
                    imageUrl: "",
                    artist: "",
                  },
                ],
              };
            }
            return state;
          },
        } as any,
      });

      await storeWithoutSummary.dispatch(fetchPodcast("5") as any);

      expect(mockFetchPodcastSummary).toHaveBeenCalled();

      // Verificar el estado final del store
      const podcastState = storeWithoutSummary.getState().podcast;
      const podcastSummaryState = storeWithoutSummary.getState().podcastSummary;

      expect(podcastState["1"].data).toEqual(mockPodcast);
      expect(podcastSummaryState.data).toEqual([
        {
          id: "1",
          title: "Test Podcast",
          summary: "",
          imageUrl: "",
          artist: "",
        },
      ]);
    });
  });

  describe("setPodcast", () => {
    it("should set podcast in the store", () => {
      const store = configureStore<RootState>({
        reducer: {
          podcast: podcastReducer,
          podcastSummary: () => podcastSummaryStateMock,
        } as any,
      });

      store.dispatch(setPodcast({ id: "1", data: podcastStateMock["1"] }));

      const state = store.getState().podcast;
      expect(state["1"]).toEqual(podcastStateMock["1"]);
    });
  });

  describe("selectPodcast", () => {
    it("should select podcast from the store", () => {
      const store = configureStore<RootState>({
        reducer: {
          podcast: podcastReducer,
          podcastSummary: () => podcastSummaryStateMock,
        } as any,
      });

      store.dispatch(setPodcast({ id: "1", data: podcastStateMock["1"] }));

      const selectedPodcast = selectPodcast("1")(store.getState());
      expect(selectedPodcast).toEqual(podcastStateMock["1"]);
    });
  });
});
