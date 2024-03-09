import { Container } from "@/components/atoms/Container";
import { Box } from "@/components/atoms/Box";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { ApplicationDetail } from "./ApplicationDetail";
import { ConfirmDeleteDialog } from "./(delete)/Dialog/ConfirmDeleteDialog";
import { TodoListSection } from "./TodoListSection";
import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";

interface Params {
  params: {
    id: string;
  };
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

const DetailPage = async ({ params }: Params) => {
  const todos = await fetchTodos(params.id);
  return (
    <Container>
      <div className="py-4">
        <h1>応募情報詳細</h1>
        <Box>
          <ApplicationDetail id={params.id} />
          <div className="col-span-12 flex justify-center gap-x-4">
            <ButtonLink label="編集" href={`${params.id}/edit`} />
            <ConfirmDeleteDialog id={params.id} />
          </div>
        </Box>
      </div>
      <TodoListSection todos={todos} />
    </Container>
  );
};

export default DetailPage;
