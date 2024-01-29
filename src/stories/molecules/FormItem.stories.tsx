import { StoryObj, Meta } from "@storybook/react";
import { FormItem } from "@/components/molecules/forms/FormItem";
import { InputForm } from "@/components/atoms/InputForm";

const meta: Meta<typeof FormItem> = {
  component: FormItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    formId: "sample",
    label: "サンプル",
    children: <InputForm id="sample" name="sample" />,
  },
};
