// Vendors
import React from "react";
import { render, renderHook } from "@testing-library/react";
// Contexts
import { AppContextProvider, useAppContext } from "@/contexts/app.context";

describe("Contexts - App Context", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("should render useAppContext hook", () => {
    const { result } = renderHook(() => useAppContext());
    expect(result.current).toBeDefined();
    expect(result.current.isProduction).toBe(false);
  });


  it("should render AppContextProvider", () => {
    const { container } = render(
      <AppContextProvider>
        <div>Test</div>
      </AppContextProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
