import { useState } from "react";
import ActiveTodoCount from "../ActiveTodoCount";
import ClearCompletedButton from "../ClearCompletedButton";
import FilterBar from "../FilterBar";

type Props = {};

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const mockTodos: Todo[] = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Do 10 pushups", completed: false },
  { id: 3, title: "Do laundry", completed: false },
  { id: 4, title: "Read Javascript book 15 minutes", completed: false },
  { id: 5, title: "Complete todo", completed: false },
];

const TodoList = (props: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>(mockTodos);

  const numOfActiveTodos = todoList.filter(
    (todo) => todo.completed === false
  ).length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
    setTodoList((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: e.target.checked };
        }
        return todo;
      })
    );
  };

  const handleDelete = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleDeleteCompleteds = () => {
    setTodoList((prev) => prev.filter((todo) => todo.completed === false));
  };

  return (
    <div className="relative z-20 shadow-md rounded-md overflow-hidden">
      <ul>
        {todoList.map((todo) => {
          return (
            <li key={todo.id}>
              <label className="group bg-white p-4 border-b border-solid border-[#E3E4F1] grid grid-cols-todo-item gap-4 text-xs isolate">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="appearance-none bg-white relative w-[1.25rem] h-[1.25rem] rounded-full border-[1px] border-solid border-transparent bg-clip-padding before:content-checked before:absolute before:inset-0 before:-z-[1] before:-m-[1px] before:bg-slate-300 hover:before:bg-gradient-to-tr hover:before:from-[#55DDFF] hover:before:to-[#C058F3]  before:rounded-full before:flex before:items-center before:justify-center checked:before:z-0 checked:before:bg-gradient-to-tr checked:before:from-[#55DDFF] checked:before:to-[#C058F3]"
                  checked={todo.completed}
                  onChange={(e) => handleChange(e, todo.id)}
                />
                <span className="capitalize text-[#494C6B] flex items-center md:text-base">
                  {todo.title}
                </span>
                <button
                  className="ml-auto invisible pointer-events-none group-hover:visible group-hover:pointer-events-auto"
                  onClick={() => handleDelete(todo.id)}
                >
                  <img src="/images/icon-cross.svg" alt="" aria-hidden />
                </button>
              </label>
            </li>
          );
        })}
      </ul>
      <div className="flex justify-between bg-white py-3 px-4 text-xs text-[#9495A5] items-center">
        <ActiveTodoCount count={numOfActiveTodos} />
        <div className="hidden sm:block">
          <FilterBar />
        </div>
        <ClearCompletedButton handleDeleteCompleteds={handleDeleteCompleteds} />
      </div>
    </div>
  );
};

export default TodoList;
