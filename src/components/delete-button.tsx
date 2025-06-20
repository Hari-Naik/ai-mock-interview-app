"use client";
import { deleteMockInterview } from "@/actions/interview";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "react-toastify";

const DeleteButton = ({ id }: { id: string }) => {
  const router = useRouter();
  const handleDelete = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await deleteMockInterview(id);
    if (response.success) {
      toast.success(response.message);
      router.push("/interviews");
    } else {
      toast.error(response.message);
    }
  };
  return (
    <form onSubmit={handleDelete}>
      <button
        type="submit"
        className="p-2 rounded hover:bg-gray-100 transition duration-300 cursor-pointer">
        <Trash2 size={16} className="text-red-500" />
      </button>
    </form>
  );
};

export default DeleteButton;
