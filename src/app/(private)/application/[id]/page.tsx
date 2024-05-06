import { Container } from "@/components/atoms/Container";
import { Box } from "@/components/atoms/Box";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { ApplicationDetail } from "./ApplicationDetail";
import { ConfirmDeleteDialog } from "./(delete)/Dialog/ConfirmDeleteDialog";
import { TodoListSection } from "./TodoListSection";
import { TodoIndexDtoInterface } from "@/dtos/applications/todos/TodoIndexDto";
import Loading from "@/app/(private)/loading";
import { Suspense } from "react";

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
  const applicationId = params.id;
  const todos = await fetchTodos(applicationId);
  return (
    <Container>
      <div className="py-4">
        <h1>応募情報詳細</h1>
        <Box>
          <Suspense fallback={<Loading />}>
            <ApplicationDetail id={applicationId} />
          </Suspense>
          <div className="col-span-12 flex justify-center gap-x-4">
            <ButtonLink label="編集" href={`${applicationId}/edit`} />
            <ConfirmDeleteDialog id={applicationId} />
          </div>
        </Box>
      </div>
      <Suspense fallback={<Loading />}>
        <TodoListSection todos={todos} />
      </Suspense>
    </Container>
  );
};

export default DetailPage;
