import { FormItem } from "@/components/molecules/forms/FormItem";
import { InputForm } from "@/components/atoms/InputForm";
import { FormError } from "@/components/molecules/forms/FormError";
import { ApplicationDetailDtoInterface } from "@/dtos/applications/ApplicationDetailDto";

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

interface Props {
  application: ApplicationDetailDtoInterface | null;
  formErrors: FormErrors;
  type: "add" | "edit";
}

export const ApplicationForm = ({ application, formErrors, type }: Props) => {
  return (
    <>
      <FormItem formId={`${type}-form-companyName`} label="企業名" size="12">
        <InputForm
          id={`${type}-form-companyName`}
          name="companyName"
          defaultValue={application?.companyName}
          required
        />
        <FormError
          formId={`${type}-form-companyName`}
          errors={formErrors.errors?.companyName?.flat() ?? []}
        />
      </FormItem>
      <FormItem formId={`${type}-form-status`} label="ステータス" size="4">
        <select
          id={`${type}-form-status`}
          name="status"
          className="border border-gray-300 rounded-md w-full p-2"
          defaultValue={application?.status ?? "InformationGathering"}
        >
          {statusOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FormError
          formId={`${type}-form-status`}
          errors={formErrors.errors?.status?.flat() ?? []}
        />
      </FormItem>
      <FormItem formId={`${type}-form-aspirationLevel`} label="志望度" size="4">
        <select
          id={`${type}-form-aspirationLevel`}
          name="aspirationLevel"
          className="border border-gray-300 rounded-md w-full p-2"
          defaultValue={application?.aspirationLevel ?? "Middle"}
        >
          {aspirationLevelOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <FormError
          formId={`${type}-form-aspirationLevel`}
          errors={formErrors.errors?.aspirationLevel?.flat() ?? []}
        />
      </FormItem>
      <FormItem
        formId={`${type}-form-applicationRoute`}
        label="応募経路"
        size="4"
      >
        <InputForm
          id={`${type}-form-applicationRoute`}
          name="applicationRoute"
          defaultValue={application?.applicationRoute}
        />
        <FormError
          formId={`${type}-form-applicationRoute`}
          errors={formErrors.errors?.applicationRoute?.flat() ?? []}
        />
      </FormItem>
      <FormItem formId={`${type}-form-workLocation`} label="勤務地" size="12">
        <InputForm
          id={`${type}-form-workLocation`}
          name="workLocation"
          defaultValue={application?.workLocation}
        />
        <FormError
          formId={`${type}-form-workLocation`}
          errors={formErrors.errors?.workLocation?.flat() ?? []}
        />
      </FormItem>
      <FormItem
        formId={`${type}-form-estimatedIncome`}
        label="想定年収（万円）"
        size="4"
      >
        <InputForm
          id={`${type}-form-estimatedIncome`}
          type="number"
          name="estimatedIncome"
          defaultValue={application?.estimatedIncome?.toString()}
        />
        <FormError
          formId={`${type}-form-estimatedIncome`}
          errors={formErrors.errors?.estimatedIncome?.flat() ?? []}
        />
      </FormItem>
      <FormItem
        formId={`${type}-form-companyDetail`}
        label="企業詳細"
        size="12"
      >
        <textarea
          id={`${type}-form-companyDetail`}
          name="companyDetail"
          className="border border-gray-300 rounded-md w-full p-2"
          rows={5}
          defaultValue={application?.companyDetail}
        />
        <FormError
          formId={`${type}-form-companyDetail`}
          errors={formErrors.errors?.companyDetail?.flat() ?? []}
        />
      </FormItem>
      <FormItem
        formId={`${type}-form-contactEmail`}
        label="連絡先(メールアドレス)"
        size="6"
      >
        <InputForm
          type="email"
          id={`${type}-form-contactEmail`}
          name="contactEmail"
          defaultValue={application?.contactEmail}
        />
        <FormError
          formId={`${type}-form-contactEmail`}
          errors={formErrors.errors?.contactEmail?.flat() ?? []}
        />
      </FormItem>
      <FormItem
        formId={`${type}-form-contactPhoneNumber`}
        label="連絡先(電話番号)"
        size="6"
      >
        <InputForm
          type="tel"
          id={`${type}-form-contactPhoneNumber`}
          name="contactPhoneNumber"
          defaultValue={application?.contactPhoneNumber}
        />
        <FormError
          formId={`${type}-form-contactPhoneNumber`}
          errors={formErrors.errors?.contactPhoneNumber?.flat() ?? []}
        />
      </FormItem>
    </>
  );
};
