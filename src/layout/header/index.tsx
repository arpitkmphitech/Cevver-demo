import React from "react";
import { useLocation } from "react-router";
import { headings } from "./helper";
import { USER_ICON, NOTIFICATION_ICON } from "@/lib/images";
import { Menu } from "lucide-react";
import SearchBox from "@/components/common/SearchBox";

const Header: React.FC<{
  isSidebar: boolean;
  setIsSidebar: (prev: boolean) => void;
}> = ({ setIsSidebar, isSidebar }) => {
  const { pathname } = useLocation();
  const searchBarExclude = ["/dashboard"];
  const showSearch = !searchBarExclude.find(
    (item) => pathname.includes(item) || pathname.startsWith(item)
  );

  return (
    <header className="flex flex-col px-7 border-b border-[#2F55694D] bg-[#4690931A]">
      <div className="flex justify-between items-center w-full py-4">
        <div className="flex items-center gap-x-3">
          <div className="lg:hidden">
            <Menu
              onClick={() => setIsSidebar(!isSidebar)}
              className="text-2xl cursor-pointer"
            />
          </div>

          <h3 className="text-white font-bold text-[26px] capitalize">
            {headings.find(
              (route) =>
                pathname === route.path || pathname.includes(route.path)
            )?.heading ?? "Not Found"}
          </h3>
        </div>

        <div className="flex items-center gap-2.5 md:gap-7">
          {showSearch && (
            <div className="hidden md:block">
              <SearchBox />
            </div>
          )}
          <div className="flex items-center gap-2">
            <img
              src={NOTIFICATION_ICON}
              alt="NOTIFICATION_ICON"
              className="size-[54px] md:size-auto"
            />
            <img
              src={USER_ICON}
              alt="USER_ICON"
              className="size-12 md:size-auto"
            />
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="md:hidden pb-4">
          <SearchBox />
        </div>
      )}
    </header>
  );
};

export default Header;
