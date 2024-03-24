import { useState, useEffect } from "react";
import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import { Drawer } from "@/components/molecules/displays/Drawer";
import { InputForm } from "@/components/atoms/InputForm";
import { SelectForm } from "@/components/molecules/forms/SelectForm";
import { FormError } from "@/components/molecules/forms/FormError";
import { taskStatusOptions } from "@/types/enums/Applications/todos/TaskStatus";
import { FormItem } from "@/components/molecules/forms/FormItem";
import { Button } from "@/components/atoms/Button";
import { createClient } from "@/libs/supabase/client";

interface Props {
  targetTodo: TodoIndexDtoInterface | null;
  isOpen: boolean;
  updateIsOpen: (bool: boolean) => void;
  updateTodos: (newTodo: TodoIndexDtoInterface) => void;
  updateTargetTodo: (todo: TodoIndexDtoInterface | null) => void;
}

interface FormErrors {
  errors: {
    taskName?: string[] | undefined;
    dueDate?: string[] | undefined;
    status?: string[] | undefined;
    note?: string[] | undefined;
  };
}

export const TodoFormDrawer = ({
  targetTodo,
  isOpen,
  updateIsOpen,
  updateTodos,
  updateTargetTodo,
}: Props) => {
  const [formErrors, setFormErrors] = useState<FormErrors>({ errors: {} });
  const [applicationId, setApplicationId] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname.split("/application/")[1];
    setApplicationId(path);
  }, []);

  const handleOnClose = (): void => {
    updateTargetTodo(null);
    updateIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors({ errors: {} });

    const formElement = e.currentTarget as HTMLFormElement;
    const userId = (await createClient().auth.getUser()).data.user?.id;
    const formData = new FormData(formElement);
    formData.append("userId", userId ?? "");

    const endpoint = targetTodo
      ? `/api/application/${applicationId}/todo/${targetTodo.id}/edit`
      : `/api/application/${applicationId}/todo/add`;

    const method = targetTodo ? "PUT" : "POST";

    const res = await fetch(endpoint, {
      method: method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (res.status === 201 || res.status === 200) {
      const successRes = await res.json();
      const newTodo = successRes.todo;

      updateTodos(newTodo);
      updateIsOpen(false);
    }

    if (res.status === 400) {
      const errorRes = await res.json();
      setFormErrors({ errors: errorRes.errors });
    }
  };

  return (
    <Drawer isOpen={isOpen} onClose={handleOnClose}>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <FormItem formId="taskName" label="タスク名" size="12">
          <InputForm
            id="taskName"
            name="taskName"
            defaultValue={targetTodo?.taskName}
          />
          <FormError
            formId="taskName"
            errors={formErrors.errors?.taskName?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="dueDate" label="期限" size="12">
          <InputForm
            id="dueDate"
            type="datetime-local"
            name="dueDate"
            defaultValue={targetTodo?.dueDate}
          />
          <FormError
            formId="dueDate"
            errors={formErrors.errors?.dueDate?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="status" label="状態" size="12">
          <SelectForm
            id="status"
            name="status"
            options={taskStatusOptions}
            defaultValue={targetTodo?.status ? targetTodo.status : "-"}
          />
          <FormError
            formId="status"
            errors={formErrors.errors?.status?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="note" label="備考" size="12">
          <InputForm id="note" name="note" defaultValue={targetTodo?.note} />
          <FormError
            formId="note"
            errors={formErrors.errors?.note?.flat() ?? []}
          />
        </FormItem>
        <div className="col-span-12 flex justify-center">
          <Button
            type="submit"
            label={targetTodo ? "更新" : "登録"}
            className="primary"
          />
        </div>
      </form>
    </Drawer>
  );
};
