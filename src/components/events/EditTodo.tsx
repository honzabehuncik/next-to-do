"use client";

import { edit } from "@/app/actions/todoActions";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import Button from "../ui/Button";
import { todoType } from "@/types/todoTypes";
import { IoIosSave } from "react-icons/io";

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
              required
            />

            <Button
              type="submit"
              text={
                <div className="flex items-center">
                  <IoIosSave />
                  <span className="ml-1 px-2">Uložit</span>
                </div>
              }
              successButton="true"
            />
          </div>
        </Form>
      ) : null}
    </div>
  );
};

export default EditTodo;
