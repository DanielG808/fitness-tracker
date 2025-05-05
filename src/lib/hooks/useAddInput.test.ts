import { renderHook, act } from "@testing-library/react";
import { useAddInput } from "./useAddInput";

describe("useAddInput", () => {
  it("initializes with the provided inputs", () => {
    const initialInputs = [{ name: "exercise", placeholder: "Enter exercise" }];
    const { result } = renderHook(() => useAddInput(initialInputs));

    expect(result.current.inputs).toEqual(initialInputs);
  });

  it("adds a new input when addInput is called", () => {
    const initialInputs = [{ name: "exercise", placeholder: "Enter exercise" }];
    const { result } = renderHook(() => useAddInput(initialInputs));

    act(() => {
      result.current.addInput("sets", "Enter number of sets");
    });

    expect(result.current.inputs).toEqual([
      { name: "exercise", placeholder: "Enter exercise" },
      { name: "sets", placeholder: "Enter number of sets" },
    ]);
  });
});
