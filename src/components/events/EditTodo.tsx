"use client";

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import Button from "../ui/Button";
import { todoType } from "@/types/todoTypes";

const EditTodo = ({ todo }: { todo: todoType }) => {
  const [editTodo, setEditTodo] = useState(false);

  const handleEdit = () => {
    setEditTodo(!editTodo);
  };

  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button
        onClick={handleEdit}
        text={<BiEdit />}
        warning="true"
      />

      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input
            name="inputId"
            value={todo.id}
            type="hidden"
          />
          <div className="flex justify-center gap-3">
            <Input
              type="text"
              name="newTitle"
              placeholder="Upravit úkol..."
            />

            <Button type="submit" text="Uložit" successButton="true" />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
