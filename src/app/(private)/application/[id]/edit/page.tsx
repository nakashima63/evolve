import { Container } from "@/components/atoms/Container";
import { EditForm } from "./EditForm";

interface Params {
  params: {
    id: string;
  };
}

const EditPage = async ({ params }: Params) => {
  return (
    <Container>
      <div className="py-4">
        <h1>応募情報編集</h1>
        <EditForm id={params.id} />
      </div>
    </Container>
  );
};

export default EditPage;
