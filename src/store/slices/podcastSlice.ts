import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { IPodcast } from "@/domain/entities/Podcast";
import { IStoreDataBase } from "@/domain/entities/StoreData";
import { RootState } from "../types";
import PodcastRepository from "@/infrastructure/repositories/PodcastRepository";
import { fetchPodcastSummary } from "./podcastSummarySlice";

export const fetchPodcast = createAsyncThunk(
  'podcast/fetchPodcast',
  async (id: string, { dispatch, getState }) => {
    const state = getState() as RootState;
    const currentTime = Date.now();

    if (
      !!state.podcast[id]?.data &&
      currentTime - state.podcast[id]?.timestamp < 24 * 60 * 60 * 1000
    ) {
      return state.podcast[id];
    }

    if (!state?.podcastSummary?.data || state?.podcastSummary?.data.length === 0) {
      await dispatch(fetchPodcastSummary());
    }

    const updatedState = getState() as RootState;
    if (!updatedState?.podcastSummary?.data || updatedState.podcastSummary.data.length === 0) {
      throw new Error("Failed to fetch podcast summary");
    }

    const data = await PodcastRepository.getPodcast(
      id,
      updatedState.podcastSummary.data
    );
    const payload = { id, data: { data: data as IPodcast, timestamp: currentTime } };

    if (data !== null) {
      dispatch(setPodcast(payload));
      return payload.data;
    }
    return null;
  }
);

const podcastSlice = createSlice({
  name: "podcast",
  initialState: {} as Record<string, IStoreDataBase<IPodcast>>,
  reducers: {
    setPodcast: (
      state,
      action: PayloadAction<{ id: string; data: IStoreDataBase<IPodcast> }>
    ) => {
      state[action.payload.id] = action.payload.data;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPodcast.fulfilled, (state, action) => {
      if (action.payload) {
        state[action.payload.data.id] = {
          data: action.payload.data,
          timestamp: Date.now()
        };
      }
    });
  },
});

export const { setPodcast } = podcastSlice.actions;

export const selectPodcast = (id: string) => (state: RootState) =>
  state.podcast[id];

export default podcastSlice.reducer;
