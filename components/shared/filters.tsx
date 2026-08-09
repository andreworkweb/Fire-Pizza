import { Input } from "@base-ui/react";
import { FilterCheckbox } from "./filterCheckBox";
import { Title } from "./title";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters = ({ className }: Props) => {

  const ingredients = [
  { text: "Cheese", value: "cheese" },
  { text: "Tomato", value: "tomato" },
    { text: "Cheese", value: "cheese" },
  { text: "Tomato", value: "tomato" },
    { text: "Cheese", value: "cheese" },
  { text: "Tomato", value: "tomato" },
    { text: "Cheese", value: "cheese" },
  { text: "Tomato", value: "tomato" },
    { text: "Cheese", value: "cheese" },
  { text: "Tomato", value: "tomato" },
    { text: "Cheese", value: "cheese" },
  { text: "Tomato", value: "tomato" },
];

  return (
    <div className={className}>
      <Title text="Filtering" size="sm" className="mb-5 font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Build Your Own" value="1" />
        <FilterCheckbox text="New" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price Range:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} />
          <Input type="number" min={100} max={1000} placeholder="1000" />
        </div>

        <RangeSlider min={0} max={1000} step={10} />
      </div>

      <CheckboxFiltersGroup
        title="Ingredienst:"
        className="mt-5"
        limit={6}
        defaultItems={[]}
        items={ingredients}
      />
    </div>
  ); 
};
