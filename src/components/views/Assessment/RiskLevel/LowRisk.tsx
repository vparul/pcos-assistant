import { CheckCircle } from "lucide-react";

export const LowRisk = () => {
  return (
    <div className="text-center">
      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
      <h5 className="text-black-500 font-bold text-3xl">Assessment Complete</h5>
      <div className="text-gray-600 my-4">
        Your PCOS risk level:{" "}
        <span className="text-green-600 font-semibold">Low</span>
      </div>

      <div className="bg-gray-50 rounded-md my-4 px-4">
        <div className="text-black-500 py-4 font-semibold">
          What this means:
        </div>

        <p className="text-gray-600 text-sm pb-4">
          Your symptoms suggest a lower likelihood of PCOS. Continue monitoring
          your health and maintain healthy lifestyle habits.
        </p>
      </div>
    </div>
  );
};
