import { Container } from "@/components/atoms/Container";
import { Tile } from "@/components/organisms/applications/Tile";
import { ButtonLink } from "@/components/molecules/ButtonLink";

const IndexPage = () => {
  return (
    <Container>
      <div className="py-4">
        <h1 className="mb-4">応募情報一覧</h1>
        <ButtonLink label="応募情報を追加する" href="application/add" />
      </div>
      <div className="grid grid-cols-4 gap-2 mb-4">
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </div>
    </Container>
  );
};

export default IndexPage;
