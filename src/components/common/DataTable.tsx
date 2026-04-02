import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../common/Table";
import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "./ScrollArea";
import TablePagination from "./TablePagination";
import { NO_DATA_IMAGE } from "@/lib/images";
import { Loader } from "lucide-react";

const DataTable = ({
  data,
  columns,
  pagination = true,
  loading = false,
  message = null,
  noDataImage = null,
}: {
  data: any;
  columns: any;
  pagination?: boolean;
  loading?: boolean;
  message?: string | null;
  noDataImage?: string | null;
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="h-full min-h-0 shadow-shadow1max-sm:pb-3 rounded-[24px] p-4 bg-[#4690931A] overflow-hidden flex flex-col">
      <ScrollArea className={cn("flex-1 min-h-0 overflow-auto")}>
        <Table className="min-w-max w-full">
          <TableHeader className="[&_tr]:border-b-0 sticky top-0 isolate">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="border-0">
                <th
                  colSpan={headerGroup.headers.length}
                  className="p-0 relative overflow-hidden bg-[radial-gradient(ellipse_at_center,#000b19_0%,#000810_100%)] rounded-[14px]"
                >
                  <div className="flex rounded-[14px] border border-[#2F556980] overflow-hidden">
                    {headerGroup.headers.map((header) => {
                      const hasFixedWidth =
                        header.getSize() && header.getSize() !== 150;
                      const sizePx = hasFixedWidth
                        ? `${header.getSize()}px`
                        : undefined;
                      return (
                        <div
                          key={header.id}
                          className={cn(
                            "px-[14px] py-5 font-medium text-primary text-base text-start",
                            hasFixedWidth ? "flex-none" : "flex-1"
                          )}
                          style={{
                            ...(hasFixedWidth && sizePx
                              ? {
                                  width: sizePx,
                                  minWidth: sizePx,
                                  maxWidth: sizePx,
                                }
                              : {}),
                          }}
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      );
                    })}
                  </div>
                </th>
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow className="h-[calc(100vh-300px)] flex flex-col justify-center items-center">
                <Loader className="size-6 text-primary animate-spin" />
              </TableRow>
            ) : table.getRowModel()?.rows?.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="border-[#2F556957] hover:bg-transparent flex items-center"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => {
                    return (
                      <TableCell
                        style={{
                          ...(!cell.column?.getSize() ||
                          cell.column?.getSize() == 150
                            ? { width: "100%" }
                            : {
                                width: cell.column.getSize() + "px",
                                minWidth: cell.column.getSize() + "px",
                                maxWidth: cell.column.getSize() + "px",
                              }),
                        }}
                        className={cn(
                          "flex items-center text-primary text-sm sm:text-base wrap-break-word py-5"
                        )}
                        key={cell.id}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))
            ) : (
              <TableRow className="h-[calc(100vh-300px)] flex hover:bg-transparent flex-col gap-2 justify-center items-center">
                <img src={noDataImage ?? NO_DATA_IMAGE} alt="no data" />
                <h2 className="text-primary text-lg text-center">
                  {message ? message : "Data Not found"}
                </h2>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {pagination && data.length > 0 && <TablePagination count={data.length} />}
    </div>
  );
};

export default DataTable;
