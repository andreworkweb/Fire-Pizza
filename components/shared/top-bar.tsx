import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Categories } from "./categories.";
import { SortPopup } from "./sort-popup";
import { Category } from "@prisma/client";

interface Props {
  category: Category[];
  className?: string;
}

export const TopBar = ({ category, className }: Props) => {
  return (
    <div
      className={cn(
        "sticky  top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className,
      )}
    >
      <Container className="flex justify-between items-center">
        <Categories items={category} />
        <SortPopup />
      </Container>
    </div>
  );
};
