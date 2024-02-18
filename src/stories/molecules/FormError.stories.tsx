import { StoryObj, Meta } from "@storybook/react";
import { FormError } from "@/components/molecules/forms/FormError";

const meta: Meta<typeof FormError> = {
  component: FormError,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    formId: "test-form",
    errors: ["エラーが発生しました"],
  },
};
