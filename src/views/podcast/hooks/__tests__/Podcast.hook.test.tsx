import { renderHook } from '@testing-library/react';
import usePodcast from '../Podcast.hook';
import { useAppContext } from "@/contexts/app.context";
import PodcastHandlers from "../../handlers/Podcast.handlers";

jest.mock("@/contexts/app.context", () => ({
    useAppContext: jest.fn()
}));
jest.mock("../../handlers/Podcast.handlers");

describe('usePodcast', () => {
  const mockSetAppLoading = jest.fn();
  const mockHandleGetPodcastDetails = jest.fn();

  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({ setAppLoading: mockSetAppLoading });
    (PodcastHandlers as jest.Mock).mockReturnValue({ handleGetPodcastDetails: mockHandleGetPodcastDetails });
  });

  it('should call handleGetPodcastDetails on mount', () => {
    renderHook(() => usePodcast());

    expect(mockHandleGetPodcastDetails).toHaveBeenCalledTimes(1);
  });

  it('should return podcast state', async () => {

    const { result } = renderHook(() => usePodcast());

    expect(result.current).toHaveProperty('podcast');
  });
});
