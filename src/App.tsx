import React, { useEffect, useState } from "react";
import {
  BackgroundImage,
  FilterBar,
  Header,
  InstructionText,
  TodoCreator,
  TodoList,
} from "./components";

export type FilterText = "all" | "completed" | "active";

const filterOptions = ["all", "completed", "active"];
export type FilterOptions = typeof filterOptions;

export type Todo = {
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

const App = () => {
  const [todoList, setTodoList] = useState<Todo[]>(() => {
    const value = localStorage.getItem("todoList");
    if (typeof value === "string") {
      return JSON.parse(value);
    }
  });
  const [filterText, setFilterText] = useState<FilterText>("all");
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const handleChangeFilter = (text: FilterText) => {
    setFilterText(text);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleCreateTodo = (
    e: React.FormEvent<HTMLFormElement>,
    text: string
  ) => {
    e.preventDefault();
    const newTodo: Todo = { id: Date.now(), title: text, completed: false };
    setTodoList((prev) => [...prev, newTodo]);
    setText("");
  };

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
    <div className="px-6 py-12 font-sans min-h-screen bg-slate-100 md:py-20">
      <BackgroundImage />
      <div className="max-w-xl mx-auto">
        <Header />
        <TodoCreator
          text={text}
          handleChangeText={handleChangeText}
          handleCreateTodo={handleCreateTodo}
        />
        <TodoList
          filterText={filterText}
          filterOptions={filterOptions}
          handleChangeFilter={handleChangeFilter}
          handleChange={handleChange}
          handleDelete={handleDelete}
          handleDeleteCompleteds={handleDeleteCompleteds}
          todoList={todoList}
        />
        <div className="bg-white shadow-md p-3 mt-4 rounded-md sm:hidden">
          <FilterBar
            filterText={filterText}
            filterOptions={filterOptions}
            handleChangeFilter={handleChangeFilter}
          />
        </div>
        <InstructionText />
      </div>
    </div>
  );
};

export default App;
