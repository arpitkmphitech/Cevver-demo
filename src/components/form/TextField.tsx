import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { cn, get } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IFieldError, ITextField } from "@/types/form";

const TextField: React.FC<ITextField> = ({
  name,
  placeholder = "",
  textarea = false,
  numeric = false,
  label,
  description,
  className,
  prefix = null,
  postfix = null,
  disabled = false,
  labelClassName,
  required = true,
  ...other
}) => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, formState: { errors } }) => {
        const fieldError: IFieldError = get(errors, name) as IFieldError;
        return (
          <div className="space-y-1.5 sm:space-y-2">
            {label && (
              <label
                className={cn(
                  "block text-left text-[#8C8D91] text-base md:text-[20px] font-medium",
                  labelClassName
                )}
              >
                {label}
              </label>
            )}
            {description && (
              <p className="text-black/60 text-xs md:text-sm font-normal pt-1">
                {description}
              </p>
            )}
            <div className={cn("space-y-1", label ? "mt-[10px]" : "")}>
              <FormItem className="relative">
                <FormControl>
                  {textarea ? (
                    <Textarea
                      {...field}
                      {...other}
                      value={field.value ?? ""}
                      autoComplete="off"
                      id={name}
                      required={required}
                      placeholder={placeholder}
                      className={cn(
                        "placeholder:text-placeholder resize-none bg-white focus-visible:ring-offset-0 focus-visible:ring-0 md:text-base placeholder:text-base p-[20px] rounded-[18px] font-normal lg:min-h-[150px] min-h-[100px] max-h-[150px] overflow-y-auto custom-scrollbar border shadow-none",
                        fieldError?.message
                          ? "border-red-500! text-red-600"
                          : "border-border!",
                        prefix ? "pl-12 sm:pl-12" : "",
                        postfix ? "pr-9 sm:pr-12" : "",
                        className
                      )}
                      disabled={disabled}
                    />
                  ) : (
                    <Input
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        if (numeric) {
                          let value = e.target.value.replace(/[^0-9.]/g, "");
                          const parts = value.split(".");
                          if (parts.length > 2) {
                            value = parts[0] + "." + parts.slice(1).join("");
                          }
                          field.onChange(value);
                        } else {
                          field.onChange(e);
                        }
                      }}
                      {...(numeric && {
                        inputMode: "numeric",
                      })}
                      autoComplete="off"
                      id={name}
                      required={required}
                      placeholder={placeholder}
                      className={cn(
                        "placeholder:text-placeholder placeholder:text-base bg-white focus-visible:ring-offset-0 focus-visible:ring-0 p-[20px] rounded-[18px] font-normal md:text-base w-full lg:min-h-[70px] min-h-[65px] border shadow-none",
                        fieldError?.message
                          ? "border-red-500! text-red-600"
                          : "border-border!",
                        prefix ? "pl-13" : "",
                        postfix ? "pr-9 sm:pr-12" : "",
                        className
                      )}
                      disabled={disabled}
                      {...other}
                    />
                  )}
                </FormControl>
                {prefix && (
                  <div
                    className={cn(
                      "absolute flex items-center",
                      textarea
                        ? "top-[20px] left-[20px]"
                        : "top-0 bottom-0 my-auto left-[20px]"
                    )}
                  >
                    {prefix}
                  </div>
                )}
                {postfix && (
                  <div
                    className={cn(
                      "absolute flex items-center",
                      textarea
                        ? "top-[20px] right-[20px]"
                        : "top-0 bottom-0 my-auto right-[20px]"
                    )}
                  >
                    {postfix}
                  </div>
                )}
              </FormItem>
              {fieldError?.message && (
                <div
                  className="pt-1.5 text-xs sm:text-sm text-start font-normal text-red-600!"
                  role="alert"
                >
                  {fieldError?.message}
                </div>
              )}
            </div>
          </div>
        );
      }}
    ></FormField>
  );
};

export default TextField;
