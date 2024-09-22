import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store';

const EXPIRATION_TIME = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const expirationMiddleware: Middleware<{}, RootState> = store => next => action => {
  const result = next(action);
  const state = store.getState();
  const currentTime = Date.now();

  // Check and clean podcastSummary
  if (state.podcastSummary && currentTime - state.podcastSummary.timestamp > EXPIRATION_TIME) {
    store.dispatch({ type: 'podcastSummary/setPodcastSummary', payload: null });
  }

  // Check and clean podcasts
  Object.entries(state.podcast).forEach(([id, podcast]) => {
    if (currentTime - podcast.timestamp > EXPIRATION_TIME) {
      store.dispatch({ type: 'podcast/setPodcast', payload: { id, data: null } });
    }
  });

  return result;
};

export default expirationMiddleware;
