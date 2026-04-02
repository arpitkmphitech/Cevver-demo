import { cn } from "@/lib/utils";
import React from "react";
import { FormProvider as Form, type UseFormReturn } from "react-hook-form";

interface IFormProvider {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  methods: UseFormReturn<any>;
  className?: string;
}
const FormProvider = ({
  children,
  onSubmit,
  methods,
  className,
}: IFormProvider) => {
  return (
    <Form {...methods}>
      <form noValidate className={cn(className)} onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
};

export default FormProvider;
