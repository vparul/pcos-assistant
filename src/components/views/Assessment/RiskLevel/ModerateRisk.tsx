import { AlertCircle } from "lucide-react";

export const ModerateRisk = () => {
  return (
    <div className="text-center">
      <AlertCircle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
      <h5 className="text-black-500 font-bold text-3xl">Assessment Complete</h5>
      <div className="text-gray-600 my-4">
        Your PCOS risk level:{" "}
        <span className="text-yellow-600 font-semibold">Moderate</span>
      </div>

      <div className="bg-gray-50 rounded-md my-4 px-4">
        <div className="text-black-500 py-4 font-semibold">
          What this means:
        </div>

        <p className="text-gray-600 text-sm pb-4">
          Your symptoms suggest a higher likelihood of PCOS. We recommend
          consulting with a healthcare provider for proper diagnosis and
          treatment options.
        </p>
      </div>
    </div>
  );
};
