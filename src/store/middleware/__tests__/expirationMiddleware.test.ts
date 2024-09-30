import { MiddlewareAPI, Dispatch, AnyAction } from '@reduxjs/toolkit';
import expirationMiddleware from '../expirationMiddleware'; // Ajusta la ruta según tu estructura
import { RootState } from '../../types/index';

describe('Store - Middleware - expirationMiddleware', () => {
  const TWO_DAYS = 24 * 60 * 60 * 1000 * 2; // 48 hours in milliseconds

  let store: MiddlewareAPI<Dispatch<AnyAction>, RootState>;
  let next: jest.Mock;
  let dispatch: jest.Mock;

  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(TWO_DAYS));

    dispatch = jest.fn();
    next = jest.fn();

    store = {
      getState: jest.fn(),
      dispatch,
    };
  });

  it('should clear podcastSummary if expired', () => {
    const expiredTimestamp = TWO_DAYS / 2 - 1000;
    const action = { type: 'TEST_ACTION' };

    (store.getState as jest.Mock).mockReturnValue({
      podcastSummary: {
        data: { /* example data */ },
        timestamp: expiredTimestamp,
      },
      podcast: {},
    });

    expirationMiddleware(store)(next)(action);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'podcastSummary/setPodcastSummary',
      payload: null,
    });
  });

  it('should not clear podcastSummary if not expired', () => {
    const validTimestamp = (TWO_DAYS / 2) + 1000;
    const action = { type: 'TEST_ACTION' };

    (store.getState as jest.Mock).mockReturnValue({
      podcastSummary: {
        data: { /* example data */ },
        timestamp: validTimestamp,
      },
      podcast: {},
    });

    expirationMiddleware(store)(next)(action);

    expect(dispatch).not.toHaveBeenCalledWith({
      type: 'podcastSummary/setPodcastSummary',
      payload: null,
    });
  });

  it('should clear expired podcasts', () => {
    const expiredTimestamp = TWO_DAYS / 2 - 1000;
    const action = { type: 'TEST_ACTION' };

    (store.getState as jest.Mock).mockReturnValue({
      podcastSummary: {},
      podcast: {
        'podcast1': {
          data: { /* example data */ },
          timestamp: expiredTimestamp,
        },
      },
    });

    expirationMiddleware(store)(next)(action);

    expect(dispatch).toHaveBeenCalledWith({
      type: 'podcast/setPodcast',
      payload: { id: 'podcast1', data: null },
    });
  });

  it('should not clear non-expired podcasts', () => {
    const validTimestamp = (TWO_DAYS / 2) + 1000;
    const action = { type: 'TEST_ACTION' };

    (store.getState as jest.Mock).mockReturnValue({
      podcastSummary: {},
      podcast: {
        'podcast1': {
          data: { /* example data */ },
          timestamp: validTimestamp,
        },
      },
    });

    expirationMiddleware(store)(next)(action);

    expect(dispatch).not.toHaveBeenCalledWith({
      type: 'podcast/setPodcast',
      payload: { id: 'podcast1', data: null },
    });
  });

  it('should call next with the provided action', () => {
    const action = { type: 'TEST_ACTION' };

    (store.getState as jest.Mock).mockReturnValue({
        podcastSummary: {},
        podcast: {},
    });

    expirationMiddleware(store)(next)(action);

    expect(next).toHaveBeenCalledWith(action);
  });
});
