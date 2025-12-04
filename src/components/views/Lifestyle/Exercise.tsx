import { BUTTON_SIZE, BUTTON_TYPES } from "../../../constants/button";
import Button from "../../Button";
import DatePicker from "../../DatePicker";
import NumberInput from "../../NumberInput";
import Select from "../../Select";
import { ExerciseTypes, Intensity } from "./constants";
import Heading from "./Heading";

const Exercise = () => {
  return (
    <div>
      <Heading heading="Exercise Tracking" />
      <div className="flex justify-between gap-8 mb-4">
        <Select
          className="w-[50%]"
          label="Exercise Type"
          name="exercise_type"
          options={ExerciseTypes}
          onChange={() => {}}
        />
        <NumberInput
          className="w-[50%]"
          name="duration"
          label="Duration (minutes)"
          onChange={() => {}}
        />
      </div>
      <div className="flex justify-between gap-8">
        <Select
          className="w-[50%]"
          label="Intensity"
          name="intensity"
          options={Intensity}
          onChange={() => {}}
        />
        <DatePicker
          className="w-[50%]"
          name="date"
          label="Date"
          onChange={() => {}}
        />
      </div>
      <Button
        variant={BUTTON_TYPES.SUCCESS}
        size={BUTTON_SIZE.SMALL}
        onClick={() => {}}
        title="Log Exercise"
        className="mt-8"
      />
    </div>
  );
};

export default Exercise;
