import { BUTTON_SIZE, BUTTON_TYPES } from "../../../constants/button";
import Button from "../../Button";
import type { ILifestyleProps } from "./types";

const Symptoms = ({ answers, setAnswers }: ILifestyleProps) => {
  const commonSymptoms = [
    "Irregular periods",
    "Missed Periods",
    "heavy bleeding",
    "painful periods",
    "acne",
    "hair loss",
    "excessive hair growth",
    "weight gain",
    "fatigue",
    "mood changes",
    "sleep issues",
    "food cravings",
    "difficulty concentrating",
    "bloating",
    "breast tenderness",
  ];

  return (
    <div>
      <h4 className="text-black-500 font-semibold text-lg mb-3">
        Track Today's Symptoms
      </h4>
      <h5 className="text-gray-700 text-sm mb-3 font-medium">
        Select symptoms you're experiencing:
      </h5>
      <div className="flex flex-wrap text-sm mb-3 text-gray-600">
        {commonSymptoms.map((symptom) => (
          <div
            key={symptom}
            className="flex capitalize items-center pb-1 gap-2 w-1/3 text-center rounded"
          >
            <input id={symptom} type="checkbox" name={symptom} />
            <label htmlFor={symptom}>{symptom}</label>
          </div>
        ))}
      </div>
      <h5 className="flex text-sm text-gray-800 font-medium">
        Overall severity (1-5):
      </h5>
      <div className="flex text-md mt-2 mb-4 gap-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`rounded-full font-xs justify-center flex items-center w-[40px] h-[40px]  ${
              answers.severity === index + 1
                ? "bg-blue-600 text-white"
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="mb-3">
        <h5 className="flex text-sm text-gray-800 font-medium">
          Additional notes:
        </h5>
        <textarea
          className="w-full mt-2 text-sm bg-gray-50 p-2 rounded border-gray-200"
          placeholder="Any additional details about your symptoms today..."
        ></textarea>
      </div>
      <Button
        variant={BUTTON_TYPES.PRIMARY}
        size={BUTTON_SIZE.SMALL}
        onClick={() => {}}
        title="Save Entry"
      />
    </div>
  );
};

export default Symptoms;
