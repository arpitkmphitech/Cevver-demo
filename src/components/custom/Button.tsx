import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { BUTTON_FRAME } from "@/lib/images";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  loader?: boolean;
  onClick?: () => void;
}

const Button = ({
  type = "submit",
  className = "flex-1",
  children,
  loader = false,
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={cn(
        "relative inline-flex h-[54px] cursor-pointer items-center justify-center text-center disabled:opacity-70",
        className
      )}
      onClick={onClick}
      {...props}
    >
      {type === "submit" ? (
        <>
          <img
            src={BUTTON_FRAME}
            alt="button-frame"
            className="block h-full w-auto select-none pointer-events-none"
          />
          {loader ? (
            <Loader className="absolute inset-0 m-auto size-5 animate-spin text-white" />
          ) : (
            <span className="pointer-events-none absolute inset-0 m-auto flex items-center justify-center text-[18px] font-semibold text-white [text-shadow:0_0_1.5px_#FFFFFF]">
              {children}
            </span>
          )}
        </>
      ) : (
        <div className="w-full rounded-[14px] p-px bg-[linear-gradient(180deg,#3E6F85_0%,rgba(62,111,133,0.35)_100%)]">
          <button className="w-full h-[56px] rounded-[13px] bg-[linear-gradient(180deg,#0E1C26_0%,#08131B_100%)] flex items-center justify-center text-white text-[18px] font-semibold transition hover:brightness-110">
            <span className="pointer-events-none absolute inset-0 m-auto flex items-center justify-center text-[18px] font-semibold text-white [text-shadow:0_0_1.5px_#FFFFFF]">
              {children}
            </span>
          </button>
        </div>
      )}
    </button>
  );
};

export default Button;
