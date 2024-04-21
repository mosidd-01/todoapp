import { useState } from "react";

export default function Form({ todos, setTodos }) {
  //const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-700 rounded-lg p-5 w-1/3 m-auto mt-12 shadow-md"
    >
      <div className="flex">
        <input
          className="bg-gray-700 w-full border-none block focus:outline-none text-gray-400 text-base"
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button
          className="inline-block border-none rounded bg-yellow-400 px-4 py-3 text-slate-50 cursor-pointer"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
  1;
}
