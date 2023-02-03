import React from "react";
import { FilterOptions, FilterText, Todo } from "../../App";
import ActiveTodoCount from "../ActiveTodoCount";
import ClearCompletedButton from "../ClearCompletedButton";
import FilterBar from "../FilterBar";

type Props = {
  todoList: Todo[];
  filterText: FilterText;
  filterOptions: FilterOptions;
  handleChangeFilter: (text: FilterText) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  handleDelete: (id: number) => void;
  handleDeleteCompleteds: () => void;
};

const TodoList = (props: Props) => {
  const filteredTodos = props.todoList.filter((todo) => {
    if (props.filterText === "all") return true;
    else if (props.filterText === "active") return todo.completed === false;
    else return todo.completed === true;
  });
  const numOfActiveTodos = props.todoList.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <div className="relative z-20 shadow-md rounded-md overflow-hidden">
      {filteredTodos.length > 0 ? (
        <ul>
          {filteredTodos.map((todo) => {
            return (
              <li key={todo.id}>
                <label className="group bg-white p-4 border-b border-solid border-[#E3E4F1] grid grid-cols-todo-item gap-4 text-xs isolate">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="appearance-none bg-white relative w-[1.25rem] h-[1.25rem] rounded-full border-[1px] border-solid border-transparent bg-clip-padding before:content-checked before:absolute before:inset-0 before:-z-[1] before:-m-[1px] before:bg-slate-300 hover:before:bg-gradient-to-tr hover:before:from-[#55DDFF] hover:before:to-[#C058F3]  before:rounded-full before:flex before:items-center before:justify-center checked:before:z-0 checked:before:bg-gradient-to-tr checked:before:from-[#55DDFF] checked:before:to-[#C058F3]"
                    checked={todo.completed}
                    onChange={(e) => props.handleChange(e, todo.id)}
                  />
                  <span
                    className={`capitalize flex items-center md:text-base ${
                      todo.completed
                        ? "text-[#D1D2DA] line-through"
                        : "text-[#494C6B]"
                    }`}
                  >
                    {todo.title}
                  </span>
                  <button
                    className="ml-auto invisible pointer-events-none group-hover:visible group-hover:pointer-events-auto"
                    onClick={() => props.handleDelete(todo.id)}
                  >
                    <img src="/images/icon-cross.svg" alt="" aria-hidden />
                  </button>
                </label>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="p-4 bg-white text-[#494C6B] border-b border-solid border-slate-200 text-center">
          There is nothing here!
        </p>
      )}
      <div className="flex justify-between bg-white py-3 px-4 text-xs text-[#9495A5] items-center">
        <ActiveTodoCount count={numOfActiveTodos} />
        <div className="hidden sm:block">
          <FilterBar
            filterText={props.filterText}
            filterOptions={props.filterOptions}
            handleChangeFilter={props.handleChangeFilter}
          />
        </div>
        <ClearCompletedButton
          handleDeleteCompleteds={props.handleDeleteCompleteds}
        />
      </div>
    </div>
  );
};

export default TodoList;
