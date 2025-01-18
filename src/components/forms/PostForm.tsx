import { useJob } from "@/lib/hooks/useJob";
import { ErrorResponse } from "@/lib/types/formControls";
import { JobInput, JobSchema } from "@/lib/validations/job";
import { initialJobFormData } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

function PostForm() {
  const { jobCreate, isLoading } = useJob();
  const jobForm = useForm<JobInput>({
    resolver: zodResolver(JobSchema),
    defaultValues: initialJobFormData,
  });
  async function onJobCreate(data: JobInput) {
    try {
      await jobCreate.mutateAsync(data);
    } catch (error) {
      console.log("job error", error);
      const typedError = error as ErrorResponse;
      const errorMessage =
        typedError?.response?.data?.message || "An unknown error occurred";

      toast.error(`${errorMessage}`);
    }
  }
  return (
    <>
      <Form {...jobForm}>
        <form onSubmit={jobForm.handleSubmit(onJobCreate)}>
          <FormField
            control={jobForm.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={jobForm.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter job title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={jobForm.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="Enter location" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={jobForm.control}
            name="type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Type</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter job type (e.g., Full-time, Part-time)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={jobForm.control}
            name="experience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience Level</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter experience level (e.g., Entry-level, Mid-level)"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={jobForm.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter job description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={jobForm.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills Required</FormLabel>
                <FormControl>
                  <Input placeholder="Enter required skills" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full mt-5" disabled={isLoading}>{isLoading? "Loading..." : "Post New Job"}</Button>
        </form>
      </Form>
    </>
  );
}

export default PostForm;
