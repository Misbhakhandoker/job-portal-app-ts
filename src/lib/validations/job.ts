import { z } from "zod";



export const JobSchema = z.object({
    companyName: z.string().nonempty("required"),
    title: z.string().nonempty("required"),
    location: z.string().nonempty("required"),
    type: z.string().nonempty("required"),
    experience: z.string().nonempty("required"),
    description: z.string().nonempty("required"),
    skills: z.string().nonempty("required"),
})


export type JobInput = z.infer<typeof JobSchema>