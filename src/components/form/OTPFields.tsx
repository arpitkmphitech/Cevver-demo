import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { cn } from "@/lib/utils";

const OtpFields = ({ name }: { name: string }) => {
  const { control } = useFormContext();

  return (
    <FormField
      name={name}
      control={control}
      render={({ field, formState: { errors } }) => {
        const hasError = !!errors?.[name]?.message;
        const value = field.value || "";
        return (
          <FormItem>
            <FormControl>
              <InputOTP
                value={value}
                onChange={field.onChange}
                maxLength={4}
                className="bg-transparent rounded-xl flex justify-center"
              >
                <InputOTPGroup className="gap-2.5 bg-transparent">
                  {[0, 1, 2, 3].map((index) => {
                    const hasValue = !!value[index];
                    const isFilled = hasValue;

                    return (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        className={cn(
                          "text-lg font-medium text-center",
                          "bg-[#46909329] w-[76px] h-[60px]",
                          "outline-none transition-all",
                          "rounded-[12px]!",
                          "first:rounded-[12px]! last:rounded-[12px]!",
                          "border! border-solid!",
                          "first:border-l! last:border-r! border-t! border-b!",
                          !isFilled && !hasError && "border-border",
                          isFilled && !hasError && "border-0! ring-2 ring-main",
                          hasError && "border-red-500!",
                          isFilled ? "text-primary" : "text-secondary",
                          "focus:ring-0 focus:outline-none"
                        )}
                      />
                    );
                  })}
                </InputOTPGroup>
              </InputOTP>
            </FormControl>
            <FormMessage className="text-red-500" />
          </FormItem>
        );
      }}
    />
  );
};

export default OtpFields;
