type Props = {};

const FilterBar = (props: Props) => {
  return (
    <div className="flex items-center gap-4 justify-center rounded-md text-sm text-[#9495A5]">
      <button>All</button>
      <button>Active</button>
      <button>Completed</button>
    </div>
  );
};

export default FilterBar;
