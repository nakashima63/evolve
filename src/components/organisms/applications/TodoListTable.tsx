import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import { displayTaskStatus } from "@/types/enums/Applications/todos/TaskStatus";
import { PlusButton } from "@/components/atoms/PlusButton";

interface Props {
  todos: TodoIndexDtoInterface[];
  updateIsOpen: (bool: boolean) => void;
  updateTargetTodo: (todo: TodoIndexDtoInterface) => void;
}

export const TodoListTable = ({
  todos,
  updateIsOpen,
  updateTargetTodo,
}: Props) => {
  const handleOnClick = (targetTodo?: TodoIndexDtoInterface) => {
    if (targetTodo) {
      updateTargetTodo(targetTodo);
    }
    updateIsOpen(true);
  };

  return (
    <>
      <div className="border bg-green-600 border-solid rounded-md p-2 flex justify-between items-center">
        <div className="text-white">TODO</div>
        <button onClick={() => handleOnClick()}>
          <PlusButton />
        </button>
      </div>
      {todos.length > 0 ? (
        <div className="p-2">
          <table className="w-full">
            <thead className="text-green-600 text-left border-b border-zinc-300">
              <tr>
                <th className="w-3/12">タスク</th>
                <th className="w-3/12">期限</th>
                <th className="w-2/12">状態</th>
                <th className="w-4/12">備考</th>
              </tr>
            </thead>
            <tbody className="text-zinc-500">
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td className="pt-2">{todo.taskName}</td>
                  <td className="pt-2">{todo.dueDate}</td>
                  <td className="pt-2">{displayTaskStatus(todo.status)}</td>
                  <td className="pt-2">{todo.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="p-2 text-zinc-500">
          登録されているタスクはありません。
        </div>
      )}
    </>
  );
};
