import { cn } from "@/lib/utils";
import type { IButton } from "@/types/types";
import type React from "react";
import Loader from "./Loader";

const variantClasses = {
  primary: "button-gradient-active ",
  secondary: "text-white button-gradient-active",
};

const Button: React.FC<IButton> = ({
  type = "button",
  className = "",
  variant = "primary",
  children,
  loader,
  disabled,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "cursor-pointer flex justify-center items-center text-center text-base font-medium px-6 py-3 disabled:bg-border disabled:text-placeholder disabled:cursor-not-allowed text-white rounded-[140px] min-h-[44px] min-w-[120px] transition-colors",
        variantClasses[variant],
        className
      )}
      onClick={onClick}
      {...props}
    >
      {loader ? <Loader className="small" /> : <>{children}</>}
    </button>
  );
};

export default Button;
