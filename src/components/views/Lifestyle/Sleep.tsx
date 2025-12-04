import { BUTTON_SIZE, BUTTON_TYPES } from "../../../constants/button";
import Button from "../../Button";
import NumberInput from "../../NumberInput";
import Select from "../../Select";
import TextArea from "../../TextArea";
import Heading from "./Heading";

const Sleep = () => {
  return (
    <div>
      <Heading heading="Sleep Tracking" />

      <div className="gap-3">
        <NumberInput
          label="Hours of Sleep"
          onChange={() => {}}
          name="sleep_hours"
          placeholder="8"
          className="mb-5"
        />

        <Select
          className="w-[50%]"
          label="Intensity"
          name="intensity"
          options={Intensity}
          onChange={() => {}}
        />
      </div>

      <TextArea
        label="Sleep Notes"
        placeholder="Any factors affecting your sleep, dreams, wake-ups, etc."
        name="sleep_notes"
        onChange={() => {}}
        className="mb-5"
      />

      <Button
        variant={BUTTON_TYPES.WARNING}
        size={BUTTON_SIZE.SMALL}
        onClick={() => {}}
        title="Save Nutrition Log"
      />
    </div>
  );
};

export default Sleep;
