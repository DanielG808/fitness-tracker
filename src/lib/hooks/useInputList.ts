import { useState } from "react";
import { InputField } from "../constants/workoutFormInputs";

export function useInputList(
  initialInputs: InputField[],
  inputMinimum: number,
  inputMaximum: number
) {
  const [inputs, setInputs] = useState<InputField[]>(initialInputs);

  function addInput(name: string, placeholder: string) {
    const input = {
      name,
      placeholder,
    };

    setInputs((prev) => {
      if (prev.length < inputMaximum) {
        return [...prev, input];
      }
      return prev;
    });
  }

  function removeInput() {
    setInputs((prev) => {
      if (prev.length > inputMinimum) {
        return prev.slice(0, -1);
      }
      return prev;
    });
  }

  return { inputs, addInput, removeInput };
}
