export const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <div className="w-100 h-2 border-1 rounded-xl border-gray-50 bg-gray-200">
      <div
        className={`bg-blue-600 h-full rounded-xl transition-all duration-300 ease-in-out`}
        style={{
          width: `${progress}%`,
          minWidth: `${progress > 0 ? "4px" : 0}`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
