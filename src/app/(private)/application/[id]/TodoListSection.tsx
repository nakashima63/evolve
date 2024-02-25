import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import { TodoListTable } from "../../../../components/organisms/applications/TodoListTable";
import { PlusButton } from "@/components/atoms/PlusButton";

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

interface Props {
  id: string;
}

export const TodoListSection = async ({ id }: Props) => {
  const todos = await fetchTodos(id);
  return (
    <section>
      <div className="border border-green-600 border-solid rounded-md mt-4">
        <div className="border bg-green-600 border-solid rounded-md p-2 flex justify-between items-center">
          <div className="text-white">TODO</div>
          <PlusButton />
        </div>
        <TodoListTable todos={todos} />
      </div>
    </section>
  );
};
