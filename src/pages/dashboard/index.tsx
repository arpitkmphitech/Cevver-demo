import {
  DASH_1,
  DASH_2,
  DASH_3,
  DASH_4,
  DASH_5,
  DASH_6,
  DASH_ICON_1,
  DASH_ICON_2,
  DASH_ICON_3,
  DASH_ICON_4,
  DASH_ICON_5,
  DASH_ICON_6,
} from "@/lib/images";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dashboard = () => {
  const [timeframe, setTimeframe] = useState("Monthly");

  const revenueData = [
    { date: "Apr 7", fullDate: "7 April, 2024", value: 60 },
    { date: "Apr 8", fullDate: "8 April, 2024", value: 30 },
    { date: "Apr 9", fullDate: "9 April, 2024", value: 60 },
    { date: "Apr 10", fullDate: "10 April, 2024", value: 62.8 },
    { date: "Apr 11", fullDate: "11 April, 2024", value: 55 },
    { date: "Apr 12", fullDate: "12 April, 2024", value: 58 },
    { date: "Apr 13", fullDate: "13 April, 2024", value: 60 },
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "rgba(14, 28, 38, 0.95)",
            border: "1px solid #2F5569",
            borderRadius: "8px",
            padding: "12px",
          }}
        >
          <div className="text-[#6E8FA2] text-sm font-normal mb-1">
            {data.fullDate || label}
          </div>
          <div className="text-white text-xl font-bold">{data.value}k</div>
        </div>
      );
    }
    return null;
  };
  const statCards = [
    { label: "Total Players", value: "12,452", icon: DASH_ICON_1, bg: DASH_1 },
    { label: "KYC Pending", value: 37, icon: DASH_ICON_2, bg: DASH_2 },
    { label: "Total Revenue", value: "$82,450", icon: DASH_ICON_3, bg: DASH_3 },
    { label: "Withdrawals Pending", value: 14, icon: DASH_ICON_4, bg: DASH_4 },
    { label: "Active Matches", value: 128, icon: DASH_ICON_5, bg: DASH_5 },
    { label: "Suspended Users", value: 22, icon: DASH_ICON_6, bg: DASH_6 },
  ];

  return (
    <div className="flex-1 flex flex-col overflow-auto p-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-6">
        {statCards.map((card) => (
          <div
            key={card.label}
            className="relative max-h-[133px] w-full rounded-[16px]"
          >
            <img src={card.bg} alt="card" className="w-full h-full" />
            <div className="absolute inset-0 flex justify-between items-start p-6">
              <div className="flex flex-col">
                <div className="text-primary text-base font-normal mb-2.5">
                  {card.label}
                </div>
                <div className="text-white text-2xl font-semibold leading-[42px]">
                  {card.value}
                </div>
              </div>
              <div className="flex items-start shrink-0">
                <img src={card.icon} alt={card.label} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative w-full rounded-[16px]">
        <div className="absolute inset-0 rounded-[16px] overflow-hidden">
          <div className="w-full h-full bg-[linear-gradient(180deg,#0E1C26_0%,#08131B_100%)]" />
        </div>

        <div
          className="rounded-[16px] p-[0.8px] relative z-10"
          style={{
            background:
              "linear-gradient(180deg, #2F5569 0%, rgba(47, 85, 105, 0.5) 100%)",
          }}
        >
          <div className="rounded-[16px] w-full h-full bg-[linear-gradient(180deg,#0E1C26_0%,#08131B_100%)] p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-white text-lg font-semibold mb-2.5">
                  Total revenue
                </h2>
                <div className="text-white text-4xl leading-[54px] font-bold mb-0.5">
                  $82,450
                </div>
                <div className="text-primary text-lg font-normal">
                  Gained $9,721.54 this month
                </div>
              </div>
              <div className="rounded-[10px] shrink-0 p-px bg-linear-to-b from-[#2F5569] to-[#2F5569]/50">
                <Select value={timeframe} onValueChange={setTimeframe}>
                  <SelectTrigger className="h-11 w-[118px] border-0 bg-[linear-gradient(180deg,#0E1C26_0%,#08131B_100%)] rounded-[10px] text-white text-base font-normal px-4 focus:ring-0 focus:ring-offset-0 [&>svg]:text-white [&>svg]:opacity-100">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="border-[#2F5569] bg-[#0E1C26] text-white">
                    <SelectItem
                      value="Monthly"
                      className="text-white focus:bg-[#4690931A] focus:text-white"
                    >
                      Monthly
                    </SelectItem>
                    <SelectItem
                      value="Weekly"
                      className="text-white focus:bg-[#4690931A] focus:text-white"
                    >
                      Weekly
                    </SelectItem>
                    <SelectItem
                      value="Daily"
                      className="text-white focus:bg-[#4690931A] focus:text-white"
                    >
                      Daily
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <defs>
                    <linearGradient
                      id="chartAreaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="rgba(0, 255, 219, 0.14)" />
                      <stop offset="100%" stopColor="rgba(0, 255, 219, 0)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#2F5569"
                    opacity={0.3}
                  />
                  <XAxis
                    dataKey="date"
                    stroke="#6E8FA2"
                    style={{ fontSize: "12px" }}
                    tick={{ fill: "#6E8FA2" }}
                  />
                  <YAxis
                    stroke="#6E8FA2"
                    style={{ fontSize: "12px" }}
                    tick={{ fill: "#6E8FA2" }}
                    domain={[0, 80]}
                    ticks={[0, 20, 40, 60, 80]}
                    tickFormatter={(value) => `${value}k`}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#00FFDB"
                    strokeWidth={1.5}
                    fill="url(#chartAreaGradient)"
                    dot={{ fill: "#00FFDB", r: 4 }}
                    activeDot={{ r: 6, fill: "#00FFDB" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
