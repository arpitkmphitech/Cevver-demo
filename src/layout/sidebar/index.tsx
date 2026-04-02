import React, { useMemo, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LOGO_ICON,
  DASHBOARD_ICON,
  KYC_MANAGEMENT_ICON,
  PLAYER_MANAGEMENT_ICON,
  MATCH_CONTROL_ICON,
  // ECONOMY_CONFIG_ICON,
  CONTENT_EDITING_ICON,
  LOGOUT_ICON,
  DASHBOARD_ACTIVE_ICON,
  KYC_MANAGEMENT_ACTIVE_ICON,
  PLAYER_MANAGEMENT_ACTIVE_ICON,
  MATCH_CONTROL_ACTIVE_ICON,
  // ECONOMY_CONFIG_ACTIVE_ICON,
  CONTENT_EDITING_ACTIVE_ICON,
  LOGOUT_ACTIVE_ICON,
  NAV_FRAME,
} from "@/lib/images";

import { Sheet, SheetContent, SheetHeader } from "@/components/ui/sheet";
import NavIcon from "@/components/common/NavIcon";
import { cn } from "@/lib/utils";
import LogOutModal from "@/modal/LogOutModal";

const Sidebar: React.FC<{
  isSidebar: boolean;
  setIsSidebar: (prev: boolean) => void;
}> = ({ isSidebar, setIsSidebar }) => {
  const { pathname } = useLocation();
  const [logoutModal, setLogoutModal] = useState(false);

  const sidebar_menu = useMemo(
    () => [
      {
        name: "Dashboard",
        to: "/dashboard",
        icon: <NavIcon active={DASHBOARD_ACTIVE_ICON} base={DASHBOARD_ICON} />,
      },
      {
        name: "KYC Management",
        to: "/kyc-management",
        icon: (
          <NavIcon
            active={KYC_MANAGEMENT_ACTIVE_ICON}
            base={KYC_MANAGEMENT_ICON}
          />
        ),
      },
      {
        name: "Player Management",
        to: "/player-management",
        icon: (
          <NavIcon
            active={PLAYER_MANAGEMENT_ACTIVE_ICON}
            base={PLAYER_MANAGEMENT_ICON}
          />
        ),
      },
      {
        name: "Match Control",
        to: "/match-control",
        icon: (
          <NavIcon
            active={MATCH_CONTROL_ACTIVE_ICON}
            base={MATCH_CONTROL_ICON}
          />
        ),
      },
      // {
      //   name: "Economy Config",
      //   to: "/economy-config",
      //   icon: (
      //     <NavIcon
      //       active={ECONOMY_CONFIG_ACTIVE_ICON}
      //       base={ECONOMY_CONFIG_ICON}
      //     />
      //   ),
      // },
      {
        name: "Content Editing",
        to: "/content-editing",
        icon: (
          <NavIcon
            active={CONTENT_EDITING_ACTIVE_ICON}
            base={CONTENT_EDITING_ICON}
          />
        ),
      },
    ],
    []
  );

  const signOutItem = {
    name: "Sign Out",
    icon: <NavIcon active={LOGOUT_ACTIVE_ICON} base={LOGOUT_ICON} />,
  };

  return (
    <>
      <div className="w-[300px] min-w-[300px] max-w-[300px] shrink-0 border-r border-[#2F556980] hidden lg:flex flex-col h-screen bg-main overflow-hidden">
        <div className="flex justify-center items-center gap-x-3 py-[19px] mx-5 border-b border-[#2F55694D] shrink-0">
          <img
            className="max-w-[200px] max-h-[66px] object-contain"
            src={LOGO_ICON}
            alt="LOGO_ICON"
          />
        </div>
        <div className="flex-1 min-h-0">
          <div className="flex flex-col space-y-2 pt-[30px] px-5">
            {sidebar_menu?.map((item, index) => {
              const isActive = pathname.includes(item.to);
              return (
                <Link
                  to={item.to}
                  data-active={isActive}
                  key={index}
                  className="relative h-[62px] group transition-all duration-200 overflow-visible"
                >
                  <img
                    src={NAV_FRAME}
                    alt="nav-frame"
                    className={cn(
                      "pointer-events-none select-none w-full h-auto object-contain transition-opacity duration-200",
                      !isActive && "opacity-0 group-hover:opacity-100"
                    )}
                  />
                  <div className="absolute inset-0 flex items-center gap-x-2.5 px-[18px]">
                    <div>{item.icon}</div>
                    <div className="font-normal text-lg group-hover:text-white group-hover:font-medium group-data-[active=true]:text-white group-data-[active=true]:font-medium text-primary leading-5">
                      {item.name}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="px-5 py-3 shrink-0">
          <button
            onClick={() => setLogoutModal(true)}
            className="relative h-[62px] group transition-all duration-200 w-full overflow-visible"
          >
            <img
              src={NAV_FRAME}
              alt="nav-frame"
              className="pointer-events-none select-none w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            />
            <div className="absolute inset-0 flex items-center  gap-x-2.5 px-[18px]">
              <div>{signOutItem.icon}</div>
              <div className="font-normal text-lg group-hover:text-white group-hover:font-medium group-data-[active=true]:text-white group-data-[active=true]:font-medium text-primary leading-5">
                {signOutItem.name}
              </div>
            </div>
          </button>
        </div>
      </div>
      <Sheet open={isSidebar} onOpenChange={(e) => setIsSidebar(e)}>
        <SheetContent
          onOpenAutoFocus={(e) => e.preventDefault()}
          showCloseButton={false}
          className="w-[300px] bg-[#000106] h-screen p-0 flex flex-col focus:ring-0 gap-y-0 border-none"
          side="left"
        >
          <SheetHeader>
            <div className="flex justify-center items-center gap-x-3 pt-2 pb-6 border-b border-[#FFFFFF38] shrink-0">
              <img
                className="max-w-[200px] max-h-[66px] object-contain"
                src={LOGO_ICON}
                alt="LOGO_ICON"
              />
            </div>
          </SheetHeader>
          <div className="flex flex-col flex-1 min-h-0">
            <div className="flex-1 min-h-0">
              <div className="flex flex-col space-y-3 pt-4 px-3">
                {sidebar_menu?.map((item, index) => {
                  const isActive = pathname.includes(item.to);
                  return (
                    <Link
                      to={item.to}
                      onClick={() => setIsSidebar(false)}
                      data-active={isActive}
                      key={index}
                      className="relative h-[70px] group transition-all duration-200 overflow-visible"
                    >
                      <img
                        src={NAV_FRAME}
                        alt="nav-frame"
                        className={cn(
                          "pointer-events-none select-none w-full h-auto object-contain transition-opacity duration-200",
                          !isActive && "opacity-0 group-hover:opacity-100"
                        )}
                      />
                      <div className="absolute inset-0 flex items-center gap-x-2 px-3">
                        <div>{item.icon}</div>
                        <div className="font-medium text-[17px] group-hover:text-main group-data-[active=true]:text-main text-white">
                          {item.name}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="px-5 pb-6 shrink-0">
              <button
                onClick={() => setLogoutModal(true)}
                className="relative h-[52px] group transition-all duration-200 w-full overflow-visible"
              >
                <img
                  src={NAV_FRAME}
                  alt="nav-frame"
                  className="pointer-events-none select-none w-full h-auto object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                />
                <div className="absolute inset-0 flex items-center gap-x-2 px-3">
                  <div>{signOutItem.icon}</div>
                  <div className="font-medium text-md group-hover:text-main text-white">
                    {signOutItem.name}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      {logoutModal && (
        <LogOutModal open={logoutModal} setOpen={setLogoutModal} />
      )}
    </>
  );
};

export default Sidebar;
