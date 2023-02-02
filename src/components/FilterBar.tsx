import { FilterText, FilterOptions } from "../App";

type Props = {
  filterText: FilterText;
  filterOptions: FilterOptions;
  handleChangeFilter: (text: FilterText) => void;
};

const FilterBar = (props: Props) => {
  return (
    <div className="flex items-center gap-4 z-20 justify-center rounded-md text-sm text-[#9495A5]">
      {props.filterOptions.map((option, index) => (
        <button
          key={index}
          className={`hover:text-[#494C6B] transition-all capitalize ${
            props.filterText === option && "text-[#3A7CFD]"
          }`}
          onClick={() => props.handleChangeFilter(option as FilterText)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
