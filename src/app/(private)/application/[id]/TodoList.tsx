import { PlusButton } from "@/components/atoms/PlusButton";
import { CheckBox } from "@/components/atoms/CheckBox";
import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import { displayTaskStatus } from "@/types/enums/Applications/todos/TaskStatus";

interface Props {
  id: string;
}

const fetchTodos = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/application/${id}/todo`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    },
  );
  const data: { todos: TodoIndexDtoInterface[] } = await res.json();
  return data.todos;
};

export const TodoList = async ({ id }: Props) => {
  const todos: TodoIndexDtoInterface[] = await fetchTodos(id);
  return (
    <div className="border border-green-600 border-solid rounded-md mt-4">
      <div className="border bg-green-600 border-solid rounded-md p-2 flex justify-between items-center">
        <div className="text-white">TODO</div>
        <PlusButton />
      </div>
      {todos.length > 0 ? (
        <div className="p-2">
          <table className="w-full">
            <thead className="text-green-600 text-left border-b border-zinc-300">
              <tr>
                <th className="w-1/12"></th>
                <th className="w-2/12">タスク</th>
                <th className="w-3/12">期限</th>
                <th className="w-2/12">状態</th>
                <th className="w-4/12">備考</th>
              </tr>
            </thead>
            <tbody className="text-zinc-500">
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td className="pt-2">
                    <CheckBox />
                  </td>
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
    </div>
  );
};
