import { TodoIndexDtoInterface } from "@/dtos/dashboards/TodoIndexDto";

interface Props {
  todos: TodoIndexDtoInterface[];
}

export const TodoTable = ({ todos }: Props) => {
  return (
    <>
      <div className="border border-green-600 border-solid rounded-md">
        <div className="border bg-green-600 border-solid rounded-md p-2 flex justify-between items-center">
          <div className="text-white">TODO</div>
        </div>
        {todos.length > 0 ? (
          <div className="p-2">
            <table className="w-full">
              <thead className="text-green-600 text-left border-b border-zinc-300">
                <tr>
                  <th className="w-4/12">タスク</th>
                  <th className="w-4/12">企業</th>
                  <th className="w-4/12">期限</th>
                </tr>
              </thead>
              <tbody className="text-zinc-500">
                {todos.map((todo, index) => (
                  <tr key={index}>
                    <td className="pt-2">{todo.taskName}</td>
                    <td className="pt-2">{todo.companyName}</td>
                    <td className="pt-2">{todo.dueDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-2 text-zinc-500">TODOはありません</div>
        )}
      </div>
    </>
  );
};
