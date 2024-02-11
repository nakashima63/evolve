import { Container } from "@/components/atoms/Container";
import { EditForm } from "./EditForm";
import { ApplicationInterface } from "@/types/interfaces/ApplicationInterface";

interface Params {
  params: {
    id: string;
  };
}

const fetchApplication = async (id: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/application/${id}`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-cache",
    },
  );
  const data = await res.json();
  return data.application;
};

const EditPage = async ({ params }: Params) => {
  const application: ApplicationInterface = await fetchApplication(params.id);

  return (
    <Container>
      <div className="py-4">
        <h1>応募情報編集</h1>
        <EditForm id={params.id} application={application} />
      </div>
    </Container>
  );
};

export default EditPage;
