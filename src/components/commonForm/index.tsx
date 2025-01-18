import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type FormControl<T extends z.ZodType> = {
  componentType: "input" | "textarea" | "select";
  name: keyof z.infer<T>;
  type?: string;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
};

type CommonFormProps<T extends z.ZodType> = {
  onSubmit: (data: z.infer<T>) => void;
  formControls: FormControl<T>[];
  buttonText: string;
  btnType?: "button" | "submit" | "reset";
  schema: T;
  defaultValues?: Partial<z.infer<T>>;
};

function CommonForm<T extends z.ZodType>({
  onSubmit,
  buttonText,
  formControls,
  btnType = "submit",
  schema,
  defaultValues,
}: CommonFormProps<T>) {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  function renderInputByComponentType(formControl: FormControl<T>) {
    const { componentType, name, label, disabled, placeholder, type = "text" } = formControl;

    switch (componentType) {
      case "input":
        return (
          <FormField
            key={String(name)}
            control={form.control}
            name={String(name)}
            render={({ field }) => (
              <FormItem>
                {label && <FormLabel>{label}</FormLabel>}
                <FormControl>
                  <Input
                    {...field}
                    type={type}
                    disabled={disabled}
                    placeholder={placeholder}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      default:
        return null;
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {formControls.map((control) => renderInputByComponentType(control))}
        <Button 
          type={btnType}
          className="w-full h-11"
        >
          {buttonText}
        </Button>
      </form>
    </Form>
  );
}

export default CommonForm;