'use client'

import { cn } from "@/lib/utils";
import { useCategoryId } from "@/store/category";
import { Category } from "@prisma/client";


interface Props {
  items: Category[];
  className?: string;
}

export const Categories = ({ items, className }: Props) => {

  const categoryActiveId = useCategoryId((state) => state.activeId)
 
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {items.map((item, index) => (
        <a className={cn(
          "flex items-center font-bold h-11 rounded-2xl px-5",
           categoryActiveId === index +1 &&"bg-white shadow-md shadow-gray-200 text-primary"
          )} 
          href={`/#${item.name}`}
          key={index}
          >
          <button>{item.name}</button>
        </a>
      ))}
    </div>
  );
};
