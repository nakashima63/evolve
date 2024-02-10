import { Container } from "@/components/atoms/Container";
import { EditForm } from "./EditForm";
import { AspirationLevel, Status } from "@prisma/client";

interface Params {
  params: {
    id: string;
  };
}

interface Application {
  id: string;
  companyName: string;
  status: Status;
  aspirationLevel: AspirationLevel;
  applicationRoute: string;
  workLocation: string;
  estimatedIncome: number;
  companyDetail: string;
  contactEmail: string;
  contactPhoneNumber: string;
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
  const application: Application = await fetchApplication(params.id);

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
