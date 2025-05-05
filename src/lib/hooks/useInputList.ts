import { useState } from "react";
import { InputField } from "../constants/workoutFormInputs";

export function useInputList(initialInputs: InputField[], inputMinimum: number) {
  const [inputs, setInputs] = useState<InputField[]>(initialInputs);

  function addInput(name: string, placeholder: string) {
    const input = {
      name,
      placeholder,
    };

    setInputs((prev) => [...prev, input]);
  }

  function removeInput() {
    if (inputs.length > inputMinimum) {
      setInputs(prev => prev.slice(0, -1));
    }
  }

  return { inputs, addInput, removeInput };
}
