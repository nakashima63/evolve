import { ApplicationIndexDtoInterface } from "@/dtos/dashboards/ApplicationIndexDto";
import { ApplicationTable } from "@/components/organisms/dashboards/ApplicationTable";

interface Props {
  applications: ApplicationIndexDtoInterface[];
}

export const ApplicationSection = ({ applications }: Props) => {
  return (
    <section className="mt-4">
      <ApplicationTable applications={applications} />
    </section>
  );
};
