import React from "react";
import { render, screen, waitFor, fireEvent } from "@/utils/testing";

// Views
import MainView from "../Main.view";

jest.mock("react-router-dom", () => ({
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
}));




describe("Views - Main", () => {
  it("should render the main view", async () => {
    render(<MainView />);
    await waitFor(() => {
      expect(screen.getByTestId("search-bar")).toBeInTheDocument();
      expect(screen.getAllByTestId("podcast-card")).toHaveLength(2);
    });
  });

  it("should render 1 podcast card when search phrase is 'Tit'", () => {
    render(<MainView />);
    const searchInput = screen.getByRole("textbox")
    fireEvent.change(searchInput, { target: { value: "Jam" } });
    expect(screen.getAllByTestId("podcast-card")).toHaveLength(1);
  });
});
