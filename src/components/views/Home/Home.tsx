import { ArrowRight, Heart, Sparkles } from "lucide-react";
import Button from "../../Button";
import { BUTTON_SIZE, BUTTON_TYPES, ICON_PLACEMENT } from "../../../constants/button";

const Home = () => {
  return (
    <>
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
          onClick={() => {}}
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
    </>
  );
};

export default Home;
