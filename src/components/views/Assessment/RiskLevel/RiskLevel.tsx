import { Info } from "lucide-react";
import { RISK_LEVEL } from "../../../../constants/assessment";
import { BUTTON_SIZE, BUTTON_TYPES } from "../../../../constants/button";
import Button from "../../../Button";
import { HighRisk } from "./HighRisk";
import { LowRisk } from "./LowRisk";
import { ModerateRisk } from "./ModerateRisk";
import { navigationTabs } from "../../../../constants/navigation";

export const RiskLevel = ({
  riskLevel,
  setActiveTab,
}: {
  riskLevel: string;
  setActiveTab: any;
}) => {
  const { LOW, MODERATE, HIGH } = RISK_LEVEL;

  const componentMap = {
    [LOW]: <LowRisk />,
    [MODERATE]: <ModerateRisk />,
    [HIGH]: <HighRisk />,
  };
  return (
    <div className="p-6 flex flex-col items-center">
      {componentMap[riskLevel]}
      <div className="flex text-xs bg-blue-50 px-3 py-5 mb-4 rounded-lg gap-0.5 border-1 border-blue-100">
        <Info className="h-4 w-4 text-blue-600 flex-shrink-0" />
        <div className="flex text-md">
          <p className="text-blue-800 text-center">
            <strong className="text-blue-900">Disclaimer: </strong> This
            assessment is for informational purposes only and is not a
            substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
      <Button
        size={BUTTON_SIZE.SMALL}
        variant={BUTTON_TYPES.PRIMARY}
        title="Continue to Dashboard"
        onClick={() => setActiveTab(navigationTabs[5])}
      />
    </div>
  );
};

export default RiskLevel;
