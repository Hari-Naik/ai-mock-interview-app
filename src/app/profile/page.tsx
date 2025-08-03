"use client";
import Container from "@/components/container";
import TabNavigation from "@/components/tab-navigation";
import EducationInformation from "@/components/profile-page/education-information";
import PersonalInformation from "@/components/profile-page/personal-information";
import ResetPassword from "@/components/profile-page/reset-password";
import SocialInformations from "@/components/profile-page/social-information";

import React, { useMemo, useState } from "react";

const PROFILE_TABS = [
  {
    id: "personal",
    label: "Personal",
    component: <PersonalInformation />,
  },
  {
    id: "education",
    label: "Education",
    component: <EducationInformation />,
  },
  {
    id: "social",
    label: "Social",
    component: <SocialInformations />,
  },
  {
    id: "password",
    label: "Reset Password",
    component: <ResetPassword />,
  },
];

//type ActiveTabType = "personal" | "education" | "social" | "password";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState<string>("personal");

  const handleChangeTab = (tabId: string) => {
    setActiveTab(tabId);
  };

  const activeTabComponent = useMemo(
    () => PROFILE_TABS.find(tab => tab.id === activeTab)?.component,
    [activeTab]
  );

  return (
    <div>
      <Container className="flex flex-col md:flex-row gap-3">
        <div className="w-[30%] flex flex-col gap-3">
          <TabNavigation
            tabs={PROFILE_TABS}
            activeTab={activeTab}
            onTabChange={handleChangeTab}
          />

          <div className="w-full h-fit py-5 rounded-md bg-white shadow-lg flex items-center justify-center border border-gray-100">
            <button className="px-6 py-2 border border-red-500 uppercase text-base text-red-500 font-medium rounded-md cursor-pointer">
              Deactivate Account
            </button>
          </div>
        </div>

        {activeTabComponent}
      </Container>
    </div>
  );
};

export default ProfilePage;
