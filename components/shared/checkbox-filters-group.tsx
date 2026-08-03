"use client";

import { Input } from "@base-ui/react";
import { FilterChecboxProps, FilterCheckbox } from "./filterCheckBox";
import { useState } from "react";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  onChange?: (values: string[]) => void;
  className?: string;
  defaultValue?: string[];
}

export const CheckboxFiltersGroup = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Search...",
  onChange,
  className,
  defaultValue,
}: Props) => {
  const [showAll, setShowAll] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = items
  .filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
  .slice(0, showAll ? items.length : limit);

  const onInputCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <p className="font-bold mb-3">{title}</p>

      <div className="mb-5">
        <Input
          placeholder={searchInputPlaceholder}
          className="bg-gray-50 border-none"
          onChange={onInputCheckedChange}
        />
      </div>

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            key={index}
            text={item.text}
            value={item.value}
            endAdornment={item.endAdornment}
            checked={false}
            onCheckedChange={(ids) => console.log(ids)}
          />
        ))}
      </div>

      {items.length > limit && (
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            {showAll ? "hide" : "show all"}
          </button>
        </div>
      )}
    </div>
  );
};
