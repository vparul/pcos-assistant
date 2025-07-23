import React, { useState } from "react";
import ProgressBar from "../../ProgressBar";
import RadioButton from "../../RadioButton";

const Assessment = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState<any>({});

  const formComponentMap: any = {
    radio: RadioButton,
    checkbox: null,
  };

  const questionList = [
    {
      id: "menstrual_cycle",
      question: "How would you describe your menstrual cycle?",
      category: "Menstrual Cycle",
      type: "radio",
      options: [
        {
          label: "Regular (21-35 days)",
          value: "regular",
          score: 0,
        },
        {
          label: "Irregular (cycles vary significantly)",
          value: "irregular",
          score: 2,
        },
        {
          label: "Absent or very infrequent(>35 days)",
          value: "absent",
          score: 3,
        },
        {
          label: "Heavy or prolonged bleeding",
          value: "heavy",
          score: 1,
        },
      ],
    },
    {
      id: "menstrual_cycle",
      question: "How would you describe your menstrual cycle",
      category: "Menstrual Cycle",
      type: "radio",
      options: [
        {
          label: "Regular (21-35 days)",
          value: "regular",
          score: 0,
        },
        {
          label: "Irregular (cycles vary significantly)",
          value: "irregular",
          score: 2,
        },
        {
          label: "Absent or very infrequent(>35 days)",
          value: "absent",
          score: 3,
        },
        {
          label: "Heavy or prolonged bleeding",
          value: "heavy",
          score: 1,
        },
      ],
    },
    {
      id: "menstrual_cycle",
      question: "How would you describe your menstrual cycle",
      category: "Menstrual Cycle",
      type: "radio",
      options: [
        {
          label: "Regular (21-35 days)",
          value: "regular",
          score: 0,
        },
        {
          label: "Irregular (cycles vary significantly)",
          value: "irregular",
          score: 2,
        },
        {
          label: "Absent or very infrequent(>35 days)",
          value: "absent",
          score: 3,
        },
        {
          label: "Heavy or prolonged bleeding",
          value: "heavy",
          score: 1,
        },
      ],
    },
    {
      id: "menstrual_cycle",
      question: "How would you describe your menstrual cycle",
      category: "Menstrual Cycle",
      type: "radio",
      options: [
        {
          label: "Regular (21-35 days)",
          value: "regular",
          score: 0,
        },
        {
          label: "Irregular (cycles vary significantly)",
          value: "irregular",
          score: 2,
        },
        {
          label: "Absent or very infrequent(>35 days)",
          value: "absent",
          score: 3,
        },
        {
          label: "Heavy or prolonged bleeding",
          value: "heavy",
          score: 1,
        },
      ],
    },
    {
      id: "menstrual_cycle",
      question: "How would you describe your menstrual cycle",
      category: "Menstrual Cycle",
      type: "radio",
      options: [
        {
          label: "Regular (21-35 days)",
          value: "regular",
          score: 0,
        },
        {
          label: "Irregular (cycles vary significantly)",
          value: "irregular",
          score: 2,
        },
        {
          label: "Absent or very infrequent(>35 days)",
          value: "absent",
          score: 3,
        },
        {
          label: "Heavy or prolonged bleeding",
          value: "heavy",
          score: 1,
        },
      ],
    },
    {
      id: "menstrual_cycle",
      question: "How would you describe your menstrual cycle",
      category: "Menstrual Cycle",
      type: "radio",
      options: [
        {
          label: "Regular (21-35 days)",
          value: "regular",
          score: 0,
        },
        {
          label: "Irregular (cycles vary significantly)",
          value: "irregular",
          score: 2,
        },
        {
          label: "Absent or very infrequent(>35 days)",
          value: "absent",
          score: 3,
        },
        {
          label: "Heavy or prolonged bleeding",
          value: "heavy",
          score: 1,
        },
      ],
    },
  ];

  const onFormValueChange = (key: string, value: string): void => {
    setFormValues((prevValue: any) => ({
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
            checked={value === formValues?.[id]}
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

  return (
    <div className="max-w-full flex items-center flex-col bg-white shadow-md border-1 border-gray-100 rounded-xl">
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
            {questionList[currentStep - 1]?.category}
          </h6>
          <h4 className="text-black-500 font-bold text-xl mt-2 mb-4">
            {questionList[currentStep - 1]?.question}
          </h4>
          {getRenderers(questionList[currentStep - 1] as any)}
        </div>
      </div>
    </div>
  );
};

export default Assessment;
