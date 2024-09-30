import { ThunkAction, Action } from '@reduxjs/toolkit';
import { IStoreData } from '@/domain/entities/StoreData';

export type RootState = IStoreData;
export type AppDispatch = (action: Action) => void;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;