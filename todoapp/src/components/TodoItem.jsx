import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }
  const className1 = item.done ? styles.completed : "";
  return (
    <div className="w-full text-slate-800 text-xl m-auto">
      <div className="font-bold px-5 py-5 text-gray-400">
        <span className={className1} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className="float-right px-5 py-2.5 bg-yellow-400 text-slate-50 border-none -mt-3 rounded cursor-pointer"
          >
            x
          </button>
        </span>
      </div>

      <hr className="w-full bg-gray-600 h-px border-0 rounded" />
    </div>
  );
}
