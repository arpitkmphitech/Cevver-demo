import { cn } from "@/lib/utils";

export interface DetailCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const DetailCard = ({ title, children, className }: DetailCardProps) => (
  <div className={cn("gradient-border flex flex-col", className)}>
    <div className="flex flex-1 flex-col p-4 bg-[#4690931A] rounded-[14px]">
      <div className="border-b border-[#2F556957] pb-3.5">
        <p className="text-lg font-medium text-white">{title}</p>
      </div>
      <div className="mt-3.5 text-primary text-base font-medium">
        {children}
      </div>
    </div>
  </div>
);

export default DetailCard;
