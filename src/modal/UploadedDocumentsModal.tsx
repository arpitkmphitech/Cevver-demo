import { useRef, useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { CLOSE_ICON } from "@/lib/images";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const LABELS = ["Front ID", "Back ID"];

const UploadedDocumentsModal = ({
  open,
  onClose,
}: {
  open: { open: boolean; data: any };
  onClose: (open: { open: boolean; data: any }) => void;
}) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [open.data?.idDocumentFront, open.data?.idDocumentBack].filter(
    Boolean
  );

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      onClose({ open: false, data: null });
    }
  };

  const goPrev = () => {
    if (activeIndex > 0) swiperRef.current?.slidePrev();
  };
  const goNext = () => {
    if (activeIndex < images.length - 1) swiperRef.current?.slideNext();
  };

  const isPrevDisabled = activeIndex === 0;
  const isNextDisabled = activeIndex === images.length - 1;

  if (images.length === 0) return null;

  return (
    <Dialog open={open.open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton={false}
        onOpenAutoFocus={(event) => event.preventDefault()}
        className="w-[90vw] max-w-[542px] rounded-[16px] overflow-hidden pb-[15px]"
      >
        <div className="flex flex-col pt-1">
          <div className="relative flex items-center justify-center pb-5 border-b border-[#2F556957]">
            <h2 className="text-white text-[28px] font-semibold">
              Uploaded Documents
            </h2>
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

          <div className="flex items-center justify-between gap-3 mt-4 mb-4">
            <span className="text-white text-sm font-medium">
              {LABELS[activeIndex]}
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                disabled={isPrevDisabled}
                className={cn(
                  "size-9 rounded-full flex items-center justify-center bg-[#4690931A]",
                  isPrevDisabled
                    ? "cursor-not-allowed text-white/40"
                    : "text-white cursor-pointer"
                )}
                aria-label="Previous"
              >
                <ChevronLeft className="size-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={isNextDisabled}
                className={cn(
                  "size-9 rounded-full flex items-center justify-center bg-[#4690931A]",
                  isNextDisabled
                    ? "cursor-not-allowed text-white/40"
                    : "text-white cursor-pointer"
                )}
                aria-label="Next"
              >
                <ChevronRight className="size-5" />
              </button>
            </div>
          </div>

          <div className="relative rounded-xl border border-[#2F5569] overflow-hidden bg-[#0E1C26] pt-[78px] pb-[78px] px-1">
            <div className="w-full max-w-[536px] h-[334px] rounded-[15px] overflow-hidden mx-auto">
              <Swiper
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                spaceBetween={0}
                slidesPerView={1}
                className="w-full h-full rounded-[15px]"
              >
                {images.map((src, i) => (
                  <SwiperSlide key={i}>
                    <div className="flex items-center justify-center w-full h-[334px] rounded-[15px] overflow-hidden">
                      <img
                        src={src}
                        alt={LABELS[i]}
                        className="max-w-full max-h-full object-contain rounded-[15px]"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1.5 pb-[22px]">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => swiperRef.current?.slideTo(i)}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    i === activeIndex ? "bg-white" : "bg-[#2F5569]"
                  )}
                  aria-label={`Go to ${LABELS[i]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UploadedDocumentsModal;
