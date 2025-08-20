import { ArrowRight, Heart, Shield, Sparkles, TrendingUp } from "lucide-react";
import Button from "../../Button";
import {
  BUTTON_SIZE,
  BUTTON_TYPES,
  ICON_PLACEMENT,
} from "../../../constants/button";
import type { ActiveITabProps } from "../../../types";
import { navigationTabs } from "../../../constants/navigation";
import Card from "../../Card";

const Home = ({ setActiveTab }: ActiveITabProps) => {
  return (
    <div className="flex flex-col max-w-[90vw] items-center">
      <div className="bg-blue-100 rounded-2xl p-4 m-5">
        <Heart className="h-10 w-10 text-blue-600" />
      </div>
      <h1 className="text-black-500 font-bold text-5xl">Your Personal</h1>
      <h1 className="text-blue-600 font-bold text-5xl pt-2">
        PCOS Health Assistant
      </h1>
      <p className="max-w-[40%] text-center py-4 text-gray-600 text-md">
        Take control of your health with our comprehensive PCOS prediction tool
        and AI-powered lifestyle recommendations. Track symptoms, monitor
        progress, and receive evidence-based guidance tailored to your unique
        needs.
      </p>

      <div className="flex gap-3 mt-2">
        <Button
          title="Start Assessment"
          icon={ArrowRight}
          variant={BUTTON_TYPES.PRIMARY}
          size={BUTTON_SIZE.MEDIUM}
          onClick={() => setActiveTab(navigationTabs[1])}
        />
        <Button
          title="Try AI Diet Assistant"
          icon={Sparkles}
          iconPlacement={ICON_PLACEMENT.LEFT}
          variant={BUTTON_TYPES.SECONDARY}
          size={BUTTON_SIZE.MEDIUM}
          onClick={() => {}}
        />
      </div>
      <div className="flex max-w-3xl mx-auto mt-10 gap-6">
        <Card
          heading="Risk Assessment"
          subHeading="Comprehensive questionnaire to evaluate your PCOS risk factors and symptoms"
          icon={
            <div className="p-2 bg-blue-100 border-blue-50 border-1 rounded-lg mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
          }
        />

        <Card
          heading="Progress Tracking"
          subHeading="Monitor your symptoms, lifestyle changes, and health improvements over time"
          icon={
            <div className="p-2 bg-green-100 border-green-50 border-1 rounded-lg mb-4">
              <TrendingUp className="w-5 h-5 text-green-600" />
            </div>
          }
        />

        <Card
          heading="AI-Powered Care"
          subHeading="Receive AI-generated diet plans and personalized recommendations for optimal health"
          icon={
            <div className="p-2 bg-orange-100 border-orange-50 border-1 rounded-lg mb-4">
              <Sparkles className="w-5 h-5 text-orange-600" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default Home;
