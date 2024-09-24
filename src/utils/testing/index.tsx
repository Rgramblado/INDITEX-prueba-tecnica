import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '@/store/rootReducer';
import { RootState } from '@/store/types';

const mockState: RootState = {
  podcastSummary: {
    data: [{
        id: '1',
        title: 'Filete',
        summary: 'Summary',
        imageUrl: 'ImageUrl',
        artist: 'Artist',
    }, {
        id: '2',
        title: 'Jamon',
        summary: 'Summary',
        imageUrl: 'ImageUrl',
        artist: 'Artist',
    }],
    timestamp: 0,
  },
  podcast: {
    '1': {
      timestamp: 0,
      data: {
        id: '1',
        artist: 'Artist',
        title: 'Title',
        summary: 'Summary',
        imageUrl: 'ImageUrl',
        episodes: [
            {
                id: '1',
                title: 'Title',
                description: 'Description',
                duration: 100,
                audioUrl: 'AudioUrl',
                releaseDate: '2024-01-01',
            },
        ],
      },
    },
  },
};

function render(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({ reducer: rootReducer, preloadedState: mockState }),
    ...renderOptions
  }: {
    preloadedState?: Partial<RootState>;
    store?: ReturnType<typeof configureStore>;
  } = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };



