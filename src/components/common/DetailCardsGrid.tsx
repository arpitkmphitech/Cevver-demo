import DetailCard from "@/components/common/DetailCard";

export interface DetailCardsGridItem {
  title: string;
  content: React.ReactNode;
  colSpan?: 1 | 2;
}

export interface DetailCardsGridProps {
  items: DetailCardsGridItem[];
}

const DetailCardsGrid = ({ items }: DetailCardsGridProps) => {
  if (!items.length) return null;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
      {items.map((item, i) => (
        <div
          key={i}
          className={item.colSpan === 2 ? "col-span-2" : "col-span-1"}
        >
          <DetailCard title={item.title}>{item.content}</DetailCard>
        </div>
      ))}
    </div>
  );
};

export default DetailCardsGrid;
