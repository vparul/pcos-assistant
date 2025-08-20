import React, { useMemo } from "react";
import type { ITabProps } from "./types";

export const Tab = ({ list, onClick, selectedTab, className }: ITabProps) => {
  const selectedTabItem = useMemo(() => {
    return list.find((item) => item.title === selectedTab);
  }, [list, selectedTab]);

  const SelectedComponent = selectedTabItem?.component;

  return (
    <div>
      <div className="flex items-center gap-6 border-b border-gray-200">
        {list.map(({ title, disabled, icon }, index) => {
          const Icon = icon;
          return (
            <button
              className={`flex cursor-pointer  items-center gap-3 pb-4 px-3 text-sm font-medium ${
                selectedTab === title
                  ? "text-blue-600 border-b border-blue-600"
                  : "text-gray-500 border-b border-gray-100 hover:text-gray-700 hover:border-b hover:border-gray-500"
              } ${className}`}
              disabled={disabled}
              key={`${title}_${index}`}
              onClick={() => onClick(title)}
            >
              {Icon && <Icon size={20} />}
              {title}
            </button>
          );
        })}
      </div>
      {SelectedComponent && (
        <div className="my-4 min-h-[100px] bg-white border shadow-md py-5 px-5 border-1 border-gray-100 rounded-xl">
          {SelectedComponent}
        </div>
      )}
    </div>
  );
};
export default React.memo(Tab);
