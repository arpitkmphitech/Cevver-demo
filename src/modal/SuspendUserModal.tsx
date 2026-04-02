import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Button from "@/components/custom/Button";
import FormProvider from "@/components/form/FormProvider";
import DateRangeField from "@/components/form/DateRangeField";
import { suspendUserSchema } from "@/lib/schema";

type SuspendFormValues = {
  date_filter: { from: Date; to: Date } | null;
};

type Props = {
  open: { open: boolean; data: any };
  onClose: (value: { open: boolean; data: any }) => void;
};

const SuspendUserModal = ({ open, onClose }: Props) => {
  const methods = useForm<SuspendFormValues>({
    defaultValues: { date_filter: null },
    resolver: yupResolver(suspendUserSchema as any),
  });

  const resetForm = () => {
    methods.clearErrors();
    methods.reset(
      { date_filter: null },
      { keepDirty: false, keepTouched: false, keepErrors: false }
    );
  };

  useEffect(() => {
    if (!open.open) {
      resetForm();
    }
  }, [open.open]);

  const handleClose = () => {
    resetForm();
    onClose({ open: false, data: null });
  };

  const handleConfirm = (data: SuspendFormValues) => {
    resetForm();
    onClose({ open: false, data });
  };

  return (
    <Dialog open={open.open} onOpenChange={handleClose}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="w-[90vw] max-w-[610px] rounded-[24px]"
      >
        <FormProvider
          methods={methods}
          onSubmit={methods.handleSubmit(handleConfirm)}
        >
          <div className="flex flex-col pt-1">
            <div className="flex items-center justify-center pb-5 border-b border-[#2F556957] mb-[30px]">
              <h2 className="text-white text-[28px] font-semibold">
                Suspension Duration
              </h2>
            </div>

            <DateRangeField
              name="date_filter"
              className="h-[54px] py-0 rounded-[12px]"
            />

            <div className="w-full flex justify-between gap-4 mt-[35px]">
              <Button type="button" onClick={handleClose}>
                CANCEL
              </Button>
              <Button type="submit">CONFIRM</Button>
            </div>
          </div>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default SuspendUserModal;
