import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { IPodcastSummary } from '@/domain/entities/PodcastSummary';
import { IStoreDataBase } from '@/domain/entities/StoreData';
import { RootState } from '../types';
import PodcastSummaryRepository from '@/infrastructure/repositories/PodcastSummaryRepository';

export const fetchPodcastSummary = createAsyncThunk(
  'podcastSummary/fetchPodcastSummary',
  async (_, { getState }) => {
    const state = getState() as RootState;
    const currentTime = Date.now();

    if (!!state?.podcastSummary?.data && currentTime - state.podcastSummary.timestamp < 24 * 60 * 60 * 1000) {
      return state.podcastSummary;
    }
    
    const data = await PodcastSummaryRepository.getPodcastsSummary();
    return { data, timestamp: currentTime };
  }
);

const podcastSummarySlice = createSlice({
  name: 'podcastSummary',
  initialState: null as IStoreDataBase<IPodcastSummary[]> | null,
  reducers: {
    setPodcastSummary: (_, action: PayloadAction<IStoreDataBase<IPodcastSummary[]>>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPodcastSummary.fulfilled, (_, action) => {
      return action.payload;
    });
  },
});

export const { setPodcastSummary } = podcastSummarySlice.actions;

export const selectPodcastSummary = (state: RootState) => state.podcastSummary;

export default podcastSummarySlice.reducer;
