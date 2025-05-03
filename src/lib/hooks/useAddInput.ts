import { useState } from "react";
import { InputField } from "../constants/workoutFormInputs";

export function useAddInput(initialInputs: InputField[]) {
  const [inputs, setInputs] = useState<InputField[]>(initialInputs);

  function addInput(name: string, placeholder: string) {
    const input = {
      name,
      placeholder,
    };

    setInputs((prev) => [...prev, input]);
  }

  return { inputs, addInput };
}
