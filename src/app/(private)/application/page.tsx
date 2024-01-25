import { Container } from "@/components/atoms/Container";
import { Tile } from "@/components/atoms/Tile";

const IndexPage = () => {
  return (
    <Container>
      <div className="py-4">
        <h1>応募情報一覧</h1>
      </div>
      <div className="grid grid-cols-4 gap-2">
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
