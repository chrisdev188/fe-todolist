type Props = {};

const Search = (props: Props) => {
  return (
    <div className="relative before:content-circle mb-4 z-20 before:absolute before:top-1/2 before:left-[16px] before:-translate-y-1/2 before:z-10 before:grid before:place-items-center before:w-5 before:h-5 before:overflow-hidden">
      <input
        type="text"
        placeholder="Create a new todo..."
        className="w-full pl-12 pr-4 py-4 rounded-md text-xs md:text-base font-light bg-white"
      />
    </div>
  );
};

export default Search;
