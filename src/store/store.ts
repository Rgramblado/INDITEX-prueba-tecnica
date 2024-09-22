import { configureStore, Middleware } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import expirationMiddleware from "./middleware/expirationMiddleware";
import { IStoreData } from "@/domain/entities/StoreData";

const loadState = (): IStoreData => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return {
        podcastSummary: {
          data: [],
          timestamp: 0,
        },
        podcast: {},
      };
    }
    return JSON.parse(serializedState) as IStoreData;
  } catch (err) {
    return {
      podcastSummary: {
        data: [],
        timestamp: 0,
      },
      podcast: {},
    };
  }
};

const saveState = (state: IStoreData) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch {
    console.error("Error saving state");
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: rootReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(expirationMiddleware as Middleware),
});

store.subscribe(() => {
  saveState(store.getState());
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
