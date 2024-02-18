import { StoryObj, Meta } from "@storybook/react";
import { FormItem } from "@/components/molecules/forms/FormItem";

const meta: Meta<typeof FormItem> = {
  component: FormItem,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    formId: "sample",
    label: "サンプル",
    children: (
      <input
        id="sample"
        type="text"
        name="sample"
        className="border border-gray-300 rounded-md w-full p-2"
        placeholder="サンプル"
        required
      />
    ),
  },
};
