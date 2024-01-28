import { Container } from "@/components/atoms/Container";
import { FormItem } from "@/components/molecules/FormItem";
import { InputForm } from "@/components/atoms/InputForm";

const AddPage = () => {
  return (
    <Container>
      <div className="py-4">
        <h1>応募情報登録</h1>
        <form action="">
          <div className="border border-green-600 border-solid rounded-md p-4 mt-4 grid grid-cols-12 gap-4">
            <FormItem formId="companyName" label="企業名" size="12">
              <InputForm id="companyName" name="companyName" required />
            </FormItem>
            <FormItem formId="status" label="ステータス" size="4">
              <select
                id="status"
                name="status"
                className="border border-gray-300 rounded-md w-full p-2"
              >
                <option value="1">選考中</option>
                <option value="2">選考通過</option>
                <option value="3">選考落ち</option>
                <option value="4">内定</option>
                <option value="5">辞退</option>
              </select>
            </FormItem>
            <FormItem formId="aspirationLevel" label="志望度" size="4">
              <select
                id="aspirationLevel"
                name="aspirationLevel"
                className="border border-gray-300 rounded-md w-full p-2"
              >
                <option value="1">低</option>
                <option value="2">中</option>
                <option value="3">高</option>
              </select>
            </FormItem>
            <FormItem formId="applicationRoute" label="応募経路" size="4">
              <InputForm id="applicationRoute" name="applicationRoute" />
            </FormItem>
            <FormItem formId="workLocation" label="勤務地" size="12">
              <InputForm id="workLocation" name="workLocation" />
            </FormItem>
            <FormItem formId="estimatedIncome" label="想定年収" size="4">
              <InputForm id="estimatedIncome" name="estimatedIncome" />
            </FormItem>
            <FormItem formId="companyDetail" label="企業詳細" size="12">
              <textarea
                id="companyDetail"
                name="companyDetail"
                className="border border-gray-300 rounded-md w-full p-2"
                rows={5}
              />
            </FormItem>
            <FormItem
              formId="contactEmail"
              label="連絡先(メールアドレス)"
              size="6"
            >
              <InputForm id="contactEmail" name="contactEmail" />
            </FormItem>
            <FormItem
              formId="contactPhoneNumber"
              label="連絡先(電話番号)"
              size="6"
            >
              <InputForm id="contactPhoneNumber" name="contactPhoneNumber" />
            </FormItem>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default AddPage;
