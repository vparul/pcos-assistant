import {
  Heart,
  Moon,
} from "lucide-react";
import React from "react";
import type { NavigationProps } from "./types";
import { navigationTabs } from "../../constants/navigation";

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {

  return (
    <nav className="bg-white border-blue-100 shadow-lg border-b transition-colors duration-200 py-3">
      <div className="flex justify-between max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="text-base font-bold">PCOS Assistant</span>
          </div>
        </div>
        <div className=" flex items-center space-x-1">
          {navigationTabs?.map((item) => {
            const Icon = item.icon;
            return (
              <button
                onClick={() => setActiveTab(item)}
                key={item.id}
                className={`flex cursor-pointer items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab?.id === item.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:border-0"
                }`}
              >
                <Icon size={12} />
                <span className="text-xs">{item.title}</span>
              </button>
            );
          })}
          <button className="px-2 cursor-pointer py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:text-blue-600 hover:bg-blue-50 hover:border-0">
            <Moon size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
