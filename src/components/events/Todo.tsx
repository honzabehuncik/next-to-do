import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import ChangeTodo from "./ChangeTodo";
import { todoType } from "@/types/todoTypes";

const Todo = ({ todo }: { todo: todoType }) => {
  const todoStyle = {
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };

  const titleStyle = {
    textDecoration: todo.isCompleted ? "line-through" : "none",
  };

  return (
    <div
      className="w-full  flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      style={todoStyle}
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase" style={titleStyle}>
        {todo.title}
      </span>
      <div className="flex items-center gap-3">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </div>
  );
};

export default Todo;
