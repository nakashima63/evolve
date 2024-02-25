import { Container } from "@/components/atoms/Container";
import { Box } from "@/components/atoms/Box";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { ApplicationDetail } from "./ApplicationDetail";
import { ConfirmDeleteDialog } from "./(delete)/Dialog/ConfirmDeleteDialog";
import { TodoListSection } from "./TodoListSection";

interface Params {
  params: {
    id: string;
  };
}

const DetailPage = ({ params }: Params) => {
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
      <TodoListSection id={params.id} />
    </Container>
  );
};

export default DetailPage;
