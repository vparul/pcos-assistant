import React, { useState } from "react";
import {
  Plus,
  Calendar,
  Activity,
  Utensils,
  Moon,
  TrendingUp,
} from "lucide-react";
import type { TabList } from "../../Tab/types";
import Tab from "../../Tab";
import Symptoms from "./Symptoms";
import Exercise from "./Exercise";
import Nutrition from "./Nutrition";
import Sleep from "./Sleep";

const Lifestyle = () => {
  const tabs: TabList[] = [
    {
      title: "Symptoms",
      icon: TrendingUp,
      component: Symptoms,
    },
    {
      title: "Exercise",
      icon: Activity,
      component: Exercise,
    },
    {
      title: "Nutrition",
      icon: Utensils,
      component: Nutrition,
    },
    {
      title: "Sleep",
      icon: Moon,
      component: Sleep,
    },
  ];

  const [selectedTab, setSelectedTab] = useState<string>(tabs[0].title);

  const onTabClick = (selectedTab: string) => {
    setSelectedTab(selectedTab);
  };

  return (
    <div>
      <h2 className="text-black font-bold text-3xl pb-2">Lifestyle Tracker</h2>
      <p className="text-gray-700">
        Monitor your daily symptoms, exercise, nutrition, and sleep patterns to
        better understand your health.
      </p>
      <div className="mt-10">
        <Tab list={tabs} onClick={onTabClick} selectedTab={selectedTab} />
      </div>
    </div>
  );
};

export default Lifestyle;
