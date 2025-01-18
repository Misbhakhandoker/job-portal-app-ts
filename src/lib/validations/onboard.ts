import { z } from "zod";

export const CandidateSchema = z.object({
  name: z.string().nonempty("required"),
  currentJobLocation: z.string().nonempty("required"),
  currentSalary: z.string().nonempty("required"),
  noticePeriod: z.string().nonempty("required"),
  skills: z.string().nonempty("required"),
  currentCompany: z.string().nonempty("required"),
  previousCompanies: z.string().nonempty("required"),
  totalExperience: z.string().nonempty("required"),
  college: z.string().nonempty("required"),
  collegeLocation: z.string().nonempty("required"),
  graduatedYear: z.string().nonempty("required"),
  linkedinProfile: z.string().nonempty("required"),
  githubProfile: z.string().nonempty("required"),
})

export const RecruiterSchema = z.object({
  name: z.string().nonempty("required"),
  companyName: z.string().nonempty("required"),
  companyRole: z.string().nonempty("required"),
})

export type CandidateInput = z.infer<typeof CandidateSchema>;
export type RecruiterInput = z.infer<typeof RecruiterSchema>;