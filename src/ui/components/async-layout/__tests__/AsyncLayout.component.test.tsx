// Vendors
import React from "react";
import { render, screen } from "@testing-library/react";

// Components
import AsyncLayout from "../AsyncLayout.component";


describe("Components - AsyncLayout Component", () => {
  it("should render children when appLoading is false", () => {
    render(
      <AsyncLayout loading={false}>
        <div data-testid="test-child">Test</div>
      </AsyncLayout>
    );
    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.queryByTestId("spinner-container")).not.toBeInTheDocument();
  });

  it("should render spinner when appLoading is true", () => {
    render(
      <AsyncLayout loading={true}>
        <div data-testid="test-child">Test</div>
      </AsyncLayout>
    );
    expect(screen.getByTestId("spinner-container")).toBeInTheDocument();
    expect(screen.queryByTestId("test-child")).not.toBeInTheDocument();
  });
});
