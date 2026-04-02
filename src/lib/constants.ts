export const kycManagementTabs = [
  { label: "Pending", value: "pending" },
  { label: "Approved", value: "approved" },
  { label: "Rejected", value: "rejected" },
];

export const matchControlTabs = [
  { label: "Live", value: "live" },
  { label: "Dispute", value: "dispute" },
  { label: "Completed", value: "complted" },
];

export const PAGINATION_DISPATCH_TYPES = {
  NEXT_PAGE: "NEXTPAGE",
  PREV_PAGE: "PREVPAGE",
  SET_TOTALRECORD: "SET_TOTALRECORD",
  RESET: "RESET",
  SET_PAGE: "SET_PAGE",
  SET_LIMIT: "SET_LIMIT",
};

export const disputeOptions = [
  { id: "player-a-winner", label: "Declare Player A Winner" },
  { id: "refund-both", label: "Refund Both" },
  { id: "suspend-b", label: "Suspend Player B" },
];

export const breakpoints = {
  xs: 400,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  "2xl": 1400,
  "3xl": 1600,
  "4xl": 1800,
  "5xl": 2200,
};
