import React from "react";
import { render, screen } from "@testing-library/react";

// Views
import MainView from "../Main.view";
import { Podcast } from "@/types/Podcast.type";

// Mocks
jest.mock("@/contexts/app.context", () => ({
  __esModule: true,
  default: {
    useAppContext: jest.fn(() => ({
      isProduction: false,
      appLoading: false,
      setAppLoading: jest.fn(),
    })),
  },
}));

jest.mock("react-router-dom", () => ({
  Link: jest.fn(({ children, to }) => <a href={to}>{children}</a>),
}));

const mockPodcasts: Podcast[] = [
  {
    id: "1",
    title: "Podcast 1",
    name: "",
    images: [],
    summary: "",
    price: {
      amount: 0,
      currency: "",
    },
    contentType: "",
    rights: "",
    link: "",
    artist: "",
    category: {
      id: "",
      term: "",
      scheme: "",
      label: "",
    },
    releaseDate: new Date("2024-01-01"),
  },
  {
    id: "2",
    name: "Podcast 2",
    artist: "Artist 2",
    images: [{ url: "https://example.com/image2.jpg", height: 100 }],
    summary: "",
    price: {
      amount: 0,
      currency: "",
    },
    contentType: "",
    rights: "",
    title: "",
    link: "",
    category: {
      id: "",
      term: "",
      scheme: "",
      label: "",
    },
    releaseDate: new Date("2024-01-01"),
  },
];

jest.mock("@/components/async-layout/AsyncLayout.component", () => ({
  __esModule: true,
  default: jest.fn(({ children }) => (
    <div data-testid="async-layout">{children}</div>
  )),
}));

jest.mock("../hook/Main.hook", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    handleSearch: jest.fn(),
    podcasts: mockPodcasts,
    search: "",
  })),
}));

describe("Views - Main", () => {
  it("should render the main view", () => {
    render(<MainView />);
    expect(screen.getByTestId("async-layout")).toBeInTheDocument();
    expect(screen.getByTestId("search-bar")).toBeInTheDocument();
    expect(screen.getAllByTestId("podcast-card")).toHaveLength(2);
  });
});
