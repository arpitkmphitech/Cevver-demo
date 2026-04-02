import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import Button from "@/components/custom/Button";
import PlayerCard from "@/components/common/PlayerCard";
import DetailCardsGrid from "@/components/common/DetailCardsGrid";
import { ScrollArea } from "@/components/common/ScrollArea";
import { CLOSE_ICON, REMATCH_IMAGE, TERMINATE_IMAGE } from "@/lib/images";
import DeleteModal from "./DeleteModal";
import { useEffect, useState } from "react";
import DetailCard from "@/components/common/DetailCard";

const MatchControlModal = ({
  open,
  onClose,
  tab,
}: {
  tab: string;
  onClose: () => void;
  open: { open: boolean; data: any };
}) => {
  const data = open.data;
  const isLiveTab = tab === "live";
  const isDisputeTab = tab === "dispute";
  const isCompletedTab = tab === "completed";
  const showDecisionOptions = isDisputeTab && open.data?.disputeOptions?.length;
  const [actionModal, setActionModal] = useState({
    open: false,
    data: null,
    type: null,
  });
  const [selectedDecisionId, setSelectedDecisionId] = useState(null);

  useEffect(() => {
    setSelectedDecisionId(open.data?.disputeOptions[0]?.id ?? null);
  }, [open.data]);

  const onConfirmAction = () => {
    if (actionModal.type === "terminate") {
      console.log("Terminate", actionModal.data);
    } else if (actionModal.type === "rematch") {
      console.log("Force rematch", actionModal.data);
    } else {
      console.log("Confirm action", actionModal.data);
    }
    setActionModal({ open: false, data: null, type: null });
    onClose();
  };

  return (
    <Dialog
      open={open.open}
      onOpenChange={(openState) => !openState && onClose()}
    >
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[90vw] max-w-[702px] sm:max-w-[702px] rounded-[16px] overflow-hidden max-h-[90vh]"
      >
        <div className="flex flex-col pt-1">
          <div className="relative flex items-center justify-center pb-5 border-b border-[#2F556957] mb-8">
            <h2 className="text-white text-[28px] font-semibold">
              Match Detail
            </h2>
            {isLiveTab && (
              <div className="absolute top-1 left-0 bg-[#FF383C33] w-[70px] rounded-[10px] py-1.5 px-[13px] flex items-center gap-1.5">
                <div className="h-[9px] w-[9px] rounded-full bg-[#FF383C] blink" />
                <span className="text-sm font-medium">Live</span>
              </div>
            )}
            <DialogClose asChild>
              <button
                type="button"
                className="absolute top-0 right-0 size-8 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <img src={CLOSE_ICON} alt="CLOSE_ICON" />
              </button>
            </DialogClose>
          </div>
          <ScrollArea
            className="flex flex-col max-h-[calc(100vh-340px)] w-full"
            hideScrollbar
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <PlayerCard
                label="Player A"
                profileImage={data?.playerA.profileImage}
                username={data?.playerA.username}
              />
              <PlayerCard
                label="Player B"
                profileImage={data?.playerB.profileImage}
                username={data?.playerB.username}
              />
            </div>
            {isLiveTab && (
              <DetailCardsGrid
                items={[
                  { title: "Wager", content: `$${data?.wager ?? 0}` },
                  { title: "Timer", content: data?.timerRemaining },
                ]}
              />
            )}
            {isDisputeTab && data?.reason && (
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div className="col-span-2">
                  <DetailCard title="Reason">{data.reason}</DetailCard>
                </div>
              </div>
            )}

            {isCompletedTab && (
              <DetailCardsGrid
                items={[
                  { title: "Wager", content: `$${data.wager ?? 0}` },
                  { title: "Match Time", content: data.timerRemaining },
                ]}
              />
            )}

            <div>
              <p className="text-lg font-semibold mb-3 mt-8">
                {isLiveTab ? "Move History" : "Match Log"}
              </p>
              <div className="gradient-border">
                <div className="flex flex-1 flex-col p-4 bg-[#4690931A] rounded-[14px]">
                  <ul className="space-y-1.5">
                    {data?.moveHistory?.length ? (
                      data?.moveHistory.map((move: any, i: number) => (
                        <li
                          key={i}
                          className="flex justify-between pb-3.5 mb-3.5 last:mb-0 last:pb-0 border-b border-[#2F556957] last:border-b-0"
                        >
                          <span className="text-lg font-medium text-white">
                            Turn {move.turn}
                          </span>
                          <span className="text-base font-medium text-primary">
                            {move.action}
                          </span>
                        </li>
                      ))
                    ) : (
                      <li className="text-base font-medium text-primary">
                        No move history
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              {isLiveTab && (
                <div>
                  <div className="mt-8 mb-3 flex justify-between">
                    <p className="text-lg font-semibold">Chat Log</p>
                    <span className="text-sm font-semibold text-primary cursor-pointer">
                      View all
                    </span>
                  </div>
                  <div className="gradient-border">
                    <div className="flex flex-1 flex-col p-4 bg-[#4690931A] rounded-[14px]">
                      <ul className="space-y-1.5">
                        {data?.chatLog?.length ? (
                          data.chatLog.map((chat: any, i: number) => (
                            <li
                              key={i}
                              className="flex justify-between pb-3.5 mb-3.5 last:mb-0 last:pb-0 border-b border-[#2F556957] last:border-b-0"
                            >
                              <span className="text-lg font-medium text-white">
                                {chat.player || "-"}:
                              </span>
                              <span className="text-base font-medium text-primary">
                                {chat.message || "-"}
                              </span>
                            </li>
                          ))
                        ) : (
                          <li className="text-base font-medium text-primary">
                            No chat log
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {showDecisionOptions && data.disputeOptions && (
              <div className="pr-4 mt-8">
                <div className="flex justify-between mb-3">
                  <p className="text-lg font-semibold">Choose Decision</p>
                  <span className="text-sm font-semibold text-primary cursor-pointer">
                    View all
                  </span>
                </div>
                <div className="gradient-border">
                  <div className="flex flex-1 flex-col p-4 bg-[#4690931A] rounded-[14px]">
                    <div className="space-y-3">
                      {data.disputeOptions.map((opt: any) => (
                        <label className="flex items-center gap-3 cursor-pointer w-fit">
                          <input
                            type="radio"
                            name="dispute-decision"
                            className="peer hidden"
                            checked={selectedDecisionId === opt.id}
                            onChange={() => setSelectedDecisionId(opt.id)}
                          />

                          <span className="relative w-6 h-6 rounded-full border-2 border-primary box-border peer-checked:border-white peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:w-3.5 peer-checked:after:h-3.5 peer-checked:after:bg-white peer-checked:after:rounded-full peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2" />
                          <span className="text-base font-normal text-primary">
                            {opt.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ScrollArea>

          {isLiveTab && (
            <div className="flex gap-3 mt-8 mb-2.5 shrink-0">
              <Button
                type="button"
                onClick={() =>
                  setActionModal({
                    open: true,
                    data: data,
                    type: "terminate" as any,
                  })
                }
              >
                TERMINATE
              </Button>
              <Button
                onClick={() =>
                  setActionModal({
                    open: true,
                    data: data,
                    type: "rematch" as any,
                  })
                }
              >
                FORCE REMATCH
              </Button>
            </div>
          )}
          {isDisputeTab && (
            <div className="flex gap-3 mt-8 mb-2.5 shrink-0">
              <Button type="button" onClick={onClose}>
                CANCEL
              </Button>
              <Button onClick={onConfirmAction}>CONFIRM ACTION</Button>
            </div>
          )}
        </div>
      </DialogContent>
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
      />
    </Dialog>
  );
};

export default MatchControlModal;
