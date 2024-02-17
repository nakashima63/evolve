import { Container } from "@/components/atoms/Container";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { ApplicationsIndex } from "./ApplicationsIndex";

const IndexPage = () => {
  return (
    <Container>
      <div className="py-4">
        <h1 className="mb-4">応募情報一覧</h1>
        <ButtonLink label="応募情報を追加する" href="application/add" />
      </div>
      <ApplicationsIndex />
    </Container>
  );
};

export default IndexPage;
