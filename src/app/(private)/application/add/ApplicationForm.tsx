"use client";

import { useState } from "react";
import { FormItem } from "@/components/molecules/forms/FormItem";
import { InputForm } from "@/components/atoms/InputForm";
import { Button } from "@/components/atoms/Button";
import { createClient } from "@/libs/supabase/client";
import { useRouter } from "next/navigation";
import { FormError } from "@/components/molecules/forms/FormError";
import { Box } from "@/components/atoms/Box";

const statusOptions = [
  { value: "InformationGathering", label: "情報収集中" },
  { value: "Applied", label: "応募済み" },
  { value: "FirstInterview", label: "一次面接" },
  { value: "SecondInterview", label: "二次面接" },
  { value: "ThirdInterview", label: "三次面接" },
  { value: "Offer", label: "内定" },
  { value: "Rejected", label: "不合格" },
  { value: "Retired", label: "辞退" },
  { value: "Accepted", label: "承諾" },
  { value: "NotAccepted", label: "不承諾" },
  { value: "Waiting", label: "未定" },
  { value: "Other", label: "その他" },
];

const aspirationLevelOptions = [
  { value: "High", label: "高" },
  { value: "Middle", label: "中" },
  { value: "Low", label: "低" },
];

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

export const ApplicationForm = () => {
  const router = useRouter();
  const [formErrors, setFormErrors] = useState<FormErrors>({ errors: {} });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormErrors({ errors: {} });
    const formElement = e.currentTarget as HTMLFormElement;
    const userId = (await createClient().auth.getUser()).data.user?.id;
    const formData = new FormData(formElement);
    formData.append("userId", userId ?? "");

    const res = await fetch("/api/application/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    if (res.status === 201) {
      router.push("/application");
    }

    if (res.status === 400) {
      const errorRes = await res.json();
      setFormErrors({ errors: errorRes.errors });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <FormItem formId="companyName" label="企業名" size="12">
          <InputForm id="companyName" name="companyName" required />
          <FormError
            formId="companyName"
            errors={formErrors.errors?.companyName?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="status" label="ステータス" size="4">
          <select
            id="status"
            name="status"
            className="border border-gray-300 rounded-md w-full p-2"
          >
            {statusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FormError
            formId="status"
            errors={formErrors.errors?.status?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="aspirationLevel" label="志望度" size="4">
          <select
            id="aspirationLevel"
            name="aspirationLevel"
            className="border border-gray-300 rounded-md w-full p-2"
          >
            {aspirationLevelOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <FormError
            formId="aspirationLevel"
            errors={formErrors.errors?.aspirationLevel?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="applicationRoute" label="応募経路" size="4">
          <InputForm id="applicationRoute" name="applicationRoute" />
          <FormError
            formId="applicationRoute"
            errors={formErrors.errors?.applicationRoute?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="workLocation" label="勤務地" size="12">
          <InputForm id="workLocation" name="workLocation" />
          <FormError
            formId="workLocation"
            errors={formErrors.errors?.workLocation?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="estimatedIncome" label="想定年収（万円）" size="4">
          <InputForm
            id="estimatedIncome"
            type="number"
            name="estimatedIncome"
          />
          <FormError
            formId="estimatedIncome"
            errors={formErrors.errors?.estimatedIncome?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="companyDetail" label="企業詳細" size="12">
          <textarea
            id="companyDetail"
            name="companyDetail"
            className="border border-gray-300 rounded-md w-full p-2"
            rows={5}
          />
          <FormError
            formId="companyDetail"
            errors={formErrors.errors?.companyDetail?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="contactEmail" label="連絡先(メールアドレス)" size="6">
          <InputForm id="contactEmail" name="contactEmail" />
          <FormError
            formId="contactEmail"
            errors={formErrors.errors?.contactEmail?.flat() ?? []}
          />
        </FormItem>
        <FormItem formId="contactPhoneNumber" label="連絡先(電話番号)" size="6">
          <InputForm id="contactPhoneNumber" name="contactPhoneNumber" />
          <FormError
            formId="contactPhoneNumber"
            errors={formErrors.errors?.contactPhoneNumber?.flat() ?? []}
          />
        </FormItem>
        <div className="col-span-12 flex justify-center">
          <Button type="submit" label="登録" className="primary" />
        </div>
      </Box>
    </form>
  );
};
