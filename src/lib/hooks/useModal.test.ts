import { act, renderHook } from "@testing-library/react";
import { useModal } from "./useModal";

describe("useModal", () => {
  it("should initialize with open as false", () => {
    const { result } = renderHook(() => useModal());
    expect(result.current.open).toBe(false);
  });

  it("should open the modal", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
    });

    expect(result.current.open).toBe(true);
  });

  it("should close the modal", () => {
    const { result } = renderHook(() => useModal());

    act(() => {
      result.current.openModal();
      result.current.closeModal();
    });

    expect(result.current.open).toBe(false);
  });
});
