import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Controller, useFormContext } from "react-hook-form";
import { CALENDAR_ICON } from "@/lib/images";
import { Button } from "../ui/button";

const DateRangeField = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  console.log("errors", errors);

  const error = errors?.[name]?.message as string | undefined;

  return (
    <div className="flex flex-col gap-2">
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id={name}
                variant="outline"
                className={cn(
                  "justify-start items-center bg-[#46909329] hover:bg-[#46909329] flex h-auto py-2.5 text-left text-base text-primary hover:text-primary font-medium gap-2 rounded-[16px] overflow-hidden",
                  error && "border-red-400",
                  className
                )}
              >
                <img src={CALENDAR_ICON} alt="CALENDAR_ICON" />
                {field.value?.from ? (
                  field.value.to ? (
                    <>
                      {format(field.value.from, "dd/MM/yyyy")} -{" "}
                      {format(field.value.to, "dd/MM/yyyy")}
                    </>
                  ) : (
                    format(field.value.from, "dd/MM/yyyy")
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="w-auto p-0 border-[#2F5569] bg-[#0E1C26] text-white rounded-[16px] overflow-hidden"
            >
              <Calendar
                mode="range"
                defaultMonth={field.value?.from}
                selected={field.value}
                onSelect={field.onChange}
                numberOfMonths={2}
                disabled={{ before: new Date() }}
                classNames={{
                  disabled: "text-white/60 opacity-100 cursor-not-allowed",
                  today: "bg-transparent text-white font-normal",
                }}
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {error && (
        <div className="pt-1 pl-3 text-xs sm:text-sm font-normal text-red-400">
          {error}
        </div>
      )}
    </div>
  );
};

export default DateRangeField;
