import React, { useActionState, useEffect } from "react";

import UpdateButton from "./update-btn";
import ProfileInput from "./profile-input";
import ResponseAlert from "./response-alert";

import { useUser } from "@/hooks/useUser";
import { updateUser } from "@/actions/user";
import { initialState } from "./personal-information";

const SocialInformation = () => {
  const { data: user, refetch } = useUser();
  const [state, formAction, pending] = useActionState(updateUser, initialState);

  useEffect(() => {
    if (state?.message) {
      refetch();
    }
  }, [state.message]);

  return (
    <div className="flex-1 h-fit bg-white rounded-md shadow-lg border border-gray-200 p-3 pb-5">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-10">
        Social Information
      </h2>

      <form action={formAction}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
          <input
            type="text"
            name="dataType"
            defaultValue={"social"}
            className="hidden"
          />
          <ProfileInput
            type="text"
            id="portfolio"
            name="portfolio"
            defaultValue={user?.socialLinks?.portfolio || ""}
            label="Portfolio"
          />
          <ProfileInput
            type="text"
            id="linkedin"
            name="linkedin"
            defaultValue={user?.socialLinks?.linkedin || ""}
            label="Linkedin"
          />
          <ProfileInput
            type="text"
            id="github"
            name="github"
            defaultValue={user?.socialLinks?.github || ""}
            label="GitHub"
          />
          <ProfileInput
            type="text"
            id="twitter"
            name="twitter"
            defaultValue={user?.socialLinks?.twitter || ""}
            label="Twitter"
          />
        </div>

        {state.error && (
          <ResponseAlert
            type="error"
            message="Failed to update social details."
          />
        )}
        {state.message && (
          <ResponseAlert type="success" message="Social Details Updated." />
        )}

        <UpdateButton pending={pending} />
      </form>
    </div>
  );
};

export default SocialInformation;
