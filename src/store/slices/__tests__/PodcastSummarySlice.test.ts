import { configureStore } from "@reduxjs/toolkit";
import podcastSummaryReducer, {
  fetchPodcastSummary,
  setPodcastSummary,
  selectPodcastSummary,
} from "../podcastSummarySlice";
import PodcastSummaryRepository from "@/infrastructure/repositories/PodcastSummaryRepository";
import { podcastSummaryStateMock } from "@/__mocks__/PodcastSummaryState";
import { RootState } from "@/store/types";

// Mocks
jest.mock("@/infrastructure/repositories/PodcastSummaryRepository");

describe("Store - Slices - podcastSummarySlice", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    jest.useFakeTimers();
    jest.setSystemTime(new Date(1714857600000));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe("fetchPodcastSummary", () => {
    it("should fetch podcast summary if not in store", async () => {
      const store = configureStore<RootState>({
        reducer: {
          podcastSummary: podcastSummaryReducer,
        } as any,
      });

      const mockPodcastSummary = podcastSummaryStateMock.data;
      (PodcastSummaryRepository.getPodcastsSummary as jest.Mock).mockResolvedValue(mockPodcastSummary);

      await store.dispatch(fetchPodcastSummary());

      const state = store.getState().podcastSummary;
      expect(state?.data).toEqual(mockPodcastSummary);
    });

    it("should not fetch podcast summary if already in store and not expired", async () => {
      const store = configureStore<RootState>({
        reducer: {
          podcastSummary: podcastSummaryReducer,
        } as any,
      });

      store.dispatch(setPodcastSummary({
        data: podcastSummaryStateMock.data,
        timestamp: Date.now(),
      }));

      await store.dispatch(fetchPodcastSummary());

      expect(PodcastSummaryRepository.getPodcastsSummary).not.toHaveBeenCalled();
    });
  });

  describe("setPodcastSummary", () => {
    it("should set podcast summary in the store", () => {
      const store = configureStore<RootState>({
        reducer: {
          podcastSummary: podcastSummaryReducer,
        } as any,
      });

      store.dispatch(setPodcastSummary(podcastSummaryStateMock));

      const state = store.getState().podcastSummary;
      expect(state).toEqual(podcastSummaryStateMock);
    });
  });

  describe("selectPodcastSummary", () => {
    it("should select podcast summary from the store", () => {
      const store = configureStore<RootState>({
        reducer: {
          podcastSummary: podcastSummaryReducer,
        } as any,
      });

      store.dispatch(setPodcastSummary(podcastSummaryStateMock));

      const selectedPodcastSummary = selectPodcastSummary(store.getState());
      expect(selectedPodcastSummary).toEqual(podcastSummaryStateMock);
    });
  });
});

