"use client";

import { useState } from "react";
import { Box } from "@/components/atoms/Box";
import { Button } from "@/components/atoms/Button";
import { ApplicationForm } from "@/components/organisms/applications/ApplicationForm";
import { useRouter } from "next/navigation";
import { ApplicationInterface } from "@/types/interfaces/ApplicationInterface";

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
  application: ApplicationInterface;
}

export const EditForm = ({ id, application }: Props) => {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<FormErrors>({ errors: {} });

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
