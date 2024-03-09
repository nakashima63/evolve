import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import { Drawer } from "@/components/molecules/displays/Drawer";
import { InputForm } from "@/components/atoms/InputForm";
import { SelectForm } from "@/components/molecules/forms/SelectForm";
import { taskStatusOptions } from "@/types/enums/Applications/todos/TaskStatus";
import { FormItem } from "@/components/molecules/forms/FormItem";
import { Button } from "@/components/atoms/Button";
import { taskStatus } from "@prisma/client";

interface Props {
  targetTodo: TodoIndexDtoInterface | null;
  isOpen: boolean;
  updateIsOpen: (bool: boolean) => void;
  updateTodos: (newTodo: TodoIndexDtoInterface) => void;
}

export const TodoFormDrawer = ({
  targetTodo,
  isOpen,
  updateIsOpen,
  updateTodos,
}: Props) => {
  const handleOnClose = () => {
    updateIsOpen(false);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);
    formData.append("applicationId", "7794168e-d51f-4694-82bf-8bc4366cc6d7");
    const id = "7794168e-d51f-4694-82bf-8bc4366cc6d7";

    const newTodo = {
      id: id,
      taskName: "taskName",
      dueDate: "2022-01-01",
      status: taskStatus.Completed,
      note: "note",
    };
    updateTodos(newTodo);
    updateIsOpen(false);
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
        </FormItem>
        <FormItem formId="dueDate" label="期限" size="12">
          <InputForm
            id="dueDate"
            type="datetime-local"
            name="dueDate"
            defaultValue={targetTodo?.dueDate}
          />
        </FormItem>
        <FormItem formId="status" label="状態" size="12">
          <SelectForm
            id="status"
            name="status"
            options={taskStatusOptions}
            defaultValue={targetTodo?.status}
          />
        </FormItem>
        <FormItem formId="note" label="備考" size="12">
          <InputForm id="note" name="note" defaultValue={targetTodo?.note} />
        </FormItem>
        <div className="col-span-12 flex justify-center">
          <Button type="submit" label="登録" className="primary" />
        </div>
      </form>
    </Drawer>
  );
};
