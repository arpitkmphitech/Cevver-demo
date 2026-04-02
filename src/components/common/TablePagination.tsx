import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { PAGINATION_DISPATCH_TYPES } from "@/lib/constants";
import usePagination from "@/hooks/usePagination";

const generatePaginationRange = (totalPages: number, currentPage: number) => {
  const siblingCount = 1;
  const totalNumbers = siblingCount * 2 + 3;
  const totalBlocks = totalNumbers + 2;

  if (totalPages <= totalBlocks) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < totalPages - 1;

  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  if (!showLeftDots && showRightDots) {
    return [
      ...Array.from({ length: 3 + 2 * siblingCount }, (_, index) => index + 1),
      "...",
      totalPages,
    ];
  }

  if (showLeftDots && !showRightDots) {
    const start = totalPages - (3 + 2 * siblingCount) + 1;
    return [
      firstPageIndex,
      "...",
      ...Array.from(
        { length: 3 + 2 * siblingCount },
        (_, index) => start + index
      ),
    ];
  }

  if (showLeftDots && showRightDots) {
    return [
      firstPageIndex,
      "...",
      ...Array.from(
        { length: 2 * siblingCount + 1 },
        (_, index) => leftSiblingIndex + index
      ),
      "...",
      lastPageIndex,
    ];
  }
};
const TablePagination = ({ count }: { count: number }) => {
  const paginationLimits = useMemo(() => [5, 10, 15, 30, 50], []);
  const {
    state: { total, limit, page },
    dispatch,
  } = usePagination();
  const totalPages = useMemo(() => Math.ceil(total / limit), [total, limit]);
  const paginationRange = useMemo(
    () => generatePaginationRange(totalPages, page),
    [totalPages, page]
  );
  return (
    <div
      className={cn(
        "px-3 md:px-4 pt-2 sm:pt-2.5 flex justify-between items-center gap-2 flex-col sm:flex-row"
      )}
    >
      <div className="flex items-center gap-2">
        <span className="text-primary text-sm font-normal">
          Rows per page :
        </span>
        <Select
          value={String(limit)}
          onValueChange={(value) => {
            dispatch({
              type: PAGINATION_DISPATCH_TYPES.SET_LIMIT,
              payload: Number(value),
            });
          }}
        >
          <SelectTrigger className="w-[52px] bg-transparent border-[#1D1D1D] max-sm:h-[34px] h-auto py-2.5 px-2 focus:ring-0 focus:ring-offset-0 focus:outline-none font-medium text-sm [&>svg]:text-white [&>svg]:opacity-100 text-white">
            <SelectValue placeholder={String(limit)} />
          </SelectTrigger>
          <SelectContent className="border-[#2F5569] bg-[#0E1C26] text-white">
            {paginationLimits.map((item, key) => (
              <SelectItem
                key={key}
                value={item.toString()}
                className="text-white focus:bg-[#4690931A] focus:text-white"
              >
                {item}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center">
        <p className="w-full text-center sm:text-start text-primary text-sm font-normal">
          Showing {(page - 1) * limit + (count ? 1 : 0)}-
          {(page - 1) * limit + count} out of {total} results
        </p>
      </div>
      <div className="flex gap-3 items-center">
        <div>
          <Pagination className="justify-center pt-0 sm:justify-end">
            <PaginationContent className="space-x-1">
              <PaginationItem>
                <PaginationPrevious
                  className={cn(
                    "size-8 sm:size-10 cursor-pointer p-0 bg-transparent text-[#CCCFD3] hover:bg-transparent hover:text-white aspect-square rounded-full",
                    page === 1 &&
                      "cursor-not-allowed hover:bg-transparent hover:text-[#CCCFD3]"
                  )}
                  onClick={() => {
                    if (!(page === 1)) {
                      dispatch({ type: PAGINATION_DISPATCH_TYPES.PREV_PAGE });
                    }
                  }}
                  aria-disabled={page === 1}
                  tabIndex={page === 1 ? -1 : 0}
                />
              </PaginationItem>
              {paginationRange?.map((pageNumber, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={page == pageNumber}
                    aria-disabled={pageNumber === "..."}
                    tabIndex={pageNumber === "..." ? -1 : 0}
                    onClick={() => {
                      if (pageNumber !== "...") {
                        dispatch({
                          type: PAGINATION_DISPATCH_TYPES.SET_PAGE,
                          payload: pageNumber,
                        });
                      }
                    }}
                    className={cn(
                      "p-px min-w-8 min-h-8 size-8 sm:size-9 cursor-pointer border-2 border-none text-sm md:text-base text-primary bg-transparent font-normal rounded-full flex items-center justify-center",
                      page == pageNumber &&
                        "text-white bg-linear-to-b from-[#00FFDB] to-[#00FFDB]/15",
                      pageNumber === "..."
                        ? "hover:text-white hover:bg-transparent cursor-default"
                        : "hover:bg-transparent hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "px-3.5 py-1 rounded-full flex items-center justify-center min-w-5",
                        page == pageNumber &&
                          "bg-linear-to-b from-[#0E4041] to-[#001018]"
                      )}
                    >
                      {pageNumber}
                    </div>
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  className={cn(
                    "size-8 sm:size-10 cursor-pointer p-0 bg-transparent text-[#CCCFD3] hover:bg-transparent hover:text-white aspect-square rounded-full",
                    totalPages == page &&
                      "cursor-not-allowed hover:bg-transparent hover:text-[#CCCFD3]"
                  )}
                  onClick={() => {
                    if (!(totalPages == page)) {
                      dispatch({ type: PAGINATION_DISPATCH_TYPES.NEXT_PAGE });
                    }
                  }}
                  aria-disabled={totalPages == page}
                  tabIndex={totalPages == page ? -1 : 0}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
