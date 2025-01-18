"use client";
import { useOnBoard } from "@/lib/hooks/useOnBoard";
import { ErrorResponse } from "@/lib/types/formControls";
import {
  CandidateInput,
  CandidateSchema,
  RecruiterInput,
  RecruiterSchema,
} from "@/lib/validations/onboard";
import { initialCandidateFormData, initialRecruiterFormData } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface ProfileData {
  recruiterInfo: RecruiterInput;
} 

function OnBoard() {
  const { candidateCreate, isLoading, recruiterCreate } = useOnBoard();
  const candidateForm = useForm<CandidateInput>({
    resolver: zodResolver(CandidateSchema),
    defaultValues: initialCandidateFormData,
  });
  const recruiterForm = useForm<RecruiterInput>({
    resolver: zodResolver(RecruiterSchema),
    defaultValues: initialRecruiterFormData,
  });

  async function createCandidate(data: CandidateInput) {
    try {
      await candidateCreate.mutateAsync(
        data,
        // userId: "120",
        // role: "candidate",
        // email: "user@example.com",
        // isPremiumUser: false,
        // memberShipStartDate,
        // memberShipEndDate,
      );
      // console.log(data, "createProfile candidate");
    } catch (error) {
      console.log("candidate error", error);
      const typedError = error as ErrorResponse;
      const errorMessage =
        typedError?.response?.data?.message || "An unknown error occurred";

      toast.error(`${errorMessage}`);
    }
  }
  // this line have a problem
  async function createRecruiter(data: RecruiterInput) {
    try {
      const profileData:ProfileData = {
        recruiterInfo: {
          name: data?.name,
          companyName: data?.companyName,
          companyRole: data?.companyRole,
        }
      }
      await recruiterCreate.mutateAsync(profileData);
      // console.log(data, "createProfile recruiter");
    } catch (error) {
      console.log("recruiter error", error);
      const typedError = error as ErrorResponse;
      const errorMessage =
        typedError?.response?.data?.message || "An unknown error occurred";

      toast.error(`${errorMessage}`);
    }
  }
  return (
    <Card className="w-full max-w-md mx-auto my-5">
      <Tabs defaultValue="candidate">
        <CardHeader>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="candidate">Candidate</TabsTrigger>
            <TabsTrigger value="recruiter">Recruiter</TabsTrigger>
          </TabsList>
          <CardContent>
            <TabsContent value="candidate">
              <Form {...candidateForm}>
                <form onSubmit={candidateForm.handleSubmit(createCandidate)}>
                  <FormField
                    control={candidateForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="currentJobLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Job Location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your current job location"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="currentSalary"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Salary</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your current salary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="noticePeriod"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Notice Period</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your notice period"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="skills"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Skills</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your skills" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="currentCompany"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Company</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your current company"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="previousCompanies"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Previous Companies</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your previous companies"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="totalExperience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Total Experience</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your total experience"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="college"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your college name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="collegeLocation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>College Location</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your college location"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="graduatedYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Graduated Year</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your graduated year"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="linkedinProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn Profile</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your LinkedIn profile URL"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={candidateForm.control}
                    name="githubProfile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub Profile</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your GitHub profile URL"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full mt-5"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Candidate Profile"}
                  </Button>
                </form>
              </Form>
            </TabsContent>

            <TabsContent value="recruiter">
              <Form {...recruiterForm}>
                <form onSubmit={recruiterForm.handleSubmit(createRecruiter)}>
                  <FormField
                    control={recruiterForm.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={recruiterForm.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your company name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={recruiterForm.control}
                    name="companyRole"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Role</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter your role in the company"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full mt-5"
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Recruiter Profile"}
                  </Button>
                </form>
              </Form>
            </TabsContent>
          </CardContent>
        </CardHeader>
      </Tabs>
    </Card>
  );
}

export default OnBoard;
