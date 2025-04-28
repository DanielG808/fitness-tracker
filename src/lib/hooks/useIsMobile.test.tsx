import { act, renderHook } from "@testing-library/react";
import { useIsMobile } from "./useIsMobile";

describe("useIsMobile", () => {
  it("should return true when window width is less than breakpoint", () => {
    window.innerWidth = 500;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(true);
  });

  it("should return false when window width is greater than breakpoint", () => {
    window.innerWidth = 700;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });

  it("should update when window is resized", () => {
    window.innerWidth = 700;

    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);

    act(() => {
      window.innerWidth = 500;
      window.dispatchEvent(new Event("resize"));
    });

    expect(result.current).toBe(true);
  });
});
