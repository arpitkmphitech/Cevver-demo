import Button from "@/components/custom/Button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const DeleteModal = ({
  open,
  icon,
  title,
  description,
  onDelete,
  setOpen,
}: {
  icon: string;
  title: string;
  description: string;
  onDelete: () => void;
  open: { open: boolean; data: any };
  setOpen: (open: { open: boolean; data: any }) => void;
}) => {
  return (
    <Dialog
      open={open.open}
      onOpenChange={() => setOpen({ open: false, data: null })}
    >
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e: any) => e.preventDefault()}
        className="w-[90vw] max-w-[610px] sm:max-w-[610px] rounded-[16px] overflow-hidden"
      >
        <div className="flex flex-col items-center">
          <img
            src={icon}
            alt="icon"
            className="size-[120px] md:size-auto mb-6"
          />

          <h1 className="text-[linear-gradient(95.45deg,_#FFFBF0 2.8%,_#FFFCF2 82.26%)] text-[26px] font-bold [text-shadow:0_0_1.5px_#FFD600] mb-1.5">
            {title}
          </h1>
          <p className="font-normal text-lg text-primary text-center w-full md:w-96">
            {description}
          </p>
        </div>
        <div className="w-full flex justify-between gap-4 mt-[35px]">
          <Button
            type="button"
            onClick={() => setOpen({ open: false, data: null })}
          >
            NO
          </Button>
          <Button onClick={onDelete}>YES</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteModal;
