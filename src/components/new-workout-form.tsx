"use client";

import {
  FieldErrors,
  UseFieldArrayAppend,
  UseFormRegister,
} from "react-hook-form";
import { WorkoutCreate } from "@/lib/validations/workoutSchema";
import { TrashIcon } from "@heroicons/react/16/solid";
import { useWorkouts } from "@/lib/hooks/useWorkouts";
import Button from "./ui/button";
import Form from "./ui/form";
import Input from "./ui/input";
import LineBreak from "./ui/line-break";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
  const {
    register,
    handleSubmit,
    errors,
    fields,
    append,
    remove,
    submitWorkout,
    duration,
  } = useWorkouts();

  async function onSubmit(data: WorkoutCreate) {
    const result = await submitWorkout(data);
    if (result) closeModal();
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
        append={append}
        fieldsLength={fields.length}
        duration={duration}
      />
      <LineBreak />
      <FormButtons closeModal={closeModal} />
    </Form>
  );
}

type WorkoutFormInputsProps = {
  register: UseFormRegister<WorkoutCreate>;
  remove: (index: number) => void;
  fields: { id: string }[];
  errors: FieldErrors<WorkoutCreate>;
};

function WorkoutFormInputs({
  register,
  remove,
  fields,
}: WorkoutFormInputsProps) {
  return (
    <>
      <Input
        {...register("title")}
        label="Title:"
        placeholder="Enter workout here..."
      />
      {fields.map((field, index) => {
        const isMultiple = fields.length > 1;
        const exerciseLabel = isMultiple
          ? `Exercise #${index + 1}:`
          : "Exercise:";

        return (
          <div
            key={field.id}
            className="flex flex-wrap sm:flex-nowrap sm:items-end space-y-2 sm:space-y-0 sm:space-x-2"
          >
            <Input
              {...register(`exerciseList.${index}.name`)}
              label={exerciseLabel}
              placeholder="Enter exercise here..."
              className="flex-grow"
            />

            <Input
              type="number"
              {...register(`exerciseList.${index}.minutes`, {
                valueAsNumber: true,
                setValueAs: (value) => {
                  if (value === "" || isNaN(value)) return undefined;
                  return Number(value);
                },
              })}
              label="Minutes:"
              placeholder="eg. 10"
              className="w-20 sm:w-10 shrink-0"
            />
            <Input
              type="number"
              {...register(`exerciseList.${index}.reps`, {
                valueAsNumber: true,
              })}
              label="Reps (optional):"
              placeholder="eg. 10"
              className="w-20 sm:w-10 shrink-0"
            />

            {isMultiple && (
              <Button
                onClick={() => remove(index)}
                className="self-end bg-white mb-3 p-0 w-auto text-background-light hover:text-background-dark hover:bg-white"
              >
                <TrashIcon className="h-5 w-5" />
              </Button>
            )}
          </div>
        );
      })}
    </>
  );
}

type ExerciseInputButtonsProps = {
  append: UseFieldArrayAppend<WorkoutCreate, "exerciseList">;
  fieldsLength: number;
  duration: number;
};

function ExerciseInputButtons({
  append,
  fieldsLength,
  duration,
}: ExerciseInputButtonsProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col sm:flex-row space-x-2">
        <Button
          onClick={() =>
            append({
              name: "",
              minutes: undefined,
              reps: undefined,
            } as unknown as WorkoutCreate["exerciseList"][number])
          }
          disabled={fieldsLength >= 10}
          variant="secondary"
          className="text-sm h-8 my-2 w-40"
        >
          + Add exercise
        </Button>
      </div>
      <p className="text-md font-semibold text-gray-700">
        Total Duration:{" "}
        <span className="font-normal text-black/75">
          {duration ? duration : "--"} minutes
        </span>
      </p>
    </div>
  );
}

type FormButtonsProps = {
  closeModal: () => void;
};

function FormButtons({ closeModal }: FormButtonsProps) {
  return (
    <>
      <Button type="submit">Add Workout</Button>
      <Button onClick={closeModal} variant="secondary">
        Cancel
      </Button>
    </>
  );
}
