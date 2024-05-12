import { Container } from "@/components/atoms/Container";
import { Box } from "@/components/atoms/Box";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { ApplicationDetail } from "./ApplicationDetail";
import { ConfirmDeleteDialog } from "./(delete)/Dialog/ConfirmDeleteDialog";
import { TodoListSection } from "./TodoListSection";
import Loading from "@/app/(private)/loading";
import { Suspense } from "react";

interface Params {
  params: {
    id: string;
  };
}

const DetailPage = async ({ params }: Params) => {
  const applicationId = params.id;
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
        <TodoListSection applicationId={applicationId} />
      </Suspense>
    </Container>
  );
};

export default DetailPage;
