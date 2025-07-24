import React, { useState } from "react";
import ProgressBar from "../../ProgressBar";
import RadioButton from "../../RadioButton";
import Button from "../../Button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  BUTTON_SIZE,
  BUTTON_TYPES,
  ICON_PLACEMENT,
} from "../../../constants/button";
import Checkbox from "../../Checkbox";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<any>({});

  const formComponentMap: any = {
    radio: RadioButton,
    checkbox: Checkbox,
  };
  // if remove the answers, the next button doesnt disabled

  const questionList = [
    {
      id: "menstrual_cycle",
      title: "Menstrual Cycle",
      question: "How would you describe your menstrual cycle?",
      type: "radio",
      options: [
        { value: "regular", label: "Regular (21-35 days)", score: 0 },
        {
          value: "irregular",
          label: "Irregular (cycles vary significantly)",
          score: 2,
        },
        {
          value: "absent",
          label: "Absent or very infrequent (>35 days)",
          score: 3,
        },
        { value: "heavy", label: "Heavy or prolonged bleeding", score: 1 },
      ],
    },
    {
      id: "weight_changes",
      title: "Weight Management",
      question:
        "Have you experienced unexplained weight gain or difficulty losing weight?",
      type: "radio",
      options: [
        { value: "no", label: "No significant issues", score: 0 },
        {
          value: "mild",
          label: "Mild difficulty maintaining weight",
          score: 1,
        },
        {
          value: "moderate",
          label: "Moderate weight gain or difficulty losing",
          score: 2,
        },
        {
          value: "severe",
          label: "Significant unexplained weight gain",
          score: 3,
        },
      ],
    },
    {
      id: "hair_growth",
      title: "Hair Changes",
      question: "Do you experience excessive hair growth or hair loss?",
      type: "checkbox",
      options: [
        { value: "facial_hair", label: "Facial hair growth", score: 2 },
        { value: "body_hair", label: "Excessive body hair", score: 2 },
        {
          value: "scalp_hair_loss",
          label: "Hair thinning/loss on scalp",
          score: 2,
        },
        { value: "none", label: "No significant hair changes", score: 0 },
      ],
    },
    {
      id: "skin_changes",
      title: "Skin Conditions",
      question: "Do you experience any of the following skin changes?",
      type: "checkbox",
      options: [
        {
          value: "acne",
          label: "Persistent acne (especially jaw/chin)",
          score: 1,
        },
        {
          value: "dark_patches",
          label: "Dark patches of skin (neck, armpits)",
          score: 2,
        },
        { value: "skin_tags", label: "Skin tags", score: 1 },
        { value: "oily_skin", label: "Very oily skin", score: 1 },
        { value: "none", label: "No significant skin changes", score: 0 },
      ],
    },
    {
      id: "insulin_symptoms",
      title: "Metabolic Symptoms",
      question: "Do you experience any of these symptoms?",
      type: "checkbox",
      options: [
        { value: "cravings", label: "Strong sugar/carb cravings", score: 1 },
        { value: "fatigue", label: "Fatigue after meals", score: 1 },
        {
          value: "difficulty_concentrating",
          label: "Difficulty concentrating",
          score: 1,
        },
        { value: "frequent_hunger", label: "Frequent hunger", score: 1 },
        { value: "none", label: "None of these symptoms", score: 0 },
      ],
    },
    {
      id: "family_history",
      title: "Family History",
      question: "Do you have a family history of any of the following?",
      type: "checkbox",
      options: [
        { value: "pcos", label: "PCOS", score: 2 },
        { value: "diabetes", label: "Type 2 Diabetes", score: 1 },
        {
          value: "irregular_periods",
          label: "Irregular menstrual cycles",
          score: 1,
        },
        { value: "infertility", label: "Infertility issues", score: 1 },
        { value: "none", label: "No relevant family history", score: 0 },
      ],
    },
  ];

  const onFormValueChange = (key: string, value: string): void => {
    setAnswers((prevValue: any) => ({
      ...prevValue,
      [key]: value,
    }));
  };

  const getRenderers = ({
    type,
    options,
    id,
  }: {
    type: string;
    options: Array<{ label: string; value: string; score: number }>;
    id: string;
  }): React.ReactElement => {
    const Component = formComponentMap[type];
    return (
      <>
        {options?.map(({ value, label }) => (
          <Component
            key={value}
            value={value}
            label={label}
            checked={value === answers?.[id]}
            selectedValues={answers?.[questionList[currentStep - 1]?.id]}
            onChange={(value: string) =>
              onFormValueChange(questionList[currentStep - 1]?.id, value)
            }
          />
        ))}
      </>
    );
  };

  const getProgressPercentage = () => {
    const finalResult = currentStep / questionList.length;
    const percentage = finalResult * 100;
    return Math.round(percentage);
  };

  const onPreviousButtonClick = () => {
    if (currentStep > 1) {
      setCurrentStep((step) => step - 1);
    }
  };

  const onNextButtonClick = () => {
    if (currentStep !== questionList?.length) {
      setCurrentStep((step) => step + 1);
    }
  };

  console.log(answers);
  return (
    <div className="w-3xl max-w-full flex items-center flex-col bg-white shadow-md border-1 border-gray-100 rounded-xl">
      <div className="bg-gray-50 py-5 px-6 w-full">
        <div className="text-gray-600 text-xs font-medium flex justify-between pb-2">
          Question {currentStep} of {questionList?.length}
          <span>{getProgressPercentage()}% Complete</span>
        </div>
        <ProgressBar progress={getProgressPercentage()} />
      </div>
      <div className="px-6 py-4 w-full">
        <div>
          <h6 className="text-blue-600 text-xs font-medium">
            {questionList[currentStep - 1]?.title}
          </h6>
          <h4 className="text-black-500 font-bold text-xl mt-2 mb-4">
            {questionList[currentStep - 1]?.question}
          </h4>
          {getRenderers(questionList[currentStep - 1] as any)}
        </div>
        <div className="flex justify-between items-center pt-4 pb-2">
          <Button
            variant={BUTTON_TYPES.OUTLINE}
            size={BUTTON_SIZE.SMALL}
            disabled={currentStep === 1}
            icon={ChevronLeft}
            iconPlacement={ICON_PLACEMENT.LEFT}
            title="Previous"
            onClick={onPreviousButtonClick}
          />
          <Button
            disabled={!answers?.[questionList[currentStep - 1]?.id]}
            variant={BUTTON_TYPES.PRIMARY}
            size={BUTTON_SIZE.SMALL}
            icon={ChevronRight}
            title="Next"
            onClick={onNextButtonClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Assessment;
