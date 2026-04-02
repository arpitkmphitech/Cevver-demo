import Button from "@/components/custom/Button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { LOGOUT_IMAGE } from "@/lib/images";
import { useNavigate } from "react-router";

const LogOutModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) => {
  const navigate = useNavigate();

  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e: any) => e.preventDefault()}
        className="w-[90vw] max-w-[610px] sm:max-w-[610px] rounded-[16px] overflow-hidden"
      >
        <div className="flex flex-col items-center">
          <img
            src={LOGOUT_IMAGE}
            alt="LOGOUT_IMAGE"
            className="size-[120px] md:size-auto mb-6"
          />

          <h1 className="text-[linear-gradient(95.45deg,_#FFFBF0 2.8%,_#FFFCF2 82.26%)] text-[26px] font-bold [text-shadow:0_0_1.5px_#FFD600] mb-1.5">
            Sign Out
          </h1>
          <p className="font-normal text-lg text-primary text-center w-full md:w-96">
            Are you sure you want to sign out?
          </p>
        </div>
        <div className="w-full flex justify-between gap-4 mt-[35px]">
          <Button type="button" onClick={() => navigate("/login")}>
            YES
          </Button>
          <Button onClick={() => setOpen(false)}>NO</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LogOutModal;
