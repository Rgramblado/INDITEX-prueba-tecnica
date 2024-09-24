import React, { PropsWithChildren } from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from '@/store/rootReducer';
import { RootState } from '@/store/types';
import { podcastSummaryStateMock } from '@/__mocks__/PodcastSummaryState';
import { podcastStateMock } from '@/__mocks__/PodcastState';
const mockState: RootState = {
  podcastSummary: {...podcastSummaryStateMock},
  podcast: {...podcastStateMock}
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



