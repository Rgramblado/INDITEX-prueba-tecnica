// Vendors
import React from "react";
import { render, screen } from "@testing-library/react";

// Components
import AsyncLayout from "../AsyncLayout.component";

// Contexts
import { useAppContext } from "@/contexts/app.context";

jest.mock("@/contexts/app.context");

describe("Components - AsyncLayout Component", () => {
  it("should render children when appLoading is false", () => {
    (useAppContext as jest.Mock).mockReturnValue({ appLoading: false });
    render(
      <AsyncLayout>
        <div data-testid="test-child">Test</div>
      </AsyncLayout>
    );
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.queryByTestId("spinner-container")).not.toBeInTheDocument();
  });

  it("should render spinner when appLoading is true", () => {
    (useAppContext as jest.Mock).mockReturnValue({ appLoading: true });
    render(
      <AsyncLayout>
        <div data-testid="test-child">Test</div>
      </AsyncLayout>
    );
    expect(screen.getByTestId("spinner-container")).toBeInTheDocument();
    expect(screen.queryByTestId("test-child")).not.toBeInTheDocument();
  });
});
