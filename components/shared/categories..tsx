'use client'

import { cn } from "@/lib/utils";
import { useCategoryId } from "@/store/category";
import React from "react";
import { useState } from "react";


interface Props {
  className?: string;
}

const cats = ["Pizzas", "Breackfast"];

export const Categories = ({ className }: Props) => {

  const categoryActiveId = useCategoryId((state) => state.activeId)
 
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((cat, index) => (
        <a className={cn(
          "flex items-center font-bold h-11 rounded-2xl px-5",
           categoryActiveId === index +1 &&"bg-white shadow-md shadow-gray-200 text-primary"
          )} 
          href={`/#${cat}`}
          key={index}
          >
          <button>{cat}</button>
        </a>
      ))}
    </div>
  );
};
