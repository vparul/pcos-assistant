import { BUTTON_SIZE, BUTTON_TYPES } from "../../../constants/button";
import Button from "../../Button";
import NumberInput from "../../NumberInput";
import TextArea from "../../TextArea";
import TextInput from "../../TextInput";
import Heading from "./Heading";

const Nutrition = () => {
  return (
    <div>
      <Heading heading="Nutrition Tracking" />

      <div className="gap-3">
        <NumberInput
          label="Water Intake (glasses)"
          onChange={() => {}}
          name="water_intake"
          placeholder="8"
          className="mb-5"
        />

        <TextArea
          label="Meals Today"
          placeholder="Describe your meals, snacks, and any notable dietary choices..."
          name="meals"
          onChange={() => {}}
          className="mb-5"
        />

        <TextInput
          placeholder="List any supplements taken today"
          label="Supplements"
          onChange={() => {}}
          name="supplements"
          className="mb-5"
        />
      </div>
      <Button
        variant={BUTTON_TYPES.WARNING}
        size={BUTTON_SIZE.SMALL}
        onClick={() => {}}
        title="Save Nutrition Log"
      />
    </div>
  );
};

export default Nutrition;
