import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

interface Props {
  className?: string;
}

export const SortPopup = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 bg-gray-50 px-5 h-13 rounded-2xl cursor-pointer",
        className,
      )}
    >
      <ArrowDown size={16} />
      <span className="font-bold">Sort by</span>
      <span className="text-primary font-semibold">Popular</span>
    </div>
  );
};
