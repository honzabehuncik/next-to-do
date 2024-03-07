import { create } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";

const generateRandomTask = () => {
  const tasks = ["Uvařit večeři", "Uklidit pokoj", "Nakoupit potraviny", "Vyprat prádlo", "Cvičit jógu", "Pracovat na projektu", "Přijít na meeting"];
  const randomIndex = Math.floor(Math.random() * tasks.length);
  return tasks[randomIndex];
};

const AddTodo = () => {
  const randomTask = generateRandomTask();

  return (
    <Form action={create} className="w-1/2 m-auto ">
      <div className="flex gap-3">
        <Input
          name="input"
          type="text"
          placeholder={`${randomTask}...`}
        />
        <Button type="submit" text="Vytvořit" successButton="true" />
      </div>
    </Form>
  );
};

export default AddTodo;
