// Vendors
import { renderHook } from "@testing-library/react";

// Hooks
import useMain from "../Main.hook";

// Handlers
import MainHandlers from "../../handlers/Main.handlers";

jest.mock("@/contexts/app.context", () => ({
    useAppContext: jest.fn().mockReturnValue({
        setAppLoading: jest.fn()
    })
}));

jest.mock("../../handlers/Main.handlers");

describe("Views - Main - Hooks", () => {
    it("should return handleSearch, podcasts, and search", () => {
        (MainHandlers as jest.Mock).mockReturnValue({
            handleSearch: jest.fn(),
            handleGetPodcasts: jest.fn()
        });
        const { result } = renderHook(useMain);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.podcasts).toBeDefined();
        expect(result.current.search).toBeDefined();
    });

    it("should call handleGetPodcasts on mount", () => {
        const mockHandleGetPodcasts = jest.fn();
        (MainHandlers as jest.Mock).mockReturnValue({
            handleSearch: jest.fn(),
            handleGetPodcasts: mockHandleGetPodcasts
        });

        renderHook(useMain);
        expect(mockHandleGetPodcasts).toHaveBeenCalled();
    });
});
