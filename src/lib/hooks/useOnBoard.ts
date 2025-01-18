"ues client"

import { useMutation } from "@tanstack/react-query"
import { candidateUser, recruiterUser } from "../services/onboard"
import { toast } from "sonner"

export function useOnBoard(){
    const candidateMutation = useMutation({
        mutationFn: candidateUser,
        onSuccess: (data) => {
            toast.success("candidateUser created successfully")
            console.log(data)
        }
    })
    const recruiterMutation = useMutation({
        mutationFn: recruiterUser,
        onSuccess: (data) => {
            toast.success("recruiterUser created successfully")
            console.log(data)
        }
    })
    return {
        candidateCreate : candidateMutation,
        recruiterCreate : recruiterMutation,
        isLoading: candidateMutation.isPending || recruiterMutation.isPending,
        error: candidateMutation.error || recruiterMutation.error
    }
}