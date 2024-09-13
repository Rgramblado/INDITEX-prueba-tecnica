import { saveOnLocalStorage, getFromLocalStorage } from "../cache.utils";

describe("Utils - Cache - Cache Utils", () => {
    // Mock localStorage
    const localStorageMock = {
        getItem: jest.fn(),
        setItem: jest.fn(),
        removeItem: jest.fn(),
    };

    beforeEach(() => {
        Object.defineProperty(window, "localStorage", { value: localStorageMock });
    });

    it("should save on local storage", () => {
        const timestamp = new Date("2024-06-10T10:00:00").getTime();
        saveOnLocalStorage("test", "test", timestamp);
        expect(localStorageMock.setItem).toHaveBeenCalledWith("test", JSON.stringify({ data: "test", timestamp }));
    });

    it("should get from local storage (valid timestamp)", () => {
        // Mock getItem to return the saved data
        localStorageMock.getItem.mockReturnValue(JSON.stringify({ data: "test", timestamp: new Date("2024-06-10T09:00:00").getTime() }));
        const data = getFromLocalStorage("test", new Date("2024-06-10T10:00:00").getTime());
        expect(data).toBe("test");
    });

    it("should get from local storage (invalid timestamp)", () => {
        localStorageMock.getItem.mockReturnValue(JSON.stringify({ data: "test", timestamp: new Date("2024-06-09T09:00:00").getTime() }));
        const data = getFromLocalStorage("test", new Date("2024-06-10T10:00:00").getTime());
        expect(data).toBeNull();
    });

    it("should return null if item is not found", () => {
        localStorageMock.getItem.mockReturnValue(null);
        const data = getFromLocalStorage("test", new Date("2024-06-10T10:00:00").getTime());
        expect(data).toBeNull();
    });
}); 