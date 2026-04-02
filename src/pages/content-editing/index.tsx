import { cva } from "class-variance-authority";
import { Tabs, TabsTrigger, TabsList } from "@/components/ui/tabs";
import { disputeOptions, matchControlTabs } from "@/lib/constants";
import useColumnDef from "@/hooks/useColumnDef";
import DataTable from "@/components/common/DataTable";
import { faker } from "@faker-js/faker";
import { useMemo, useState } from "react";
import { ADD_ICON, FILTER_ICON, REMATCH_IMAGE, TERMINATE_IMAGE } from "@/lib/images";
import DeleteModal from "@/modal/DeleteModal";
import MatchControlModal from "@/modal/MatchControlModal";
import Button from "@/components/custom/Button";

const ContentEditing = () => {
  const [activeTab, setActiveTab] = useState("live");
  const [viewModal, setViewModal] = useState({ open: false, data: null });
  const [actionModal, setActionModal] = useState({
    open: false,
    data: null,
    type: null,
  });

  const data = useMemo(
    () =>
      Array.from({ length: 20 }, () => {
        const playerA = {
          profileImage: faker.image.avatar(),
          username: faker.person.fullName(),
        };
        const playerB = {
          profileImage: faker.image.avatar(),
          username: faker.person.fullName(),
        };
        const wager = faker.number.int({ min: 1, max: 1000 });
        const startTime = faker.date.recent().toISOString();
        const matchTime = faker.date.recent().toISOString();
        const moveHistory = Array.from({ length: 3 }, (_, t) => ({
          turn: t + 1,
          action: `MaxPro99 placed token C${faker.number.int({ min: 1, max: 7 })}`,
        }));
        const chatLog = [
          { player: "PlayerA", message: "Good luck!" },
          { player: "PlayerB", message: "You too!" },
          { player: "PlayerA", message: "Good luck!" },
        ];
        const reason = "Opponent disconnected and claimed win";
        const selectedDecisionId = disputeOptions[0]?.id;
        const timerRemaining = "02:15 remaining";
        return {
          playerA,
          playerB,
          wager,
          startTime,
          matchTime,
          moveHistory,
          chatLog,
          reason,
          disputeOptions,
          selectedDecisionId,
          timerRemaining,
        };
      }),
    []
  );

  const handleAction = (row: any, action: "terminate" | "rematch") => {
    setActionModal({ open: true, data: row, type: action as any });
  };

  const handleView = (row: any) => {
    setViewModal({ open: true, data: row });
  };

  const onConfirmAction = () => {
    if (actionModal.type === "terminate") {
      console.log("Terminate", actionModal.data);
    } else if (actionModal.type === "rematch") {
      console.log("Force rematch", actionModal.data);
    }
    setActionModal({ open: false, data: null, type: null });
  };

  const { matchControlColumns } = useColumnDef(
    { handleAction, handleView },
    activeTab
  );

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="bg-[#4690931A] px-4 py-4 shrink-0 sm:px-6 flex justify-end gap-3.5">
        <button className="text-base font-medium bg-[#4690931A] px-3.5 py-4 rounded-[16px] flex gap-2.5">
          <img src={FILTER_ICON} />
          Filter
        </button>
        <Button type="submit" className="w-[166px] text-base font-medium">
          <img src={ADD_ICON} className="mr-2.5" />
          Add Content</Button>
      </div>
      <div className="flex-1 min-h-0 p-4 flex flex-col">
        <DataTable data={data} columns={matchControlColumns} />
      </div>
      {/* <MatchControlModal
        open={viewModal}
        tab={activeTab as any}
        onClose={() => setViewModal({ open: false, data: null })}
      />
      <DeleteModal
        open={actionModal}
        title={
          actionModal.type === "terminate" ? "Terminate Match" : "Force Rematch"
        }
        onDelete={onConfirmAction}
        icon={
          actionModal.type === "terminate" ? TERMINATE_IMAGE : REMATCH_IMAGE
        }
        setOpen={(open) => setActionModal({ ...open, type: null })}
        description={
          actionModal.type === "terminate"
            ? "Are you sure you want to terminate match Both players will be refunded."
            : "Are you sure you want to force a rematch?"
        }
      /> */}
    </div>
  );
};

export default ContentEditing;
