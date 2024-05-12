import { Container } from "@/components/atoms/Container";
import { ButtonLink } from "@/components/molecules/ButtonLink";
import { ApplicationsIndex } from "./ApplicationsIndex";
import Loading from "@/app/(private)/loading";
import { Suspense } from "react";

const IndexPage = () => {
  return (
    <Container>
      <div className="py-4">
        <h1 className="mb-4">応募情報一覧</h1>
        <ButtonLink label="応募情報を追加する" href="application/add" />
      </div>
      <Suspense fallback={<Loading />}>
        <ApplicationsIndex />
      </Suspense>
    </Container>
  );
};

export default IndexPage;
