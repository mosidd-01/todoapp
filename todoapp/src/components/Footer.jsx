export default function Footer({ completedTodos, totalTodos }) {
  return (
    <div className="fixed mb-0 text-2xl font-bold text-center w-full px-2.5 py-2.5">
      <span className="text-slate-400 mx-12 my-12">
        Completed Todos: {completedTodos}
      </span>
      <span className="text-slate-400 mx-12 my-12">
        Total Todos: {totalTodos}
      </span>
    </div>
  );
}
