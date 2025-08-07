import React, { useActionState, useEffect } from "react";

import UpdateButton from "./update-btn";
import ProfileInput from "./profile-input";
import ResponseAlert from "./response-alert";

import { useUser } from "@/hooks/useUser";
import { updateUser } from "@/actions/user";
import { initialState } from "./personal-information";

const EducationInformation = () => {
  const { data: user, refetch } = useUser();
  const [state, formAction] = useActionState(updateUser, initialState);

  useEffect(() => {
    if (state?.message) {
      refetch();
    }
  }, [state.message]);

  return (
    <div className="flex-1 h-fit bg-white rounded-md shadow-lg border border-gray-200 p-3 pb-5">
      <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 mb-10">
        Education Information
      </h2>

      <form action={formAction}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-3">
          <input
            type="text"
            name="dataType"
            defaultValue={"education"}
            className="hidden"
          />
          <ProfileInput
            type="text"
            id="college"
            name="college"
            defaultValue={user?.educationDetails?.college || ""}
            label="College"
          />
          <ProfileInput
            type="text"
            id="degree"
            name="degree"
            defaultValue={user?.educationDetails?.degree || ""}
            label="Degree"
          />
        </div>

        {state.error && (
          <ResponseAlert
            type="error"
            message="Failed to update education details."
          />
        )}
        {state.message && (
          <ResponseAlert type="success" message="Education details updated." />
        )}

        <UpdateButton />
      </form>
    </div>
  );
};

export default EducationInformation;
