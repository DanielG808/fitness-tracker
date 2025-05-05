import { renderHook, act } from "@testing-library/react";
import { useInputList } from "./useInputList";

describe("useAddInput", () => {
  it("initializes with the provided inputs", () => {
    const initialInputs = [{ name: "exercise", placeholder: "Enter exercise" }];
    const { result } = renderHook(() => useInputList(initialInputs, 1));

    expect(result.current.inputs).toEqual(initialInputs);
  });

  it("adds a new input when addInput is called", () => {
    const initialInputs = [{ name: "exercise", placeholder: "Enter exercise" }];
    const { result } = renderHook(() => useInputList(initialInputs, 1));

    act(() => {
      result.current.addInput("sets", "Enter number of sets");
    });

    expect(result.current.inputs).toEqual([
      { name: "exercise", placeholder: "Enter exercise" },
      { name: "sets", placeholder: "Enter number of sets" },
    ]);
  });

  it("removes the last input when removeInput is called", () => {
    const initialInputs = [
      { name: "exercise", placeholder: "Enter exercise" },
      { name: "sets", placeholder: "Enter number of sets" },
    ];
    const { result } = renderHook(() => useInputList(initialInputs, 1));

    act(() => {
      result.current.removeInput();
    });

    expect(result.current.inputs).toEqual([
      { name: "exercise", placeholder: "Enter exercise" },
    ]);
  });

  it("does not remove last input when minimum inputs is reached", () => {
    const initialInputs = [
      { name: "exercise", placeholder: "Enter exercise" },
      { name: "sets", placeholder: "Enter number of sets" },
    ];
    const { result } = renderHook(() => useInputList(initialInputs, 1));

    act(() => {
      result.current.removeInput();
      result.current.removeInput();
    });

    expect(result.current.inputs).toEqual([
      { name: "exercise", placeholder: "Enter exercise" },
    ]);
  });
});
