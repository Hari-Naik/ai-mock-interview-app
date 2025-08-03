//import { DashboardTab } from "@/app/dashboard/page";
import { cn } from "@/lib/utils";
import React from "react";

interface TabNavigationProps {
  tabs: { id: string; label: string; component: React.ReactNode }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}
const TabNavigation = ({
  tabs,
  activeTab,
  onTabChange,
}: TabNavigationProps) => {
  return (
    <div className="w-full h-fit p-3 bg-white rounded-md shadow-lg border border-gray-100">
      <ul className="space-y-2">
        {tabs.map(tab => (
          <li key={tab.id}>
            <button
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "w-full p-3 rounded-md text-base text-gray-700",
                "hover:bg-emerald-400 hover:text-white font-medium",
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
