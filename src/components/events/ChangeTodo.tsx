import { todoStatus } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Button from "../ui/Button";
import { todoType } from "@/types/todoTypes";
import { FaCheckCircle } from "react-icons/fa";

const ChangeTodo = ({ todo }: { todo: todoType }) => {
  const buttonText = todo.isCompleted ? "Splněno" : "Splnit";
  return (
    <Form action={todoStatus}>
      <input
        name="inputId"
        value={todo.id}
        className="border-gray-700 border"
        type="hidden"
      />

      <Button
        type="submit"
        text={
          <div className="flex items-center">
            <FaCheckCircle />
            <span className="ml-1 px-2">{buttonText}</span>
          </div>
        }
        success="true"
      />
    </Form>
  );
};

export default ChangeTodo;
