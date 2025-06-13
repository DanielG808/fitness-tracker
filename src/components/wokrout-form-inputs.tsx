import { Workout, WorkoutCreate } from "@/lib/validations/workoutSchema";
import { TrashIcon } from "@heroicons/react/16/solid";
import { UseFormRegister, UseFieldArrayAppend } from "react-hook-form";
import Button from "./ui/button";
import Input from "./ui/input";

type WorkoutFormInputsProps = {
  register: UseFormRegister<WorkoutCreate>;
  append: UseFieldArrayAppend<WorkoutCreate, "exerciseList">;
  remove: (index: number) => void;
  fields: { id: string }[];

  duration: number;
};

export default function WorkoutFormInputs({
  register,
  append,
  remove,
  fields,

  duration,
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
                setValueAs: (v) =>
                  v === "" || isNaN(Number(v)) ? undefined : Number(v),
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
            disabled={fields.length >= 10}
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
    </>
  );
}
