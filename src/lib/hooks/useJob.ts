"use client";

import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { jobPost } from "../services/job";

export function useJob() {
  const jobMutation = useMutation({
    mutationFn: jobPost,
    onSuccess: (data) => {
      toast.success("Job created");
      console.log(data);
    },
  });

  return {
    jobCreate: jobMutation,
    isLoading: jobMutation.isPending,
  };
}
