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
import { useEffect } from "react";

type NewWorkoutFormProps = {
  closeModal: () => void;
};

export default function NewWorkoutForm({ closeModal }: NewWorkoutFormProps) {
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
        append={append}
        remove={remove}
        fieldsLength={fields.length}
      />
      <LineBreak />
      <FormButtons closeModal={closeModal} />
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
          <div key={index} className="flex space-x-1">
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
          </div>
        );
      })}
    </>
  );
}

type ExerciseInputButtonsProps = {
  append: (value: {
    name: string;
    minutes: number;
    reps: number | null;
  }) => void;
  remove: (index: number) => void;
  fieldsLength: number;
};

function ExerciseInputButtons({
  append,
  remove,
  fieldsLength,
}: ExerciseInputButtonsProps) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col sm:flex-row space-x-2">
        <Button
          onClick={() => append({ name: "", minutes: 0, reps: null })}
          variant="secondary"
          className="text-sm h-8 my-2 w-40"
        >
          + Add exercise
        </Button>
        {fieldsLength > 1 && (
          <Button
            onClick={() => remove(fieldsLength - 1)}
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
