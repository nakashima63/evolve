import { Container } from "@/components/atoms/Container";
import { ApplicationForm } from "./ApplicationForm";

const AddPage = () => {
  return (
    <Container>
      <div className="py-4">
        <h1>応募情報登録</h1>
        <ApplicationForm />
      </div>
    </Container>
  );
};

export default AddPage;
