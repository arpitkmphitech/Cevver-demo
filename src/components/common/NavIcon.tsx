import { cn } from "@/lib/utils";
import React from "react";

const NavIcon = ({
  active,
  base,
  className,
  ...other
}: {
  active: string;
  base: string;
  className?: string;
  other?: React.HTMLAttributes<HTMLImageElement>;
}) => {
  return (
    <>
      <img
        className={cn(
          "group-hover:hidden group-data-[active=true]:hidden block",
          className
        )}
        src={base}
        {...other}
        alt="BASE_ICON"
      />
      <img
        className={cn(
          "group-hover:block group-data-[active=true]:block hidden",
          className
        )}
        src={active}
        {...other}
        alt="ACTIVE_ICON"
      />
    </>
  );
};

export default NavIcon;
