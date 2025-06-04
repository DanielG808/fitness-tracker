"use client";

import {
  FieldErrors,
  useFieldArray,
  useForm,
  UseFormRegister,
  useWatch,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  WorkoutCreate,
  workoutCreateSchema,
} from "@/lib/validations/workoutSchema";
import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import LineBreak from "./ui/line-break";
import {
  inputMinimum,
  inputMaximum,
  workoutFormInputs,
} from "@/lib/constants/workoutFormInputs";
import { useInputList } from "@/lib/hooks/useInputList";
import { useEffect } from "react";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const { inputs, addInput, removeInput } = useInputList(
    workoutFormInputs,
    inputMinimum,
    inputMaximum
  );

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<WorkoutCreate>({
    resolver: zodResolver(workoutCreateSchema),
    defaultValues: {
      title: "",
      duration: 0,
      exerciseList: [{ name: "", minutes: 0, reps: null }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "exerciseList",
  });

  const exerciseList = useWatch({ control, name: "exerciseList" });

  useEffect(() => {
    const total = exerciseList?.reduce(
      (sum, ex) => sum + (Number(ex.minutes) || 0),
      0
    );
    setValue("duration", total);
  }, [exerciseList, setValue]);

  function onSubmit(data: WorkoutCreate) {
    console.log("Workout data submitted:", data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <WorkoutFormInputs
        register={register}
        fields={fields}
        errors={errors}
        remove={remove}
      />
      <ExerciseInputButtons
        inputs={inputs}
        addInput={addInput}
        removeInput={removeInput}
      />
      <LineBreak />
      <FormButtons
        closeModal={closeModal}
        handleSubmit={handleSubmit(onSubmit)}
      />
    </Form>
  );
}

type WorkoutFormInputsProps = {
  register: UseFormRegister<WorkoutCreate>;
  fields: { id: string }[];
  errors: FieldErrors<WorkoutCreate>;
  remove: (index: number) => void;
};

function WorkoutFormInputs({
  register,
  fields,
  errors,
  remove,
}: WorkoutFormInputsProps) {
  return (
    <>
      <Input {...register("title")} placeholder="Enter workout here..." />
      {fields.map((field, index) => (
        <div key={index} className="flex space-x-1">
          <Input
            {...register(`exerciseList.${index}.name`)}
            placeholder="Enter exercise here..."
            className="flex-grow"
          />

          <Input
            type="number"
            name="Minutes"
            {...(register(`exerciseList.${index}.minutes`),
            { valueAsNumber: true })}
            placeholder="eg. 10"
            className="w-20 sm:w-10 shrink-0"
          />
          <Input
            type="number"
            name="Reps (optional)"
            {...(register(`exerciseList.${index}.reps`),
            { valueAsNumber: true })}
            placeholder="eg. 10"
            className="w-20 sm:w-10 shrink-0"
          />
        </div>
      ))}
    </>
  );
}

type ExerciseInputButtonsProps = {
  inputs: { name: string; placeholder: string }[];
  addInput: (name: string, placeholder: string) => void;
  removeInput: () => void;
};

function ExerciseInputButtons({
  inputs,
  addInput,
  removeInput,
}: ExerciseInputButtonsProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col sm:flex-row space-x-2">
        <Button
          onClick={() => addInput("Exercise", "Enter an exercise...")}
          variant="secondary"
          className="text-sm h-8 my-2 w-40"
        >
          + Add exercise
        </Button>
        {inputs.length > inputMinimum && (
          <Button
            onClick={() => removeInput()}
            variant="secondary"
            className="text-sm h-8 my-2 w-40"
          >
            - Remove exercise
          </Button>
        )}
      </div>
      <p className="text-md font-semibold text-gray-700">
        Total Duration:{" "}
        <span className="font-normal text-black/75">{"--"} minutes</span>
      </p>
    </div>
  );
}

type FormButtonsProps = {
  closeModal: () => void;
  handleSubmit: () => void;
};

function FormButtons({ closeModal, handleSubmit }: FormButtonsProps) {
  return (
    <>
      <Button onClick={handleSubmit} type="submit">
        Add Workout
      </Button>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
    </>
  );
}
