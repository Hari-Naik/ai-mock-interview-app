import { UserType } from "@/types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const fetchUser = async (): Promise<UserType> => {
  const response = await fetch("/api/user");
  const result = await response.json();
  if (result.success === false) {
    throw new Error(result.message);
  }
  return result.data;
};

export const useUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 5,
    placeholderData: keepPreviousData,
  });
};
