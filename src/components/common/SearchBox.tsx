import { SEARCH_ICON } from "@/lib/images";

const SearchBox = () => {
  return (
    <div className="rounded-[12px] p-px bg-linear-to-b from-[#2F5569] to-[#2F5569]/50 w-full lg:w-full lg:shrink xl:w-[463px] max-w-[463px]">
      <div className="rounded-[12px] px-[15px] py-[13px] flex items-center gap-2.5 w-full h-full bg-[linear-gradient(180deg,#0E1C26_0%,#08131B_100%)]">
        <img src={SEARCH_ICON} alt="SEARCH_ICON" className="shrink-0" />
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-parimary text-base font-normal flex-1 text-primary focus:outline-none border-none min-w-0"
        />
      </div>
    </div>
  );
};

export default SearchBox;
