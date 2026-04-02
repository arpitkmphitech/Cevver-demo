import Image from "@/components/common/Image";
import { DEFAULT_AVATAR } from "@/lib/images";

export interface PlayerCardProps {
  label: string;
  profileImage: string;
  username: string;
}

const PlayerCard = ({ label, profileImage, username }: PlayerCardProps) => (
  <div className="gradient-border">
    <div className="flex flex-1 flex-col p-4 bg-[#4690931A] rounded-[14px]">
      <div className="border-b border-[#2F556957] pb-3.5">
        <p className="text-lg font-medium text-white">{label}</p>
      </div>
      <div className="mt-3.5 flex gap-3.5 items-center">
        <Image
          src={profileImage || DEFAULT_AVATAR}
          className="size-16 shrink-0 rounded-full object-cover"
        />
        <p className="text-lg font-semibold text-white truncate">{username}</p>
      </div>
    </div>
  </div>
);

export default PlayerCard;
