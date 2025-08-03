"use client";
import React, { useMemo, useState } from "react";

import Container from "@/components/container";
import TabNavigation from "@/components/tab-navigation";
import InterviewHistory from "@/components/dashboard/interview-history";
import ResumeAnalyzerHistory from "@/components/dashboard/resume-analyzer-history";
import ResumeBuilderHistory from "@/components/dashboard/resume-builder-history";

export type TabId = "IH" | "RAH" | "RBH";

// export interface DashboardTab {
//   id: TabId;
//   label: string;
//   component: React.ReactNode;
// }

const DASHBOARD_TABS = [
  {
    id: "IH",
    label: "Interview History",
    component: <InterviewHistory />,
  },
  {
    id: "RAH",
    label: "Resume Analyzer History",
    component: <ResumeAnalyzerHistory />,
  },
  {
    id: "RBH",
    label: "Resume Builder History",
    component: <ResumeBuilderHistory />,
  },
];

const Dashboard = () => {
  const [activeTabId, setActiveTabId] = useState<string>("RAH");

  const activeTabComponent = useMemo(
    () => DASHBOARD_TABS.find(tab => tab.id === activeTabId)?.component,
    [activeTabId]
  );

  const handleChangeTab = (tabId: string) => {
    setActiveTabId(tabId);
  };

  return (
    <div className="pb-24 min-h-[calc(100vh-80px)]">
      <Container>
        <div className="w-full flex flex-col gap-6 md:flex-row">
          <div className="w-[30%]">
            <TabNavigation
              tabs={DASHBOARD_TABS}
              activeTab={activeTabId}
              onTabChange={handleChangeTab}
            />
          </div>

          <div className="flex-1 h-fit p-3 bg-white rounded-md shadow-lg border border-gray-100">
            {activeTabComponent}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Dashboard;
