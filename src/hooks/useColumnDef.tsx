import Image from "@/components/common/Image";
import { breakpoints } from "@/lib/constants";
import {
  CLOSE_CIRCLE_ICON,
  DEFAULT_AVATAR,
  DELETE_ICON,
  EYE_ICON,
  REFRESH_ICON,
  WARNING_ICON,
} from "@/lib/images";
import { createColumnHelper } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import moment from "moment";

const useColumnDef = (fns?: any, activeTab?: string) => {
  const columnHelper = createColumnHelper();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const isLargeScreen = screenWidth >= breakpoints.lg;

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getColumnSize = (sizes: any) => {
    if (typeof sizes === "number") {
      return sizes;
    } else if (sizes && typeof sizes === "object") {
      const breakpointKeys = Object.keys(breakpoints).reverse();
      for (const key of breakpointKeys) {
        if (
          screenWidth >= breakpoints[key as keyof typeof breakpoints] &&
          sizes[key] !== undefined
        ) {
          return sizes[key];
        }
      }
      return sizes.default !== undefined ? sizes.default : null;
    } else {
      return null;
    }
  };

  const kycManagementColumns = useMemo(() => {
    const baseColumns = [
      columnHelper.accessor("name", {
        id: "username",
        header: () => <p className="pl-4">Username</p>,
        cell: ({ row }: { row: any }) => (
          <div className="flex items-center gap-3 pl-3.5">
            <Image
              src={row?.original?.profileImage || DEFAULT_AVATAR}
              className="size-11 object-cover rounded-full"
            />
            <p className=" text-white text-wrap wrap-break-word">
              {row?.original?.username || "--"}
            </p>
          </div>
        ),
      }),
      columnHelper.accessor("id document", {
        id: "idDocument",
        header: () => <p className="pl-1">ID Document</p>,
        cell: ({ row }: { row: any }) => (
          <button type="button" onClick={() => fns?.handleView?.(row.original)}>
            <img src={EYE_ICON} alt="EYE_ICON" />
          </button>
        ),
        ...(activeTab === "rejected" && {
          meta: { align: "center" as const },
          size: getColumnSize({ default: 160 }),
        }),
      }),
    ];

    if (activeTab === "rejected") {
      return baseColumns;
    }

    const renderActionCell = (row: any) =>
      activeTab === "approved" ? (
        <button type="button" onClick={() => fns?.handleDelete?.(row.original)}>
          <img src={DELETE_ICON} alt="Delete" />
        </button>
      ) : (
        <div className="flex items-center justify-center gap-3 w-full">
          <button className="text-sm p-px font-medium text-white bg-[linear-gradient(180deg,#00FFDB_0%,rgba(0,255,219,0.15)_100%)] rounded-[10px]">
            <div className="bg-linear-to-b from-[#0E4041] to-[#001018] px-[22px] py-2 rounded-[10px]">
              Approve
            </div>
          </button>
          <button className="text-sm font-medium text-primary bg-[#4690931A] px-[22px] py-2 rounded-[10px]">
            Reject
          </button>
        </div>
      );

    return [
      ...baseColumns,
      columnHelper.accessor("action", {
        id: "action",
        header: () => <p className="text-center">Actions</p>,
        cell: ({ row }) => renderActionCell(row),
        meta: { align: "center" },
        size: getColumnSize({ default: activeTab === "pending" ? 250 : 100 }),
      }),
    ];
  }, [screenWidth, activeTab, fns]);

  const playerManagementColumns = useMemo(
    () => [
      columnHelper.accessor("name", {
        id: "username",
        header: () => <p className="pl-4">Username</p>,
        size: isLargeScreen ? 300 : 260,
        minSize: isLargeScreen ? 300 : 260,
        maxSize: isLargeScreen ? 300 : 360,
        cell: ({ row }: { row: any }) => (
          <div className="flex items-center gap-3 pl-3.5 w-full">
            <Image
              src={row?.original?.profileImage || DEFAULT_AVATAR}
              className="size-11 object-cover rounded-full shrink-0"
            />
            <p className="text-white wrap-break-word">
              {row?.original?.username || "--"}
            </p>
          </div>
        ),
      }),
      columnHelper.accessor("email", {
        header: "Email",
        size: isLargeScreen ? 340 : 320,
        minSize: isLargeScreen ? 340 : 260,
        maxSize: isLargeScreen ? 340 : 420,
        cell: ({ row }: { row: any }) => (
          <p className="text-white break-all">{row?.original?.email || "--"}</p>
        ),
      }),
      columnHelper.accessor("wallet", {
        header: "Wallet Balance",
        size: isLargeScreen ? 150 : 180,
        minSize: isLargeScreen ? undefined : 180,
        maxSize: isLargeScreen ? undefined : 180,
        cell: ({ row }: { row: any }) => (
          <p className="text-white wrap-break-word break-all overflow-wrap-anywhere max-w-full">
            ${row?.original?.wallet?.toFixed(2) || "0.00"}
          </p>
        ),
      }),
      columnHelper.accessor("matches_played", {
        header: "Matches Played",
        size: isLargeScreen ? 150 : 180,
        minSize: isLargeScreen ? undefined : 180,
        maxSize: isLargeScreen ? undefined : 180,
        cell: ({ row }: { row: any }) => (
          <p className="text-white wrap-break-word break-all overflow-wrap-anywhere max-w-full">
            {row?.original?.matches_played || "0"}
          </p>
        ),
      }),
      columnHelper.accessor("wins", {
        header: "Wins",
        size: isLargeScreen ? 150 : 180,
        minSize: isLargeScreen ? undefined : 180,
        maxSize: isLargeScreen ? undefined : 180,
        cell: ({ row }: { row: any }) => (
          <p className="text-white wrap-break-word break-all overflow-wrap-anywhere max-w-full">
            {row?.original?.wins || "0"}
          </p>
        ),
      }),
      columnHelper.accessor("totalWagered", {
        header: "Total Wagered",
        size: isLargeScreen ? 150 : 180,
        minSize: isLargeScreen ? undefined : 180,
        maxSize: isLargeScreen ? undefined : 180,
        cell: ({ row }: { row: any }) => (
          <p className="text-white wrap-break-word break-all overflow-wrap-anywhere max-w-full">
            ${row?.original?.totalWagered?.toFixed(2) || "0.00"}
          </p>
        ),
      }),
      columnHelper.accessor("action", {
        id: "action",
        size: 120,
        minSize: 120,
        maxSize: 120,
        header: () => <p className="text-center">Actions</p>,
        cell: ({ row }) => (
          <div className="flex items-center justify-center gap-3 w-full">
            <button
              type="button"
              onClick={() => fns?.handleDelete?.(row.original)}
            >
              <img src={DELETE_ICON} alt="DELETE_ICON" />
            </button>
            <button
              type="button"
              onClick={() => fns?.handleSuspend?.(row.original)}
            >
              <img src={WARNING_ICON} alt="WARNING_ICON" />
            </button>
          </div>
        ),
        meta: { align: "center" },
      }),
    ],
    [screenWidth, isLargeScreen, fns]
  );

  const matchControlColumns = useMemo(() => {
    const baseColumns = [
      columnHelper.accessor("playerA", {
        id: "playerA",
        header: () => <p className="pl-4">Player A</p>,
        cell: ({ row }: { row: any }) => (
          <div className="flex items-center gap-3 pl-3.5 w-full">
            <Image
              src={row?.original?.playerA?.profileImage || DEFAULT_AVATAR}
              className="size-11 object-cover rounded-full shrink-0"
            />
            <p className="text-white wrap-break-word">
              {row?.original?.playerA?.username || "--"}
            </p>
          </div>
        ),
      }),
      columnHelper.accessor("playerB", {
        id: "playerB",
        header: () => <p className="pl-4">Player B</p>,
        cell: ({ row }: { row: any }) => (
          <div className="flex items-center gap-3 pl-3.5">
            <Image
              src={row?.original?.playerB?.profileImage || DEFAULT_AVATAR}
              className="size-11 object-cover rounded-full"
            />
            <p className="text-white wrap-break-word">
              {row?.original?.playerB?.username || "--"}
            </p>
          </div>
        ),
      }),
      columnHelper.accessor("wager", {
        header: "Wager",
        cell: ({ row }: { row: any }) => (
          <p className="text-white wrap-break-word break-all overflow-wrap-anywhere max-w-full">
            ${row?.original?.wager?.toFixed(2) || "0.00"}
          </p>
        ),
        size: getColumnSize({ default: 300 }),
      }),
    ];

    if (activeTab === "live") {
      baseColumns.push(
        columnHelper.accessor("startTime", {
          header: "Start Time",
          cell: ({ row }: { row: any }) => (
            <p className="text-white wrap-break-word break-all overflow-wrap-anywhere max-w-full">
              {moment(row?.original?.startTime).format("HH:mm") || "--"}
            </p>
          ),
          size: getColumnSize({ default: 200 }),
        })
      );
    }
    if (activeTab === "complted") {
      baseColumns.push(
        columnHelper.accessor("matchTime", {
          header: "Match Time",
          cell: ({ row }: { row: any }) => (
            <p className="text-white wrap-break-word break-all overflow-wrap-anywhere max-w-full">
              {moment(row?.original?.matchTime).format("HH:mm") || "--"}
            </p>
          ),
          size: getColumnSize({ default: 200 }),
        })
      );
    }

    baseColumns.push(
      columnHelper.accessor("action", {
        id: "action",
        header: () => <p className="text-center">Actions</p>,
        cell: ({ row }) => (
          <div className="flex items-center justify-center gap-3 w-full">
            <button
              type="button"
              onClick={() => fns?.handleView?.(row.original)}
            >
              <img src={EYE_ICON} alt="View" />
            </button>
            {activeTab === "live" && (
              <>
                <button
                  type="button"
                  onClick={() => fns?.handleAction?.(row.original, "terminate")}
                >
                  <img src={CLOSE_CIRCLE_ICON} alt="Terminate" />
                </button>
                <button
                  type="button"
                  onClick={() => fns?.handleAction?.(row.original, "rematch")}
                >
                  <img src={REFRESH_ICON} alt="Rematch" />
                </button>
              </>
            )}
          </div>
        ),
        meta: { align: "center" },
        size: getColumnSize({ default: 250 }),
      })
    );

    return baseColumns;
  }, [activeTab, fns]);

  return { kycManagementColumns, playerManagementColumns, matchControlColumns };
};

export default useColumnDef;
