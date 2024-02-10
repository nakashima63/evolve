import { Container } from "@/components/atoms/Container";
import { ApplicationDetail } from "./ApplicationDetail";

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
        <ApplicationDetail id={params.id} />
      </div>
    </Container>
  );
};

export default DetailPage;
