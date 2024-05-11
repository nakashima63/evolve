"use client";

import { useEffect, useState } from "react";
import { Box } from "@/components/atoms/Box";
import { Button } from "@/components/atoms/Button";
import { ApplicationForm } from "@/components/organisms/applications/ApplicationForm";
import { useRouter } from "next/navigation";
import { ApplicationDetailDtoInterface } from "@/dtos/applications/ApplicationDetailDto";

interface FormErrors {
  errors: {
    companyName?: string[] | undefined;
    userId?: string[] | undefined;
    status?: string[] | undefined;
    aspirationLevel?: string[] | undefined;
    applicationRoute?: string[] | undefined;
    workLocation?: string[] | undefined;
    estimatedIncome?: string[] | undefined;
    companyDetail?: string[] | undefined;
    contactEmail?: string[] | undefined;
    contactPhoneNumber?: string[] | undefined;
  };
}

interface Props {
  id: string;
}

export const EditForm = ({ id }: Props) => {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<FormErrors>({ errors: {} });
  const [application, setApplication] =
    useState<ApplicationDetailDtoInterface | null>(null);

  useEffect(() => {
    const fetchApplication = async () => {
      const res = await fetch(`/api/application/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-cache",
      });
      const data = await res.json();
      setApplication(data.application);
    };
    fetchApplication();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormErrors({ errors: {} });
    const formElement = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formElement);

    const res = await fetch(`/api/application/${id}/edit`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (res.status === 201) {
      router.push(`/application/${id}`);
      router.refresh();
    }

    if (res.status === 400) {
      const errorRes = await res.json();
      setFormErrors({ errors: errorRes.errors });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <ApplicationForm
          application={application}
          formErrors={formErrors}
          type="edit"
        />
        <div className="col-span-12 flex justify-center">
          <Button type="submit" label="更新" className="secondary" />
        </div>
      </Box>
    </form>
  );
};
