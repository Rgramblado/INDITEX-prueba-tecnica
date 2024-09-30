import { combineReducers, Reducer } from '@reduxjs/toolkit';
import podcastSummaryReducer from './slices/podcastSummarySlice';
import podcastReducer from './slices/podcastSlice';
import { IStoreData } from '@/domain/entities/StoreData';

const rootReducer = combineReducers({
  podcastSummary: podcastSummaryReducer,
  podcast: podcastReducer,
}) as Reducer<IStoreData>;

export default rootReducer;
