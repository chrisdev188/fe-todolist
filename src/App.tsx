import {
  BackgroundImage,
  FilterBar,
  Header,
  InstructionText,
  Search,
  TodoList,
} from "./components";

const App = () => {
  return (
    <div className="px-6 py-12 font-sans min-h-screen bg-slate-100 md:py-20">
      <BackgroundImage />
      <div className="max-w-xl mx-auto">
        <Header />
        <Search />
        <TodoList />
        <div className="bg-white shadow-md p-3 mt-4 rounded-md sm:hidden">
          <FilterBar />
        </div>
        <InstructionText />
      </div>
    </div>
  );
};

export default App;
