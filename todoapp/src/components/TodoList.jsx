import TodoItem from "./TodoItem";

export default function TodoList({ todos, setTodos }) {
  return (
    <div className="bg-gray-700 rounded-lg shadow-md w-1/3 m-auto px-5 py-5 mt-12">
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
}
