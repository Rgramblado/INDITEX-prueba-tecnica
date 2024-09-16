import { formatDate, formatMsToHHMMSS } from "../date.utils";

describe("Utils - Date - Date Utils", () => {
  it("should format date correctly", () => {
    const date = new Date("2024-06-10T10:00:00");
    expect(formatDate(date)).toBe("10/06/2024");
  });

  it("should format milliseconds to HH:MM:SS correctly", () => {
    expect(formatMsToHHMMSS(3661000)).toBe("1:01:01");
  });

  it("should handle zero hours correctly", () => {
    expect(formatMsToHHMMSS(59000)).toBe("0:59");
  });
});
