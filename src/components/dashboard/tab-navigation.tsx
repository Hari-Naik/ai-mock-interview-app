import { DashboardTab, TabId } from "@/app/dashboard/page";
import { cn } from "@/lib/utils";
import React from "react";

interface TabNavigationProps {
  tabs: DashboardTab[];
  activeTab: string;
  onTabChange: (tabId: TabId) => void;
}
const TabNavigation = ({
  tabs,
  activeTab,
  onTabChange,
}: TabNavigationProps) => {
  return (
    <div className="w-full md:w-[30%] h-fit p-3 bg-white rounded-md shadow-md border border-gray-100">
      <ul className="space-y-2">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "w-full p-3 rounded-md text-base text-gray-700",
                "hover:bg-emerald-400 hover:text-white",
                "transition-colors duration-200 text-left cursor-pointer",
                activeTab === tab.id && "bg-emerald-500 text-white"
              )}>
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabNavigation;
